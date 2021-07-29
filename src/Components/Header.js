// logo in the left, v1 is probably just header text
// Home button (could also be the logo... up to you)
// conditional logic to show logout button if logged in, if !logged in show login button

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.div`
margin: 0 2em;

nav{
    display:flex;
    justify-content: flex-end;
    flex-direction: row;
}

.link{
    padding:0 3em;
}

p{ 
    color: black;
}
`

function Header () {
    return (
        <StyledHeader>
        <header>
            <nav>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div>
                    {/* <img src='' alt=''/>  logo*/}
                </div>
            </Link>
                <div className='link'> 
                    <Link to ='/' style={{ textDecoration: 'none' }}><p>Home</p></Link>
                </div>
                <div className='link'>
                    <Link to ='/signup' style={{ textDecoration: 'none' }}><p>Sign Up</p></Link>
                </div>
                <div className='link'>
                    <Link to ='/login' style={{ textDecoration: 'none' }}><p>Login</p></Link>
                </div>
                <div className='link'>
                    <Link to ='/dashboard' style={{ textDecoration: 'none' }}><p>Dashboard</p></Link>
                </div>
            </nav>
        </header>
        </StyledHeader>
    )
}

export default Header