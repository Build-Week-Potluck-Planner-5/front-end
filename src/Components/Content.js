// basic marketing content about application features
// image plus text content
import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
    background-color: #F4F4F4;
    margin: 2% 5%;
    padding: 2% 0;
`

function Content () {
    return(
        <StyledContent>
        <div className='contentDiv'>
            <h3>What we have to offer</h3>
            <div className='infoDiv one'>
                <h4>Manage your potluck with ease</h4>
                <ul>
                    <li>Invite family and friends</li>
                    <li>Schedule a time and place</li>
                    <li>Request items to bring</li>
                    <li>Keep track of atendees and what they bring</li>
                </ul>
            </div>
            <div className='infoDiv two'>
                <h4>Join a potluck</h4>
                <ul>
                    <li>Accept or Decline potluck invites</li>
                    <li>Choose item(s) to bring</li>
                </ul>
            </div>
        </div>
        </StyledContent>
    )
}

export default Content