import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../axiosWithAuth"
import {useHistory} from "react-router-dom"

const initialState = {potluck_name: "", potluck_date: "", potluck_time: "", potluck_location: "", organizer: "", food: ""}

function DeleteItems(props) {
    const {obj, currItems, setCurrItems}= props
    const deleteItemClick = (id) => {
        axiosWithAuth().delete(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`) //potluck items api
        setCurrItems(currItems.filter(item=>item.itemid!==id))
      }
    return (
        <button onClick={()=>deleteItemClick(obj.itemid)}>-</button>)
    }

function EditPotluck() {
    const [form, setForm] = useState(initialState)
    const [potluckData, setPotluckData] = useState({})
    const [currItems, setCurrItems] = useState([])
    const [newItem, setNewItem] = useState({potluck_name: "", guest: "", picked: false})

    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        axiosWithAuth().get(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`) //ptluck api
        .then(res=>{
          console.log(res)
          setPotluckData(res.data)
          // const itemsArr = res.data.items.map(obj=>obj.name)
          // const itemsArrToString = itemsArr.join(", ")
          setForm({...form, potluck_name: res.data.potluck_name, potluck_date: res.data.potluck_date, potluck_time: res.data.potluck_time, location: res.data.location})
          setCurrItems(res.data.items)
        })
        .catch(err=>console.log(err))
      },[])
  
      // console.log(currUser)

      const formChangeHandler = (e) => {
        setForm({...form,
          [e.target.name]: e.target.value})
      }
  
      const itemChangeHandler = (e) => {
        setNewItem({...newItem,
          [e.target.name]: e.target.value})
      }
  
      const formSubmit = (e) => {
        e.preventDefault();
        // const itemsStringArray = form.items.split(",").map(item=>item.trim())
        // const itemsArray = itemsStringArray.map(item=>{
        //   return {itemid: Date.now(), name: item, guest: "", picked: false}
        // })
        // console.log(itemsArray)
        const editedPotluck = {...potluckData, potluck_name: form.potluck_name, location: form.location, potluck_date: form.potluck_date, potluck_time: form.potluck_time, items: []}
        console.log("edited: ",editedPotluck)
        axiosWithAuth().put(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`, editedPotluck) //potluck api
          .then(res=>{
            console.log(res);
            history.push("/MyPotlucks") //MyPotluck
          })
          .catch(err=>console.log(err))
        
      }
  
        const newItemClick = () => {
          const createdItem={food: [newItem]}
          axiosWithAuth().put(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`, createdItem) //potluck api
          setCurrItems([...currItems, newItem])
          setNewItem({potluck_name: "", guest: "", picked: false})
        }

    return (
        <form onSubmit={formSubmit}> 
            <label>
                Name
                <input
                  onChange={formChangeHandler}
                  value={form.potluck_name}
                  placeholder="Potluck Name"
                  name="potluck_name"
                  type="text"
                  required
                /></label>
            <label>
                Date
                <input
                  onChange={formChangeHandler}
                  value={form.potluck_date}
                  placeholder="Potluck Date"
                  name="potluck_date"
                  type="text"
                  required
                /></label>
            <label>
                Time
                <input
                  onChange={formChangeHandler}
                  value={form.potluck_time}
                  placeholder="Potluck Time"
                  name="potluck_time"
                  type="text"
                  required
                /></label>
            <label>
                Location
                <input
                  onChange={formChangeHandler}
                  value={form.location}
                  placeholder="Potluck Address"
                  name="location"
                  type="text"
                  required
            /></label>
            <p>Food and Beverages</p>
                <div>
                {currItems.length<1 ? <p>No Items in Potluck. Add items below.</p> : currItems.map((obj) => {
                  return (
                    <DeleteItems obj={obj} setCurrItems={setCurrItems} currItems={currItems} />
                    )})
                }
                </div>
                <div>
                <button onClick={newItemClick}>+</button>
                <input
                  onChange={itemChangeHandler}
                  value={newItem.name}
                  placeholder="New Item"
                  name="name"
                  type="text"
                  required
                 /></div> 
                 <button>Save Changes</button>
        </form>
    )
}

export default EditPotluck