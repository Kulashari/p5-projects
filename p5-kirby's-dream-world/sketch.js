let houseY = 170;
let houseX2 = 40;
var x5;
var balloonY = 200;

let timer3 = 0;

let score = 0;

 var questions = ["What is the difference between an 'if'\n statement and an 'if else statement'?\n\na. execute the code if the condition is true\n\nb. need curly brackets for the function to\nexecute\n\nc. have an body in which the statements\n are written\n\nd. can check multiple conditions sequentially","What do 'if else statements' \nand 'if else if statements' ask for?\n\na. question/condtions\n\nb. answers\n\nc. looking for statements\n\nd. clauses","Do most 'if else statements' require \ncurly brackets?\n\n\n\na. yes\n\n\n\nb. no","How many choices are possible when using\n a single 'if else statement'?\n\na. 1\n\nb. 2\n\nc. 3\n\nd. 4","What type of applications\n can be made from 1 'if else statements'\n using the random function?\n\na. Board Game\n\nb. Four Square\n\nc. Flip a Coin\n\nd. All of the above","Do “If else” statements usually ask\n questions comparing numbers?\n\n\n True\n\n\n False","What is the best suited example\n that shows the relationship between\n 'if else statements'?\n\na. A train that has two ways that it can go\n with the train being the if statement and\n the two pathways being true and false\n\nb. A train that has three ways that it\n can go with the train being the if\n statement and the three pathways being\n true, false and both","Are logical operators required to run\n 'if else statements'?\n\n\na. Yes\n\n\nb. No","An 'if else if statement'\n can make a program branch in 4 ways\n\n\nTrue\n\n\nFalse","There can be an unlimited number of\n 'else if' clauses in an 'if else if' statement\n\n\nTrue\n\n\nFalse"];
var randomQuestion;

let circleCenterX;
let circleCenterY;
let circleRadius;

let circleCenterX4;
let circleCenterY4;
let circleRadius4;

let leftX = 500;
let rightX = -50;

let btnOn = false;
let btnOn2 = false;
let btnOn3 = false;

let noLives = 3;

let enemyX = 700;
let enemyY = 0;

let enemyX2 = 1000;
let enemyY2 = 200;

let runR = 27.5;

var treeX = 0;
var treeY = -10;
let sunSize = 50;

let col;
let col2;
let col3;
let col4;
let col5;
let col6;

let song;
let gameSong;
let gameOverSong;
let buttonClick;

let menuMusic = false;
let gameMusic = false;
let gameOverMusic = false;
let button = false;

let myFont;
let runX = 0;
let runY = 0;

let img;

timer2 = 0;

loadingX = 0;

function preload() {
  myFont = loadFont("Dinosaur.ttf");
}

let screen = "intro"; //variable used to control which screen is drawn
let timer = 0;
function setup() {
  createCanvas(400, 400);
  randomQuestion = round(random(0, 9));
  song = loadSound("menuMusic1.mp3", loaded);
  gameSong = loadSound("gameMusic (2).mp3", loaded2);
  gameOverSong = loadSound("gameOver.mp3", loaded3);
  buttonClick = loadSound("buttonClick.mp3", loaded4);

  circleCenterX = width / 2;
  circleCenterY = height / 2;
  circleRadius = 100;

  circleCenterX2 = width / 2;
  circleCenterY2 = height / 2;
  circleRadius2 = 22.5;

  circleCenterX3 = width / 2;
  circleCenterY3 = height / 2;
  circleRadius3 = 50;

  circleCenterX4 = width / 2;
  circleCenterY4 = height / 2;
  circleRadius4 = 100;

  circleCenterX5 = width / 2;
  circleCenterY5 = height / 2;
  circleRadius5 = 100;
}

function loaded() {
  song.loop();
  song.pause();
  song.setVolume(0.7);
}

function loaded2() {
  gameSong.loop();
  gameSong.pause();
  gameSong.setVolume(0.7);
}

function loaded3() {
  gameOverSong.pause();
  gameOverSong.setVolume(1);
}

function loaded4() {
  buttonClick.pause();
  buttonClick.setVolume(0.8);
}

function screenQuestion(questionNumber) {  
  push();
  background(176, 224, 230);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text(questions[questionNumber], 200, 80);
  pop();
}

