let eyes = [];

let r3
let r2
let i =0
let r,g,b
function setup() {    createCanvas(400, 400);
    for (let i=0; i<20; i++){
      let newEye = {
	    x: random(width),
	    y: random(height),
	    eyeSize: random(10, 100),
        drawEye: function(){
    var dy = mouseY - this.y; 
    var dx = mouseX - this.x; 
    var orientation = atan2(dy, dx); 
    push(); 
    i+=0.1
  r = map(mouseX, 0, 600, 0, 255)
  g = map(mouseX, 0, 600, 255, 0)
  b = map(mouseY, 0, 600, 255, 0)
  translate(15*sin(i-60),15*cos(i-60))
    translate(this.x, this.y);
    //white
    fill(r,g,b); 
    strokeWeight(10);
    circle(0,0, this.eyeSize);
    rotate(orientation); 
    //pupil
    fill(0);
    circle(this.eyeSize/4,0,this.eyeSize/2); 
          
          if (frameCount%120 == 0){
          fill(10*sin(i-15),255,120); 
         this.x = random(width)
         this.y = random(height)
         this.eyeSize = random(10,100)
          }
          
    pop(); 
        }
     };
    eyes.push(newEye);
    }  
}
function draw() {
    background(0);
    noStroke();
  for (i = 0;i<20;i++){
  eyes[i].drawEye()
  }
  textSize(30)
  fill(255)
  stroke(0)
  text("Move The Mouse",10,390)
}