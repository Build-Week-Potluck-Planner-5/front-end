**base URL**
https://potluck-back-end.herokuapp.com

**/api/auth/register** --> username and password are required

REQUEST

    req.body must be: 
    {
        username: "foobar",
        password: "1234",
        first_name: optional,
        last_name: optional,
    }

    Note: 
    the axios request should look something like --
    axios()
        .post("https://potluck-back-end.herokuapp.com/api/auth/register", state.credentials)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

    Extra note:
    In your handleSubmit function in the Register component, you'll probably want to first have the register axios request and then also include the login request in the handleSubmit function
    _____________

RESPONSE

    -- Success --
    {
        "first_name": "foo",
        "user_id": 7,
        "username": "foobar"
    }

    -- Username not unique --
    {
        "message": "username taken"
    }

    -- Missing required field --
    {
        "message": "username and password are required"
    }


**/api/auth/login** --> username and password are required

REQUEST

        req.body must be: 
    {
        username: "foobar",
        password: "1234"
    }

    Note: 
    the axios request should look something like --
    axios()
        .post("https://potluck-back-end.herokuapp.com/api/auth/login", state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            history.push("/dashboard")
        })
        .catch(err => {
            console.log(err);
        })

RESPONSE

    -- Success --
    {
        "message": "welcome, foobar",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6ImRhdmVkYXZlIiwiaWF0IjoxNjI3NDUyNDI3LCJleHAiOjE2Mjc1Mzg4Mjd9.6FWVD93oWilHuMRdWc2OM2IJue6P5Tkr-cXqIwDDWok"
    }

    -- Username not found --
    {
        "message": "username does not exist"
    }

    -- Password incorrect --
    {
        "message": "invalid credentials"
    }

    -- Missing required field --
    {
        "message": "username and password are required"
    }


