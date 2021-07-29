import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDashboard = styled.div`
    height:80vh;

    .title{
        display:flex;
        justify-content: flex-start;
        margin:0 5% 3%;
        border-bottom: 2px solid ;
    }

    .container{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top:10%;
    }

    .links{
        box-shadow: 0 0 3px 1px #888888;
        border-radius: 50px;
        padding: 1rem 2.5rem;
    }

    h3{
        color: black;
    }
`


function Dashboard () {
    return (
        <StyledDashboard>
        <div className='title'>
            <h2>Dashboard</h2>
        </div>

        <div className='container'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className = 'links'>
                    <h3>My Potlucks</h3>
                </div>
            </Link>

            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className = 'links'>
                    <h3>Create a Potluck</h3>
                    </div>
            </Link>

            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className = 'links'>
                    <h3>Potluck invites</h3>
                    </div>
            </Link>
        </div>
        </StyledDashboard>
        
    )
}

export default Dashboard