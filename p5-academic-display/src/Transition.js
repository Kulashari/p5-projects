class transtionPage{
  constructor(awardName){
    this.timer = 0;
    this.timer2 = 0;
    this.timer3 = 0;
    this.timer4 = 1;
    this.letX = -100
    this.spiritY = 2080
    this.everyY = -100
    this.soarX = 2100
    this.awardName = awardName
    this.chars = []
    for(var i = 0; i < this.awardName.length; i++){
      this.chars[i] = {
        letter: this.awardName.split('')[i],
        x: 0,
        y: 0
      }
    }
    this.startX = (1920-textWidth(this.awardName))/2
    this.startY = 1200;
    this.endY = 750;
    this.zoom = 0
    this.charachterCheck = false;
    this.counter = 0;
  }
  createCoordinates(){
    textFont(titleFont)
    textSize(settingData.mottoTranstionSize)
    let counter = 0;
    for(var i = 0; i < this.chars.length; i++){
      this.chars[i].x = (this.startX + counter);
      counter += textWidth(this.chars[i].letter);
      this.chars[i].y = this.startY;
    }
  }
  reset(){
    this.timer = 0;
    this.timer2 = 0;
    this.timer3 = 0;
    this.timer4 = 1;
    this.letX = -100
    this.spiritY = 2080
    this.everyY = -100
    this.soarX = 2100
    for(var i = 0; i < this.chars.length; i++){
      this.chars[i].y = this.startY
    }
    this.startX = (1920-textWidth(this.awardName))/2
    this.startY = 1200;
    this.endY = 750;
    this.zoom = 0
    this.charachterCheck = false;
    this.counter = 0;
  }
  display(){
    
    textSize(settingData.mottoTranstionSize)
    textFont(titleFont)
    fill(mottoColor)
    push()
    translate(-380,0)
    text("Let",this.letX-50,height/2)
    text("Every",(width/2),this.everyY)
    text("Spirit",(width/2)+380,this.spiritY)
    text("Soar",this.soarX+250,(height/2)-4)
    pop()
    
    this.timer++    
    if(this.timer<45){
      this.letX+=20
    }
    if(this.timer<90 && this.timer>45){
            this.everyY +=14.5
    }
    else if(this.timer<135){
        this.spiritY -=17.15
    }
    else if(this.timer<180 && this.timer>135){
            this.soarX -=14.6
    }
    else if(this.timer > 180){
      this.makeLettersComeUp();
    }
    
    
    
  }
  makeLettersComeUp(){
  
  for(let i = 0; i < this.chars.length; i++){

      if(this.chars[i].y >= this.endY && Math.floor(this.timer2/15) > i ){
        this.chars[i].y-= pow(1.1,(this.timer2 -15*i));
            this.counter = i;
        }
    }
    this.timer2++;
    
    for(let i =0 ; i < this.chars.length; i++){
      text(this.chars[i].letter, this.chars[i].x,  this.chars[i].y)
    }
    
    if(this.chars[this.chars.length-1].y <= this.endY){
     this.charachterCheck = true
       if(frameCount % 60 == 1){
              this.timer3++

       }
        this.zoomScreen()

  }

}

  zoomScreen(){
    push();
    translate(width/2,height/2)
    if(this.charachterCheck && this.timer3 > 1){
    if ((this.zoom <1)){
      this.zoom +=0.01
      }
    }
scale(this.zoom);
translate(-width/2,-height/2)
    fill("black")
    rect(0,0,width,height)
    if(this.awardName == "Honor Roll"){
honorRollPages[0].display();
honorRollPages[0].displayNames();
    }
    if (this.awardName == "Highest Marks"){
highestMarkPages[0].display();
highestMarkPages[0].displayNames(); 
    }
        if (this.awardName == "Marcy Awards"){
otherAwardPages[0].display();
otherAwardPages[0].displayNames(); 
    }
pop();
    this.timer4 +=0.005;
  }
}
