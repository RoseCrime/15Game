let shuffleButt

class TextBox {
    constructor(txt, size, color, str) {
        this.color = color
        this.stroke = str
        this.size = size

        this.text = txt
        this.textSize = 40

    }
    show(x, y) {
        this.x = x
        this.y = y

        fill(this.color)
        noStroke()
        textSize(this.textSize)


        this.textWidth = textWidth(this.text)
        this.boxWidth = this.textWidth * 1.2
        this.boxHeight = this.size * 1.75

        text(this.text, this.x, this.y)

        stroke(this.stroke)
        noFill()
        rect(this.x, this.y, this.boxWidth, this.boxHeight)

        return this
    }

    hover() {
        this.mouseInArea =
            mouseX <= this.x + this.boxWidth / 2 &&
            mouseX >= this.x - this.boxWidth / 2 &&
            mouseY <= this.y + this.boxHeight / 2 &&
            mouseY >= this.y - this.boxHeight / 2

        if (this.mouseInArea) {
            stroke(255)
            line(this.x - this.textWidth / 2, this.y + this.size * 1.15, this.x + this.textWidth / 2, this.y + this.size * 1.15)
        }
        return this
    }

    click(action) {
        if (this.mouseInArea && mouseIsClicked) action()

        return this
    }


}
