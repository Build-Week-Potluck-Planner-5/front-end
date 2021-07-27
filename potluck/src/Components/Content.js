// basic marketing content about application features
// image plus text content
import React from 'react'
import ReactDOM from 'react-dom';

const contentDiv = React.createElement('div', {}, [contentImg, infoDiv])
const contentImg = React.createElement('img', {src: ''})
const infoDiv = React.createElement('div', {}, [contentTitle, contentInfo, contentButton])
const contentTitle = React.createElement('h3', {}, title)
const contentInfo = React.createElement('p', {}, content)
const contentButton = React.createElement('button', {}, 'Learn More')

ReactDOM.render(
    contentDiv,
    document.getElementsByClassName('App')
);
