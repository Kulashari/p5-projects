let c;
let col;
let score;
let loseSong;
let highscore = 0;
let screen = "menu";
let myFont;
let song;
let player = 1
let btnOn = false;
let xCloud1, yCloud1, xCloud2, yCloud2, xCloud3, yCloud3, xBird, yBird;

function preload() {
  myFont = loadFont("stocky.ttf");
}

function loaded() {
  song.loop();
  song.pause();
  song.setVolume(100);
}

function setup() {
  createCanvas(400, 400);
  xCloud1 = random(20, width - 20);
  yCloud1 = random(20, height - 20);

  xCloud2 = random(20, width - 20);
  yCloud2 = random(20, height - 20);

  xCloud3 = random(20, width - 20);
  yCloud3 = random(20, height - 20);

  song = loadSound("Angry Birds Theme Song.mp3");
  loseSong = loadSound("gameOver.mp3");
  c = color(255, 0, 0);
  col2 = color('crimson')
  col3 = color('yellow')
  col4 = color('black')

  xBird2 = 100;
  yBird2 = 200;
  
  xBird3 = 100
  yBird3 = 200
  
  xBird4 = 100
  yBird4 = 200
  
  xBird5 = 100
  yBird5 = 200

  xPig = 250;
  yPig = 0;

  xPig3 = 0;
  yPig3 = -140;

  xPig4 = -100;
  yPig4 = 140;

  xBirdCheck = 110;
  yBirdCheck = 200;

  xPigCheck = 450;
  yPigCheck = 200;
  xPigCheck2 = 200;
  yPigCheck2 = 60;
  xPigCheck3 = 100;
  yPigCheck3 = 330;
}

