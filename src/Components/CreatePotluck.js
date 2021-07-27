import React, {useState, useEffect} from "react"
import axios from "axios"
import {axiosWithAuth} from "../../potluck/src/axiosWithAuth"
import {useHistory} from 'react-router-dom'

// ideally a modal but could be another page
// form
// potluck_name
// potluck_date
// potluck_time
// potluck_location
// food_items (input field) but also a button to add another food item
// potluck_invitees (same as food items -- want an input field plus a button to add another invitee)
// submit

const initialState = {name: "", date: "", time: "", location: "", host: "", food: ""}

function CreatePotluck() {
    const [form, setForm] = useState(initialState)
    const [currUser, setCurrUser] = useState({})
    // const [formError, setFormError] = useState("")
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth().get("Insert user api here")
        .then(res=>{
          // console.log(res)
          setCurrUser(res.data)
          setForm({...form, host: res.data.username})
        })
        .catch(err=>console.log(err))
      },[])
  
      const formChangeHandler = (e) => {
        setForm({...form,
          [e.target.name]: e.target.value})
      }

      const formSubmit = (e) => {
        e.preventDefault();
        const itemsStringArray = form.items.split(",").map(item=>item.trim())
        const itemsArray = itemsStringArray.map(item=>{
          return {itemid: Date.now(), name: item, guest: "", picked: false}
        })
        console.log(itemsArray)
        const newPotluck = {name: form.name, location: form.location, date: form.date, time: form.time, organizer: form.organizer, items: itemsArray}
        console.log(newPotluck)
        axiosWithAuth().post("Insert potluck api here", newPotluck)
          .then(res=>{
            console.log(res);
            history.push("/") //My Potlucks
          })
          .catch(err=>console.log(err))
      }

      return (
          <form>
            <label>
                Name
                <input
                  onChange={formChangeHandler}
                  value={form.name}
                  placeholder="Potluck Name"
                  name="name"
                  type="text"
                  required
                /></label>
            <label>
                Date
                <input
                  onChange={formChangeHandler}
                  value={form.date}
                  placeholder="Potluck Date"
                  name="date"
                  type="text"
                  required
                /></label>
            <label>
                Time
                <input
                  onChange={formChangeHandler}
                  value={form.time}
                  placeholder="Potluck Time"
                  name="time"
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
            <label>
                Food and Beverages
                <input
                  onChange={formChangeHandler}
                  value={form.items}
                  placeholder="Potluck Items"
                  name="items"
                  type="text"
                  required
            /></label>
            <button>Create Potluck</button>
          </form>
      )
}

export default CreatePotluck