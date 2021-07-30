import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {axiosWithAuth} from "../axiosWithAuth"

// table with columns: potluck_name, potluck_date, potluck_time, accept button, reject button
// on button submit, post request either adding potluck to MyPotlucks on accept, on reject post request removing potluck from potluck invitations
// on button submit, both the potluck invitations table and the my potlucks table will need to be re-rendered... use a useEffect hook

const PotluckInvites = () => {
    const [guest, setGuest] = useState([]);
    const [checked, setChecked] = useState({});
    // const [potluckID, setPotluckID] =useState("")
    const param = useParams();

    //console.log(param);

    useEffect(() => {
        axiosWithAuth().get("https://potluck-back-end.herokuapp.com/api/users")
        .then((res) => {
            console.log(res)
            setGuest(res.data);
            console.log(guest)
        })
        .catch((err) => {
            console.error(err);
        })
 }, [])

 const changeHandler = (e) => {
    //console.log(checked)
    setChecked({...checked, [e.target.name]:e.target.checked})
    //console.log(checked)
}

useEffect(() => {
    console.log("checked: ", checked);
    // console.log("potluckID: ", potluckID);
    console.log(param.id);
    //setPotluckID(potluckID)
  }, [checked, param.id]); 

  const handleSubmit = (e) => {
    const {value} = e.target;
    console.log(value);
    axiosWithAuth()
         .post(`/api/potlucks${param.id}/api/potlucks/invites${value}`)
         .then((res) => {
             console.log(res)
         })
         .catch(err => {
             console.error(err)
         })
}

return(
    <div>
    <div className="guestInvite">
        <h2 className="guestHeader">Invite Guests</h2>
        <div className='guestInfo'>

            <form onClick={handleSubmit}>
                {guest.map(guestInfo => (
                        <div class='guest' key={guestInfo.userid}> 
                            <p>Guest: </p>
                                        <div className="usernameCheckbox">
                                            {guestInfo.username}
                                            <input type="checkbox" checked={checked[guestInfo.username]} name={guestInfo.username} value={guestInfo.userid} onChange={changeHandler}/>
                                        </div>                   
                        </div>
                ))}
                <div className="button">
                    <button>Invite Guests</button>
                </div>
            </form>
        </div>
    </div>
    </div>
)
}

export default PotluckInvites;