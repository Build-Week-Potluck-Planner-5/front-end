import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { reach } from "yup";
import axios from "axios";
import styled from "styled-components";

const StyledLogin = styled.div`
  .color1 {
    background-color: #7172f7;
    padding: 1rem 2rem 1rem 2rem;
    border: 1px solid #dadada;
    border-top: none;
  }
  .form {
    justify-content: center;
    display: flex;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;

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
  const history = useHistory();

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
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const credentials = {
      username: userData.username,
      password: userData.password,
    };

    axios
      .post(
        "https://potluck-back-end.herokuapp.com/api/auth/login",
        credentials
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <StyledLogin>
      <h1>Login</h1>
      <div className="color1"></div>
      <form className="form" onSubmit={handleSubmit}>
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
      <div className="color1"></div>
    </StyledLogin>
  );
}

export default Login;
