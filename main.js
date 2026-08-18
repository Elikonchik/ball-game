'use strict';

let gHoverTimeout
let gGameInterval
let gIntervalCount = 0

let gHistory = []
let gHistoryIdx = 0

function onBallClick(elBall, maxDiameter) {

    let newSize = +elBall.innerText + getRandomInt(20, 60)

    if (newSize > maxDiameter) {
        newSize = 100
    }

    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'

    elBall.innerText = newSize

    elBall.style.backgroundColor = getRandomColor()

    saveState()
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

    saveState()
}

function onFourthBallClick() {

    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    const decrease = getRandomInt(20, 60)

    let newSize1 = elBall1.offsetWidth - decrease
    let newSize2 = elBall2.offsetWidth - decrease

    if (newSize1 < 100) {
        newSize1 = 100
    }

    if (newSize2 < 100) {
        newSize2 = 100
    }

    elBall1.style.width = newSize1 + 'px'
    elBall1.style.height = newSize1 + 'px'

    elBall2.style.width = newSize2 + 'px'
    elBall2.style.height = newSize2 + 'px'

    elBall1.innerText = newSize1
    elBall2.innerText = newSize2

    saveState()
}

function onFifthBallClick() {

    document.body.style.backgroundColor = getRandomColor()
    saveState()
}

function onSixthBallClick() {

    location.reload()
}

function onSixthBallEnter() {

    gIntervalCount = 0

    gHoverTimeout = setTimeout(() => {

        gGameInterval = setInterval(() => {

            onBallClick(document.querySelector('.ball'), 400)
            onBallClick(document.querySelector('.ball2'), 300)
            onThirdBallClick()
            onFourthBallClick()

            gIntervalCount++

            if (gIntervalCount >= 10) {
                clearInterval(gGameInterval)
            }

        }, 2000)

    }, 2000)
}

function onSixthBallLeave() {

    clearTimeout(gHoverTimeout)
    clearInterval(gGameInterval)
}

function saveState() {

    const balls = document.querySelectorAll('.ball')

    const state = {
        backgroundColor: document.body.style.backgroundColor,
        balls: []
    }

    balls.forEach(ball => {

        state.balls.push({
            size: parseInt(ball.innerText),
            color: ball.style.backgroundColor || getComputedStyle(ball).backgroundColor,
            text: ball.innerText
        })
    })

    gHistory = gHistory.slice(0, gHistoryIdx + 1)

    gHistory.push(state)

    gHistoryIdx = gHistory.length - 1
}

function restoreState(state) {

    document.body.style.backgroundColor = state.backgroundColor

    const balls = document.querySelectorAll('.ball')

    balls.forEach((ball, idx) => {

        const ballState = state.balls[idx]

        ball.style.width = ballState.size + 'px'
        ball.style.height = ballState.size + 'px'
        ball.style.backgroundColor = ballState.color
        ball.innerText = ballState.text
    })
}

function onUndo() {

    if (gHistoryIdx <= 0) return

    gHistoryIdx--

    restoreState(gHistory[gHistoryIdx])
}

function onRedo() {

    if (gHistoryIdx >= gHistory.length - 1) return

    gHistoryIdx++

    restoreState(gHistory[gHistoryIdx])
}

saveState()