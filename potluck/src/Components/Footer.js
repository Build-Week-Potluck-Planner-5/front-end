// basic text content footer... up to you

function createFooter () {
    const footer = document.createElement('footer')
    const footerTitle = document.createElement('h3')
    const footerDiv = document.createElement('div')
    const address = document.createElement('address')
    const email = document.createElement('a')
    const phoneNumber = document.createElement('a')
    const copyrightDiv = document.createElement('div')
    const copyrightText = document.createElement('p')

    footer.appendChild(footerTitle)
    footer.appendChild(footerDiv)
    footer.appendChild(copyrightDiv)
    footerDiv.appendChild(address)
    footerDiv.appendChild(email)
    footerDiv.appendChild(phoneNumber)
    copyrightDiv.appendChild(copyrightText)

    footerTitle.textContent = 'Contact Us'
    address.textContent = '1234 Somewhere Road #5432 Nashville, TN 00000 United States of America'
    copyrightText.textContent = '© Untitled'

    phoneNumber.href ='tel:1-000-000-0000'
    email.href ='mailto:information@untitled.tld'

    return footer
}
