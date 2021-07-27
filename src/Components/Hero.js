// image with marketing copy
// sign up button which sends you to registration
import React from 'react'
import { Link } from 'react-router-dom'

function Hero () {
    return(
        <div className='heroDiv'>
            <h2>Potluck Planner</h2>
            <p>If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.</p>
            <Link to ='/signup'><button>Sign Up</button></Link>
        </div>
    )
}


export default Hero