function draw() {
  //the code in the if statement below draws the intro screen

  if (screen == "intro") {
    background(0, 0, 35, 50);

    push();
    noCursor();
    noStroke();
    fill(255);

    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    cursor('grab')
    pop();

    textSize(50);
    fill(0);
    push();
    textFont(myFont);
    textSize(45);
    fill(255, 223, 0);
    text("Kirby's  Dream", 14, 105);
    text("World", 109, 170);
    push()
    textAlign(CENTER)
    textSize(20)
    text("Topic: If Else Statements",198,210)
    pop()
    pop();

    //how to play button
    fill(10, 10, 250); //blue
    //the code below creates a nice roll over effect
    if (mouseX >= 40 && mouseX <= 190 && mouseY >= 300 && mouseY <= 340) {
      fill(0, 0, 139); // click color
    }
    push();
    textFont(myFont);
    push();
    strokeWeight(1);
    stroke(0);
    rect(40, 300, 150, 40); // the button
    pop();
    textSize(20);
    fill(255);
    text("Rules", 83, 328);
    pop();

    fill(10, 250, 10);
    if (mouseX >= 215 && mouseX <= 365 && mouseY >= 300 && mouseY <= 340) {
      fill(0, 139, 0);
    }
    push();
    textFont(myFont);
    push();
    stroke(0);
    strokeWeight(1);
    rect(215, 300, 150, 40);
    pop();
    textSize(20);
    fill(255);
    text("Sound", 254, 328);
    pop();

    //play button
    fill(250, 10, 10); //red
    //the code below creates a nice roll over effect
    if (mouseX >= 125 && mouseX <= 275 && mouseY >= 230 && mouseY <= 270) {
      fill(139, 0, 0); // click color
    }
    push();
    textFont(myFont);
    push();
    strokeWeight(1);
    stroke(0);
    rect(125, 230, 150, 40); // the button
    pop();
    fill(255);
    textSize(20);
    text("Start", 166, 258);
    pop();
    
    push()
    textFont(myFont)
    textAlign(CENTER)
    textSize(20)
    fill(255, 223, 0)
    text("Made by: Sarthak & Avi",200,380)
    pop()
  }

  //the code in the if statement below draws the "how to play" screen
  if (screen == "sound") {
    background(150, 124, 53);
    cursor("grab");

    push();
    fill(247, 240, 35);
    textFont(myFont);
    textSize(40);
    text("Sound Settings", 20, 80);
    pop();

    if (mouseIsPressed) {
      if (
        mouseX > 250 &&
        mouseY > 135 &&
        mouseX < 250 + 40 &&
        mouseY < 135 + 30
      ) {
        if (!song.isPlaying()) {
          song.play();
          menuMusic = true;
        }
      }
      if (
        mouseX > 305 &&
        mouseY > 135 &&
        mouseX < 305 + 40 &&
        mouseY < 135 + 30
      ) {
        song.pause();
        menuMusic = false;
      }

      if (
        mouseX > 250 &&
        mouseY > 185 &&
        mouseX < 250 + 40 &&
        mouseY < 185 + 30
      ) {
        gameMusic = true;
      }
      if (
        mouseX > 305 &&
        mouseY > 185 &&
        mouseX < 305 + 40 &&
        mouseY < 185 + 30
      ) {
        gameMusic = false;
      }

      if (
        mouseX > 250 &&
        mouseY > 235 &&
        mouseX < 250 + 40 &&
        mouseY < 235 + 30
      ) {
        gameOverMusic = true;
        button = true;
      }
      if (
        mouseX > 305 &&
        mouseY > 235 &&
        mouseX < 305 + 40 &&
        mouseY < 235 + 30
      ) {
        gameOverMusic = false;
        button = false;
      }
    }

    if (menuMusic == true) {
      if (!song.isPlaying()) {
        song.play();
      }
    }
    if (menuMusic == false) {
      song.stop();
    }

    push();
    fill(255);
    textSize(25);
    textFont(myFont);
    text("Menu Music", 50, 160);
    text("Game Music", 50, 210);
    text("SFX", 50, 260);
    pop();

    push();
    stroke(0);
    strokeWeight(1);
    fill(col);
    rect(250, 135, 40, 30);
    fill(col2);
    rect(305, 135, 40, 30);

    fill(col3);
    rect(250, 185, 40, 30);
    fill(col4);
    rect(305, 185, 40, 30);

    fill(col5);
    rect(250, 235, 40, 30);
    fill(col6);
    rect(305, 235, 40, 30);

    fill(255);
    textSize(20);
    textFont(myFont);

    text("ON", 255, 160);
    text("OFF", 306, 160);

    text("ON", 255, 210);
    text("OFF", 306, 210);

    text("ON", 255, 260);
    text("OFF", 306, 260);
    pop();

    //Back button
    fill(255);
    //the code below creates a nice roll over effect
    if (mouseX >= 290 && mouseX <= 390 && mouseY >= 350 && mouseY <= 390) {
      fill(169, 169, 169); // click color
    }
    push();
    stroke(0);
    strokeWeight(1);
    rect(290, 350, 100, 40); // the button
    pop();
    fill(0);
    textSize(20);
    text("Back", 320, 375);
  }

  if (screen == "howToPlay") {
    background(76, 39, 110);
    push();
    strokeWeight(2);
    stroke(0);
    fill(255);
    circle(120, 310, 15);
    circle(155, 284, 25);
    ellipse(210, 175, 350, 150);
    push();
    fill(232, 150, 26);
    textFont(myFont);
    textSize(50);
    text("Rules", 123, 72);
    pop();
    pop();

    timer2++;
    push();
    translate(-110, 144);
    strokeWeight(1)
    if (timer2 >= 1) {
      if (timer2 == 1) {
        drawRun1();
      }
      if (timer2 == 2) {
        drawRun2();
      }
      if (timer2 == 3) {
        drawRun3();
      }
      if (timer2 == 4) {
        drawRun4();
      }
      if (timer2 == 5) {
        drawRun5();
      }
      if (timer2 == 6) {
        drawRun6();
      }
      if (timer2 == 7) {
        drawRun7();
      }
      if (timer2 == 8) {
        drawRun8();
        timer2 = 0;
      }
      frameRate(15);
    }
    pop();

    push();
    textSize(15);
    fill(0);
    text("You will be controlling Kirby in his", 100, 135);
    text("dream. Pressing spacebar will make Kirby", 63, 152);
    text("jump. Holding spacebar will make Kirby float. Use", 50, 170);
    text("these mechanics to dodge enemies. Hitting an", 50, 188);
    text("enemy will make you awnser a question.", 57, 204);
    text("Awnser it right and you continue. Else", 82, 222);
    text("gameover. Goodluck!", 141, 240);
    pop();

    cursor("grab");

    //Back button
    fill(255);
    //the code below creates a nice roll over effect
    if (mouseX >= 290 && mouseX <= 390 && mouseY >= 350 && mouseY <= 390) {
      fill(169, 169, 169); // click color
    }
    rect(290, 350, 100, 40); // the button
    fill(0);
    textSize(20);
    text("Back", 320, 375);
  }

  if (screen == "loading") {
    if (gameMusic == true) {
      if (!gameSong.isPlaying()) {
        gameSong.play();
      }
    }
    if (gameMusic == false) {
      gameSong.stop();
    }

    song.stop();

    push();
    background(0);
    strokeWeight(3);
    stroke(255);
    noFill();
    rect(96, 190, 200, 50);

    fill(255);
    rect(97, 192, loadingX, 48);
    loadingX +=2

    strokeWeight(0);
    textSize(29);
    textFont(myFont);
    text("Loading . . . .", 97, 283);
    pop();

    timer2++;
    push();
    translate(-2, -60);
    if (timer2 >= 1) {
      if (timer2 == 1) {
        drawRun1();
      }
      if (timer2 == 2) {
        drawRun2();
      }
      if (timer2 == 3) {
        drawRun3();
      }
      if (timer2 == 4) {
        drawRun4();
      }
      if (timer2 == 5) {
        drawRun5();
      }
      if (timer2 == 6) {
        drawRun6();
      }
      if (timer2 == 7) {
        drawRun7();
      }
      if (timer2 == 8) {
        drawRun8();
        timer2 = 0;
      }
      frameRate(17);
      pop();
    }

    if (loadingX > 201.5) {
      screen = "gameScreen";
    }
  }

  //the code in the if statement below draws the game screen
  if (screen == "gameScreen") {
    if (keyIsPressed) {
      if (key == " ") {
        circleCenterY4 = 200;
        push();
        circleCenterY = -600;
        ellipse(circleCenterX4 - 130, circleCenterY4 - 90, runR * 2, runR * 2);
        pop();
      }
    } else {
      circleCenterY4 = -400;
      circleCenterY = 200;
    }

    ellipse(circleCenterX - 130, circleCenterY + 130, runR * 2, runR * 2);

    push();
    ellipse(
      circleCenterX2 + 190,
      circleCenterY2 + 140,
      circleRadius2 * 2,
      circleRadius2 * 2
    );
    pop();
    circleCenterX2 = circleCenterX2 - 3.9;

    push();
    ellipse(
      circleCenterX3 + 560,
      circleCenterY3 - 90,
      circleRadius3 * 2,
      circleRadius3 * 2
    );
    pop();
    circleCenterX3 = circleCenterX3 - 3.9;

    cursor("grab");

    background(176, 224, 230);

    drawSun();
    sunSize = sunSize + 0.05;
    if (sunSize >= 150) {
      sunSize = 100;
    }

    drawRainbow();
    noStroke();
    fill(34, 139, 34);
    rect(0, 328, 400, 400);

    let bushX = 0;
    drawBush(bushX, 325);
    while (bushX < 400) {
      drawBush(bushX, 325);
      bushX = bushX + 50;
    }

    let houseX = 40;
    drawHouse(houseX, 170, "#C17F4B");
    while (houseX < 200) {
      drawHouse(houseX, 170, "#C17F4B");
      houseX = houseX + 100;
    }
    let houseX3 = 40;
    while (houseX3 < 400) {
      drawHouse(houseX3, 170, "#C17F4B");
      houseX3 = houseX3 + 300;
    }
    drawHouse(houseX2 + 200, houseY, "#C17F4B");

    let balloonX = 140;
    drawBalloon(
      240,
      balloonY + 30,
      balloonX,
      balloonY - 40,
      color(255, 0, 0, 100)
    );
    while (balloonX < 350) {
      drawBalloon(
        240,
        balloonY + 30,
        balloonX,
        balloonY - 40,
        color(255, 0, 0, 100)
      );
      balloonX = balloonX + 50;
    }

    //draw a bunch of green balloons using a while loop
    balloonX = 175;
    drawBalloon(
      240,
      balloonY + 30,
      balloonX,
      balloonY - 20,
      color(0, 255, 0, 100)
    );
    while (balloonX < 350) {
      drawBalloon(
        240,
        balloonY + 30,
        balloonX,
        balloonY - 20,
        color(0, 255, 0, 100)
      );
      balloonX = balloonX + 50;
    }
    //draw a bunch of blue balloons using a while loop
    balloonX = 200;
    drawBalloon(240, balloonY + 30, balloonX, balloonY, color(0, 0, 200, 100));
    while (balloonX < 350) {
      drawBalloon(
        240,
        balloonY + 30,
        balloonX,
        balloonY,
        color(0, 0, 200, 100)
      );
      balloonX = balloonX + 50;
    }
    if (x5 == 1) {
      balloonY = balloonY - 1;
      houseY--;
    }

    treeX = -50;
    while (treeX < 450) {
      drawTree(treeX, treeY);
      treeX = treeX + 70;
    }

    timer2++;
    push();
    translate(-130, 130);
    strokeWeight(1);
    if (timer2 >= 1) {
      if (timer2 == 1) {
        drawRun1();
      }
      if (timer2 == 2) {
        drawRun2();
      }
      if (timer2 == 3) {
        drawRun3();
      }
      if (timer2 == 4) {
        drawRun4();
      }
      if (timer2 == 5) {
        drawRun5();
      }
      if (timer2 == 6) {
        drawRun6();
      }
      if (timer2 == 7) {
        drawRun7();
      }
      if (timer2 == 8) {
        drawRun8();
        timer2 = 0;
      }
      frameRate(15);
    }
    pop();

    if (keyIsPressed) {
      if (key == " ") {
        background(176, 224, 230);
        push();
        drawRainbow();

        noStroke();
        fill(34, 139, 34);
        rect(0, 328, 400, 400);

        pop();

        push();
        translate(-130, -90);
        push();
        translate(130, 90);

        let bushX = 0;
        drawBush(bushX, 325);
        while (bushX < 400) {
          drawBush(bushX, 325);
          bushX = bushX + 50;
        }

        let houseX = 40;
        drawHouse(houseX, 170, "#C17F4B");
        while (houseX < 200) {
          drawHouse(houseX, 170, "#C17F4B");
          houseX = houseX + 100;
        }
        let houseX3 = 40;
        while (houseX3 < 400) {
          drawHouse(houseX3, 170, "#C17F4B");
          houseX3 = houseX3 + 300;
        }
        drawHouse(houseX2 + 200, houseY, "#C17F4B");

        let balloonX = 140;
        drawBalloon(
          240,
          balloonY + 30,
          balloonX,
          balloonY - 40,
          color(255, 0, 0, 100)
        );
        while (balloonX < 350) {
          drawBalloon(
            240,
            balloonY + 30,
            balloonX,
            balloonY - 40,
            color(255, 0, 0, 100)
          );
          balloonX = balloonX + 50;
        }

        //draw a bunch of green balloons using a while loop
        balloonX = 175;
        drawBalloon(
          240,
          balloonY + 30,
          balloonX,
          balloonY - 20,
          color(0, 255, 0, 100)
        );
        while (balloonX < 350) {
          drawBalloon(
            240,
            balloonY + 30,
            balloonX,
            balloonY - 20,
            color(0, 255, 0, 100)
          );
          balloonX = balloonX + 50;
        }
        //draw a bunch of blue balloons using a while loop
        balloonX = 200;
        drawBalloon(
          240,
          balloonY + 30,
          balloonX,
          balloonY,
          color(0, 0, 200, 100)
        );
        while (balloonX < 350) {
          drawBalloon(
            240,
            balloonY + 30,
            balloonX,
            balloonY,
            color(0, 0, 200, 100)
          );
          balloonX = balloonX + 50;
        }
        if (x5 == 1) {
          balloonY -= 0.5;
          houseY -= 0.5;
        }

        treeX = -50;
        while (treeX < 450) {
          drawTree(treeX, treeY);
          treeX = treeX + 70;
        }

        pop();
        push();
        strokeWeight(1);
        drawJump1();
        pop();
        pop();
      }
    }

    drawLeftCloud(leftX);
    leftX = leftX - 0.25;
    if (leftX < -150) {
      leftX = 500;
    }
    drawLeftCloud(rightX);
    rightX = rightX + 0.25;
    if (rightX > 600) {
      rightX = -150;
    }
    drawSun();
    sunSize = sunSize + 0.05;
    if (sunSize >= 150) {
      sunSize = 100;
    }

    if (mouseIsPressed) {
      if (
        mouseX >= 45 &&
        mouseX <= 45 + 90 &&
        mouseY >= 387 &&
        mouseY < 387 + 30
      ) {
        x5 = 1;

      }
    }
    if (x5 == 1) {
      timer3++;
    }
    if (timer3 >= 400) {
      x5 = 0;
      houseY = 170;
      balloonY = 200;
      timer3 = 0;
    }

    push();
    strokeWeight(2);
    stroke(1);
    fill("rgb(195,110,130)");
    rect(30, 368, 90, 30);
    strokeWeight(1);
    fill(0);
    textSize(15);
    text("Press Me", 45, 387);
    pop();

    drawEnemy1(enemyX, enemyY);
    enemyX -= 6.5;

    drawEnemy2(enemyX2, enemyY2);
    enemyX2 -= 13;

    if (
      dist(
        circleCenterX2 + 190,
        circleCenterY2 + 140,
        circleCenterX - 130,
        circleCenterY + 130
      ) <
      runR + circleRadius2
    ) {
      screen = "questionScreen";
      circleCenterX2 = 200;
      enemyX2 = 1000;
      enemyX = 700;
      circleCenterX3 = 200;
    }

    if (
      dist(
        circleCenterX3 + 560,
        circleCenterY3 - 90,
        circleCenterX4 - 130,
        circleCenterY4 - 90
      ) <
      runR + circleRadius3
    ) {
      screen = "questionScreen";
      circleCenterX2 = 210;
      enemyX2 = 1000;
      enemyX = 700;
      circleCenterX3 = 200;
    }

    if (enemyX2 < -500) {
      enemyX2 = 1500;
    }
    if (circleCenterX2 < -150) {
      circleCenterX2 = 450;
    }
    if (enemyX < -1000) {
      enemyX = 900;
      score = score + 5;
    }
    if (circleCenterX3 < -600) {
      circleCenterX3 = 540;
    }

    if (score > 10) {
      circleCenterX2 = circleCenterX2 - 5.4;
      circleCenterX3 = circleCenterX3 - 5.4;
      enemyX -= 9;
      enemyX2 -= 18;
    }
    if (score > 50) {
      circleCenterX2 = circleCenterX2 - 9;
      circleCenterX3 = circleCenterX3 - 9;
      enemyX -= 15;
      enemyX2 -= 30;
    }
    if (score > 80) {
      circleCenterX2 = circleCenterX2 - 14.4;
      circleCenterX3 = circleCenterX3 - 14.4;
      enemyX -= 24;
      enemyX2 -= 48;
    }
    if (score > 200) {
      circleCenterX2 = circleCenterX2 - 19;
      circleCenterX3 = circleCenterX3 - 19;
      enemyX -= 31.65;
      enemyX2 -= 63.3;
    }
    if (score > 300) {
      circleCenterX2 = circleCenterX2 - 24;
      circleCenterX3 = circleCenterX3 - 24;
      enemyX -= 40;
      enemyX2 -= 80;
    }
    if (score > 500) {
      circleCenterX2 = circleCenterX2 - 30;
      circleCenterX3 = circleCenterX3 - 30;
      enemyX -= 100;
      enemyX2 -= 50;
    }
    /*
            else if (score=>60 && score<=70){
      circleCenterX2 = circleCenterX2 - 9
      circleCenterX3 = circleCenterX3 - 9
      enemyX -= 15
      enemyX2 -= 30
    }
    */

    fill(0);
    textSize(17);
    text("Score: " + score, 320, 390);

    //ellipse(circleCenterX5-130, circleCenterY5+130, runR*2, runR*2);

    /* push();
    stroke(0);
    strokeWeight(1);
    //Back button
    fill(255);
    //the code below creates a nice roll over effect
    if (mouseX >= 290 && mouseX <= 390 && mouseY >= 350 && mouseY <= 390) {
      fill(169, 169, 169); // click color
    }
    rect(290, 350, 100, 40); // the button
    pop();
    fill(0);
    textSize(20);
    text("Back", 320, 375);
    */
  }

  //the code in the if statement below draws the gameOver screen

  if (screen == "gameOver") {
    if (gameMusic == true) {
      gameSong.stop();
    }
    score = 0;
    x5 = 0
    houseY = 170
    balloonY = 200

    if (gameOverMusic == true) {
      if (!gameOverSong.isPlaying()) {
        gameOverSong.play();
      }
    }
    if (gameOverMusic == false) {
      gameOverSong.stop();
    }

    background(0);
    textSize(58);
    cursor("grab");

    fill(255);
    push();
    textAlign(CENTER);
    textFont(myFont);
    text("Game Over", 200, 130);
    pop();
    push();
    strokeWeight(1);
    stroke(0);
    textFont(myFont);
    textSize(40);
    textAlign(CENTER);
    text("Play Again", 200, 330);
    //rect(65, 270, 280, 90); // the button
    pop();
  }

  if (screen == "questionScreen") {
    cursor("grab");
    screenQuestion(randomQuestion);
  }

  if (screen == "Incorrect") {
    cursor("grab");
    background("red");
    push();
    textFont(myFont);
    textSize(60);
    fill(255);
    textAlign(CENTER);
    text("Incorrect", 190, 210);
    fill("red");
    // rect(100,370,200,50)
    textSize(30);
    fill(255);
    text("Continue", 195, 390);
    pop();
  }

  if (screen == "Correct") {
    cursor("grab");
    background("green");
    push();
    textFont(myFont);
    textSize(60);
    fill(255);
    textAlign(CENTER);
    text("Correct", 190, 210);
    fill("black");
    fill("green");
    //  rect(100,370,200,50)
    textSize(30);
    fill(255);
    text("Continue", 195, 390);
    pop();
  }
}

