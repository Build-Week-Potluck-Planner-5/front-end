// logo in the left, v1 is probably just header text
// Home button (could also be the logo... up to you)
// conditional logic to show logout button if logged in, if !logged in show login button

import React from 'react'

function Header () {
    return (
        <nav>
            <a href='#Home'>Home</a>
            <a href='#About'>About</a>
            <a href='#Contact'>Contact</a>
            <a href=''>Sign Up</a>
            <a href=''>Login</a>
        </nav>
    )
}

export default Header