// image with marketing copy
// sign up button which sends you to registration
import React from 'react'
import { Link } from 'react-router-dom'

function Hero () {
    return(
        <div className='heroDiv'>
            <img className='heroImg' src='' alt=''/>
            <Link to ='/signup'><button>Sign Up</button></Link>
        </div>
    )
}


export default Hero