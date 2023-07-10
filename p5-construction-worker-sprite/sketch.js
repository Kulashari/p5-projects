let timer4 = 0;
let timer5 = 0;
let timer6 = 0;
let timer7 = 0;

runX2 = 0;
runY2 = 0;
runX = 0;
runY = 0;
let playerPos = "forward";
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  if (
    keyIsDown(DOWN_ARROW) &&
    !keyIsDown(UP_ARROW) &&
    !keyIsDown(LEFT_ARROW) &&
    !keyIsDown(RIGHT_ARROW)
  ) {
    playerPos = "forward";
    runY2 += 15;
    timer4++;
    if (timer4 >= 1) {
      if (timer4 == 1) {
        runDown1(runX2, runY2);
      }
      if (timer4 == 2) {
        runDown2(runX2, runY2);
      }
      if (timer4 == 3) {
        runDown3(runX2, runY2);
      }
      if (timer4 == 4) {
        runDown4(runX2, runY2);
        timer4 = 0;
      }
      frameRate(10);
    }
  }

  if (
    keyIsDown(UP_ARROW) &&
    !keyIsDown(DOWN_ARROW) &&
    !keyIsDown(RIGHT_ARROW) &&
    !keyIsDown(LEFT_ARROW)
  ) {
    playerPos = "notForward";
    runY2 -= 15;
    timer5++;
    if (timer5 >= 1) {
      if (timer5 == 1) {
        runUp1(runX2, runY2);
      }
      if (timer5 == 2) {
        runUp2(runX2, runY2);
      }
      if (timer5 == 3) {
        runUp3(runX2, runY2);
      }
      if (timer5 == 4) {
        runUp4(runX2, runY2);
        timer5 = 0;
      }
      frameRate(10);
    }
  }

  if (
    keyIsDown(LEFT_ARROW) &&
    !keyIsDown(DOWN_ARROW) &&
    !keyIsDown(RIGHT_ARROW) &&
    !keyIsDown(UP_ARROW)
  ) {
    playerPos = "playerLeft";
    runX2 -= 15;
    timer6++;
    if (timer6 >= 1) {
      if (timer6 == 1) {
        runLeft1(runX2, runY2);
      }
      if (timer6 == 2) {
        runLeft2(runX2, runY2);
      }
      if (timer6 == 3) {
        runLeft3(runX2, runY2);
      }
      if (timer6 == 4) {
        runLeft4(runX2, runY2);
        timer6 = 0;
      }
      frameRate(10);
    }
  }

  if (
    keyIsDown(RIGHT_ARROW) &&
    !keyIsDown(DOWN_ARROW) &&
    !keyIsDown(LEFT_ARROW) &&
    !keyIsDown(UP_ARROW)
  ) {
    playerPos = "playerRight";
    runX2 += 15;
    timer7++;
    if (timer7 >= 1) {
      if (timer7 == 1) {
        runRight1(runX2, runY2);
      }
      if (timer7 == 2) {
        runRight2(runX2, runY2);
      }
      if (timer7 == 3) {
        runRight3(runX2, runY2);
      }
      if (timer7 == 4) {
        runRight4(runX2, runY2);
        timer7 = 0;
      }
      frameRate(10);
    }
  }

  if (
    (!keyIsDown(UP_ARROW) &&
      !keyIsDown(DOWN_ARROW) &&
      !keyIsDown(RIGHT_ARROW) &&
      !keyIsDown(LEFT_ARROW)) ||
    (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW)) ||
    (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) ||
    (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) ||
    (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) ||
    (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) ||
    (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW))
  ) {
    if (playerPos == "forward") {
      runDown2(runX2, runY2);
    }
    if (playerPos == "notForward") {
      runUp2(runX2, runY2);
    }
    if (playerPos == "playerLeft") {
      runLeft2(runX2, runY2);
    }
    if (playerPos == "playerRight") {
      runRight2(runX2, runY2);
    }
  }
}

