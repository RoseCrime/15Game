let smokes = []

class Smoke {
    constructor() {
        this.x = 60
        this.y = 150
        this.size = floor(random(1, 15))
    }
    show() {
        noStroke()
        fill(200, 50)
        ellipse(this.x, this.y, this.size)
        return this
    }

    move() {
        this.x += random(-1, 3)
        this.y -= random(0.1, 2)
        return this
    }
}