function draw() {
  if (screen == "menu") {
    background(0, 0, 35, 50);
    circle(random() * width, random() * height, random(1, 5));
    circle(random() * width, random() * height, random(1, 5));
    circle(mouseX, mouseY, random(1, 5));
    score = 0;
    textFont(myFont);
    noStroke();
    textSize(45);
    fill("white");
    text("ANGRY BIRDS", 15, 120);

    fill('red');
    rect(110, 170, 180, 60,15);
    fill('blue')
    rect(110, 240, 180, 60,15);
    fill("black");
    text("Play", 145, 215);
    text("Rules", 128, 288);
    textSize(25);
    
    fill('yellow')
    rect(110,310,180,60,15)
    fill('black')
    textSize(27)
    text("Character",123,350)

    fill(c);
    rect(25, 10, 100, 30,15);
    fill("white");
    text("Sound", 26, 33);

    if (btnOn == true) {
      if (!song.isPlaying()) {
        song.play();
      }
    }
    if (btnOn == false) {
      song.pause();
    }
  }

  if (screen == "help") {
    background(0,0,35)
    textFont(myFont);
    textSize(26);
    fill("white");
    text(
      "To Play Angry Birds, \nUse The Up and Down \nArrow Keys To Move \nRed. Avoid The Pigs \nOr Else Game Over. \nWhen The Score \nBecomes Higher. The \nPigs Will Move Faster. \nTry To Get The Highest \nScore!",
      30,
      50
    );
    fill('green');
    rect(200, 325, 180, 60,15);
    fill("black");
    textSize(45);
    text("Menu", 220, 370);
  }
  
  if (screen == "player"){
    background(0, 0, 35, 50)
    
    noStroke()
    fill('yellow');
    rect(200, 325, 180, 60,15);
    fill("black");
    textSize(45);
    text("Menu", 220, 370);
    
    push()
    scale(0.7)
    drawBird(xBird4+45,yBird4+20,col2)
    pop()
    
   
    push()
    scale(0.7)
    drawBird(xBird4+305,yBird4+20,col3)
    pop()
    
    
    push()
    scale(0.7)
    drawBird(xBird4+45,yBird4+250,col4)
    pop()
    
    
    
    textSize(30)
    fill('yellow')
    text('1',90,80)
    text('2',280,80)
    text('3',90,245)
  
    
    if (key == 1){
    noFill()
    stroke('green')
    strokeWeight(4)
    rect(10,100,180,100)
      
    noFill()
    strokeWeight(4)
    stroke('red')
    rect(200,100,180,100)
    rect(10,260,180,100)
      
      player = 1
    }
    if (key == 2){
                noFill()
    stroke('red')
    strokeWeight(4)
    rect(10,100,180,100)
      rect(10,260,180,100)
      
          noFill()
    strokeWeight(4)
    stroke('green')
    rect(200,100,180,100)
    
      
      player = 2
    }
    
    if (key == 3){
                noFill()
    stroke('red')
    strokeWeight(4)
       rect(200,100,180,100)
    rect(10,100,180,100)
      
          noFill()
    strokeWeight(4)
    stroke('green')
    
      rect(10,260,180,100)
   
      
      player = 3
    }
  
    
  }

  if (screen == "gameScreen") {
    background(49, 81, 133);
    xCloud1 = xCloud1 - 2;
    xCloud2 = xCloud2 - 2;
    xCloud3 = xCloud3 - 2;

    if (xCloud1 <= -100) {
      yCloud1 = random(0, 150);
      xCloud1 = 500;
    }
    if (xCloud2 <= -100) {
      yCloud2 = random(150, 250);
      xCloud2 = 500;
    }
    if (xCloud3 <= -100) {
      yCloud3 = random(250, 350);
      xCloud3 = 500;
    }

    // cloud1
    fill("white");
    strokeWeight(2);
    stroke("gainsboro");
    circle(xCloud1, yCloud1, 40);
    circle(xCloud1 + 17, yCloud1 - 20, 40);
    circle(xCloud1 + 34, yCloud1, 60);
    noStroke();
    rect(xCloud1 - 3, yCloud1 - 15, 50, 30);
    // cloud2
    fill("white");
    strokeWeight(2);
    stroke("gainsboro");
    circle(xCloud2, yCloud2, 40);
    circle(xCloud2 + 17, yCloud2 - 20, 40);
    circle(xCloud2 + 34, yCloud2, 60);
    noStroke();
    rect(xCloud2 - 3, yCloud2 - 15, 50, 30);
    // cloud3
    fill("white");
    strokeWeight(2);
    stroke("gainsboro");
    circle(xCloud3, yCloud3, 40);
    circle(xCloud3 + 17, yCloud3 - 20, 40);
    circle(xCloud3 + 34, yCloud3, 60);
    noStroke();
    rect(xCloud3 - 3, yCloud3 - 15, 50, 30);

    drawPig();
    drawPig2(xPig3, yPig3);
    drawPig2(xPig4, yPig4);
    
        if (player == 1){
      drawBird(xBird2,yBird2,col2)
    }
    else if  (player == 2){
      drawBird(xBird3,yBird3,col3)
    }
    else if (player==3){
      drawBird(xBird5,yBird5,col4)
    }

    if (yBird == -10 && yBirdCheck == -10) {
      yBird = 60;
      yBirdCheck = 60;
    }
    if (yBird == 410 && yBirdCheck == 410) {
      yBird = 340;
      yBirdCheck = 340;
    }
    
    
    if (yBird2 == -10 && yBirdCheck == -10) {
      yBird2 = 60;
      yBirdCheck = 60;
    }
    if (yBird2 == 410 && yBirdCheck == 410) {
      yBird2 = 340;
      yBirdCheck = 340;
    }
    
    
    if (yBird3 == -10 && yBirdCheck == -10) {
      yBird3 = 60;
      yBirdCheck = 60;
    }
    if (yBird3 == 410 && yBirdCheck == 410) {
      yBird3 = 340;
      yBirdCheck = 340;
    }
    
        if (yBird5 == -10 && yBirdCheck == -10) {
      yBird5 = 60;
      yBirdCheck = 60;
    }
    if (yBird5 == 410 && yBirdCheck == 410) {
      yBird5 = 340;
      yBirdCheck = 340;
    }
    
    
   

    if (xPig <= -300) {
      xPig = 250;
      xPigCheck = 450;
      score = score + 1;
    }
    if (xPig3 <= -300) {
      xPig3 = 250;
      xPigCheck2 = 450;
      score = score + 1;
    }
    if (xPig4 <= -300) {
      xPig4 = 250;
      xPigCheck3 = 450;
      score = score + 1;
    }

    text("Score:" + score, 20, 40);

    xPig--;
    xPigCheck--;
    xPigCheck2--;
    xPigCheck3--;
    xPig3--;
    xPig4--;

    push();
    noFill();
    circle(xBirdCheck, yBirdCheck, 100);
    circle(xPigCheck, yPigCheck, 100);
    circle(xPigCheck2, yPigCheck2, 100);
    circle(xPigCheck3, yPigCheck3, 100);
    pop();

    if (dist(xBirdCheck, yBirdCheck, xPigCheck, yPigCheck) < 50 + 50) {
      screen = "gameOver";

      xBird = 100;
      yBird = 200;
      xPig = 250;
      yPig = 0;

      xPig3 = 0;
      yPig3 = -140;

      xPig4 = -100;
      yPig4 = 140;

      xBirdCheck = 110;
      yBirdCheck = 200;
      xPigCheck = 450;
      yPigCheck = 200;
      xPigCheck2 = 200;
      yPigCheck2 = 60;
      xPigCheck3 = 100;
      yPigCheck3 = 330;
      xPig++;
      yPig++;
      xPig3++;
      yPig3++;
      xPig4++;
      yPig4++;
      xPigCheck++;
      yPigCheck++;
      xPigCheck2++;
      yPigCheck2++;
      xPigCheck3++;
      yPigCheck3++;
    }
    if (dist(xBirdCheck, yBirdCheck, xPigCheck2, yPigCheck2) < 50 + 50) {
      screen = "gameOver";
      xBird = 100;
      yBird = 200;
      xPig = 250;
      yPig = 0;

      xPig3 = 0;
      yPig3 = -140;

      xPig4 = -100;
      yPig4 = 140;

      xBirdCheck = 110;
      yBirdCheck = 200;
      xPigCheck = 450;
      yPigCheck = 200;
      xPigCheck2 = 200;
      yPigCheck2 = 60;
      xPigCheck3 = 100;
      yPigCheck3 = 330;

      xPig++;
      yPig++;
      xPig3++;
      yPig3++;
      xPig4++;
      yPig4++;
      xPigCheck++;
      yPigCheck++;
      xPigCheck2++;
      yPigCheck2++;
      xPigCheck3++;
      yPigCheck3++;
    }
    if (dist(xBirdCheck, yBirdCheck, xPigCheck3, yPigCheck3) < 50 + 50) {
      screen = "gameOver";
      xBird = 100;
      yBird = 200;
      xPig = 250;
      yPig = 0;

      xPig3 = 0;
      yPig3 = -140;

      xPig4 = -100;
      yPig4 = 140;

      xBirdCheck = 110;
      yBirdCheck = 200;
      xPigCheck = 450;
      yPigCheck = 200;
      xPigCheck2 = 200;
      yPigCheck2 = 60;
      xPigCheck3 = 100;
      yPigCheck3 = 330;

      xPig++;
      yPig++;
      xPig3++;
      yPig3++;
      xPig4++;
      yPig4++;
      xPigCheck++;
      yPigCheck++;
      xPigCheck2++;
      yPigCheck2++;
      xPigCheck3++;
      yPigCheck3++;
    }

    if (score > 5) {
      xPig = xPig - 1.5;
      xPig3 = xPig3 - 1.5;
      xPig4 = xPig4 - 1.5;
      xPigCheck = xPigCheck - 1.5;
      xPigCheck2 = xPigCheck2 - 1.5;
      xPigCheck3 = xPigCheck3 - 1.5;
      
          xCloud1 = xCloud1 - 2.5;
    xCloud2 = xCloud2 - 2.5;
    xCloud3 = xCloud3 - 2.5;
    }
    if (score > 10) {
      xPig = xPig - 2;
      xPig3 = xPig3 - 2;
      xPig4 = xPig4 - 2;
      xPigCheck = xPigCheck - 2;
      xPigCheck2 = xPigCheck2 - 2;
      xPigCheck3 = xPigCheck3 - 2;
      
          xCloud1 = xCloud1 - 3;
    xCloud2 = xCloud2 - 3;
    xCloud3 = xCloud3 - 3;
    }
    if (score > 20) {
      xPig = xPig - 3;
      xPig3 = xPig3 - 3;
      xPig4 = xPig4 - 3;
      xPigCheck = xPigCheck - 3;
      xPigCheck2 = xPigCheck2 - 3;
      xPigCheck3 = xPigCheck3 - 3;
      
          xCloud1 = xCloud1 - 3.5;
    xCloud2 = xCloud2 - 3.5;
    xCloud3 = xCloud3 - 3.5;
    }
    if (score > 30) {
      xPig = xPig - 4;
      xPig3 = xPig3 - 4;
      xPig4 = xPig4 - 4;
      xPigCheck = xPigCheck - 4;
      xPigCheck2 = xPigCheck2 - 4;
      xPigCheck3 = xPigCheck3 - 4;
      
          xCloud1 = xCloud1 - 4;
    xCloud2 = xCloud2 - 4;
    xCloud3 = xCloud3 - 4;
    }
    if (score > 30) {
      xPig = xPig - 4.5;
      xPig3 = xPig3 - 4.5;
      xPig4 = xPig4 - 4.5;
      xPigCheck = xPigCheck - 4.5;
      xPigCheck2 = xPigCheck2 - 4.5;
      xPigCheck3 = xPigCheck3 - 4.5;
      
          xCloud1 = xCloud1 - 4.5;
    xCloud2 = xCloud2 - 4.5;
    xCloud3 = xCloud3 - 4.5;
    }
    if (score > 40) {
      xPig = xPig - 5;
      xPig3 = xPig3 - 5;
      xPig4 = xPig4 - 5;
      xPigCheck = xPigCheck - 5;
      xPigCheck2 = xPigCheck2 - 5;
      xPigCheck3 = xPigCheck3 - 5;
      
          xCloud1 = xCloud1 - 5;
    xCloud2 = xCloud2 - 5;
    xCloud3 = xCloud3 - 5;
    }
    if (score > 50) {
      xPig = xPig - 5.5;
      xPig3 = xPig3 - 5.5;
      xPig4 = xPig4 - 5.5;
      xPigCheck = xPigCheck - 5.5;
      xPigCheck2 = xPigCheck2 - 5.5;
      xPigCheck3 = xPigCheck3 - 5.5;
      
          xCloud1 = xCloud1 - 5.5;
    xCloud2 = xCloud2 - 5.5;
    xCloud3 = xCloud3 - 5.5;
    }
    
  }
  if (screen == "gameOver") {
    background("maroon");
    if (score > highscore) {
      highscore = score;
    }
    
    textSize(42);
    text("Game Over", 30, 140);
    text("Score: " + score, 30, 200);
    text("Highscore: " + highscore, 30, 260);
    fill("rgb(175,169,169)");
    rect(200, 325, 180, 60,15);
    fill("black");
    textSize(45);
    text("Menu", 220, 370);
    if (btnOn == true) {
      if (!loseSong.isPlaying()) {
        loseSong.play();
      }
    }
    if (btnOn == false) {
      loseSong.pause();
    }
    song.pause();
  }
}

