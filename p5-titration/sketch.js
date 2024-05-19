let equipments;
let droplets = [];
var yCheck = 0;
let dropCoolDown = 30;
let coolDown = 0;
let previouspH;
let mouseCheck = false;

function setup() {
  createCanvas(400, 400);
  equipments = new equipment(0, 0);
  Scale = new phScale();
  previouspH = equipments.pH;
}

function draw() {
  background("rgb(145,145,219)");

  if (coolDown > 0) {
    coolDown--;
  }
  for (let i = 0; i < droplets.length; i++) {
    if (yCheck <= 140) {
      droplets[i].drop();
      droplets[i].dropMove();
      if (droplets[i].dropY > 80) {
        droplets.splice(i, 1);
      }
    } else {
    }
  }

  if (previouspH != equipments.pH) {
    console.log(
      "pH before: " +
        round(previouspH, 1) +
        "\npH now: " +
        round(equipments.pH, 1)
    );
  }

  previouspH = equipments.pH;

  Scale.meter();

  equipments.beaker();
  equipments.stand();
  equipments.base();

  if (round(equipments.pH, 1) == 11) {
    fill(0);
    textFont("Courier New");
    textSize(18);
    text("Click the mouse to add \n     the titrant", 80, 370);
  } else if (round(equipments.pH, 1) > 7) {
    fill(0);
    textFont("Courier New");
    textSize(18);
    text("Try to get a perfect titration", 40, 379);
  } else if (round(equipments.pH, 1) == 7) {
    fill(0);
    textFont("Courier New");
    textSize(25);
    text("Perfectly Neutral", 75, 383);
  } else if (round(equipments.pH < 7)) {
    fill(0);
    textFont("Courier New");
    textSize(25);
    text("You Failed", 120, 383);
  }
}

class phScale {
  constructor() {
    this.rectY = 80;
  }

  meterMove() {
    this.rectY += 4;
  }

  meter() {
    noStroke();
    fill(148, 0, 211);
    rect(300, 20, 60, 20);
    fill(75, 0, 130);
    rect(300, 40, 60, 20);
    fill(0, 0, 255);
    rect(300, 60, 60, 20);
    fill(" rgb(85,233,238)");
    rect(300, 80, 60, 20);
    fill("rgb(17,225,135)");
    rect(300, 100, 60, 20);
    fill("rgb(5,202,116)");
    rect(300, 120, 60, 20);
    fill("rgb(59,235,78)");
    rect(300, 140, 60, 20);
    fill("rgb(122,235,59)");
    rect(300, 160, 60, 20);
    fill("rgb(196,255,82)");
    rect(300, 180, 60, 20);
    fill("rgb(205,235,13)");
    rect(300, 200, 60, 20);
    fill("rgb(248,216,51)");
    rect(300, 220, 60, 20);
    fill("rgb(238,177,24)");
    rect(300, 240, 60, 20);
    fill("rgb(238,140,24)");
    rect(300, 260, 60, 20);
    fill("rgb(238,76,24)");
    rect(300, 280, 60, 20);

    noFill();
    stroke(0);
    strokeWeight(5);
    rect(302.5, this.rectY, 60, 19);

    noStroke();
    fill("rgb(173,225,207)");
    rect(360, 17, 20, 283);

    fill(0);
    textSize(17);
    text("14", 359, 35);
    text("13", 359, 55);
    text("12", 359, 75);
    text("11", 359, 95);
    text("10", 359, 115);
    text("9", 364, 135);
    text("8", 364, 155);
    text("7", 364, 175);
    text("6", 364, 195);
    text("5", 364, 215);
    text("4", 364, 235);
    text("3", 364, 255);
    text("2", 364, 275);
    text("1", 364, 295);
  }
}

class drops {
  constructor(dropY) {
    this.dropY = dropY;
  }

  drop() {
    noStroke();
    fill(255, 255, 255, 200);
    beginShape();
    vertex(200, this.dropY + 240);
    quadraticVertex(203, this.dropY + 246, 206, this.dropY + 252);
    quadraticVertex(200, this.dropY + 248, 194, this.dropY + 252);
    quadraticVertex(197, this.dropY + 246, 200, this.dropY + 240);
    endShape(CLOSE);
    ellipse(200, this.dropY + 252, 10, 10);
  }

  dropMove() {
    this.dropY++;
  }
}

class equipment {
  constructor(y, acidY) {
    this.y = y;
    this.acid = acidY;
    this.pH = 11;
  }

  get pH() {
    return this.PH;
  }

  set pH(newpH) {
    this.PH = newpH;
  }

  beaker() {
    noStroke();
    beginShape();
    fill(255, 255, 255, 100);
    vertex(175, 350);
    vertex(225, 350);
    vertex(220, 320);
    vertex(210, 300);

    vertex(190, 300);
    vertex(200 - 20, 320);
    rect(200, 270, -10, 30);
    rect(200, 270, 10, 30);
    rect(200, 270, -15, 10);
    rect(200, 270, 15, 10);
    endShape(CLOSE);
  }

  base() {
    noStroke();
    beginShape();
    fill(
      255,
      255 - ((11 - this.pH) / 3) * 50,
      255 - ((11 - this.pH) / 3) * 50,
      200
    );
    vertex(175, 350);
    vertex(225, 350);
    vertex(220, 320);
    vertex(180, 320);

    endShape(CLOSE);
  }

  stand() {
    noStroke();
    fill(255, 255, 255, 100);
    rect(195, 30, 10, 210);
    arc(200, 30, 10, 10, radians(180), radians(360));
    noStroke();
    fill(100, 100, 100);
    rect(80, 50, 10, 310);
    ellipse(85, 50, 10, 10);
    rect(80, 150, 180, 10);

    fill(255, 255, 255, 200);
    rect(195, 101 + this.y, 10, 139 - this.acid);

    fill(0);
    rect(80, 145, 10, 20);
    ellipse(77, 155, 10, 15);
    arc(195, 155, 15, 15, radians(90), radians(270));
    arc(205, 155, 15, 15, radians(270), radians(90));

    for (var j = 0; j < 200; j += 20) {
      rect(195, 40 + j, 5, 1);
    }

    fill("grey");
    rect(20, 350, 360, 50);
  }

  acidMove() {
    if (this.y < 140) {
      this.pH -= 0.2;
      this.acid += 5;
      this.y += 5;
    } else {
    }
  }
}

function mousePressed() {
  if (coolDown === 0) {
    equipments.acidMove();
    if (yCheck < 140) {
      Scale.meterMove();
    }
    let droplets2 = new drops(0, 0);
    droplets.push(droplets2);
    yCheck += 5;
    coolDown = dropCoolDown;
  }
}
