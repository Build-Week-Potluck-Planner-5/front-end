// logo in the left, v1 is probably just header text
// Home button (could also be the logo... up to you)
// conditional logic to show logout button if logged in, if !logged in show login button

import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <nav>
            <Link to='/'>
                <div>
                    <img src='' alt=''/>
                </div>
            </Link>
                <div>
                    <Link to ='/'>Home</Link>
                    <Link to ='/signup'>Sign Up</Link>
                    <Link to ='/login'>Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header