// logo in the left, v1 is probably just header text
// Home button (could also be the logo... up to you)
// conditional logic to show logout button if logged in, if !logged in show login button

import React from 'react'
import ReactDOM from 'react-dom';

const nav = React.createElement('nav', {}, [home, about, contact])
const home = React.createElement('a', {class: nav-item}, 'Home')
const about = React.createElement('a', {class: nav-item}, 'About')
const contact = React.createElement('a', {class: nav-item}, 'Contact')

ReactDOM.render(
    nav,
    document.getElementsByClassName('App')
)