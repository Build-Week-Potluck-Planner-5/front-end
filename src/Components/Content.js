// basic marketing content about application features
// image plus text content
import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
    border: 2px solid #DADADA;
    margin: 2% 5%;
    padding: 2% 0;
    align-content: none;
    .infoImg1{
        background-image: url('https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80');
        width: 22rem;
        height: 250px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .infoImg2{
        background-image: url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
        width: 22rem;
        height: 250px;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    .row{
        display:flex;
        border-bottom:1px solid #DADADA;
        margin: 6% 15%;
        padding-bottom: 2%;
    }

    .one{
        padding:0 0 0 20%;
    }

    .two{
        padding:0 35% 0 0;
    }
`

function Content () {
    return(
        <StyledContent>
        <div className='contentDiv'>
            <h3>What we have to offer</h3>

            <div className='row'>
                <div className='infoImg1'>
                </div>
                <div className='infoDiv one'>
                    <h4>Manage your potluck with ease</h4>
                    <ul>
                        <li>Invite family and friends</li>
                        <li>Schedule a time and place</li>
                        <li>Request items to bring</li>
                        <li>Keep track of atendees and what they bring</li>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='infoDiv two'>
                    <h4>Join a potluck</h4>
                    <ul>
                        <li>Accept or Decline potluck invites</li>
                        <li>Choose item(s) to bring</li>
                    </ul>
                </div>
                <div className='infoImg2'>
                </div>
            </div>
        </div>
        </StyledContent>
    )
}

export default Content