function mouseClicked() {
  //the code below controls the transition between screens. The conditions check which is the active screen and what button was pressed
  if (
    mouseX > 250 &&
    mouseY > 135 &&
    mouseX < 250 + 40 &&
    mouseY < 135 + 30 &&
    screen == "sound"
  ) {
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX > 305 &&
    mouseY > 135 &&
    mouseX < 305 + 40 &&
    mouseY < 135 + 30 &&
    screen == "sound"
  ) {
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX > 250 &&
    mouseY > 185 &&
    mouseX < 250 + 40 &&
    mouseY < 185 + 30 &&
    screen == "sound"
  ) {
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX > 305 &&
    mouseY > 185 &&
    mouseX < 305 + 40 &&
    mouseY < 185 + 30 &&
    screen == "sound"
  ) {
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX > 250 &&
    mouseY > 235 &&
    mouseX < 250 + 40 &&
    mouseY < 235 + 30 &&
    screen == "sound"
  ) {
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX > 305 &&
    mouseY > 235 &&
    mouseX < 305 + 40 &&
    mouseY < 235 + 30 &&
    screen == "sound"
  ) {
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX >= 40 &&
    mouseX <= 190 &&
    mouseY >= 300 &&
    mouseY <= 340 &&
    screen == "intro"
  ) {
    screen = "howToPlay";
    if (button == true) {
      buttonClick.play();
    }
  } else if (
    mouseX >= 290 &&
    mouseX <= 390 &&
    mouseY >= 350 &&
    mouseY <= 390 &&
    screen == "howToPlay"
  ) {
    screen = "intro";
    if (button == true) {
      buttonClick.play();
    }
  } else if (
    mouseX >= 125 &&
    mouseX <= 275 &&
    mouseY >= 230 &&
    mouseY <= 270 &&
    screen == "intro"
  ) {
    screen = "loading";
    if (button == true) {
      buttonClick.play();
    }
  } else if (
    mouseX >= 65 &&
    mouseX <= 345 &&
    mouseY >= 270 &&
    mouseY <= 360 &&
    screen == "gameOver"
  ) {
    screen = "intro";
    if (menuMusic == true) {
      song.play();
    }
    if (gameOverMusic == true) {
      gameOverSong.stop();
    }
    if (button == true) {
      buttonClick.play();
    }
  } else if (
    mouseX >= 215 &&
    mouseX <= 365 &&
    mouseY >= 300 &&
    mouseY <= 340 &&
    screen == "intro"
  ) {
    screen = "sound";
    if (button == true) {
      buttonClick.play();
    }
  } else if (
    mouseX >= 290 &&
    mouseX <= 390 &&
    mouseY >= 350 &&
    mouseY <= 390 &&
    screen == "sound"
  ) {
    screen = "intro";
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 140 &&
    mouseY <= 160 &&
    screen == "questionScreen" &&
    randomQuestion == 0
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 190 &&
    mouseY <= 230 &&
    screen == "questionScreen" &&
    randomQuestion == 0
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 265 &&
    mouseY <= 305 &&
    screen == "questionScreen" &&
    randomQuestion == 0
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 340 &&
    mouseY <= 360 &&
    screen == "questionScreen" &&
    randomQuestion == 0
  ) {
    screen = "Correct";
    
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 139 &&
    mouseY <= 159 &&
    screen == "questionScreen" &&
    randomQuestion == 1
  ) {
    screen = "Correct";
    
    if (button == true) {
      buttonClick.play();
    }
   
    randomQuestion++;
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 190 &&
    mouseY <= 210 &&
    screen == "questionScreen" &&
    randomQuestion == 1
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 240 &&
    mouseY <= 260 &&
    screen == "questionScreen" &&
    randomQuestion == 1
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
    
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 290 &&
    mouseY <= 310 &&
    screen == "questionScreen" &&
    randomQuestion == 1
  ) {
    screen = "Incorrect";
    if (button == true) {
      buttonClick.play();
    }

    
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 190 &&
    mouseY <= 210 &&
    screen == "questionScreen" &&
    randomQuestion == 2
  ) {
    screen = "Correct";
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
    
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 290 &&
    mouseY <= 310 &&
    screen == "questionScreen" &&
    randomQuestion == 2
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 140 &&
    mouseY <= 160 &&
    screen == "questionScreen" &&
    randomQuestion == 3
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 190 &&
    mouseY <= 210 &&
    screen == "questionScreen" &&
    randomQuestion == 3
  ) {
    screen = "Correct";
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
    
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 240 &&
    mouseY <= 260 &&
    screen == "questionScreen" &&
    randomQuestion == 3
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 290 &&
    mouseY <= 310 &&
    screen == "questionScreen" &&
    randomQuestion == 3
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 165 &&
    mouseY <= 185 &&
    screen == "questionScreen" &&
    randomQuestion == 4
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 215 &&
    mouseY <= 235 &&
    screen == "questionScreen" &&
    randomQuestion == 4
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 265 &&
    mouseY <= 285 &&
    screen == "questionScreen" &&
    randomQuestion == 4
  ) {
    screen = "Correct";
    
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 315 &&
    mouseY <= 335 &&
    screen == "questionScreen" &&
    randomQuestion == 4
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 165 &&
    mouseY <= 185 &&
    screen == "questionScreen" &&
    randomQuestion == 5
  ) {
    screen = "Correct";
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
    
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 235 &&
    mouseY <= 255 &&
    screen == "questionScreen" &&
    randomQuestion == 5
  ) {
    screen = "Incorrect";
    
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 165 &&
    mouseY <= 235 &&
    screen == "questionScreen" &&
    randomQuestion == 6
  ) {
    screen = "Correct";
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
    
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 265 &&
    mouseY <= 355 &&
    screen == "questionScreen" &&
    randomQuestion == 6
  ) {
    if (button == true) {
      buttonClick.play();
    }
    screen = "Incorrect";
    
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 165 &&
    mouseY <= 185 &&
    screen == "questionScreen" &&
    randomQuestion == 7
  ) {
    if (button == true) {
      buttonClick.play();
    }
    screen = "Incorrect";
    
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 235 &&
    mouseY <= 255 &&
    screen == "questionScreen" &&
    randomQuestion == 7
  ) {
    screen = "Correct";
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 165 &&
    mouseY <= 185 &&
    screen == "questionScreen" &&
    randomQuestion == 8
  ) {
    screen = "Correct";
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
    
  }
  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 235 &&
    mouseY <= 255 &&
    screen == "questionScreen" &&
    randomQuestion == 8
  ) {
    screen = "Incorrect";
    if (button == true) {
      buttonClick.play();
    }
    
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 165 &&
    mouseY <= 185 &&
    screen == "questionScreen" &&
    randomQuestion == 9
  ) {
    screen = "Correct";
    if (button == true) {
      buttonClick.play();
    }
    randomQuestion++;
    randomQuestion = 0;
  }
  if (
    mouseX >= 100 &&
    mouseX <= 300 &&
    mouseY >= 370 &&
    mouseY <= 420 &&
    screen == "Correct"
  ) {
    screen = "gameScreen";
    if (button == true) {
      buttonClick.play();
    }
  }

  if (
    mouseX >= 0 &&
    mouseX <= 400 &&
    mouseY >= 235 &&
    mouseY <= 255 &&
    screen == "questionScreen" &&
    randomQuestion == 9
  ) {
    screen = "Incorrect";
    if (button == true) {
      buttonClick.play();
    }
    
  }

  if (
    mouseX >= 100 &&
    mouseX <= 300 &&
    mouseY >= 370 &&
    mouseY <= 420 &&
    screen == "Incorrect"
  ) {
    screen = "gameOver";
    if (button == true) {
      buttonClick.play();
    }
  }
     if (
        mouseX >= 45 &&
        mouseX <= 45 + 90 &&
        mouseY >= 387 &&
        mouseY < 387 + 30 && screen == "gameScreen"
      ) {
           if (button == true) {
      buttonClick.play();
    }

      }
}

