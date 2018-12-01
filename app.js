let mouseIsClicked = false,
    counter = 0,
    house

const log = val => console.log(val),
    type = val => log(val),
    abs = val => Math.abs(val)

function preload() {
    house = loadImage('img/house.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
    textAlign(CENTER, CENTER)
    textStyle(ITALIC)
    imageMode(CENTER)

    setNumbers()

    shuffleButt = new TextBox('Shuffle', 32, color(120, 220, 220), color(20, 220, 205))
}


function draw() {

    cursor(ARROW)

    drawStage()

    drawHouse()

    dropSnow()

    smokeDraw()

    drawNumbers()

    shuffleButt.show(width / 2, 550).hover().click(() => numbs = shuffle(numbs))

    counter++
    mouseIsClicked = false
}

function mouseClicked() {
    mouseIsClicked = true
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
