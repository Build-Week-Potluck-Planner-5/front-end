import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { reach } from "yup";

// username
// password
// submit button
// nice to have -- form validation and error handling messages

function Login(props) {
  const initialFormErrors = {
    username: "",
    password: "",
  };
  const [loginErr, setLoginErr] = useState(initialFormErrors);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const loginSchema = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long"),
    password: yup.string().trim().required("Must enter your password"),
  });

  const validate = (name, value) => {
    reach(loginSchema, name)
      .validate(value)
      .then(() => setLoginErr({ ...loginErr, [name]: "" }))
      .catch((err) => setLoginErr({ ...loginErr, [name]: err.errors[0] }));
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
  //
  //
  //             password: password,
  //           },
  //         },
  //         { withCredentials: true }
  //       )
  //       .then((resp) => {
  //         return console.log("login response", resp.data);
  //       })
  //       .catch((err) => {
  //         console.log("login error", err);
  //       });
  //   };
  return (
    <form>
      <div>
        <input
          onChange={handleChange}
          value={userData.username}
          placeholder="Username"
          name="username"
          type="text"
          required
        ></input>
        <input
          onChange={handleChange}
          value={userData.password}
          placeholder="Password"
          name="password"
          type="password"
          required
        ></input>

        <button>Submit</button>
        <div>
          <p>{loginErr.username}</p>
          <p>{loginErr.password}</p>
        </div>
      </div>
    </form>
  );
}

export default Login;
