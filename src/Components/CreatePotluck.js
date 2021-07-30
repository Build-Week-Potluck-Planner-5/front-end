import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../axiosWithAuth"
import {useHistory} from "react-router-dom"

// ideally a modal but could be another page
// form
// potluck_name
// potluck_date
// potluck_time
// potluck_location
// food_items (input field) but also a button to add another food item
// potluck_invitees (same as food items -- want an input field plus a button to add another invitee)
// submit

const initialState = {potluck_name: "", potluck_date: "", potluck_time: "", potluck_location: "", organizer: "", food: ""}

function CreatePotluck() {
    const [form, setForm] = useState(initialState)
    const [currUser, setCurrUser] = useState({})
    const [formError, setFormError] = useState("")
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth().get("https://potluck-back-end.herokuapp.com/api/users") //user api
        .then(res=>{
          console.log(res)
          setCurrUser(res.data)
          setForm({...form, organizer: res.data.username})
        })
        .catch(err=>console.log(err))
      },[])

      console.log(currUser)
  
      const formChangeHandler = (e) => {
        setForm({...form,
          [e.target.name]: e.target.value})
      }

      const formSubmit = (e) => {
        e.preventDefault();
        const itemsStringArray = form.food.split(",").map(item=>item.trim())
        const itemsArray = itemsStringArray.map(item=>{
          return {itemid: Date.now(), name: item, guest: "", picked: false}
        })
        console.log(itemsArray)
        const newPotluck = {potluck_name: form.potluck_name, potluck_date: form.potluck_date, potluck_time: form.potluck_time, potluck_location: form.potluck_location, organizer: form.organizer, food: itemsArray}
        console.log(newPotluck)
        axiosWithAuth().post("https://potluck-back-end.herokuapp.com/api/potlucks", newPotluck) //potluck api
          .then(res=>{
            console.log(res);
            history.push("/MyPotlucks") //My Potlucks
          })
          .catch(err=>console.log(err))
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
                  value={form.potluck_location}
                  placeholder="Potluck Address"
                  name="potluck_location"
                  type="text"
                  required
            /></label>
            <label>
                Food and Beverages
                <input
                  onChange={formChangeHandler}
                  value={form.food}
                  placeholder="Potluck Items"
                  name="food"
                  className="longInput"
                  required
            /></label>
            <button>Create Potluck</button>
          </form>
      )
}

export default CreatePotluck