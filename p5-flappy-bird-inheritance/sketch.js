let pipe = [];
let RedPipe = [];
let kirbyObj;
let bg;
let isStart = false;
let gameOver = false;

let xCloud1;
let xCloud2;
let xCloud3;
let yCloud1;
let yCloud2;
let yCloud3;

let score = 0;

let timer2 = 0;

let timer = 0;

function setup() {
  createCanvas(400, 400);
  pipe.push(new pipes(500, 0, color(43, 143, 50)));
  RedPipe.push(new redPipes(750, 0, color(143, 30, 29)));
  kirbyObj = new kirby();
  bg = new Background();
}

function draw() {
  background("lightblue");
  push();
  bg.clouds();

  if (gameOver == false) {
    bg.cloudsMove();
  } else {
  }
  pop();

  if (gameOver == true && isStart == true) {
    for (let i = 0; i < pipe.length; i++) {
      pipe[i].pipeDraw();
    }
    for (let i = 0; i < RedPipe.length; i++) {
      RedPipe[i].pipeDraw();
    }
    kirbyObj.kirbyDraw();
  } else {
    
    if (keyIsPressed) {
      if (keyCode == 32) {
        isStart = true;
      }
    }

    if (isStart == false) {
      kirbyObj.kirbyDraw();
      textSize(25);
      fill(0);
      textFont("Courier New");
      text("Press Space To Start", 52, 300);
    }

    if (isStart == true) {
      for (let i = 0; i < pipe.length; i++) {
        pipe[i].pipeDraw();
        pipe[i].move();
      }

      for (let i = 0; i < pipe.length; i++) {
        if (kirbyObj.collision(pipe[i])) {
          gameOver = true;
        }
      }

      timer++;
      if (timer % 500 == 0) {
        pipe.push(new pipes(500, 0, color(43, 143, 50)));
        if (timer > 200) {
          score += 1;
        }
      }

      for (let i = 0; i < RedPipe.length; i++) {
        RedPipe[i].pipeDraw();
        RedPipe[i].move();
        RedPipe[i].upDown();
      }

      for (let i = 0; i < RedPipe.length; i++) {
        if (kirbyObj.collision(RedPipe[i])) {
          gameOver = true;
        }
      }

      timer2++;
      if (timer2 % 1000 == 0) {
        RedPipe.push(new redPipes(750, 0, color(143, 30, 29)));
        if (timer2 > 200) {
          score += 1;
        }
      }

      if (keyIsPressed) {
        if (keyCode == 32) {
          isStart = true;
          kirbyObj.fly = true;
        }
      } else {
        kirbyObj.fly = false;
      }
      kirbyObj.kirbyDraw();
      kirbyObj.move();
      kirbyObj.noMove();
    }
  }

  textSize(20);
  text("Score: " + score, 15, 30);
}

class Background {
  constructor() {
    xCloud1 = random(20, width - 20);
    yCloud1 = random(20, height - 20);

    xCloud2 = random(20, width - 20);
    yCloud2 = random(20, height - 20);

    xCloud3 = random(20, width - 20);
    yCloud3 = random(20, height - 20);
  }

  clouds() {
    fill("white");
    strokeWeight(2);
    stroke("gainsboro");
    circle(xCloud1, yCloud1, 40);
    circle(xCloud1 + 17, yCloud1 - 20, 40);
    circle(xCloud1 + 34, yCloud1, 60);
    noStroke();
    rect(xCloud1 - 3, yCloud1 - 15, 50, 30);
    fill("white");
    strokeWeight(2);
    stroke("gainsboro");
    circle(xCloud2, yCloud2, 40);
    circle(xCloud2 + 17, yCloud2 - 20, 40);
    circle(xCloud2 + 34, yCloud2, 60);
    noStroke();
    rect(xCloud2 - 3, yCloud2 - 15, 50, 30);
    fill("white");
    strokeWeight(2);
    stroke("gainsboro");
    circle(xCloud3, yCloud3, 40);
    circle(xCloud3 + 17, yCloud3 - 20, 40);
    circle(xCloud3 + 34, yCloud3, 60);
    noStroke();
    rect(xCloud3 - 3, yCloud3 - 15, 50, 30);
  }