function drawBird(xBird,yBird,col) {
  // bird body
  //tail feathers
  fill("salmon");
  //ellipse(190, 220, 110, 65);
  triangle(
    xBird - 45,
    yBird + 5,
    xBird - 80,
    yBird - 10,
    xBird - 45,
    yBird + 5 + 5
  );
  triangle(
    xBird - 45,
    yBird,
    xBird - 80,
    yBird - 5,
    xBird - 45,
    yBird + 5 + 10
  );
  //feet
  strokeWeight(3);
  stroke("gold");
  fill("gold");
  line(xBird - 20, yBird + 25, xBird - 30, yBird + 40);
  line(xBird - 20, yBird + 25, xBird - 25, yBird + 45);
  //body
  fill(col);
  noStroke();
  ellipse(xBird, yBird, 110, 65);
  fill("lightSalmon");
  ellipse(xBird, yBird + 10, 80, 45);
  //eye
  fill("white");
  strokeWeight(7);
  circle(xBird + 30, yBird - 20, 24);
  fill("black");
  circle(xBird + 30, yBird - 20, 12);
  //beak
  fill("yellow");
  triangle(xBird + 45, yBird - 15, xBird + 80, yBird - 10, xBird + 45, yBird);
  // bird wings
  fill("lightSalmon");
  noStroke();
  triangle(xBird - 20, yBird, xBird - 5, yBird - 10, xBird - 60, yBird - 50);

  fill("black");
}

