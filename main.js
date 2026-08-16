'use strict';

function onBallClick() {

    const elBall = document.querySelector('.ball')

    let newSize = +elBall.innerText + getRandomInt(20, 60)

    if (newSize > 400) {
        newSize = 100
    }

    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'

    elBall.innerText = newSize
}