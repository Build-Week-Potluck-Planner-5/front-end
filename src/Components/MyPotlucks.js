import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { useHistory } from "react-router-dom";

// table with rows that have columns of... potluck_name, potluck_date, potluck_time
// each row has a food button that either opens a modal or sends you to another food page for that particular potluck

const MyPotlucks = () => {
    const [users, setUser] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axiosWithAuth()
           .get("/api/users") //organizer/signed in user api?
           .then((res) => {
               console.log("My Potlucks ",res)
               setUser(res.data);
               console.log(users)
           })
           .catch((err) => {
               console.error(err);
           })
    }, []);

    const handleButtonInvite = (organizer_id) => {
        history.push(`/PotluckInvites/${organizer_id.potluck_id}`)
    }

    const handleEditbutton = (organizer_id) => {
        history.push(`/EditPotluck/${organizer_id.potluck_id}`)
     }

    const handleDeleteButton= (organizer_id) => {
        console.log(organizer_id);
        axiosWithAuth()
          .delete(`/api/potlucks/:potluck_id${organizer_id.potluck_id}`)
          .then((res) => {
              window.location.reload();
            //history.push("");
           })
          .catch((err) => {
            console.error(err);
          })
    }

    return(
        <>
        <div className="PotlucksContainer">
            <div className="MyPotlucks">
               <div class="PotlucksData">
                    {users.map(organizer_id => (
                        <div class="organizer" key={organizer_id.id}>
                            <h3>{organizer_id.name}</h3>
                            <p>Date and Time: {organizer_id.date}, {organizer_id.time}</p>
                            <p>Location: {organizer_id.location}</p>
                            <p>Organized by: {organizer_id.organizer}</p>
                            <p>Food and Beverages: {organizer_id.food}, {organizer_id.food}</p>
                            <div className="buttons"> 
                                <div className="PotluckInvites" onClick={() => handleButtonInvite(organizer_id)}>
                                    <button>Add Guests</button>
                                </div>
                                <div className="EditPotluck" onClick={() => handleEditbutton(organizer_id)}>
                                    <button>Edit Potluck</button>
                                </div>
                                <div className="DeletePotluck" onClick={() => handleDeleteButton(organizer_id)} >
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div> ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default MyPotlucks;