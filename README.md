**base URL**
https://potluck-back-end.herokuapp.com

**[POST] /api/auth/register** --> username and password are required

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
    axios
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
    {
        "first_name": "foo",
        "user_id": 7,
        "username": "foobar"
    }


**[POST] /api/auth/login** --> username and password are required

REQUEST
        req.body must be: 
    {
        username: "foobar",
        password: "1234"
    }

    Note: 
    the axios request should look something like --
    axios
        .post("https://potluck-back-end.herokuapp.com/api/auth/login", state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            history.push("/dashboard");
        })
        .catch(err => {
            console.log(err);
        })

RESPONSE

    {
        "message": "welcome, foobar",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6ImRhdmVkYXZlIiwiaWF0IjoxNjI3NDUyNDI3LCJleHAiOjE2Mjc1Mzg4Mjd9.6FWVD93oWilHuMRdWc2OM2IJue6P5Tkr-cXqIwDDWok"
    }


**[GET] /api/potlucks**
fetches all potlucks for the current logged in user where attending === true
RESPONSE
[
    {
        "potluck_name": "cookout",
        "potluck_date": "August 1",
        "potluck_time": "3pm",
        "organizer": "foobar"
    }
]

**[GET] /api/potlucks/invites**
fetches all potlucks for the current logged in user where attending === false
RESPONSE
[
    {
        "potluck_name": "barbeque",
        "potluck_date": "July",
        "potluck_time": "8pm",
        "organizer": "foobar"
    }
]

**[GET] /api/potlucks/:potluck_id**
RESPONSE
{
    "potluck_id": 2,
    "potluck_name": "backyard hang",
    "potluck_date": "July 30",
    "potluck_time": "8pm",
    "potluck_location": "backyard",
    "organizer_id": 2,
    "organizer": "fizzbuzz",
    "food": [
        {
            "food_id": 1,
            "food_name": "hamburgers",
            "user_id": null,
            "username": null
        },
        {
            "food_id": 2,
            "food_name": "potato salad",
            "user_id": 2,
            "username": "fizzbuzz"
        }
    ],
    "invites": [
        {
            "user_id": 2,
            "username": "fizzbuzz",
            "attending": false
        },
        {
            "user_id": 3,
            "username": "johndoe",
            "attending": false
        }
    ]
}

**[POST] /api/potlucks**
REQUEST
    client must send data with format:

    {
        "potluck_name": "backyard hang",
        "potluck_date": "July 30",
        "potluck_time": "8pm",
        "potluck_location": "backyard",
        food: [<add food here>],
        invites: [<add guests here>]
    }

    when adding a potluck, the client should store all of the potluck information, including the food at the potluck and the invited guests in a single state object in the formate above. That state object should then get passed in the body of the request. 

    the backend will add a new food to the database if the food_name does not have a match in the db. Nice to have would be if the client could search food names when typing into a text input. One way to do this would require getting all foods in the db using **[GET] /api/potlucks/foods** and then filtering onChange.

    it would also be a nice to have to do the same for users. Ideally the client would make it impossible for any username to get invited that is not in the db. Grab users using **[GET] /api/users** and then filter with a drop down or search, etc.

RESPONSE
    {
        "organizer_id": 4,
        "potluck_id": 59,
        "potluck_name": "new potluck",
        "potluck_date": "August 10",
        "potluck_time": "7pm",
        "potluck_location": "Bob's house",
        "food": [
            "potatoes",
            "avocados"
        ],
        "invites": [
            "foobar",
            "fizzbuzz",
            "johndoe"
        ]
    }

**[GET] /api/users**
RESPONSE
    [
        {
            "user_id": 1,
            "username": "foobar",
            "password": "1234",
            "first_name": "foo",
            "last_name": "bar",
            "created_at": "2021-07-28T22:35:55.529Z",
            "updated_at": "2021-07-28T22:35:55.529Z"
        },
        {
            "user_id": 2,
            "username": "fizzbuzz",
            "password": "1234",
            "first_name": "fizz",
            "last_name": "buzz",
            "created_at": "2021-07-28T22:35:55.529Z",
            "updated_at": "2021-07-28T22:35:55.529Z"
        },
    ]

**[GET] /api/potlucks/foods**