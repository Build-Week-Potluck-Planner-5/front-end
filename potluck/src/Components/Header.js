import React from React

const root = document.querySelector('.root')

const linkData = [
    {href: '#', className: 'nav-item', text: ''}
]

function createHeader({ href, className, text}) {
    const link = document.createElement('a')
    link.href = href
    link.className = className
    link.textContent = text

    return link
}