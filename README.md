**/api/auth/register** --> username and password are required
-- Success --
{
    "first_name": foo,
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


