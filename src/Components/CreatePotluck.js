
import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";
import { useHistory } from "react-router-dom";


// ideally a modal but could be another page
// form
// potluck_name
// potluck_date
// potluck_time
// potluck_location
// food_items (input field) but also a button to add another food item
// potluck_invitees (same as food items -- want an input field plus a button to add another invitee)
// submit


const initialState = {
  potluck_name: "",
  potluck_date: "",
  potluck_time: "",
  potluck_location: "",
  username: "",
  food: "",
};

function CreatePotluck() {
  const [form, setForm] = useState(initialState);
  //const [currUser, setCurrUser] = useState({});
  // const [formError, setFormError] = useState("")
  const [users, setUsers] = useState([])
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get("/api/users") //user api
      .then((res) => {
        console.log("res", res) 
        console.log("users", users) 
        setUsers(res.data)
        console.log("res", res) 
        console.log("users", users) 
        //setCurrUser(res.data);
        //setForm({ ...form, username: res.data.username });
      })
      .catch((err) => console.log(err));
  }, []);
  
//console.log("----",users)

//   const formChangeHandler = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     const itemsStringArray = form.food.split(",").map((item) => item.trim());
//     const itemsArray = itemsStringArray.map((item) => {
//       return { itemid: Date.now(), name: item, guest: "", picked: false };
//     });
//     console.log(itemsArray);
//     const newPotluck = {
//       potluck_name: form.potluck_name,
//       potluck_date: form.potluck_date,
//       potluck_time: form.potluck_time,
//       potluck_location: form.potluck_location,
//       username: form.username,
//       food: itemsArray,
//     };
//     console.log(newPotluck);
//     axiosWithAuth()
//       .post("/api/potlucks", newPotluck) //potluck api
//       .then((res) => {
//         //console.log(res);
//         history.push("/MyPotlucks"); //My Potlucks
//       })
//       .catch((err) => console.log(err));
//   };

  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
      setIsChecked(!isChecked)
  }

  return (
    <div>
        {/* <form onSubmit={formSubmit}>
      <label>
        Name
        <input
          onChange={formChangeHandler}
          value={form.name}
          placeholder="Potluck Name"
          name="potluck_name"
          type="text"
        />
      </label>
      <label>
        Date
        <input
          onChange={formChangeHandler}
          value={form.date}
          placeholder="Potluck Date"
          name="potluck_date"
          type="text"
        />
      </label>
      <label>
        Time
        <input
          onChange={formChangeHandler}
          value={form.time}
          placeholder="Potluck Time"
          name="potluck_time"
          type="text"
        />
      </label>
      <label>
        Location
        <input
          onChange={formChangeHandler}
          value={form.location}
          placeholder="Potluck Address"
          name="potluck_location"
          type="text"
        />
      </label>
      <label>
        Food and Beverages
        <input
          onChange={formChangeHandler}
          value={form.food}
          placeholder="Potluck Items"
          name="food"
          type="text"
        />
      </label>
      <button>Create Potluck</button>
    </form> */}
    
    <div>
        {users[0].username}
        </div>
        <div>
        <h3>Invite Guests</h3>
        <label>Filler
        <input
        type="checkbox"
        name="filler" //{users[0].username}
        value="filler" //{users[0].user_id}
        checked = {isChecked}
        onChange={handleChange}
        />
        </label>
    </div>
    <div>
        <h3>Add Foods</h3>
    </div>
    </div>
  );
}

export default CreatePotluck;
