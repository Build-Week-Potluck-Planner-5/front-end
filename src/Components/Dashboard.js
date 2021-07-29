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
        padding: 2rem 5rem 2rem 5rem;
        border:1px solid #DADADA;
        border-bottom:none;
    }

    h3{
        color: black;
    }

    .color1{
        background-color: #7172F7;
        padding: 1rem 5rem 2rem 2.5rem;
        border:1px solid #DADADA;
        border-top:none;
    }

    .color2{
        background-color: #B971F7;
        padding: 1rem 5rem 2rem 2.5rem;
        border:1px solid #DADADA;
        border-top:none;
    }
    .color3{
        background-color: #F771F7;
        padding: 1rem 5rem 2rem 2.5rem;
        border:1px solid #DADADA;
        border-top:none;
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
                <div className='color1'></div>
            </Link>

            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className = 'links'>
                    <h3>Create a Potluck</h3>
                </div>
                <div className='color2'></div>
            </Link>

            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className = 'links'>
                    <h3>Potluck invites</h3>
                </div>
                <div className='color3'></div>
            </Link>
        </div>
        </StyledDashboard>
        
    )
}

export default Dashboard