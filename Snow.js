let snows = [];

class Snow {
    constructor() {
        this.x = random(0, width)
        this.y = random(0, height)
        this.lifespan = 255
    }
    show() {
        strokeWeight(2);
        stroke(255, this.lifespan)
        point(this.x, this.y)
        this.x += (random(-0.5, 0.5))
        this.y += random(1, 2)
    }
}