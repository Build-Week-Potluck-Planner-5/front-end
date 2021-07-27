import axios from "axios";
import * as yup from "yup";
import { reach } from "yup";
import React, { useState, useEffect } from "react";
import { set } from "lodash";
// form
// username
// first name
// last name
// password
// submit button
// nice to have -- form validation

function Registration(props) {
  const initialFormErrors = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  };

  const [registerErr, setRegisterErr] = useState(initialFormErrors);
  const [userData, setUserData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const registerSchema = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long"),
    first_name: yup.string().trim().required("Must enter your first name"),
    last_name: yup.string().trim().required("Must enter your last name"),
    password: yup
      .string()
      .trim()
      .required("Must enter a password")
      .min(8, "Password is too short, should be minimum 8 characters long")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  });

  const validate = (name, value) => {
    reach(registerSchema, name)
      .validate(value)
      .then(() => setRegisterErr({ ...registerErr, [name]: "" }))
      .catch((err) =>
        setRegisterErr({ ...registerErr, [name]: err.errors[0] })
      );
  };

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    validate(name, value);
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData);
  //   const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     const { username, first_name, last_name, password } = userData;
  //     axios
  //       .post(
  //         url,
  //         {
  //           user: {
  //             username: username,
  //             first_name: first_name,
  //             last_name: last_name,
  //             password: password,
  //           },
  //         },
  //         { withCredentials: true }
  //       )
  //       .then((resp) => {
  //         return console.log("registration response", resp.data);
  //       })
  //       .catch((err) => {
  //         console.log("registration error", err);
  //       });
  //   };

  return (
    <form>
      <div>
        <input
          onChange={handleChange}
          value={userData.username}
          placeholder="Create Username"
          name="username"
          type="text"
        ></input>
        <input
          onChange={handleChange}
          value={userData.first_name}
          placeholder="Enter first name"
          name="first_name"
          type="text"
        ></input>
        <input
          onChange={handleChange}
          value={userData.last_name}
          placeholder="Enter last name"
          name="last_name"
          type="text"
        ></input>
        <input
          onChange={handleChange}
          value={userData.password}
          placeholder="Create a password"
          name="password"
          type="password"
        ></input>
        <button type="submit">Sign Up</button>
        <div>
          <p>{registerErr.username}</p>
          <p>{registerErr.first_name}</p>
          <p>{registerErr.last_name}</p>
          <p>{registerErr.password}</p>
        </div>
      </div>
    </form>
  );
}

export default Registration;

// form
// username
// first name
// last name
// password
// submit button
// nice to have -- form validation
