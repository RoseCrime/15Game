    let numbs = []

    const setNumbers = () => {
        for (let i = 1; i <= 16; i++) numbs.push(new Numb(i))
    }

    class Numb {
        constructor(number, row, cell) {
            this.size = 80
            number !== 16 ? this.number = number : null
        }

        show(row, cell) {
            let borderMrj = 50,
                margBtwNumbs = 100

            this.row = row
            this.cell = cell

            this.x = width / 2 - 200 + this.cell * margBtwNumbs - borderMrj
            this.y = 100 + this.row * margBtwNumbs - borderMrj

            fill(0, 0)
            strokeWeight(2)
            stroke(150, 255, 220)
            rect(this.x, this.y, this.size, this.size)

            if (this.number) {
                fill(150, 255, 255)
                strokeWeight(2)
                stroke(0)
                textSize(40)
                text(this.number, this.x, this.y)
            }
            return this
        }
        hover() {
            this.mouseInArea =
                (mouseX <= (this.x + (this.size / 2))) &&
                (mouseX >= (this.x - (this.size / 2))) &&
                (mouseY <= (this.y + (this.size / 2))) &&
                (mouseY >= (this.y - (this.size / 2)))



            if (this.mouseInArea && this.number) cursor(HAND)
            
            return this
        }
        switch () {

            if (this.mouseInArea && mouseIsClicked && this.number) {

                let indexOfEmpty = numbs.findIndex(element => !element.number),
                    cellsNear = abs(this.cell - numbs[indexOfEmpty].cell) === 1,
                    sameRow = abs(this.row - numbs[indexOfEmpty].row) === 0,

                    sameCells = abs(this.cell - numbs[indexOfEmpty].cell) === 0,
                    rowsNear = abs(this.row - numbs[indexOfEmpty].row) === 1

                if ((cellsNear && sameRow) || (sameCells && rowsNear)) {

                    numbs[indexOfEmpty].number = this.number
                    this.number = null
                }
            }
            return this
        }
    }
