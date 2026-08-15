'use strict';

function onBallClick() {

    const elBall = document.querySelector('.ball')

    const newSize = elBall.offsetWidth + 50

    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'

    elBall.innerText = newSize
}