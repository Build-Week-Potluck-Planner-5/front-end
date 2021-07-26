import React from 'react'
/*element structure
    <div>
            <img/>
        <div>
            <h3>Content Title</h3>
            <p>content</p>
            <button>Learn More</button>
        </div>
    </div>
*/

const root = document.querySelector('.root')
function createContent({title, content}) {

    const contentDiv = document.createElement('div')
    const contentImg = document.createElement('img')
    const infoDiv = document.createElement('div')
    const contentTitle = document.createElement('h3')
    const contentInfo = document.createElement('p')
    const contentButton = document.createElement('button')

    contentDiv.appendChild(contentImg)
    contentDiv.appendChild(infoDiv)
    infoDiv.appendChild(contentTitle)
    infoDiv.appendChild(contentInfo)
    infoDiv.appendChild(contentButton)

    contentTitle.textContent = title
    contentInfo.textContent = content
    contentButton.textContent = 'Learn More'

    return contentDiv

}

const testContent = createContent({title: 'test title', content: 'test content'})
root.appendChild(testContent)