function drawRun1() {
  stroke(0);
  rotate(-0.4);
  fill(242, 34, 58);
  ellipse(runX + 117, runY + 290, 30, 20);

  rotate(0.4);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  rotate(0.7);
  fill(242, 34, 58);
  ellipse(runX + 278, runY + 54, 30, 20);

  rotate(-0.7);
  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runX + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawRun2() {
  stroke(0);
  rotate(-0.9);
  fill(242, 34, 58);
  ellipse(runX + -30, runY + 312, 30, 20);

  rotate(0.9);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  fill(242, 34, 58);
  ellipse(runX + 168, runY + 210, 20, 30);

  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runX + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawRun3() {
  stroke(0);
  rotate(-0.4);
  fill(242, 34, 58);
  ellipse(runX + 117, runY + 290, 30, 20);

  rotate(0.4);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  rotate(0.7);
  fill(242, 34, 58);
  ellipse(runX + 278, runY + 58, 30, 20);

  rotate(-0.7);
  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runX + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawRun4() {
  stroke(0);
  rotate(-0.1);
  fill(242, 34, 58);
  ellipse(runX + 189, runY + 240, 30, 20);

  rotate(0.1);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  fill(242, 34, 58);
  ellipse(runX + 197, runY + 225, 30, 20);

  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runY + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawRun5() {
  stroke(0);
  rotate(0.6);
  fill(242, 34, 58);
  ellipse(runX + 276, runY + 80, 30, 20);

  rotate(-0.6);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  rotate(-0.5);
  fill(242, 34, 58);
  ellipse(runX + 86, runY + 302, 30, 20);

  rotate(0.5);
  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runX + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawRun6() {
  stroke(0);
  rotate(1.3);
  fill(242, 34, 58);
  ellipse(runX + 255, runY + -111, 30, 20);

  rotate(-1.3);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  rotate(-0.9);
  fill(242, 34, 58);
  ellipse(runX + -34, runY + 314, 30, 20);

  rotate(0.9);
  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runY + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawRun7() {
  stroke(0);
  rotate(0.6);
  fill(242, 34, 58);
  ellipse(runX + 276, runY + 80, 30, 20);

  rotate(-0.6);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  rotate(-0.5);
  fill(242, 34, 58);
  ellipse(runX + 86, runY + 302, 30, 20);

  rotate(0.5);
  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runX + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawRun8() {
  stroke(0);
  rotate(-0.5);
  fill(242, 34, 58);
  ellipse(runX + 82, runY + 297, 30, 20);

  rotate(0.5);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 199, 55);

  rotate(0.4);
  fill(242, 34, 58);
  ellipse(runX + 261, runY + 132, 30, 20);

  rotate(-0.4);
  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runY + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runX + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 185, runY + 200, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  circle(runX + 217, runY + 208, 2);
}

function drawJump1() {
  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 220, runY + 180, 10);

  rotate(-0.9);
  stroke(0);
  fill(242, 34, 58);
  ellipse(runX + -56, runY + 278, 30, 20);

  fill(242, 34, 58);
  ellipse(runX + -43, runY + 300, 30, 20);

  rotate(0.9);
  fill(242, 164, 169, 255);
  circle(runX + 200, runY + 200, 55);

  fill(0);
  ellipse(runX + 220, runY + 195, 4, 13);
  ellipse(runX + 210, runY + 195, 4, 13);

  fill(255);
  noStroke();
  circle(runX + 220, runY + 192, 4);
  circle(runX + 210, runY + 192, 4);

  stroke(0);
  fill(242, 164, 169, 255);
  circle(runX + 178, runY + 183, 10);

  noStroke();
  fill(240, 98, 174);
  ellipse(runX + 200, runY + 200, 9, 4);

  fill(0);
  rect(210, 208, 9, 1);
  strokeWeight(1);
  stroke(0);
  noFill();
  arc(206, 209, 7, 7, radians(300), radians(60));
}

function mousePressed() {
  if (mouseX > 250 && mouseY > 135 && mouseX < 250 + 40 && mouseY < 135 + 30) {
    btnOn = !btnOn;
  }

  if (mouseX > 305 && mouseY > 135 && mouseX < 305 + 40 && mouseY < 135 + 30) {
    btnOn = !btnOn;
  }

  if (mouseX > 250 && mouseY > 185 && mouseX < 250 + 40 && mouseY < 185 + 30) {
    btnOn2 = !btnOn2;
  }
  if (mouseX > 305 && mouseY > 185 && mouseX < 305 + 40 && mouseY < 185 + 30) {
    btnOn2 = !btnOn2;
  }
  if (mouseX > 250 && mouseY > 235 && mouseX < 250 + 40 && mouseY < 235 + 30) {
    btnOn3 = !btnOn3;
  }
  if (mouseX > 305 && mouseY > 235 && mouseX < 305 + 40 && mouseY < 235 + 30) {
    btnOn3 = !btnOn3;
  }

  if (btnOn) {
    col = color(0, 255, 0);
    col2 = color(145, 145, 145);
  } else {
    col = color(145, 145, 145);
    col2 = color(255, 28, 28);
  }

  if (btnOn2) {
    col3 = color(0, 255, 0);
    col4 = color(145, 145, 145);
  } else {
    col3 = color(145, 145, 145);
    col4 = color(255, 28, 28);
  }

  if (btnOn3) {
    col5 = color(0, 255, 0);
    col6 = color(145, 145, 145);
  } else {
    col5 = color(145, 145, 145);
    col6 = color(255, 28, 28);
  }
}

function drawEnemy1(enemyX, enemyY) {
  push();
  scale(0.6);
  translate(400, 45);
  fill(255, 0, 0);
  strokeWeight(4);
  stroke(139, 0, 0);
  ellipse(enemyX + 203, enemyY + 95, 50, 30);
  rect(enemyX + 190, enemyY + 109, 20, 50);
  fill(255, 255, 255);
  stroke(0);
  strokeWeight(2);
  fill(216, 191, 216);
  circle(enemyX + 190, enemyY + 94, 7);
  circle(enemyX + 215, enemyY + 94, 7);
  circle(enemyX + 203, enemyY + 88, 7);
  fill(255, 0);
  arc(enemyX + 203, enemyY + 103, 10, 10, radians(180), radians(360));
  stroke(139, 0, 0);
  fill(255, 0, 0);
  line(enemyX + 240, enemyY + 110, enemyX + 213, enemyY + 120);
  line(enemyX + 150, enemyY + 150, enemyX + 195, enemyY + 120);

  noStroke();
  fill(0, 0, 255);
  rect(enemyX + 236, enemyY + 100, 5, 10);
  ellipse(enemyX + 243, enemyY + 100, 20, 10);
  rect(enemyX + 250, enemyY + 97, 9, 5);
  fill(255, 255, 0);
  circle(enemyX + 260, enemyY + 99, 6);
  fill(211, 211, 211);
  rect(enemyX + 232, enemyY + 96, 10, 2);
  rect(enemyX + 232, enemyY + 100, 10, 2);
  fill(0);
  stroke(211, 211, 211);
  strokeWeight(3);
  fill(255, 90);
  arc(enemyX + 200, enemyY + 160, 200, 200, radians(180), radians(360));
  fill(211, 211, 211);
  ellipse(enemyX + 200, enemyY + 182, 220, 100);
  noStroke();

  fill(128, 128, 128);
  ellipse(enemyX + 200, enemyY + 220, 100, 50);

  stroke(0, 100, 0);
  strokeWeight(4);
  fill(50, 205, 50);
  ellipse(enemyX + 120, enemyY + 180, 20, 20);
  ellipse(enemyX + 170, enemyY + 172, 20, 20);
  ellipse(enemyX + 220, enemyY + 170, 20, 20);
  ellipse(enemyX + 270, enemyY + 175, 20, 20);
  pop();
}

function drawEnemy2(enemyX2, enemyY2) {
  push();
  scale(0.3);
  translate(300, 930);
  noStroke();
  fill(42, 99, 191);
  stroke(0);
  strokeWeight(4);
  ellipse(enemyX2, enemyY2, 150, 150);

  fill(0);
  ellipse(enemyX2, enemyY2 - 10, 148, 60);

  stroke(0);
  strokeWeight(3);
  fill(255, 255, 255);
  ellipse(enemyX2 - 30, enemyY2 - 10, 40, 50);
  ellipse(enemyX2 + 30, enemyY2 - 10, 40, 50);

  fill(0);
  circle(enemyX2 - 25, enemyY2 - 10, 20);
  circle(enemyX2 + 25, enemyY2 - 10, 20);

  triangle(
    enemyX2 + 90,
    enemyY2 - 10,
    enemyX2 + 60,
    enemyY2 - 15,
    enemyX2 + 90,
    enemyY2 + 10
  );

  strokeWeight(4);
  noFill();
  line(enemyX2 - 41, enemyY2 - 51, enemyX2 - 23, enemyY2 - 46);
  line(enemyX2 + 44, enemyY2 - 51, enemyX2 + 29, enemyY2 - 46);
  pop();
}

function drawTree(treeX) {
  //Tree
  fill(0, 20);
  ellipse(treeX + 50, 365, 80, 20);
  fill(97, 66, 9);
  rect(treeX + 70, 220, 30, 150, 90);
  fill(53, 102, 54);
  ellipse(treeX + 115, 240, 80, 80);
  fill(71, 181, 72);
  ellipse(treeX + 85, 200, 100, 100);
  fill(65, 133, 66);
  ellipse(treeX + 50, 240, 80, 80);
}

function drawRainbow() {
  //Rainbow
  push();
  noFill(0);
  strokeWeight(20);
  stroke(255, 0, 0, 100);
  rotate((PI / 360) * -280);
  arc(-250, -50, 800, 600, 0, PI, OPEN);
  stroke(255, 155, 5, 100);
  arc(-250, -50, 720, 560, 0, PI, OPEN);
  stroke(255, 251, 0, 100);
  arc(-250, -50, 680, 520, 0, PI, OPEN);
  stroke(68, 173, 83, 100);
  arc(-250, -50, 640, 480, 0, PI, OPEN);
  stroke(0, 0, 255, 100);
  arc(-250, -50, 600, 440, 0, PI, OPEN);
  rotate((PI / 360) * 280);
  fill(250, 248, 249);
  pop();
}

function drawSun() {
  push();
  //sun
  fill(242, 242, 61);
  sunSize = sunSize + 0.15;
  strokeWeight(50);
  stroke(242, 242, 61, 50);
  ellipse(0, 0, sunSize, sunSize);
  if (sunSize >= 150) {
    sunSize = 100;
  }
  pop();
}

//function that draws the trees in the background
function drawTree(treeX, treeY) {
  //Tree
  fill(0, 20);
  ellipse(treeX + 50, treeY + 365, 80, 20);
  fill(97, 66, 9);
  rect(treeX + 70, treeY + 220, 30, 150, 90);
  fill(53, 102, 54);
  ellipse(treeX + 115, treeY + 240, 80, 80);
  fill(71, 181, 72);
  ellipse(treeX + 85, treeY + 200, 100, 100);
  fill(65, 133, 66);
  ellipse(treeX + 50, treeY + 240, 80, 80);
}

function drawBush(bushX, bushY) {
  // background bush
  push();
  strokeWeight(4);
  stroke(34, 139, 34);
  fill(34, 139, 34);
  line(bushX, bushY, bushX - 10, bushY - 35); //220, 325
  line(bushX + 2, bushY, bushX, bushY - 38);
  line(bushX + 7, bushY, bushX + 15, bushY - 34);
  line(bushX + 5, bushY, bushX + 7, bushY - 30);
  fill(60, 117, 54);
  ellipse(bushX + 3, bushY, 12, 8);
  pop();
}

function drawLeftCloud(leftX) {
  noStroke();
  fill(255, 220);
  ellipse(leftX, 50, 200, 50);
  ellipse(leftX + 20, 40, 80, 50);
  ellipse(leftX - 20, 40, 80, 50);
}

function drawRightCloud(rightX) {
  //clouds
  noStroke();
  fill(255, 220);

  ellipse(rightX + 30, 80, 100, 50);
  ellipse(rightX + 60, 60, 130, 40);
  ellipse(rightX, 60, 130, 40);
}

function drawBalloon(startX, startY, endX, endY, c) {
  stroke(255);
  strokeWeight(3);
  line(startX, startY, endX, endY);
  fill(c);
  noStroke();
  ellipse(random(endX - 1, endX + 1), endY - 20, 30, 50);
}

//function that draws the houses
function drawHouse(x, y, c) {
  stroke("#AD2717");
  //fill("#C17F4B");
  fill("#AD2717");
  triangle(x + 1, y + 60, x - 40, y + 93, x + 45, y + 93);
  fill(c);
  strokeWeight(0);
  rect(x - 27.5, y + 90, 60, 90);
  fill("#25B2D8");
  ellipse(x + 1, y + 93, 20);
  fill("#AD2717");
  rect(x - 7, y + 150, 15, 20);
  rect(x - 20, y + 130, 10, 5);
  rect(x + 15, y + 115, 10, 5);
  rect(x - 20, y + 100, 10, 5);
}
