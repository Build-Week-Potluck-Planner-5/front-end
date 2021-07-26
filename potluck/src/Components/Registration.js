import axios from "axios";
import React, { useState, useEffect } from "react";

function Registration(props) {
  const [userData, setUserData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleChange = (evt) => {
    return setUserData(...userData, { [evt.target.name]: evt.target.value });
  };
  console.log(userData);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { username, first_name, last_name, password } = userData;
    axios
      .post(
        url,
        {
          user: {
            username: username,
            first_name: first_name,
            last_name: last_name,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((resp) => {
        return console.log(resp.data);
      })
      .catch((err) => {
        console.log("registration error", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={handleChange}
          value={userData.username}
          placeholder="Create Username"
          name="username"
          type="text"
          required
        ></input>
        <input
          onChange={handleChange}
          value={userData.first_name}
          placeholder="Enter first name"
          name="first_name"
          type="text"
          required
        ></input>
        <input
          onChange={handleChange}
          value={userData.last_name}
          placeholder="Enter last name"
          name="last_name"
          type="text"
          required
        ></input>
        <input
          onChange={handleChange}
          value={userData.password}
          placeholder="Create a password"
          name="password"
          type="password"
          required
        ></input>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default Registration;
