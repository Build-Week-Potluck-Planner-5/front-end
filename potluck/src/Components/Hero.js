// image with marketing copy
// sign up button which sends you to registration

function createHero() {
    const heroDiv = document.createElement('div')
    const heroImg = document.createElement('img')
    const signUpBtn = document.createElement('button')

    heroDiv.appendChild(heroImg)
    heroImg.appendChild(signUpBtn)

    return heroDiv
}
