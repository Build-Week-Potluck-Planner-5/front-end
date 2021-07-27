



import React, { useState, useEffect } from "react";


// username
// password
// submit button
// nice to have -- form validation and error handling messages

function Login(props) {
  const [userData, setUserData] = useState({
    username: "",
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
        return console.log("registration response", resp.data);
      })
      .catch((err) => {
        console.log("registration error", err);
      });
  };
  return (
    <form>
      <div>
        <input
          onChange={handleChange}
          value={userData.}
          placeholder="Username"
          type="text"
        ></input>
        <input placeholder="Password" type="text"></input>

        <button>Submit</button>
      </div>
    </form>
  );
}

export default Login;