  cloudsMove() {
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
  }
}

class kirby {
  constructor() {
    this.y = 0;
    this.fly = false;
    this.collisonX = 175;
    this.collisonY = 175;
    this.collisonWidth = 50;
    this.collisonHeight = 50;
    this.yvel = 20;
  }
  kirbyDraw() {
    strokeWeight(2);
    stroke(0);
    fill(242, 164, 169, 255);
    circle(220, this.y + 180, 10);

    push();
    translate(0, this.y);
    rotate(-0.9);
    stroke(0);
    fill(242, 34, 58);
    ellipse(-56, 278, 30, 20);

    fill(242, 34, 58);
    ellipse(-43, 300, 30, 20);
    pop();

    fill(242, 164, 169, 255);
    circle(200, this.y + 200, 55);

    fill(0);
    ellipse(220, this.y + 195, 4, 13);
    ellipse(210, this.y + 195, 4, 13);

    fill(255);
    noStroke();
    circle(220, this.y + 192, 4);
    circle(210, this.y + 192, 4);

    stroke(0);
    fill(242, 164, 169, 255);
    circle(178, this.y + 183, 10);

    noStroke();
    fill(240, 98, 174);
    ellipse(200, this.y + 200, 9, 4);

    fill(0);
    rect(210, this.y + 208, 9, 1);
    strokeWeight(1);
    stroke(0);
    noFill();
    arc(206, this.y + 209, 7, 7, radians(300), radians(60));

    push();
    noFill();
    noStroke();
    rect(
      this.collisonX,
      this.collisonY,
      this.collisonWidth,
      this.collisonHeight
    );
    pop();
  }

  collision(pipe) {
    return (
      (this.collisonX + this.collisonWidth > pipe.x &&
        this.collisonX < pipe.x + 50 &&
        this.collisonY + this.collisonHeight > pipe.h1 &&
        this.collisonY < pipe.h1 + 20) ||
      (this.collisonX + this.collisonWidth > pipe.x &&
        this.collisonX < pipe.x + 50 &&
        this.collisonY + this.collisonHeight > 410 - pipe.h2 &&
        this.collisonY < 400)
    );
  }

  move() {
    if (this.fly) {
      if (this.y < -170) {
      } else {
        this.y -= 3;
        this.collisonY -= 2;
      }
    }
  }

  noMove() {
    if (this.fly == false) {
      if (this.y > 165) {
      } else {
        this.y += 3;
        this.collisonY += 2;
      }
    }
  }
}

class pipes {
  constructor(pipeX, pipeY, c) {
    this.x = pipeX;
    this.y = pipeY;
    this.h1 = random(200) + 20;
    this.h2 = 400 - this.h1 - 150;
    this.c = c;
  }

  pipeDraw() {
    fill(this.c);
    strokeWeight(3);
    rect(this.x, -10 + this.y, 50, this.h1 + 50);
    rect(this.x - 5, this.h1 + this.y + 30, 60, 20);

    rect(this.x, 400 - this.h2 + this.y, 50, this.h2 + 50);
    rect(this.x - 5, 400 - this.h2 + this.y, 60, 20);
  }

  move() {
    if (isStart == true && gameOver === false) {
      if (this.x < -100) {
        this.h1 = random(200) + 20;
        this.h2 = 400 - this.h1 - 150;
      }
      this.x -= 1;
    } else {
    }
  }
}

class redPipes extends pipes {
  constructor(pipeX, pipeY, c) {
    super(pipeX, pipeY, c);
    this.jitter = 0;
  }
  upDown() {
    this.y = 10 * sin(this.jitter);
    this.jitter -= 0.08;
  }
}

function keyPressed() {
  if (gameOver === false && keyCode === 32) {
    isStart = true;
    kirbyObj.fly = true;
  }
}
