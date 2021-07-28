// image with marketing copy
// sign up button which sends you to registration
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHero = styled.div`
    background-image: url('https://images.unsplash.com/photo-1520033222127-8f6d08b425f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:0 5%;
    height: 40vh;
    display:flex;
    justify-content: center;
    color: white;
    text-shadow: 1px 1px #000000;

    button{
        padding:0.5% 1.5%;
        border: none;
        border-radius: 10px;
        margin:3% 0;
    }

    .heroDiv{
        padding:3% 0;
    }

    p{
        margin:0 10%;
    }
`

function Hero () {
    return(
        <StyledHero>
        <div className='heroDiv'>
            <h2>Potluck Planner</h2>
            <p>If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.</p>
            <Link to ='/signup'><button>Sign Up!</button></Link>
        </div>
        </StyledHero>
    )
}


export default Hero