function drawPig() {
  fill(44, 209, 71);
  ellipse(xPig + 200, yPig + 200, 100, 80);
  fill(38, 245, 27);
  ellipse(xPig + 200, yPig + 207, 35, 28);
  fill(47, 66, 46);
  ellipse(xPig + 196, yPig + 209, 7, 12);
  ellipse(xPig + 207, yPig + 209, 8, 7);
  fill("white");
  ellipse(xPig + 228, yPig + 202, 20);
  ellipse(xPig + 173, yPig + 202, 20);
  fill("black");
  ellipse(xPig + 232, yPig + 202, 7);
  ellipse(xPig + 171, yPig + 202, 7);
  push();
  fill(44, 209, 71);
  ellipse(xPig + 170, yPig + 165, 18, 15);
  ellipse(xPig + 225, yPig + 165, 18, 15);
  fill(46, 94, 43);
  ellipse(xPig + 170, yPig + 165, 8, 7);
  ellipse(xPig + 225, yPig + 165, 8, 7);
  pop();
  fill("black");
}

function drawPig2(xPig2, yPig2) {
  fill(44, 209, 71);
  ellipse(xPig2 + 200, yPig2 + 200, 100, 80);
  fill(38, 245, 27);
  ellipse(xPig2 + 200, yPig2 + 207, 35, 28);
  fill(47, 66, 46);
  ellipse(xPig2 + 196, yPig2 + 209, 7, 12);
  ellipse(xPig2 + 207, yPig2 + 209, 8, 7);
  fill("white");
  ellipse(xPig2 + 228, yPig2 + 202, 20);
  ellipse(xPig2 + 173, yPig2 + 202, 20);
  fill("black");
  ellipse(xPig2 + 232, yPig2 + 202, 7);
  ellipse(xPig2 + 171, yPig2 + 202, 7);
  push();
  fill(44, 209, 71);
  ellipse(xPig2 + 170, yPig2 + 165, 18, 15);
  ellipse(xPig2 + 225, yPig2 + 165, 18, 15);
  fill(46, 94, 43);

  ellipse(xPig2 + 170, yPig2 + 165, 8, 7);
  ellipse(xPig2 + 225, yPig2 + 165, 8, 7);
  pop();
  fill("black");
}

