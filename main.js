'use strict';

function onBallClick(elBall, maxDiameter) {

    let newSize = +elBall.innerText + getRandomInt(20, 60)

    if (newSize > maxDiameter) {
        newSize = 100
    }

    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'

    elBall.innerText = newSize

    elBall.style.backgroundColor = getRandomColor()
}

function onThirdBallClick() {

    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    const tempSize = elBall1.style.width
    const tempColor = elBall1.style.backgroundColor
    const tempText = elBall1.innerText

    elBall1.innerText = elBall2.innerText
    elBall2.innerText = tempText

    elBall1.style.width = elBall2.style.width
    elBall1.style.height = elBall2.style.height
    elBall1.style.backgroundColor = elBall2.style.backgroundColor

    elBall2.style.width = tempSize
    elBall2.style.height = tempSize
    elBall2.style.backgroundColor = tempColor
}