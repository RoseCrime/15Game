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

    shuffleButt = new TextBox('Shuffle', 32, color(150, 220, 255), color(255))
}


function draw() {

    drawStage()

    dropSnow()

    drawHouse()

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
