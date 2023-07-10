/*
Name: Sarthak, Arul
Submitted To: Ms. Manoil
Course Code: ICS3U1
Date: June 14th, 2023
Description: Animation that teaches while loops
*/

//USE THIS TO CHANGE SCREENS
//SCREENS: intro, dream, room, outsideHome, lake, constructionArea,credits
let screen = "intro";

//all the variables declared that are used in the animation
let myFont; // for the 8 bit font

//these are used on the credits
let transitionSpeed4 = 2;
let transitionDistance = 400;
let transitionProgress = 0;

//orginal circle size that changes over time for the fading in and out effect
let circleSize = 0;
let circleSize2 = 900;
let circleSize3 = 0;
let circleSize4 = 900;
let circleSize5 = 0;
let circleSize6 = 900;
let circleSize7 = 0;
let circleSize8 = 900;
let circleSize9 = 0;

//these are the target sizes for the fading in and out circles
let targetSize = 900;
let targetSize2 = 0;
let targetSize3 = 900;
let targetSize4 = 0;
let targetSize5 = 900;
let targetSize6 = 0;
let targetSize7 = 900;
let targetSize8 = 0;
let targetSize9 = 900;

//the trasntion speeds used for the fading in and out circles
let transtionSpeed = 0.02;
let transtionSpeed2 = 0.05;
let transtionSpeed3 = 0.05;

let c; //this is the color changing variable for the sound button
let c2; //color changing for the moving box

let menuMusic; //delcaring variable for menu music
let btnOn = false; //button checker for the sound button

//all the timers used in the animation, many of it is for dialouge and condtion checking
let timer = 0;
let timer2 = 0;
let timer3 = 0;
let timer4 = 0;
let timer5 = 0;
let timer6 = 0;
let timer7 = 0;
let timer8 = 0;
let timer9 = 0;
let timer10 = 0;
let timer11 = 0;
let timer12 = 0;
let timer13 = 0;
let timer14 = 0;
let timer15 = 0;
let timer16 = 0;
let timer17 = 0;
let timer18 = 0;
let timer19 = 0;
let timer20 = 0;
let timer21 = 0;
let timer22 = 0;
let timer23 = 0;
let timer24 = 0;

//variables for the floor pattern in the bedroom
let floorX = -1;
let floorY = 47;
let dotX = 7;
let dotY = 47;

//random variables used for decor and such
let h1 = 100;
let w1 = 100;
let x1 = 80;
let y1 = 450;
let x2 = 295;
let y2 = 75;
let x3 = 145;
let x4 = 445;
let x5 = -5;
let x6 = 595;

//placement variable used for the spirte
runX = 0;
runY = 0;
runX2 = 91.5;
runY2 = -10;
runX3 = 470;
runY3 = 420;
runX4 = 345;
runY4 = 50;
runX5 = 160;
runY5 = 430;
runX6 = 290;
runY6 = 60;
runX7 = -10;
runY7 = 500;

//checks which postion the player is last at
let playerPos = "forward";

//all the variables used for dialouge
let textString1 =
  "Where   Am   I...  Is   this   a   dream?   \nAm   I   dead?   Wheres   my   gaming   \ncomputer?";
let textString2 = "WOAH   W-WHAT IS THAT?";
let textString3 = "AHHHHHHHHHHHHHHHHHHHHHHHHH!";
let textString4 =
  "AHHHHHHH-...   Wait   so   it   was   a   \ndream   all   along...   What   a   dream.     ";
let textString5 =
  "Wait   what   time   is   it?   OH   NO   IM   \nLATE   FOR   WORK...   I   must   have   \noverslept.";
let textString6 = "Hey,   Mike!   You're   late   for   work   \nagain!";
let textString7 = "I   know   I   overslept   again.                        ";
let textString8 = "This   is   the   third   time   this   \nweek,   Mike!";
let textString9 = "Don't   worry   I'll   make   it   up.                   ";
let textString10 =
  "Alright,   but   you   better   hurry.   \nDon't   let   it   happen   again!";
let textString11 =
  "Finally,   I   reached   the   \nconstruction   area...   Time   to   \nfinish   building   these   houses.";
let textString12 =
  "But   how   do   I   build   these   \nhouses?   Let's   talk   about   an   \nefficent   way   to   build   houses   \nusing   repetition.";
let textString13 =
  "Have   you   ever   heard   of   while   \nloops?   They   are   incredibly   \nhandy   for   situations   like   these.";
let textString14 =
  "With   while   loops,   we   can   save   \ntime   and   effort   by   automating   \nrepetitive   tasks.";
let textString15 = "Let   me   show   you   how   it   works.";
let textString16 =
  "//initialization\nlet houseY = 150;\n//condtion\nwhile (houseY <= 550 ){\n      drawHouse(420,houseY);\n       //change\n       houseY+=200;\n}";
let textString17 =
  "The   while   loop   checks   the   \ncondition   (houseY <= 550)   before   \nexecuting   the   code   inside   \nthe   loop.";
let textString18 =
  "As   long   as   the   condition   is   true,   \nthe   loop   will   continue   to   build   \nhouses   using   the   function\ndrawHouse().";
let textString19 =
  "The   loop   continues   until   the   \ncondition     evaluates   to   false.";
let textString20 =
  "Using   while   loops   allows   us   \nto   accomplish   repetitive   tasks   \nefficiently.";
let textString21 =
  "By   automating   the   construction   \nprocess,   we   can   build   houses   \nfaster,   ultimately   increasing   \nproductivity   on   the   job   site.";
let textString22 =
  "Well   that's   it   folks...   and   \nremember   to   keep  building-oh   \nno   not   again.............";

