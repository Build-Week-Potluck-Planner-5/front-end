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
  food: [],
  invites: [],
};

function CreatePotluck() {
  const [form, setForm] = useState(initialState);
  const [currUser, setCurrUser] = useState([]);

  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get("/api/users") //user api
      .then((res) => {
        console.log("res", res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("----", users);

  const formChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setForm({ ...form, invites: currUser });

    // const itemsStringArray = form.food.split(",").map((item) => item.trim());
    // const itemsArray = itemsStringArray.map((item) => {
    //   return { itemid: Date.now(), name: item, guest: "", picked: false };
    // });
    // console.log(itemsArray);
    // const newPotluck = {
    //   potluck_name: form.potluck_name,
    //   potluck_date: form.potluck_date,
    //   potluck_time: form.potluck_time,
    //   potluck_location: form.potluck_location,
    //   username: form.username,
    //   food: [],
    //   invites: [],
    // };
    // console.log(newPotluck);
    axiosWithAuth()
      .post("/api/potlucks", form) //potluck api
      .then((res) => {
        console.log("after sending data", res.data);
        // history.push("/MyPotlucks"); //My Potlucks
      })
      .catch((err) => console.log(err));
  };
  const initialFoodArray = [];
  const [foodItem, setFoodItem] = useState("");
  const [foodArr, setFoodArr] = useState(initialFoodArray);

  const handleFoodInput = (evt) => {
    const target = evt.target;
    setFoodItem(target.value);
  };
  const handleFoodSubmit = () => {
    setForm((form) => [{ ...form, food: foodItem }]);
    console.log(form);
  };

  const handleChecklistChange = () => {
    const usersSelected = Array.from(
      document.querySelectorAll("input.selectedUser:checked")
    ).map((element) => {
      console.log(element);
      return element.value;
    });
    setCurrUser(usersSelected);
  };
  console.log(currUser);
  console.log("find me here", foodArr);
  console.log(form);

  return (
    <div>
      <form onSubmit={formSubmit}>
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
      </form>

      <div>
        <h3>Invite Guests</h3>
        {users.map((user, i) => {
          return (
            <label>
              {user.username}
              <input
                className="selectedUser"
                type="checkbox"
                name={user.username}
                value={user.user_id}
                onChange={handleChecklistChange}
              ></input>
            </label>
          );
        })}
      </div>
      <div></div>
      <div>
        <h3>Add Foods</h3>
        <input type="text" onChange={handleFoodInput}></input>
        <button onClick={handleFoodSubmit}>Add Food</button>
      </div>
      <button onClick={formSubmit}>Create Potluck</button>
    </div>
  );
}

export default CreatePotluck;