function runDown1(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  fill(0);
  square(runX + 186, runY + 215, 10);
  square(runX + 216, runY + 215, 10);
  fill("lightpink");
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 175, runY + 203, 5, 10);
  rect(runX + 230, runY + 203, 5, 10);
  fill("white");
  square(runX + 202.5, runY + 257, 10);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 20);
  rect(runX + 219, runY + 295, 11, 10);
  fill(74, 54, 31);
  rect(runX + 185, runY + 315, 11, 13);
  rect(runX + 219, runY + 305, 11, 7.5);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 195, runY + 173, 6, 27);
  fill("#A15C33");
  square(runX + 220, runY + 280, 15);
  square(runX + 178, runY + 283, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 8, 23);
  rect(runX + 177, runY + 257, 8, 26);
}

function runDown2(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  fill(0);
  square(runX + 186, runY + 215, 10);
  square(runX + 216, runY + 215, 10);
  fill("lightpink");
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 175, runY + 203, 5, 10);
  rect(runX + 230, runY + 203, 5, 10);
  fill("white");
  square(runX + 202.5, runY + 257, 10);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 20);
  rect(runX + 219, runY + 295, 11, 20);
  fill(74, 54, 31);
  rect(runX + 185, runY + 305, 11, 13);
  rect(runX + 219, runY + 305, 11, 13);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 195, runY + 173, 6, 27);
  fill("#A15C33");
  square(runX + 230, runY + 287, 7.5);
  square(runX + 178, runY + 287, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 7, 30);
  rect(runX + 178, runY + 257, 7, 30);
}

function runDown3(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  fill(0);
  square(runX + 186, runY + 215, 10);
  square(runX + 216, runY + 215, 10);
  fill("lightpink");
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 175, runY + 203, 5, 10);
  rect(runX + 230, runY + 203, 5, 10);
  fill("white");
  square(runX + 202.5, runY + 257, 10);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 10);
  rect(runX + 219, runY + 295, 11, 20);
  fill(74, 54, 31);
  rect(runX + 185, runY + 305, 11, 7.5);
  rect(runX + 219, runY + 315, 11, 13);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 195, runY + 173, 6, 27);
  fill("#A15C33");
  square(runX + 178, runY + 280, 15);
  square(runX + 230, runY + 283, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 7, 25);
  rect(runX + 178, runY + 257, 8, 23);
}

function runDown4(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  fill(0);
  square(runX + 186, runY + 215, 10);
  square(runX + 216, runY + 215, 10);
  fill("lightpink");
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 175, runY + 203, 5, 10);
  rect(runX + 230, runY + 203, 5, 10);
  fill("white");
  square(runX + 202.5, runY + 257, 10);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 20);
  rect(runX + 219, runY + 295, 11, 20);
  fill(74, 54, 31);
  rect(runX + 185, runY + 305, 11, 13);
  rect(runX + 219, runY + 305, 11, 13);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 195, runY + 173, 6, 27);
  fill("#A15C33");
  square(runX + 230, runY + 287, 7.5);
  square(runX + 178, runY + 287, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 7, 30);
  rect(runX + 178, runY + 257, 7, 30);
}

//----------------------------------------------------

function runUp1(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 180, runY + 210, 50, 23);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 10);
  rect(runX + 219, runY + 295, 11, 20);
  fill(74, 54, 31);
  rect(runX + 185, runY + 305, 11, 7.5);
  rect(runX + 219, runY + 315, 11, 13);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill("#A15C33");
  square(runX + 220, runY + 280, 15);
  square(runX + 178, runY + 283, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 7, 30);
  rect(runX + 178, runY + 257, 7, 30);
}

