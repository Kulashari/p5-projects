class Page {
  constructor(column, row, generation) {
    this.column = column;
    this.row = row;
    this.generation = generation;
    this.listOfStudents = [];
    this.numBox = this.row * this.column;
  }
  storeStudents(arr) {
    for (var i = 0; i < this.rows * this.column; i++) {
      this.listOfStudents[i] = arr[i];
    }
  }
}

class honorRollPage extends Page {
  constructor(column,row,generation,pageCounter,pageNum,rectX,rectY,rectSpacingX,rectSpacingY) {
    super(column, row, generation);
    this.pageCounter = pageCounter;
    this.rectX = rectX;
    this.rectY = rectY;
    this.spacingX = rectSpacingX;
    this.spacingY = rectSpacingY;
    this.pageNum = pageNum;
    this.length = 393;
    this.textY = 79;
    this.c = grade9Color;
    this.spaceFromLeft = 180;
    this.spaceFromTop = 180;
    this.lengthBox = 384;
  }

  displayNames() {
    textFont(nameFont);
    textSize(settingData.namesSize);
    for (let index = 0; index < this.row * this.column; index++) {
      if (this.listOfStudents[index] != "" && this.listOfStudents[index]) {
        this.listOfStudents[index].displayNG(this);
      }
    }
    boxes(
      this.row,
      this.column,
      this.spacingX,
      this.spacingY,
      379,
      67,
      this.rectX,
      this.rectY,
      this
    );
  }
  display() {

    fill(mottoColor);
    textSize(settingData.mottoSize);
    textFont(titleFont);
    text("Let Every Spirit Soar", 743, 1068);

    fill(titleColor);
    textSize(settingData.titleSize);
    text(
      "Honor Roll,   " +
        this.generation +
        "-" +
        (this.generation + 1) +
        ",   " +
        this.pageNum +
        " / " +
        this.pageCounter +
        "",
      513,
      80
    );

    fill(descColor);
    textSize(settingData.descSize);
    text("Students Who Have Achieved An Overall Average of 80 perecent or greater in all of their courses",188,132);
    image(logoImg, 15, 20, 150, 150);
    image(logoImg, 1755, 20, 150, 150);
    this.displayNames()
  }
}

class highestMarkPage extends Page {
  constructor(column, row, generation, pageCounter, pageNum) {
    super(column, row, generation);
    this.rectX = 230;
    this.rectY = 160;
    this.rectSpacingX = 485;
    this.rectSpacingY = 95;
    this.pageCounter = pageCounter;
    this.pageNum = pageNum;
    this.length = 476;
    this.textY = 95;
    this.spaceFromLeft = 230;
    this.spaceFromTop = 187;
    this.lengthBox = 485;
  }
  displayNames() {
    for (let index = 0; index < this.row * this.column; index++) {
      if (this.listOfStudents[index] != "" && this.listOfStudents[index]) {
        push();
        textFont(nameFont);
        textSize(settingData.namesSize);
        this.listOfStudents[index].displayNGC(this);
        pop();
      }
    }

    boxes(this.row,this.column,this.rectSpacingX,this.rectSpacingY,476,89,this.rectX,this.rectY,this);
  }
  display() {
    fill(mottoColor);
    textSize(settingData.mottoSize);
    textFont(titleFont);
    text("Let Every Spirit Soar", 730, 1068);
    fill(titleColor);
    textSize(settingData.titleSize);

    text("Highest Mark Per Subject,   " +  (this.generation) +  "-" +  (this.generation+1) +  ",   " +  this.pageNum +  " / " +  this.pageCounter +  "",290,80);

    fill(descColor);
    textSize(settingData.descSize);
    text("Students who have achieved the highest mark in a specific subject",410,132);
    image(logoImg, 15, 20, 150, 150);
    image(logoImg, 1755, 20, 150, 150);
     this.displayNames()
  }
}

class otherAwardPage extends Page {
  constructor(column, row, generation, pageCounter, pageNum) {
    super(column, row, generation);
    this.rectX = 230;
    this.rectY = 145;
    this.rectSpacingX = 482;
    this.rectSpacingY = 174;
    this.pageCounter = pageCounter;
    this.pageNum = pageNum;
    this.length = 476;
    this.textY = 174;
    this.spaceFromLeft = 230;
    this.spaceFromTop = 190;
    this.lengthBox = 485;
    this.wid = 168;
  }
  displayNames() {
    for (let index = 0; index < this.row * this.column; index++) {
      if (this.listOfStudents[index] != "" && this.listOfStudents[index]) {
        push();
        textFont(nameFont);
        fill(255);
        textSize(settingData.namesSize);
        this.listOfStudents[index].displayNGA(this);
        pop();
      }
    }
    boxes(this.row,this.column,this.rectSpacingX,this.rectSpacingY,this.length,this.wid,this.rectX,this.rectY,this);
  }
  display() {
    fill(mottoColor);
    textSize(settingData.mottoSize);
    textFont(titleFont);
    text("Let Every Spirit Soar", 725, 1068);
    fill(titleColor);
    textSize(settingData.titleSize);
    text("Marcy Awards  -  " + this.pageNum + " / " + this.pageCounter + "",650,80);
    fill(descColor);
    textSize(settingData.descSize);
    text("Academic excellence, Leadership in the school programs, and community involvement",280,132);
    image(logoImg, 15, 20, 150, 150);
    image(logoImg, 1755, 20, 150, 150);
    this.displayNames()
  }
}