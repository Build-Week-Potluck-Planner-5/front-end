import React from React

const app = document.querySelector('.app')

const linkData = [
    {href: '#', className: 'nav-item', text: 'Home'},
    {href: '#', className: 'nav-item', text: 'About'},
    {href: '#', className: 'nav-item', text: 'Contact'},
]

function createHeader({ href, className, text}) {
    const link = document.createElement('a')
    link.href = href
    link.className = className
    link.textContent = text

    return link
}

linkData.forEach(link => {
    const linkElement = createHeader(link)
    document.querySelector('.app').appendChild(linkElement)
})
// logo in the left, v1 is probably just header text
// Home button (could also be the logo... up to you)
// conditional logic to show logout button if logged in, if !logged in show login button