//this makes it so that it knows what the current text is for the dialouge
let currentText = "";
let currentText2 = "";
let currentText3 = "";
let currentText4 = "";
let currentText5 = "";
let currentText6 = "";
let currentText7 = "";
let currentText8 = "";
let currentText9 = "";
let currentText10 = "";
let currentText11 = "";
let currentText12 = "";
let currentText13 = "";
let currentText14 = "";
let currentText15 = "";
let currentText16 = "";
let currentText17 = "";
let currentText18 = "";
let currentText19 = "";
let currentText20 = "";
let currentText21 = "";

//variable used for the y coordinate of the text
let textStringInt1 = 370;
let textStringInt2 = 370;
let textStringInt3 = 370;
let textStringInt4 = 370;
let textStringInt5 = 370;
let textStringInt6 = 370;
let textStringInt7 = 370;
let textStringInt8 = 370;
let textStringInt9 = 370;
let textStringInt10 = 370;
let textStringInt11 = 370;
let textStringInt12 = 370;
let textStringInt13 = 370;
let textStringInt14 = 370;
let textStringInt15 = 370;
let textStringInt16 = 370;
let textStringInt17 = 370;
let textStringInt18 = 370;
let textStringInt19 = 370;
let textStringInt20 = 370;
let textStringInt21 = 370;
let textStringInt22 = 370;

//textbox y coordiantes for the text box
let textBox1 = 320;
let textBox2 = 320;
let textBox3 = 320;
let textBox4 = 320;
let textBox5 = 320;
let textBox6 = 320;
let textBox7 = 320;

//this checks if the player reached a certain y coordinate in the brdige scene
let dialougeShown = false;
let dialougeShow = false;

//all the arrays used in the animation
const arrayPlots = [100, 300, 500];
const arrayHouse1 = [50, 340, 230, 450];
const arrayHouse2 = [150, 350, 550];
let textLines = [
  "Mikes Loopy Adventure\nCreated By:",
  "\nSarthak",
  "\nand",
  "\nArul",
];

function preload() {
  //loads all the files imported
  titleFont = loadFont("PixelatedPusab.ttf");
  myFont = loadFont("pixelated_princess.ttf");
  menuMusic = loadSound("menuMusic.mp3");
  bedroomMusic = loadSound("cityMusic.mp3");
}

//setups up all the files and box colors
function setup() {
  createCanvas(600, 600);
  c = color("red");
  c2 = color("black");
  menuMusic.loop();
  menuMusic.pause();
  menuMusic.setVolume(0.7);
  bedroomMusic.loop();
  bedroomMusic.pause();
  bedroomMusic.setVolume(0.7);
}

