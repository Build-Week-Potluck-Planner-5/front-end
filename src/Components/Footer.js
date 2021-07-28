// basic text content footer... up to you
import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background-color: #F4F4F4;
    margin: 2% 5%;
    padding: 2% 0;
`

function Footer () {
    return(
        <StyledFooter>
        <footer>
            <h3>Contact Us</h3>
            <div>
                <address>1234 Somewhere Road #5432 Nashville, TN 00000 United States of America</address>
                <p>email: <a href='mailto:information@untitled.tld'>information@untitled.tld</a></p>
                <p>phone: <a href='tel:1-000-000-0000'>1-000-000-0000</a></p>
            </div>
            <div>
                <h5>© Untitled</h5>
            </div>
        </footer>
        </StyledFooter>
    )
}

export default Footer