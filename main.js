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