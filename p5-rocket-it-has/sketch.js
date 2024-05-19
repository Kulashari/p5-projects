let thrust = [];
let particleY = 200;
let fly = false;
let textY = 120;

function setup() {
  createCanvas(400, 400);
  rocketObj = new rocket(0, 0);
}

function draw() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color("#003366"), color("#87CEFA"), inter);
    stroke(c);
    line(0, i, width, i);
  }

  push();
  textSize(30);
  noStroke();
  fill(0);
  textFont("Courier New");
  text("Press the spacebar", 40, textY);
  pop();


  if (fly == true) {
    textY -= 10;
    rocketObj.shake();
    thrust.push(new rocket(200, particleY + 175));
    rocketObj.noMove();
    particleY -= 1;
  }

  if (particleY < -300) {
    particleY = 200;
    fly = false;
    textY = 120
  }

  for (let i = 0; i < thrust.length; i++) {
    thrust[i].explode();
  }

    rocketObj.platform();
  

  rocketObj.display();
}

function keyPressed() {
  if (keyCode == 32) {
    fly = true;
  }
}

class rocket {
  constructor(rocketX, rocketY) {
    this.x = rocketX;
    this.y = rocketY;

    this.rand = random(0);

    this.particles = [];
    for (let i = 0; i < 10; i++) {
      this.particles[i] = new Particle(this.x, this.y);
    }
  }

  platform() {
    fill("rgb(80,80,80)");
    noStroke();
    beginShape();
    vertex(100 + this.rand, 350 + this.rand);
    vertex(300 + this.rand, 350 + this.rand);
    vertex(400 + this.rand, 400 + this.rand);
    vertex(0 + this.rand, 400 + this.rand);
    endShape(CLOSE);
  }

  shake() {
    this.rand = random(0, 2);
  }

  explode() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].move();
      this.particles[i].display();
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }
  display() {
    push();
    translate(-10, 21);
    noStroke();
    fill("rgb(16,16,40)");
    rect(180, 200 + this.y, 60, 120);

    fill(184, 134, 11);
    triangle(180, 200 + this.y, 240, 200 + this.y, 210, 150 + this.y);
    triangle(180, 281 + this.y, 180, 320 + this.y, 150, 320 + this.y);
    triangle(240, 281 + this.y, 240, 320 + this.y, 270, 320 + this.y);

    fill(192, 192, 192);
    beginShape();
    vertex(200, 320 + this.y);
    vertex(220, 320 + this.y);
    vertex(230, 330 + this.y);
    vertex(190, 330 + this.y);
    endShape(CLOSE);

    fill(184, 134, 11);
    circle(210, 240 + this.y, 40);
    fill("rgb(188,188,244)");
    circle(210, 240 + this.y, 30);
    pop();
  }

  noMove() {
    this.y -= 1;

    if (this.y < -500) {
      this.y = 0;
    }

    console.log(this.y);
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-3, 4);
    this.size = random(3, 8);
    let randomColor = random(1);
    if (randomColor < 0.5) {
      this.c = color(random(255, 255), random(50, 150), 0, random(200, 255));
    } else {
      this.c = color(random(255, 255), random(100, 200), 0, random(200, 255));
    }
    this.lifespan = 255;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 20;
  }

  display() {
    stroke(this.c);
    strokeWeight(2);
    fill(this.c);
    ellipse(this.x, this.y, this.size * 2, this.size);
  }
}