function runUp2(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 180, runY + 210, 50, 23);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 20);
  rect(runX + 219, runY + 295, 11, 20);
  fill(74, 54, 31);
  rect(runX + 185, runY + 305, 11, 13);
  rect(runX + 219, runY + 305, 11, 13);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill("#A15C33");
  square(runX + 230, runY + 287, 7.5);
  square(runX + 178, runY + 287, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 7, 30);
  rect(runX + 178, runY + 257, 7, 30);
}

function runUp3(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 180, runY + 210, 50, 23);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 20);
  rect(runX + 219, runY + 295, 11, 20);
  fill(74, 54, 31);
  rect(runX + 185, runY + 315, 11, 13);
  rect(runX + 219, runY + 305, 11, 7.5);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill("#A15C33");
  square(runX + 178, runY + 280, 15);
  square(runX + 230, runY + 283, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 8, 23);
  rect(runX + 177, runY + 257, 8, 26);
}

function runUp4(runX, runY) {
  noStroke();
  fill(252, 111, 3);
  rect(runX + 185, runY + 257, 45, 30);
  fill("yellow");
  rect(runX + 200, runY + 257, 3, 30);
  rect(runX + 212, runY + 257, 3, 30);
  fill("#A15C33");
  square(runX + 180, runY + 200, 50);
  rect(runX + 200, runY + 250, 15, 7);
  rect(runX + 228, runY + 213, 10, 20);
  rect(runX + 172, runY + 213, 10, 20);
  rect(runX + 197, runY + 235, 12, 7);
  fill("#35211A");
  rect(runX + 180, runY + 200, 50, 10);
  rect(runX + 180, runY + 210, 50, 23);
  fill(48, 57, 110);
  rect(runX + 185, runY + 287, 45, 8);
  rect(runX + 185, runY + 295, 11, 20);
  rect(runX + 219, runY + 295, 11, 20);
  fill(74, 54, 31);
  rect(runX + 185, runY + 305, 11, 13);
  rect(runX + 219, runY + 305, 11, 13);
  fill(209, 209, 29);
  rect(runX + 183, runY + 180, 44, 20);
  rect(runX + 188.5, runY + 173, 33, 7);
  fill("#A15C33");
  square(runX + 230, runY + 287, 7.5);
  square(runX + 178, runY + 287, 7.5);
  fill("white");
  rect(runX + 230, runY + 257, 7, 30);
  rect(runX + 178, runY + 257, 7, 30);
}

//---------------------------------------------------------

function runLeft1(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 212, runY + 308, 30, 11);
  rect(runX + 253, runY + 302, 20, 11);
  fill("#A15C33");
  rect(runX + 200, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 235, runY + 248, 15, 10);
  fill(0);
  square(runX + 210, runY + 215, 10);
  fill("#35211A");
  rect(runX + 235, runY + 200, 25, 20);
  rect(runX + 250, runY + 220, 10, 25);
  square(runX + 250, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 220, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 224, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 252, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 224, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 245, runY + 276, 13);
  fill("white");
  rect(runX + 240, runY + 268, 13, 8);
}

function runLeft2(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 223, runY + 312, 30, 11);
  fill("#A15C33");
  rect(runX + 200, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 235, runY + 248, 15, 10);
  fill(0);
  square(runX + 210, runY + 215, 10);
  fill("#35211A");
  rect(runX + 235, runY + 200, 25, 20);
  rect(runX + 250, runY + 220, 10, 25);
  square(runX + 250, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 220, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 224, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 252, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 224, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 235.1, runY + 276, 13);
  fill("white");
  rect(runX + 235, runY + 268, 13, 8);
}

function runLeft3(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 212, runY + 308, 30, 11);
  rect(runX + 253, runY + 302, 20, 11);
  fill("#A15C33");
  rect(runX + 200, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 235, runY + 248, 15, 10);
  fill(0);
  square(runX + 210, runY + 215, 10);
  fill("#35211A");
  rect(runX + 235, runY + 200, 25, 20);
  rect(runX + 250, runY + 220, 10, 25);
  square(runX + 250, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 220, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 224, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 252, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 224, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 220, runY + 276, 13);
  fill("white");
  rect(runX + 226, runY + 268, 13, 8);
}

