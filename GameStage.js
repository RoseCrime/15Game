const
    drawStage = () => {
        background(25)
        //author
        textSize(32)
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
        for (let row = 1, element = 0; row < 5; row++)
            for (let cell = 1; cell < 5; cell++, element++)
                numbs[element].show(row, cell).hover().switch()
    },
    dropSnow = () => {
        snows.push(new Snow);

        for (let i = 0; i < snows.length; i++) {
            if (snows[i].y >= height) {
                snows.splice(i, 1);
            }
            snows[i].show();
        }
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

    smokeDraw = () => {
        if (counter - frameRate() >= 0) {
            counter = 0;
            for (i = 0; i < 20; i++) smokes.push(new Smoke)
        }
        for (let i = smokes.length - 1; i >= 0; i--) {
            smokes[i].show().move()
            if (smokes[i].x < 0 || smokes[i].x > width || smokes[i].y < 0 || smokes[i].y > height) {
                smokes.splice(i, 1);
            }
        }
    }