function keyPressed() {
  if (keyIsDown(UP_ARROW) && player == 1) {
    yBird2 = yBird2 - 70;
    yBirdCheck = yBirdCheck - 70;
  }
  if (keyIsDown(DOWN_ARROW) && player == 1) {
    yBird2 = yBird2 + 70;
    yBirdCheck = yBirdCheck + 70;
  } 
  
    if (keyIsDown(UP_ARROW) && player == 2) {
  yBird3 = yBird3 - 70;
    yBirdCheck = yBirdCheck - 70;
  }
  if (keyIsDown(DOWN_ARROW)&& player == 2) {
    yBird3 = yBird3 + 70;
    yBirdCheck = yBirdCheck + 70;
  }
      if (keyIsDown(UP_ARROW) && player == 3) {
  yBird5 = yBird5 - 70;
    yBirdCheck = yBirdCheck - 70;
  }
  if (keyIsDown(DOWN_ARROW)&& player == 3) {
    yBird5 = yBird5 + 70;
    yBirdCheck = yBirdCheck + 70;
  }
}

function mouseClicked() {
  if (
    mouseX >= 110 &&
    mouseX <= 290 &&
    mouseY >= 170 &&
    mouseY <= 230 &&
    screen == "menu"
  ) {
    screen = "gameScreen";
  } else if (
    mouseX >= 110 &&
    mouseX <= 110 + 180 &&
    mouseY >= 240 &&
    mouseY <= 240 + 60 &&
    screen == "menu"
  ) {
    screen = "help";
  } else if (
    mouseX >= 200 &&
    mouseX <= 200 + 180 &&
    mouseY >= 180 &&
    mouseY <= 325 + 60 &&
    screen == "help"
  ) {
    screen = "menu";
  } else if (
    mouseX >= 200 &&
    mouseX <= 200 + 180 &&
    mouseY >= 180 &&
    mouseY <= 325 + 60 &&
    screen == "gameOver"
  ) {
    screen = "menu";
  }
  else if (
    mouseX >= 110 &&
    mouseX <= 110 + 180 &&
    mouseY >= 310 &&
    mouseY <= 310 + 60 &&
    screen == "menu"
  ) {
    screen = "player";
  }
  
  else if (
    mouseX >= 200 &&
    mouseX <= 200 + 180 &&
    mouseY >= 325 &&
    mouseY <= 310 + 60 &&
    screen == "player"
  ) {
    screen = "menu";
  }

  

  if (
    mouseX >= 20 &&
    mouseX <= 20 + 100 &&
    mouseY >= 10 &&
    mouseY <= 10 + 30 &&
    screen == "menu"
  ) {
    btnOn = !btnOn;
  }
  if (btnOn == true) {
    c = color(0, 255, 0);
  } else {
    c = color(255, 0, 0);
  }
}
