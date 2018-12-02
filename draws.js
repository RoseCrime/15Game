const
    drawStage = () => {
        background(25)

        //author
        textSize(25)
        fill(150, 255, 220)
        noStroke()
        text('Made by RoseCrime', width / 2, 50)

        //Field
        fill(25)
        strokeWeight(2)
        stroke(50, 220, 255)

        rect(width / 2, 300, 400, 400)
    },
    drawNumbers = () => {
        numbs.forEach((item, index) => {
            let row = floor(index / 4 + 1),
                cell = index % 4 + 1

            item.show(row, cell).hover().switch()
        })
    },
    drawHouse = () => {
        beginShape();

        noStroke();
        fill(255, 75);

        curveVertex(-10, 200);
        curveVertex(200, 600);
        curveVertex(700, 500);

        endShape(CLOSE);
        beginShape()

        curveVertex(0, 220);
        curveVertex(200, 210);
        curveVertex(300, 250);

        endShape(CLOSE);

        image(house, 25, 190, 130, 81)
    },
    dropSnow = () => {
        snows.push(new Snow)

        snows.forEach((item, i) => {
            if (item.y >= height) snows.splice(i, 1)
            item.show().move()
        })
    },
    smokeDraw = () => {
        if (counter - frameRate() >= 0) {
            counter = 0;
            for (i = 0; i < 30; i++) smokes.push(new Smoke)
        }

        smokes.forEach((item, i) => {
            item.show().move()
            if (item.x < 0 || item.x > width || item.y < 0 || item.y > height) smokes.splice(i, 1)
        })
    }