function draw() {
  //intro screen
  if (screen == "intro") {
    //draws the title and backgroudn color for the intro screen
    background("#0047ab");
    textFont(titleFont);
    textSize(70);
    fill(0);
    strokeWeight(0);
    push();
    textAlign(CENTER, CENTER);
    text(" Mike's  Loopy \nAdventure", 300, 238);
    pop();

    //play button for the intro screen and nice roll feature
    fill("#AEAEAE");
    if (mouseX >= 187 && mouseX <= 417 && mouseY >= 400 && mouseY <= 470) {
      fill("#6A6868"); // click color
    }
    textSize(70);
    stroke(0);
    strokeWeight(2);
    rect(187, 400, 230, 70);
    fill(0);
    noStroke();
    text("Play", 210, 455);

    //the sound button with a nice roll feature
    fill(c);
    if (
      mouseX >= 25 &&
      mouseX <= 205 &&
      mouseY >= 20 &&
      mouseY <= 70 &&
      btnOn == false
    ) {
      fill(139, 0, 0);
    }
    if (
      mouseX >= 25 &&
      mouseX <= 205 &&
      mouseY >= 20 &&
      mouseY <= 70 &&
      btnOn == true
    ) {
      fill(0, 139, 0);
    }
    rect(25, 20, 180, 50, 15);
    fill("white");
    textSize(50);
    text("Sound", 34, 58);

    //checks if the sound button is clicked
    if (btnOn == true && screen == "intro") {
      if (!menuMusic.isPlaying()) {
        menuMusic.play();
      }
    }
    if (btnOn == false) {
      menuMusic.pause();
    }

    //draws the running spirte at the bottom
    push();
    scale(0.8);
    timer8++;
    runX3 -= 25;
    if (timer8 >= 1) {
      if (timer8 == 1) {
        runLeft1(runX3, runY3);
      }
      if (timer8 == 2) {
        runLeft2(runX3, runY3);
      }
      if (timer8 == 3) {
        runLeft3(runX3, runY3);
      }
      if (timer8 == 4) {
        runLeft4(runX3, runY3);
        timer8 = 0;
      }
      push();
      frameRate(8);
      pop();
    }
    if (runX3 < -300) {
      runX3 = 600;
    }
    pop();
  }

  //the fading in circle for the intro screen
  if (screen == "fadingIntro") {
    frameRate(60);
    menuMusic.stop();
    timer2++;

    //fading in intro and moves it to the dream screen
    noStroke();
    circleSize = lerp(circleSize, targetSize, transtionSpeed);
    fill(0);
    ellipse(300, 300, circleSize);
    timer++;
    if (timer >= 220) {
      screen = "dream";
    }
  }

  //bedroom scene where the animation starts off, the circle fades out
  if (screen == "dream") {
    //checks to see if the sound button is on
    if (btnOn == true && screen == "dream") {
      if (!bedroomMusic.isPlaying()) {
        bedroomMusic.play();
        menuMusic.pause();
      }
    }
    if (btnOn == false) {
      bedroomMusic.pause();
    }

    //used to border control the sprite
    if (runX2 <= -180 && screen == "dream") {
      runX2 = -180;
    }
    if (runX2 >= 342 && screen == "dream") {
      runX2 = 338;
    }
    if (runY2 <= -160 && screen == "dream") {
      runY2 = -165;
    }
    if (runY2 >= 280 && screen == "dream") {
      runY2 = 275;
    }
    timer12++;
    frameRate(60);
    timer10++;
    background(255, 255, 255);
    //code here for the dream
    frameRate(60);

    //Sprite
    push();
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
    pop();
    fill(0);
    push();
    stroke(112, 48, 20);
    strokeWeight(8);

    //draws the text box and makes the letter spawn one by one
    if (timer10 > 140) {
      rect(75, textBox1, 450, 200);
      if (currentText.length < textString1.length) {
        if (frameCount > 5) {
          currentText = textString1.substring(
            0,
            min(textString1.length, floor((timer12 - 170) / 5))
          );
        }
      } else {
        currentText = textString1;
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText, 100, textStringInt1);
    }
    pop();

    if (timer10 >= 720) {
      textStringInt1 = 900;
      textBox1 = 900;
      textSize(40);
      fill(0);
      text("Use the arrow keys \nto move Mike around", x1, y1);
      timer11++;
    }

    if (timer11 >= 160) {
      y1 = 700;
    }

    //draws black box
    if (timer11 >= 220) {
      push();
      fill(c2);
      rectMode(CENTER);
      rect(x2, y2, h1, w1);
      pop();
    }
    if (timer11 >= 280) {
      textBox1 = 320;
      if (currentText2.length < textString2.length) {
        if (frameCount > 5) {
          currentText2 = textString2.substring(
            0,
            min(textString2.length, floor((timer12 - 1000) / 5))
          );
        }
      } else {
        currentText2 = textString2;
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText2, 100, textStringInt2);
    }

    //makes the scary red box
    if (timer11 >= 500) {
      textBox1 = 900;
      textStringInt2 = 900;
      push();
      frameRate(60);
      c2 = color("maroon");
      h1 = random(50, 100);
      w1 = random(50, 100);
      pop();
    }
    //this makes a bunch of scary boxes spawn
    if (timer11 >= 640) {
      for (y3 = 75; y3 <= 600; y3 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill(c2);
        rect(x3, y3, h1, w1);
        pop();
      }
      for (y4 = 75; y4 <= 600; y4 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill(c2);
        rect(x4, y4, h1, w1);
        pop();
      }
    }
    if (timer11 >= 860) {
      for (y5 = 75; y5 <= 600; y5 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill(c2);
        rect(x5, y5, h1, w1);
        pop();
      }
      for (y6 = 75; y6 <= 600; y6 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill(c2);
        rect(x6, y6, h1, w1);
        pop();
      }
    }

    //more dialouge
    if (timer11 >= 980) {
      fill(0);
      push();
      stroke(112, 48, 20);
      strokeWeight(8);
      rect(75, textBox2, 450, 200);
      if (currentText2.length < textString3.length) {
        if (frameCount > 5) {
          currentText2 = textString3.substring(
            0,
            min(textString3.length, floor((timer12 - 1700) / 5))
          );
        }
      } else {
        currentText2 = textString3;
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText2, 100, textStringInt3);
    }
    if (timer11 >= 1230 && screen == "dream") {
      screen = "room";
    }

    timer3++;

    //fading in the dream sequence
    noStroke();
    circleSize2 = lerp(circleSize2, targetSize2, transtionSpeed2);
    fill(0);
    ellipse(300, 300, circleSize2);
    push();
    scale(0.9);
  }

  //bedroom scene
  if (screen == "room") {
    //draws the background for the bedroom
    push();
    scale(1);
    fill(200, 192, 88);
    rect(-1, -1, 602, 602);
    drawFloor();
    drawCarpet();
    drawDeco();
    pop();
    timer11 = 0;

    //room code here
    //border control
    if (runY4 <= -20) {
      runY4 = -15;
    }
    if (runY4 >= 380) {
      runY4 = 375;
    }
    if (runX4 >= 445) {
      runX4 = 445;
    }
    if (runX4 <= -195) {
      runX4 = -190;
    }

    //draws the spirte
    frameRate(60);
    push();
    scale(0.85);
    if (
      keyIsDown(DOWN_ARROW) &&
      !keyIsDown(UP_ARROW) &&
      !keyIsDown(LEFT_ARROW) &&
      !keyIsDown(RIGHT_ARROW)
    ) {
      playerPos = "forward";
      runY4 += 15;
      timer4++;
      if (timer4 >= 1) {
        if (timer4 == 1) {
          runDown1(runX4, runY4);
        }
        if (timer4 == 2) {
          runDown2(runX4, runY4);
        }
        if (timer4 == 3) {
          runDown3(runX4, runY4);
        }
        if (timer4 == 4) {
          runDown4(runX4, runY4);
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
      runY4 -= 15;
      timer5++;
      if (timer5 >= 1) {
        if (timer5 == 1) {
          runUp1(runX4, runY4);
        }
        if (timer5 == 2) {
          runUp2(runX4, runY4);
        }
        if (timer5 == 3) {
          runUp3(runX4, runY4);
        }
        if (timer5 == 4) {
          runUp4(runX4, runY4);
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
      runX4 -= 15;
      timer6++;
      if (timer6 >= 1) {
        if (timer6 == 1) {
          runLeft1(runX4, runY4);
        }
        if (timer6 == 2) {
          runLeft2(runX4, runY4);
        }
        if (timer6 == 3) {
          runLeft3(runX4, runY4);
        }
        if (timer6 == 4) {
          runLeft4(runX4, runY4);
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
      runX4 += 15;
      timer7++;
      if (timer7 >= 1) {
        if (timer7 == 1) {
          runRight1(runX4, runY4);
        }
        if (timer7 == 2) {
          runRight2(runX4, runY4);
        }
        if (timer7 == 3) {
          runRight3(runX4, runY4);
        }
        if (timer7 == 4) {
          runRight4(runX4, runY4);
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
        runDown2(runX4, runY4);
      }
      if (playerPos == "notForward") {
        runUp2(runX4, runY4);
      }
      if (playerPos == "playerLeft") {
        runLeft2(runX4, runY4);
      }
      if (playerPos == "playerRight") {
        runRight2(runX4, runY4);
      }
    }
    pop();

    timer13++;
    //dialouge
    if (timer13 >= 30) {
      fill(0);
      push();
      stroke(112, 48, 20);
      strokeWeight(8);
      rect(75, textBox3, 450, 200);
      if (currentText6.length < textString4.length) {
        if (frameCount > 5) {
          currentText6 = textString4.substring(
            0,
            min(textString4.length, floor((timer13 - 60) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText6, 100, textStringInt4);
    }
    if (timer13 >= 500) {
      textStringInt4 = 900;
      textBox3 = 900;
    }
    //more dialouge
    if (timer13 >= 740) {
      textBox3 = 320;
      if (currentText.length < textString5.length) {
        if (frameCount > 5) {
          currentText = textString5.substring(
            0,
            min(textString5.length, floor((timer13 - 800) / 5))
          );
        }
      } else {
        currentText = textString5;
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText, 100, textStringInt5);
    }
    if (timer13 >= 1350) {
      textBox3 = 900;
      textStringInt5 = 900;
    }

    //instructions for bedroom
    if (timer13 >= 1490) {
      push();
      fill(0);
      textSize(40);
      textFont(titleFont);
      text("Move Mike To The Door", 60, 563);
      pop();
    }

    //condtion checks if mikes at the door
    if (timer13 >= 1500 && runY4 <= -15) {
      frameRate(60);
      menuMusic.stop();
      timer14++;

      //fading out and moves to the outside home screen
      noStroke();
      circleSize3 = lerp(circleSize3, targetSize3, transtionSpeed3);
      fill(0);
      ellipse(300, 300, circleSize3);
      timer15++;
      if (timer15 >= 220) {
        screen = "outsideHome";
      }
    }
  }

  //outside the home scene
  if (screen == "outsideHome") {
    timer13 = 0;
    timer14 = 0;
    timer15 = 0;
    timer16++;

    //background grass color
    background(83, 160, 83);

    //border control
    if (runX7 <= -85) {
      runX7 = -85;
    }
    if (runX7 >= 1130) {
      runX7 = 1130;
    }
    if (runY7 >= 1055) {
      runY7 = 1055;
    }
    if (runY7 <= 140 && runX7 >= -85 && runX7 <= 400) {
      runY7 = 140;
    }
    if (runY7 <= 140 && runX7 <= 1055 && runX7 >= 650) {
      runY7 = 140;
    }

    //draws the bridge on the top
    push();
    scale(0.35);
    bridge(565, -285);
    pop();

    //draws the bushes and houses
    drawBush();
    drawHouse(arrayHouse1[0], arrayHouse1[2]);
    drawHouse(arrayHouse1[1], arrayHouse1[2]);
    drawHouse(arrayHouse1[0], arrayHouse1[3]);
    drawHouse(arrayHouse1[1], arrayHouse1[3]);

    //draws the sprite
    frameRate(60);
    push();
    scale(0.4);
    if (
      keyIsDown(DOWN_ARROW) &&
      !keyIsDown(UP_ARROW) &&
      !keyIsDown(LEFT_ARROW) &&
      !keyIsDown(RIGHT_ARROW)
    ) {
      playerPos = "forward";
      runY7 += 15;
      timer4++;
      if (timer4 >= 1) {
        if (timer4 == 1) {
          runDown1(runX7, runY7);
        }
        if (timer4 == 2) {
          runDown2(runX7, runY7);
        }
        if (timer4 == 3) {
          runDown3(runX7, runY7);
        }
        if (timer4 == 4) {
          runDown4(runX7, runY7);
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
      runY7 -= 15;
      timer5++;
      if (timer5 >= 1) {
        if (timer5 == 1) {
          runUp1(runX7, runY7);
        }
        if (timer5 == 2) {
          runUp2(runX7, runY7);
        }
        if (timer5 == 3) {
          runUp3(runX7, runY7);
        }
        if (timer5 == 4) {
          runUp4(runX7, runY7);
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
      runX7 -= 15;
      timer6++;
      if (timer6 >= 1) {
        if (timer6 == 1) {
          runLeft1(runX7, runY7);
        }
        if (timer6 == 2) {
          runLeft2(runX7, runY7);
        }
        if (timer6 == 3) {
          runLeft3(runX7, runY7);
        }
        if (timer6 == 4) {
          runLeft4(runX7, runY7);
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
      runX7 += 15;
      timer7++;
      if (timer7 >= 1) {
        if (timer7 == 1) {
          runRight1(runX7, runY7);
        }
        if (timer7 == 2) {
          runRight2(runX7, runY7);
        }
        if (timer7 == 3) {
          runRight3(runX7, runY7);
        }
        if (timer7 == 4) {
          runRight4(runX7, runY7);
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
        runDown2(runX7, runY7);
      }
      if (playerPos == "notForward") {
        runUp2(runX7, runY7);
      }
      if (playerPos == "playerLeft") {
        runLeft2(runX7, runY7);
      }
      if (playerPos == "playerRight") {
        runRight2(runX7, runY7);
      }
    }
    pop();

    //fadin in intro for the bridge screen
    noStroke();
    circleSize4 = lerp(circleSize4, targetSize4, transtionSpeed3);
    fill(0);
    ellipse(300, 300, circleSize4);

    if (runY7 < 60 && runX7 >= 420 && runX7 <= 640) {
      timer22++;

      timer23++;
      if (timer23 >= 220) {
        screen = "lake";
      }
      noStroke();
      circleSize9 = lerp(circleSize9, targetSize9, transtionSpeed3);
      fill(0);
      ellipse(300, 300, circleSize9);
    }
  }

  //bridge scene
  if (screen == "lake") {
    //border control on the bridge
    if (runY5 >= 430) {
      runY5 = 430;
    }
    if (runY5 <= -170) {
      runY5 = -170;
    }
    if (runX5 >= 255) {
      runX5 = 255;
    }
    if (runX5 <= 25) {
      runX5 = 25;
    }

    //draws the background and bridge
    background(67, 143, 224);
    bridge(0, 0);

    //draws the Mike sprite
    frameRate(60);
    push();
    scale(0.8);
    if (
      keyIsDown(DOWN_ARROW) &&
      !keyIsDown(UP_ARROW) &&
      !keyIsDown(LEFT_ARROW) &&
      !keyIsDown(RIGHT_ARROW)
    ) {
      playerPos = "forward";
      runY5 += 15;
      timer4++;
      if (timer4 >= 1) {
        if (timer4 == 1) {
          runDown1(runX5, runY5);
        }
        if (timer4 == 2) {
          runDown2(runX5, runY5);
        }
        if (timer4 == 3) {
          runDown3(runX5, runY5);
        }
        if (timer4 == 4) {
          runDown4(runX5, runY5);
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
      runY5 -= 15;
      timer5++;
      if (timer5 >= 1) {
        if (timer5 == 1) {
          runUp1(runX5, runY5);
        }
        if (timer5 == 2) {
          runUp2(runX5, runY5);
        }
        if (timer5 == 3) {
          runUp3(runX5, runY5);
        }
        if (timer5 == 4) {
          runUp4(runX5, runY5);
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
      runX5 -= 15;
      timer6++;
      if (timer6 >= 1) {
        if (timer6 == 1) {
          runLeft1(runX5, runY5);
        }
        if (timer6 == 2) {
          runLeft2(runX5, runY5);
        }
        if (timer6 == 3) {
          runLeft3(runX5, runY5);
        }
        if (timer6 == 4) {
          runLeft4(runX5, runY5);
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
      runX5 += 15;
      timer7++;
      if (timer7 >= 1) {
        if (timer7 == 1) {
          runRight1(runX5, runY5);
        }
        if (timer7 == 2) {
          runRight2(runX5, runY5);
        }
        if (timer7 == 3) {
          runRight3(runX5, runY5);
        }
        if (timer7 == 4) {
          runRight4(runX5, runY5);
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
        runDown2(runX5, runY5);
      }
      if (playerPos == "notForward") {
        runUp2(runX5, runY5);
      }
      if (playerPos == "playerLeft") {
        runLeft2(runX5, runY5);
      }
      if (playerPos == "playerRight") {
        runRight2(runX5, runY5);
      }
    }
    pop();

    //draws mikes coworker
    push();
    scale(0.75);
    noStroke();
    fill(74, 54, 31);
    rect(runX6 + 223, runY6 + 312, 30, 11);
    fill("#DABB89");
    rect(runX6 + 200, runY6 + 200, 40, 40);
    rect(runX6 + 210, runY6 + 210, 40, 40);
    rect(runX6 + 235, runY6 + 248, 15, 10);
    fill("#30220B");
    square(runX6 + 210, runY6 + 215, 10);
    fill("#9E8F2C");
    rect(runX6 + 235, runY6 + 200, 25, 20);
    rect(runX6 + 250, runY6 + 220, 10, 25);
    square(runX6 + 250, runY6 + 245, 5);
    fill(209, 209, 29);
    rect(runX6 + 207, runY6 + 180, 44, 20);
    rect(runX6 + 213, runY6 + 173, 33, 7);
    fill(201, 201, 137);
    rect(runX6 + 220, runY6 + 173, 6, 27);
    fill(252, 111, 3);
    rect(runX6 + 224, runY6 + 258, 35);
    fill("yellow");
    rect(runX6 + 228, runY6 + 258, 3, 35);
    rect(runX6 + 252, runY6 + 258, 3, 35);
    fill(48, 57, 110);
    rect(runX6 + 224, runY6 + 293, 35, 20);
    fill("#DABB89");
    square(runX6 + 235.1, runY6 + 276, 13);
    fill("white");
    rect(runX6 + 235, runY6 + 268, 13, 8);
    pop();

    //checks if mike is at the top of the bridge and fades out of the lake screen
    if (runY5 <= -170 && timer18 > 1720) {
      frameRate(60);
      menuMusic.stop();
      timer19++;

      noStroke();
      circleSize7 = lerp(circleSize7, targetSize7, transtionSpeed3);
      fill(0);
      ellipse(300, 300, circleSize7);
      timer20++;

      //uses timer to determine if the screen is fully black
      if (timer20 >= 220) {
        screen = "constructionArea";
      }
    }

    //checks if mike reached and certain y coordinate and dialouge starts
    if (!dialougeShown && runY5 <= 55) {
      dialougeShow = true;
    }

    //tells the dialouge after condtion of the y coordinate is reached
    if (dialougeShow) {
      timer18++;
      stroke(112, 48, 20);
      strokeWeight(8);
      rect(75, textBox4, 450, 200);
      if (currentText7.length < textString6.length) {
        if (frameCount > 5) {
          currentText7 = textString6.substring(
            0,
            min(textString6.length, floor((timer18 - 30) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText7, 100, textStringInt6);

      if (timer18 > 330) {
        textStringInt6 = 900;
        fill(0);
        stroke(112, 48, 20);
        strokeWeight(8);
        rect(75, textBox4, 450, 200);
        if (currentText8.length < textString7.length) {
          if (frameCount > 5) {
            currentText8 = textString7.substring(
              0,
              min(textString7.length, floor((timer18 - 360) / 5))
            );
          }
        }
        textFont(myFont);
        noStroke();
        fill("white");
        textSize(30);
        text(currentText8, 100, textStringInt7);
      }

      if (timer18 > 580) {
        textStringInt7 = 900;
        fill(125, 117, 80);
        stroke(112, 48, 20);
        strokeWeight(8);
        rect(75, textBox4, 450, 200);
        if (currentText3.length < textString8.length) {
          if (frameCount > 5) {
            currentText3 = textString8.substring(
              0,
              min(textString8.length, floor((timer18 - 630) / 5))
            );
          }
        }
        textFont(myFont);
        noStroke();
        fill("white");
        textSize(30);
        text(currentText3, 100, textStringInt8);
      }
      if (timer18 > 960) {
        textStringInt8 = 900;
        fill(0);
        stroke(112, 48, 20);
        strokeWeight(8);
        rect(75, textBox4, 450, 200);

        if (currentText4.length < textString9.length) {
          if (frameCount > 5) {
            currentText4 = textString9.substring(
              0,
              min(textString9.length, floor((timer18 - 1000) / 5))
            );
          }
        }
        textFont(myFont);
        noStroke();
        fill("white");
        textSize(30);
        text(currentText4, 100, textStringInt9);
      }
      if (timer18 > 1250) {
        textStringInt9 = 900;
        fill(125, 117, 80);
        stroke(112, 48, 20);
        strokeWeight(8);
        rect(75, textBox4, 450, 200);
        if (currentText5.length < textString10.length) {
          if (frameCount > 5) {
            currentText5 = textString10.substring(
              0,
              min(textString10.length, floor((timer18 - 1290) / 5))
            );
          }
        }
        textFont(myFont);
        noStroke();
        fill("white");
        textSize(30);
        text(currentText5, 100, textStringInt10);
      }
      if (timer18 > 1720) {
        textBox4 = 900;
        textStringInt10 = 900;
      }
    }

    timer17++;

    //fading in for the bridge screen
    noStroke();
    circleSize6 = lerp(circleSize6, targetSize6, transtionSpeed3);
    fill(0);
    ellipse(300, 300, circleSize6);
  }

  //construction area scene
  if (screen == "constructionArea") {
    timer24++;

    //draws the fence and bridge at the top
    background(83, 160, 83);
    drawFence();
    push();
    scale(0.35);
    bridge(565, -550);
    pop();

    //draws the plots and houses using loops
    push();
    scale(0.9);
    for (i = 0; i <= 2; i++) {
      drawHouse(40, arrayHouse2[i]);
    }

    for (i = 0; i <= 2; i++) drawPlots(420, arrayPlots[i]);
    pop();

    //draws the stationary sprite
    push();
    scale(0.55);
    runDown2(350, -100);
    pop();

    //tells dialouge
    if (timer24 > 90) {
      fill(0);
      stroke(112, 48, 20);
      strokeWeight(8);
      rect(75, textBox5, 450, 200);
      if (currentText9.length < textString11.length) {
        if (frameCount > 5) {
          currentText9 = textString11.substring(
            0,
            min(textString11.length, floor((timer24 - 120) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText9, 100, textStringInt11);
    }

    if (timer24 > 700) {
      textStringInt11 = 900;
      if (currentText10.length < textString12.length) {
        if (frameCount > 5) {
          currentText10 = textString12.substring(
            0,
            min(textString12.length, floor((timer24 - 730) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText10, 100, textStringInt12);
    }

    if (timer24 > 1500) {
      textStringInt12 = 900;
      if (currentText11.length < textString13.length) {
        if (frameCount > 5) {
          currentText11 = textString13.substring(
            0,
            min(textString13.length, floor((timer24 - 1530) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText11, 100, textStringInt13);
    }

    if (timer24 > 2300) {
      textStringInt13 = 900;
      if (currentText12.length < textString14.length) {
        if (frameCount > 5) {
          currentText12 = textString14.substring(
            0,
            min(textString14.length, floor((timer24 - 2330) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText12, 100, textStringInt14);
    }

    if (timer24 > 2900) {
      textStringInt14 = 900;
      if (currentText13.length < textString15.length) {
        if (frameCount > 5) {
          currentText13 = textString15.substring(
            0,
            min(textString15.length, floor((timer24 - 2930) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText13, 100, textStringInt15);
    }

    if (timer24 > 3250) {
      textStringInt15 = 900;
      textBox5 = 900;
      push();
      fill("white");
      rect(32, 54, 210, 335);
      pop();

      if (currentText14.length < textString16.length) {
        if (frameCount > 5) {
          currentText14 = textString16.substring(
            0,
            min(textString16.length, floor((timer24 - 3280) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill(0);
      textSize(18);
      text(currentText14, 37, textStringInt16 - 240);
    }

    //if the dialouge is over then it builds the houses one by one
    if (timer24 > 3950) {
      push();
      scale(0.9);
      drawHouse(420, 150);
      pop();
    }

    if (timer24 > 4010) {
      push();
      scale(0.9);
      drawHouse(420, 350);
      pop();
    }

    if (timer24 > 4070) {
      push();
      scale(0.9);
      drawHouse(420, 550);
      pop();
    }

    //more dialouge
    if (timer24 > 4130) {
      fill(0);
      stroke(112, 48, 20);
      strokeWeight(8);
      rect(75, textBox6, 450, 200);
      if (currentText16.length < textString17.length) {
        if (frameCount > 5) {
          currentText16 = textString17.substring(
            0,
            min(textString17.length, floor((timer24 - 4160) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText16, 100, textStringInt17);
    }

    if (timer24 > 4800) {
      textStringInt17 = 900;
      if (currentText17.length < textString18.length) {
        if (frameCount > 5) {
          currentText17 = textString18.substring(
            0,
            min(textString18.length, floor((timer24 - 4830) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText17, 100, textStringInt18);
    }

    if (timer24 > 5600) {
      textStringInt18 = 900;
      if (currentText18.length < textString19.length) {
        if (frameCount > 5) {
          currentText18 = textString19.substring(
            0,
            min(textString19.length, floor((timer24 - 5630) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText18, 100, textStringInt19);
    }

    if (timer24 > 6050) {
      textStringInt19 = 900;
      if (currentText19.length < textString20.length) {
        if (frameCount > 5) {
          currentText19 = textString20.substring(
            0,
            min(textString20.length, floor((timer24 - 6080) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText19, 100, textStringInt20);
    }

    if (timer24 > 6700) {
      textStringInt20 = 900;
      if (currentText20.length < textString21.length) {
        if (frameCount > 5) {
          currentText20 = textString21.substring(
            0,
            min(textString21.length, floor((timer24 - 6730) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText20, 100, textStringInt21);
    }

    if (timer24 > 7700) {
      textStringInt21 = 900;
      if (currentText21.length < textString22.length) {
        if (frameCount > 5) {
          currentText21 = textString22.substring(
            0,
            min(textString22.length, floor((timer24 - 7730) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText21, 100, textStringInt22);
    }

    //after some time, it draws the scary boxes and everything else is undernath
    if (timer24 > 8050) {
      fill(83, 160, 83);
      rect(0, 0, 600, 600);
      drawFence();
      push();
      scale(0.35);
      bridge(565, -550);
      pop();
      push();
      scale(0.55);
      runDown2(350, -100);
      pop();
      h1 = random(50, 100);
      w1 = random(50, 100);
      for (y3 = 75; y3 <= 600; y3 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill("maroon");
        rect(x3, y3, h1, w1);
        pop();
      }
      for (y4 = 75; y4 <= 600; y4 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill("maroon");
        rect(x4, y4, h1, w1);
        pop();
      }

      for (y5 = 75; y5 <= 600; y5 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill("maroon");
        rect(x5, y5, h1, w1);
        pop();
      }
      for (y6 = 75; y6 <= 600; y6 += 115) {
        push();
        frameRate(60);
        rectMode(CENTER);
        fill("maroon");
        rect(x6, y6, h1, w1);
        pop();
      }
      fill(0);
      stroke(112, 48, 20);
      strokeWeight(8);
      rect(75, textBox7, 450, 200);
      if (currentText21.length < textString22.length) {
        if (frameCount > 5) {
          currentText21 = textString22.substring(
            0,
            min(textString22.length, floor((timer24 - 7730) / 5))
          );
        }
      }
      textFont(myFont);
      noStroke();
      fill("white");
      textSize(30);
      text(currentText21, 100, textStringInt22);
    }

    //fading out screen for the constrction area screen and plays the credits
    if (timer24 > 8320) {
      noStroke();
      circleSize9 = lerp(circleSize9, targetSize9, transtionSpeed);
      fill(0);
      ellipse(300, 300, circleSize9);
    }
    if (timer24 > 8460) {
      screen = "credits";
    }

    timer21++;

    //fading in screen for the constrction area
    noStroke();
    circleSize8 = lerp(circleSize8, targetSize8, transtionSpeed3);
    fill(0);
    ellipse(300, 300, circleSize8);
  }

  //credits scene
  if (screen == "credits") {
    //black background
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);

    //tracks the yPos for the text and such
    let yPos = map(
      transitionProgress,
      0,
      1,
      height + transitionDistance,
      -transitionDistance
    );

    //uses for loop and array to play the text and move it up
    for (let i = 0; i < textLines.length; i++) {
      let y = yPos + (i * transitionDistance) / textLines.length;
      textFont(myFont);
      textSize(50);
      text(textLines[i], width / 2, y);
    }

    //if the transtion happend then the entire draw loop ends
    if (transitionProgress >= 1) {
      noLoop();
      bedroomMusic.stop()
    }

    transitionProgress += transitionSpeed4 / 1000;
  }
}
//-----------------------------------------------------------------------------
//first frame for running down
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

//second frame for running down
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

//third frame for running down
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

//foruth frame for running down
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
//first frame for running up
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

//second frame for running up
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

//third frame for running up
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

//fourth frame for running up
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
//first frame for running left
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

//second frame for running left
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

//third frame for running left
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

//fourth frame for running left
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
//first frame for running right
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

//second frame for running right
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

//third frame for running left
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

//fourth frame for running right
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

//mouse clicked function to switch around screens and for buttons
function mouseClicked() {
  if (
    mouseX >= 187 &&
    mouseX <= 417 &&
    mouseY >= 400 &&
    mouseY <= 470 &&
    screen == "intro"
  ) {
    screen = "fadingIntro";
  }

  if (
    mouseX >= 25 &&
    mouseX <= 25 + 180 &&
    mouseY >= 20 &&
    mouseY <= 20 + 50 &&
    screen == "intro"
  ) {
    btnOn = !btnOn;
  }
  if (btnOn == true) {
    c = color(10, 250, 10);
  } else {
    c = color(250, 10, 10);
  }
}

//function for the decorations in the bedroom
function drawDeco() {
  //Wall and Door
  //Main Wall
  fill(207, 195, 140);
  rect(-1, -1, 602, 130);
  //Bottom Wall design
  fill(100, 100, 100);
  rect(-1, 102, 602, 28);
  //Top Wall design
  fill(255);
  rect(-1, -1, 602, 12);
  rect(-1, 14, 602, 3);
  //Door and frame
  fill(0);
  rect(90, 30, 90, 100);
  fill(185, 159, 0);
  rect(85, 20, 10, 120);
  rect(85, 20, 105, 10);
  rect(180, 20, 10, 120);

  //Bed
  //Main Bed
  fill(255);
  rect(420, 290 - 100, 100, 130);
  //Legs and Headrest
  fill(125, 125, 125);
  rect(420, 420 - 100, 15, 10);
  rect(505, 420 - 100, 15, 10);
  rect(420, 275 - 100, 10, 15);
  rect(510, 275 - 100, 10, 15);
  rect(430, 270 - 100, 80, 10);
  //Pillow and Blanket
  noStroke();
  fill(0);
  rect(443, 287 - 100, 50, 26);
  fill(255);
  rect(445, 290 - 100, 46, 20);
  fill(210);
  rect(420, 310 - 100, 100, 100);
  fill(156, 39, 190);
  rect(420, 310 - 100, 100, 10);
  rect(420, 310 - 100, 100, 10);
  rect(420, 326 - 100, 100, 3);

  push();
  scale(0.9);
  //Table
  fill(0);
  rect(510 + 70, 125, 11, 61);
  fill(140);
  rect(510 + 70, 125, 10, 60);
  fill(0);
  rect(500 + 70, 122, 110, 50);
  fill(140);
  rect(500 + 70, 120, 101, 50);
  //Book
  fill(236, 51, 51);
  rect(530 + 70, 130, 55, 30);
  rect(528 + 70, 127, 27, 37);
  rect(560 + 70, 127, 27, 37);
  fill(248, 233, 165);
  rect(535 + 70, 135, 20, 20);
  rect(560 + 70, 135, 20, 20);
  //Chair
  fill(159, 92, 30);
  rect(534 + 70, 150, 5, 50);
  rect(577 + 70, 150, 5, 50);
  fill(158, 62, 183);
  rect(533 + 70, 140, 50, 50);
  pop();
}

//the carpet in the bedroom
function drawCarpet() {
  let cx = 80;
  let cy = 240;

  noStroke();
  fill(208, 120, 168);
  rect(cx, cy, 270, 270);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (i == 0 || i == 8 || j == 0 || j == 8) {
        fill(i % 2 == 0 ? (j % 2 == 0 ? 255 : 200) : 200);
        rect(cx + 30 * (j + 1) - 20, cy + 30 * (i + 1) - 20, 10, 10);
      }
    }
  }
}

//the floor pattern in the bedroom
function drawFloor() {
  floorX = -1;
  floorY = 47;
  strokeWeight(1);
  for (let i = 0; i < 12; i++) {
    stroke(144, 112, 40);
    fill(149, 117, 43);
    rect(floorX, floorY, 602, 5);

    floorY += 50;
  }

  dotY = 49;
  for (let i = 0; i < 12; i++) {
    dotX = 7;
    for (let j = 0; j < 12; j++) {
      fill(0);
      rect(dotX, dotY, 4, 3);
      rect(dotX + 40, dotY, 4, 3);
      dotX += 50;
    }

    dotY += 50;
  }
}

//the bridge seen in the outside home,lake,and construction area screen
function bridge(x3, y3) {
  fill(235, 215, 127);
  stroke(33, 48, 64);
  strokeWeight(4);
  rect(x3 + 150, y3 + -10, 20, 620);
  rect(x3 + 420, y3 + -10, 20, 620);
  fill(235, 215, 127);
  stroke(125, 117, 80);
  strokeWeight(4);
  rect(x3 + 170, y3 + -10, 250, 620);
  push();
  stroke(125, 117, 80);
  strokeWeight(4);

  for (i = 30; i <= 600; i += 25) {
    line(x3 + 172, y3 + i, x3 + 418, y3 + i);
  }

  pop();
  fill(125, 117, 80);
  noStroke();
  for (j = 15; j <= 600; j += 25) {
    square(x3 + 180, y3 + j, 5);
  }
  for (k = 15; k <= 600; k += 25) {
    square(x3 + 403, y3 + k, 5);
  }
}

//the bush that surronds the outside home screen
function drawBush() {
  let bx = 230;
  let by = 20;

  for (let i = 0; i < 3; i++) {
    fill(9, 83, 9);
    circle(bx, by + i * 40, 30);
    circle(bx + 140, by + i * 40, 30);
  }

  for (let i = 0; i < 6; i++) {
    circle(bx - i * 42, by + 80, 30);
    circle(bx + 140 + i * 42, by + 80, 30);
  }

  for (let i = 0; i < 11; i++) {
    circle(bx - 210, by + 80 + i * 47, 30);
    circle(bx + 350, by + 80 + i * 47, 30);
  }

  for (let i = 0; i < 8; i++) {
    circle(bx - 210 + i * 40, by + 550, 30);
    circle(bx + 350 - i * 40, by + 550, 30);
  }
}

//function for the houses drawn
function drawHouse(hx, hy) {
  //Wall
  fill(249, 237, 213);
  rect(hx, hy, 205, 80);
  //Roof
  fill(183, 147, 123);
  rect(hx - 5, hy - 90, 215, 90);
  //Door
  fill(116, 145, 137);
  rect(hx + 10, hy + 20, 40, 61);
  //Window
  fill(116, 144, 136);
  rect(hx + 68, hy + 18, 130, 44);
  fill(177, 221, 209);
  rect(hx + 70, hy + 20, 40, 40);
  rect(hx + 113, hy + 20, 40, 40);
  rect(hx + 156, hy + 20, 40, 40);
}

//the fence that surronds the construction area
function drawFence() {
  fill(240);
  noStroke();
  rect(10, 10, 580, 10);
  rect(580, 10, 10, 580);
  rect(580, 580, -570, 10);
  rect(10, 580, 10, -560);
}

//the dirt plots that are seen in the contruction area screen
function drawPlots(px, py) {
  fill(173, 127, 10);
  rect(px, py, 205, 130);
}
