// image with marketing copy
// sign up button which sends you to registration
import React from 'react'
import ReactDOM from 'react-dom'

const heroDiv = React.createElement('div', {}, [heroImg, signUpBtn])
const heroImg = React.createElement('img', {src: ''}, )
const signUpBtn = React.createElement('button', {}, 'Sign Up')

ReactDOM.render(
    heroDiv,
    document.getElementsByClassName('App')
)