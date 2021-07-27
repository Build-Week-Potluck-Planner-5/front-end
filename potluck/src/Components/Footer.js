// basic text content footer... up to you
import React from 'react'
import ReactDOM from 'react-dom'

const footer = React.createElement('footer',{}, [footerTitle, footerDiv, copyrightDiv])
const footerTitle = React.createElement('h3', {}, 'Contact Us')
const footerDiv = React.createElement('div', {}, [address, email, phoneNumber])
const address = React.createElement('address', {}, '1234 Somewhere Road #5432 Nashville, TN 00000 United States of America')
const phoneNumber = React.createElement('a', {href: 'mailto:information@untitled.tld'}, 'information@untitled.tld')
const email = React.createElement('a', {href: 'tel:1-000-000-0000'}, '1-000-000-0000')
const copyrightDiv = React.createElement('div',{}, [copyrightText])
const copyrightText = React.createElement('p', {}, '© Untitled')

ReactDOM.render(
    footer,
    document.getElementsByClassName('App')
)