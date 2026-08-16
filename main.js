'use strict';

<<<<<<< HEAD
function onBallClick(elBall, maxDiameter) {
=======
function onBallClick(maxDiameter) {

    const elBall = document.querySelector('.ball')
>>>>>>> 89c5ff64ee51dd8e266051dcf28a6236dcea1267

    let newSize = +elBall.innerText + getRandomInt(20, 60)

    if (newSize > maxDiameter) {
        newSize = 100
    }

    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'

    elBall.innerText = newSize

    elBall.style.backgroundColor = getRandomColor()
}