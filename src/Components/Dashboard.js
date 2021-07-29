import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDashboard = styled.div`
    .title{
        display:flex;
        justify-content: flex-start;
        margin:0 5% 3%;
        padding:0 0 0 3%;
        background-color: #f4f4f4;
    }

    .container{
        display:flex;
        flex-direction: row;
        margin:0 5%;
        background-color: #f4f4f4;
    }

    .links{
        box-shadow: 0 0 3px 1px #888888;
        margin: 2% 4%;
        padding:2% 5%;

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
            <div className = 'links'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                    <h3>My Potlucks</h3>
            </Link>
            </div>

            <div className = 'links'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                    <h3>Create a Potluck</h3>
            </Link>
            </div>

            <div className = 'links'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                    <h3>Potluck invites</h3>
            </Link>
            </div>
        </div>
        </StyledDashboard>
        
    )
}

export default Dashboard