function runLeft4(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 223, runY + 312, 30, 11);
  //rect(253,302,20,11)
  fill("#A15C33");
  rect(runX + 200, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 235, runY + 248, 15, 10);
  fill(0);
  square(runX + 210, runY + 215, 10);
  fill("#35211A");
  rect(runX + 235, runY + 200, 25, 20);
  rect(runX + 250, runY + 220, 10, 25);
  square(runX + 250, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 220, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 224, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 252, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 224, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 235.1, runY + 276, 13);
  fill("white");
  rect(runX + 235, runY + 268, 13, 8);
}

//---------------------------------------------------------
function runRight1(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 188, runY + 308, 30, 11);
  rect(runX + 228, runY + 302, 20, 11);
  fill("#A15C33");
  rect(runX + 220, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 210, runY + 248, 15, 10);
  fill(0);
  square(runX + 240, runY + 215, 10);
  fill("#35211A");
  rect(runX + 200, runY + 200, 25, 20);
  rect(runX + 200, runY + 200, 10, 45);
  square(runX + 205, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 233, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 200, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 205, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 200, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 201, runY + 276, 13);
  fill("white");
  rect(runX + 206, runY + 268, 13, 8);
}

function runRight2(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 206, runY + 312, 30, 11);
  //rect(runX+228,runY+302,20,11)
  fill("#A15C33");
  rect(runX + 220, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 210, runY + 248, 15, 10);
  fill(0);
  square(runX + 240, runY + 215, 10);
  fill("#35211A");
  rect(runX + 200, runY + 200, 25, 20);
  rect(runX + 200, runY + 200, 10, 45);
  square(runX + 205, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 233, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 200, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 205, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 200, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 211.5, runY + 276, 13);
  fill("white");
  rect(runX + 211.5, runY + 268, 13, 8);
}

function runRight3(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 216, runY + 308, 30, 11);
  rect(runX + 186, runY + 302, 20, 11);
  fill("#A15C33");
  rect(runX + 220, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 210, runY + 248, 15, 10);
  fill(0);
  square(runX + 240, runY + 215, 10);
  fill("#35211A");
  rect(runX + 200, runY + 200, 25, 20);
  rect(runX + 200, runY + 200, 10, 45);
  square(runX + 205, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 233, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 200, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 205, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 200, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 225, runY + 276, 13);
  fill("white");
  rect(runX + 220, runY + 268, 13, 8);
}

function runRight4(runX, runY) {
  noStroke();
  fill(74, 54, 31);
  rect(runX + 206, runY + 312, 30, 11);
  //rect(runX+228,runY+302,20,11)
  fill("#A15C33");
  rect(runX + 220, runY + 200, 40, 40);
  rect(runX + 210, runY + 210, 40, 40);
  rect(runX + 210, runY + 248, 15, 10);
  fill(0);
  square(runX + 240, runY + 215, 10);
  fill("#35211A");
  rect(runX + 200, runY + 200, 25, 20);
  rect(runX + 200, runY + 200, 10, 45);
  square(runX + 205, runY + 245, 5);
  fill(209, 209, 29);
  rect(runX + 207, runY + 180, 44, 20);
  rect(runX + 213, runY + 173, 33, 7);
  fill(201, 201, 137);
  rect(runX + 233, runY + 173, 6, 27);
  fill(252, 111, 3);
  rect(runX + 200, runY + 258, 35);
  fill("yellow");
  rect(runX + 228, runY + 258, 3, 35);
  rect(runX + 205, runY + 258, 3, 35);
  fill(48, 57, 110);
  rect(runX + 200, runY + 293, 35, 20);
  fill("#A15C33");
  square(runX + 211.5, runY + 276, 13);
  fill("white");
  rect(runX + 211.5, runY + 268, 13, 8);
}
