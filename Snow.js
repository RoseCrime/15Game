let snows = [];

class Snow {
    constructor() {
        this.x = random(0, width)
        this.y = random(0, height)
    }
    show() {
        strokeWeight(1);
        stroke(255)
        point(this.x, this.y)
        return this

    }
    move() {
        this.x += (random(-0.5, 0.5))
        this.y += random(1, 2)
        return this
    }
}
