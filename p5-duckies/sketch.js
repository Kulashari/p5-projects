let sunSize = 30; 
let sunRadius = 100;
y3 = -90
y2 = -90
x3 = 200
timer2 = 0

let duckies = []; //each duck has x, y, color
let ripples = []; //each ripple has x, y, length
let index = 0;
let c1 ;//deepSkyBlue
let c2 ;//lightSkyBlue 
let i = 0

let col4
let col5
let col6

var redLight = true

let timer = 0

function setup() {
	createCanvas(400, 400);
	noFill();
  
   c1 = color(0, 191, 255);//Turquoise
  c2 = color(135, 206, 250);//paleTurquoise
  
    col4 = color(244,117,122)
    col5 = color(117,112,113)
    col6 = color(117,112,113)
  
    //the code below shows how to create one duck using a p5.Vector
    //you'll need to create 10 duckies in the loop below, and store them in the array duckies.
 
	//creating 10 objects with randomized properties
	
    for(var a = 0; a < 1350; a+=270){
      for(var b= 540; b < 1080;b+= 270){
            duckies[index] = new p5.Vector(random(a, a+270), random(b,b+270), color('rgb(243,243,29'));
        index++;

      }
    }
  index =0;
    ripples[1] = new p5.Vector((-1)*random(100, 400), random(height/2, height), random(50, 150));  
	//creating 10 objects with randomized properties
	for (let i = 0; i < 10; i++) {
		//create 10 ripples as shown above and store them in the array duckies
        ripples[i] = new p5.Vector((-1)*random(200, 800), random(height/2, height), random(50, 150));
	}  
timer2 = timer2/60
}

function draw() {
  push()
     for(let y=0; y<height; y++){
       n = map(y,0,height,0,1);
       let newc = lerpColor(c1,c2,n);
       stroke(newc);
       line(0,y,width, y);  
    }
  if (sunRadius>=600){
    sunRadius = -100
  }
    
  sunRadius++
  
  y3 = y3+2
  
  if (y3>=600) {
    background(171, 68, 9)
  }
  
  if (y3>=1000){
    fill(196, 192, 192);
  ellipse(200, y2, sunRadius, sunRadius);
    background('rgb(49,32,49)')
    noStroke()
    sunRadius = 100
    
    
    
 fill(255,255,255)
 circle(random()*width,random()*height,10) 
 circle(random()*width,random()*height,10) 
 circle(random()*width,random()*height,10) 
 circle(random()*width,random()*height,10)

    y2 = y2+2
    
    strokeWeight(11)
    stroke(110, 110, 110,130)
    fill(150, 150, 150);
  ellipse(200, y2, sunRadius, sunRadius);
    
  }
      
  if (y3>=1600) {
    y3 = -90
    y2 = -90
  }
  
      strokeWeight(11)
     stroke(158, 83, 17,143)
     fill(255, 170, 0);
     ellipse(200, y3, sunRadius, sunRadius);

  noStroke();
  fill('dodgerBlue');
  rect(0, 200, 400, 200); 
  pop()
    //the code below shows how to acces the data for one ripple and
    //how to draw it. You'll need to draw all of them using a loop.
    for (let i = 0; i < ripples.length; i++) {
       drawRipple(ripples[i]);
         if (redLight == false){
       ripples[i].x++;
      }
      if (redLight == true){
        
      }
       if (ripples[i].x >width+80){
         ripples[i].x = (-1)*random(200, 800);
         ripples[i].y = random(width/2, height);
         ripples[i].z =  random(50, 150);
       } 
    }    
  
    //the code below shows how to acces the data for one duck and
    //how to draw it. You'll need to draw all of them using a loop.  
    for (let i = 0; i < duckies.length; i++) {
      push()
      scale(0.3)
       drawDuck2(duckies[i]);
      pop()
      if (redLight == false){
       duckies[i].x-=9;
      }
      if (redLight == true){
        
      }
      
       if (duckies[i].x <-400){
          duckies[i].x = (random((index%5) *270 ,((index%5)+1) *270) +1300);
          duckies[i].y = (random((index/5)*270 + 540, (index/5)*270 + 810))-270;
         index++;
         if(index == 10){
           index = 0;
         }
       }  
    }
  
  push()
  scale(0.4)
  i+=0.1
  traffic(80+100*sin(i-10),0,col4,col5,col6)
  pop()
  
timer++
  if (timer=>0){
    col4 = color(244,117,122)
    col5 = color(117,112,113)
    col6 = color(117,112,113)
    redLight = true
  }
  if (timer>100){
    col4 = color(117,112,113)
    col5 = color(255,247,100)
    col6 = color(117,112,113)
  }
  if(timer>150){
    col4 = color(117,112,113)
    col5 = color(117,112,113)
    col6 = color(114,164,104)
    redLight = false
    
  }
  if (timer>300){
    col4 = color(117,112,113)
    col5 = color(255,247,100)
    col6 = color(117,112,113)
  }
    if (timer>350){
timer = 0
  }
}



function drawRipple(ripple){
  push()
  strokeWeight(4);
  stroke(41, 108, 204);    
  line(ripple.x, ripple.y, ripple.x+ripple.z,ripple.y);
  noStroke();
  pop()
}

function drawDuck2(duck){
  strokeWeight(1)
  fill("red");
  fill(255, 255, 255); 
  stroke(255,255,255)
rect(duck.x+200,duck.y+125, 12.5, 12.5); 
rect(duck.x+200,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+100, 12.5, 12.5); 
rect(duck.x+175,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+100, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+112.5, 12.5, 12.5); 
fill(255, 174, 0); 
  stroke(255,174,0)
rect(duck.x+162.5,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+150, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+150, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+150, 12.5, 12.5); 
rect(duck.x+125,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+125, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+150, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+100,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+100,duck.y+125, 12.5, 12.5); 
fill(238, 255, 0); 
  stroke(238,255,0)
rect(duck.x+375,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+375,duck.y+225, 12.5, 12.5); 
rect(duck.x+375,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+200, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+350,duck.y+300, 12.5, 12.5); 
rect(duck.x+350,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+350,duck.y+275, 12.5, 12.5); 
rect(duck.x+350,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+350,duck.y+250, 12.5, 12.5); 
rect(duck.x+350,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+350,duck.y+225, 12.5, 12.5); 
rect(duck.x+350,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+350,duck.y+200, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+325,duck.y+325, 12.5, 12.5); 
rect(duck.x+325,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+325,duck.y+300, 12.5, 12.5); 
rect(duck.x+325,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+325,duck.y+275, 12.5, 12.5); 
rect(duck.x+325,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+325,duck.y+250, 12.5, 12.5); 
rect(duck.x+325,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+325,duck.y+225, 12.5, 12.5); 
rect(duck.x+325,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+300,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+300,duck.y+325, 12.5, 12.5); 
rect(duck.x+300,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+300,duck.y+300, 12.5, 12.5); 
rect(duck.x+300,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+300,duck.y+275, 12.5, 12.5); 
rect(duck.x+300,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+300,duck.y+225, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+275,duck.y+350, 12.5, 12.5); 
rect(duck.x+275,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+275,duck.y+325, 12.5, 12.5); 
rect(duck.x+275,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+275,duck.y+275, 12.5, 12.5); 
rect(duck.x+275,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+275,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+350, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+350, 12.5, 12.5); 
rect(duck.x+250,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+300, 12.5, 12.5); 
rect(duck.x+250,duck.y+275, 12.5, 12.5); 
rect(duck.x+250,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+225, 12.5, 12.5); 
rect(duck.x+250,duck.y+150, 12.5, 12.5); 
rect(duck.x+250,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+125, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+350, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+175, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+150, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+350, 12.5, 12.5); 
rect(duck.x+225,duck.y+325, 12.5, 12.5); 
rect(duck.x+225,duck.y+300, 12.5, 12.5); 
rect(duck.x+225,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+275, 12.5, 12.5); 
rect(duck.x+225,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+250, 12.5, 12.5); 
rect(duck.x+225,duck.y+225, 12.5, 12.5); 
rect(duck.x+225,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+200, 12.5, 12.5); 
rect(duck.x+225,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+175, 12.5, 12.5); 
rect(duck.x+225,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+150, 12.5, 12.5); 
rect(duck.x+225,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+125, 12.5, 12.5); 
rect(duck.x+225,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+100, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+87.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+350, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+200, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+175, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+150, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+100, 12.5, 12.5); 
rect(duck.x+200,duck.y+87.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+350, 12.5, 12.5); 
rect(duck.x+200,duck.y+325, 12.5, 12.5); 
rect(duck.x+200,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+300, 12.5, 12.5); 
rect(duck.x+200,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+275, 12.5, 12.5); 
rect(duck.x+200,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+250, 12.5, 12.5); 
rect(duck.x+200,duck.y+225, 12.5, 12.5); 
rect(duck.x+200,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+200, 12.5, 12.5); 
rect(duck.x+200,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+175, 12.5, 12.5); 
rect(duck.x+200,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+150, 12.5, 12.5); 
rect(duck.x+200,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+100, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+87.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+350, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+200, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+175, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+150, 12.5, 12.5); 
rect(duck.x+175,duck.y+87.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+350, 12.5, 12.5); 
rect(duck.x+175,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+300, 12.5, 12.5); 
rect(duck.x+175,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+275, 12.5, 12.5); 
rect(duck.x+175,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+225, 12.5, 12.5); 
rect(duck.x+175,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+200, 12.5, 12.5); 
rect(duck.x+175,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+175, 12.5, 12.5); 
rect(duck.x+175,duck.y+150, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+87.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+200, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+100, 12.5, 12.5); 
rect(duck.x+150,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+325, 12.5, 12.5); 
rect(duck.x+150,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+250, 12.5, 12.5); 
rect(duck.x+150,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+225, 12.5, 12.5); 
rect(duck.x+150,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+200, 12.5, 12.5); 
rect(duck.x+150,duck.y+125, 12.5, 12.5); 
rect(duck.x+150,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+100, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+300, 12.5, 12.5); 
rect(duck.x+125,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+275, 12.5, 12.5); 
rect(duck.x+125,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+250, 12.5, 12.5); 
rect(duck.x+125,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+225, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+250, 12.5, 12.5); 
fill(0, 0, 0); 
  stroke(0)
rect(duck.x+87.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+87.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+87.5,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+387.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+387.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+387.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+375,duck.y+275, 12.5, 12.5); 
rect(duck.x+375,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+375,duck.y+250, 12.5, 12.5); 
rect(duck.x+375,duck.y+200, 12.5, 12.5); 
rect(duck.x+375,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+362.5,duck.y+175, 12.5, 12.5); 
rect(duck.x+350,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+350,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+350,duck.y+175, 12.5, 12.5); 
rect(duck.x+350,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+337.5,duck.y+200, 12.5, 12.5); 
rect(duck.x+325,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+325,duck.y+200, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+312.5,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+300,duck.y+350, 12.5, 12.5); 
rect(duck.x+300,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+300,duck.y+250, 12.5, 12.5); 
rect(duck.x+300,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+350, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+275, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+287.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+275,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+275,duck.y+300, 12.5, 12.5); 
rect(duck.x+275,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+275,duck.y+250, 12.5, 12.5); 
rect(duck.x+275,duck.y+225, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+150, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+262.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+250,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+325, 12.5, 12.5); 
rect(duck.x+250,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+250, 12.5, 12.5); 
rect(duck.x+250,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+175, 12.5, 12.5); 
rect(duck.x+250,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+250,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+250, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+200, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+237.5,duck.y+100, 12.5, 12.5); 
rect(duck.x+225,duck.y+87.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+225,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+75, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+212.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+75, 12.5, 12.5); 
rect(duck.x+200,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+200,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+75, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+187.5,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+75, 12.5, 12.5); 
rect(duck.x+175,duck.y+362.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+325, 12.5, 12.5); 
rect(duck.x+175,duck.y+250, 12.5, 12.5); 
rect(duck.x+175,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+175,duck.y+125, 12.5, 12.5); 
rect(duck.x+175,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+75, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+350, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+325, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+175, 12.5, 12.5); 
rect(duck.x+162.5,duck.y+150, 12.5, 12.5); 
rect(duck.x+150,duck.y+87.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+350, 12.5, 12.5); 
rect(duck.x+150,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+300, 12.5, 12.5); 
rect(duck.x+150,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+275, 12.5, 12.5); 
rect(duck.x+150,duck.y+187.5, 12.5, 12.5); 
rect(duck.x+150,duck.y+175, 12.5, 12.5); 
rect(duck.x+150,duck.y+137.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+337.5, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+200, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+175, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+125, 12.5, 12.5); 
rect(duck.x+137.5,duck.y+100, 12.5, 12.5); 
rect(duck.x+125,duck.y+325, 12.5, 12.5); 
rect(duck.x+125,duck.y+212.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+125,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+312.5, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+300, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+237.5, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+225, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+162.5, 12.5, 12.5); 
rect(duck.x+112.5,duck.y+112.5, 12.5, 12.5); 
rect(duck.x+100,duck.y+287.5, 12.5, 12.5); 
rect(duck.x+100,duck.y+275, 12.5, 12.5); 
rect(duck.x+100,duck.y+262.5, 12.5, 12.5); 
rect(duck.x+100,duck.y+250, 12.5, 12.5); 
rect(duck.x+100,duck.y+150, 12.5, 12.5); 
rect(duck.x+100,duck.y+112.5, 12.5, 12.5); 
}

function traffic(xPos,yPos,col1,col2,col3){
  fill(255, 255, 255); 
stroke(255, 255, 255); 
rect( xPos+337.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+337.5, yPos+225, 12.5, 12.5); 
rect( xPos+337.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+325, yPos+300, 12.5, 12.5); 
rect( xPos+325, yPos+287.5, 12.5, 12.5); 
rect( xPos+325, yPos+275, 12.5, 12.5); 
rect( xPos+325, yPos+262.5, 12.5, 12.5); 
rect( xPos+325, yPos+250, 12.5, 12.5); 
rect( xPos+325, yPos+237.5, 12.5, 12.5); 
rect( xPos+325, yPos+225, 12.5, 12.5); 
rect( xPos+325, yPos+212.5, 12.5, 12.5); 
rect( xPos+325, yPos+200, 12.5, 12.5); 
rect( xPos+312.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+300, 12.5, 12.5); 
rect( xPos+312.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+275, 12.5, 12.5); 
rect( xPos+312.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+250, 12.5, 12.5); 
rect( xPos+312.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+225, 12.5, 12.5); 
rect( xPos+312.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+300, yPos+325, 12.5, 12.5); 
rect( xPos+300, yPos+312.5, 12.5, 12.5); 
rect( xPos+300, yPos+300, 12.5, 12.5); 
rect( xPos+300, yPos+287.5, 12.5, 12.5); 
rect( xPos+300, yPos+275, 12.5, 12.5); 
rect( xPos+300, yPos+262.5, 12.5, 12.5); 
rect( xPos+300, yPos+250, 12.5, 12.5); 
rect( xPos+300, yPos+237.5, 12.5, 12.5); 
rect( xPos+300, yPos+225, 12.5, 12.5); 
rect( xPos+300, yPos+112.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+325, 12.5, 12.5); 
rect( xPos+287.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+300, 12.5, 12.5); 
rect( xPos+287.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+275, 12.5, 12.5); 
rect( xPos+287.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+250, 12.5, 12.5); 
rect( xPos+287.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+125, 12.5, 12.5); 
rect( xPos+287.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+100, 12.5, 12.5); 
rect( xPos+275, yPos+325, 12.5, 12.5); 
rect( xPos+275, yPos+312.5, 12.5, 12.5); 
rect( xPos+275, yPos+300, 12.5, 12.5); 
rect( xPos+275, yPos+287.5, 12.5, 12.5); 
rect( xPos+275, yPos+275, 12.5, 12.5); 
rect( xPos+275, yPos+262.5, 12.5, 12.5); 
rect( xPos+275, yPos+250, 12.5, 12.5); 
rect( xPos+275, yPos+237.5, 12.5, 12.5); 
rect( xPos+275, yPos+112.5, 12.5, 12.5); 
rect( xPos+275, yPos+100, 12.5, 12.5); 
rect( xPos+262.5, yPos+325, 12.5, 12.5); 
rect( xPos+262.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+250, 12.5, 12.5); 
rect( xPos+262.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+250, yPos+325, 12.5, 12.5); 
rect( xPos+250, yPos+300, 12.5, 12.5); 
rect( xPos+250, yPos+287.5, 12.5, 12.5); 
rect( xPos+250, yPos+275, 12.5, 12.5); 
rect( xPos+250, yPos+262.5, 12.5, 12.5); 
rect( xPos+250, yPos+250, 12.5, 12.5); 
rect( xPos+250, yPos+237.5, 12.5, 12.5); 
rect( xPos+250, yPos+112.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+325, 12.5, 12.5); 
rect( xPos+237.5, yPos+300, 12.5, 12.5); 
rect( xPos+237.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+250, 12.5, 12.5); 
rect( xPos+237.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+225, yPos+325, 12.5, 12.5); 
rect( xPos+225, yPos+300, 12.5, 12.5); 
rect( xPos+225, yPos+287.5, 12.5, 12.5); 
rect( xPos+225, yPos+275, 12.5, 12.5); 
rect( xPos+225, yPos+262.5, 12.5, 12.5); 
rect( xPos+225, yPos+250, 12.5, 12.5); 
rect( xPos+225, yPos+237.5, 12.5, 12.5); 
rect( xPos+225, yPos+112.5, 12.5, 12.5); 
rect( xPos+225, yPos+100, 12.5, 12.5); 
rect( xPos+212.5, yPos+325, 12.5, 12.5); 
rect( xPos+212.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+300, 12.5, 12.5); 
rect( xPos+212.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+275, 12.5, 12.5); 
rect( xPos+212.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+250, 12.5, 12.5); 
rect( xPos+212.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+125, 12.5, 12.5); 
rect( xPos+212.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+100, 12.5, 12.5); 
rect( xPos+200, yPos+325, 12.5, 12.5); 
rect( xPos+200, yPos+312.5, 12.5, 12.5); 
rect( xPos+200, yPos+300, 12.5, 12.5); 
rect( xPos+200, yPos+287.5, 12.5, 12.5); 
rect( xPos+200, yPos+275, 12.5, 12.5); 
rect( xPos+200, yPos+262.5, 12.5, 12.5); 
rect( xPos+200, yPos+250, 12.5, 12.5); 
rect( xPos+200, yPos+237.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+300, 12.5, 12.5); 
rect( xPos+187.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+275, 12.5, 12.5); 
rect( xPos+187.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+250, 12.5, 12.5); 
rect( xPos+187.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+175, yPos+300, 12.5, 12.5); 
rect( xPos+175, yPos+287.5, 12.5, 12.5); 
rect( xPos+175, yPos+275, 12.5, 12.5); 
rect( xPos+175, yPos+262.5, 12.5, 12.5); 
rect( xPos+175, yPos+250, 12.5, 12.5); 
rect( xPos+175, yPos+237.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+275, 12.5, 12.5); 
rect( xPos+162.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+250, 12.5, 12.5); 
rect( xPos+162.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+150, yPos+250, 12.5, 12.5); 
rect( xPos+150, yPos+237.5, 12.5, 12.5); 
  
fill(col2); 
stroke(col2); 
rect( xPos+87.5, yPos+225, 12.5, 12.5); 
rect( xPos+87.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+75, yPos+237.5, 12.5, 12.5); 
rect( xPos+75, yPos+225, 12.5, 12.5); 
rect( xPos+75, yPos+212.5, 12.5, 12.5); 
rect( xPos+75, yPos+200, 12.5, 12.5); 
rect( xPos+62.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+225, 12.5, 12.5); 
rect( xPos+62.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+200, 12.5, 12.5); 
rect( xPos+50, yPos+225, 12.5, 12.5); 
rect( xPos+50, yPos+212.5, 12.5, 12.5); 
  fill(255,247,100)
  stroke(255,247,100)
rect( xPos+187.5, yPos+200, 12.5, 12.5); 
rect( xPos+187.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+175, 12.5, 12.5); 
rect( xPos+175, yPos+175, 12.5, 12.5); 
rect( xPos+175, yPos+162.5, 12.5, 12.5); 
rect( xPos+175, yPos+150, 12.5, 12.5); 
rect( xPos+162.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+125, 12.5, 12.5); 
rect( xPos+150, yPos+125, 12.5, 12.5); 
rect( xPos+150, yPos+112.5, 12.5, 12.5); 
rect( xPos+137.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+137.5, yPos+100, 12.5, 12.5); 
rect( xPos+125, yPos+87.5, 12.5, 12.5); 
rect( xPos+125, yPos+100, 12.5, 12.5); 
  
  fill(255, 255, 255); 
stroke(255, 255, 255); 
rect( xPos+337.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+337.5, yPos+225, 12.5, 12.5); 
rect( xPos+337.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+325, yPos+300, 12.5, 12.5); 
rect( xPos+325, yPos+287.5, 12.5, 12.5); 
rect( xPos+325, yPos+275, 12.5, 12.5); 
rect( xPos+325, yPos+262.5, 12.5, 12.5); 
rect( xPos+325, yPos+250, 12.5, 12.5); 
rect( xPos+325, yPos+237.5, 12.5, 12.5); 
rect( xPos+325, yPos+225, 12.5, 12.5); 
rect( xPos+325, yPos+212.5, 12.5, 12.5); 
rect( xPos+325, yPos+200, 12.5, 12.5); 
rect( xPos+312.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+300, 12.5, 12.5); 
rect( xPos+312.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+275, 12.5, 12.5); 
rect( xPos+312.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+250, 12.5, 12.5); 
rect( xPos+312.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+225, 12.5, 12.5); 
rect( xPos+312.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+300, yPos+325, 12.5, 12.5); 
rect( xPos+300, yPos+312.5, 12.5, 12.5); 
rect( xPos+300, yPos+300, 12.5, 12.5); 
rect( xPos+300, yPos+287.5, 12.5, 12.5); 
rect( xPos+300, yPos+275, 12.5, 12.5); 
rect( xPos+300, yPos+262.5, 12.5, 12.5); 
rect( xPos+300, yPos+250, 12.5, 12.5); 
rect( xPos+300, yPos+237.5, 12.5, 12.5); 
rect( xPos+300, yPos+225, 12.5, 12.5); 
rect( xPos+300, yPos+112.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+325, 12.5, 12.5); 
rect( xPos+287.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+300, 12.5, 12.5); 
rect( xPos+287.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+275, 12.5, 12.5); 
rect( xPos+287.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+250, 12.5, 12.5); 
rect( xPos+287.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+125, 12.5, 12.5); 
rect( xPos+287.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+100, 12.5, 12.5); 
rect( xPos+275, yPos+325, 12.5, 12.5); 
rect( xPos+275, yPos+312.5, 12.5, 12.5); 
rect( xPos+275, yPos+300, 12.5, 12.5); 
rect( xPos+275, yPos+287.5, 12.5, 12.5); 
rect( xPos+275, yPos+275, 12.5, 12.5); 
rect( xPos+275, yPos+262.5, 12.5, 12.5); 
rect( xPos+275, yPos+250, 12.5, 12.5); 
rect( xPos+275, yPos+237.5, 12.5, 12.5); 
rect( xPos+275, yPos+112.5, 12.5, 12.5); 
rect( xPos+275, yPos+100, 12.5, 12.5); 
rect( xPos+262.5, yPos+325, 12.5, 12.5); 
rect( xPos+262.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+250, 12.5, 12.5); 
rect( xPos+262.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+250, yPos+325, 12.5, 12.5); 
rect( xPos+250, yPos+300, 12.5, 12.5); 
rect( xPos+250, yPos+287.5, 12.5, 12.5); 
rect( xPos+250, yPos+275, 12.5, 12.5); 
rect( xPos+250, yPos+262.5, 12.5, 12.5); 
rect( xPos+250, yPos+250, 12.5, 12.5); 
rect( xPos+250, yPos+237.5, 12.5, 12.5); 
rect( xPos+250, yPos+112.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+325, 12.5, 12.5); 
rect( xPos+237.5, yPos+300, 12.5, 12.5); 
rect( xPos+237.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+250, 12.5, 12.5); 
rect( xPos+237.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+225, yPos+325, 12.5, 12.5); 
rect( xPos+225, yPos+300, 12.5, 12.5); 
rect( xPos+225, yPos+287.5, 12.5, 12.5); 
rect( xPos+225, yPos+275, 12.5, 12.5); 
rect( xPos+225, yPos+262.5, 12.5, 12.5); 
rect( xPos+225, yPos+250, 12.5, 12.5); 
rect( xPos+225, yPos+237.5, 12.5, 12.5); 
rect( xPos+225, yPos+112.5, 12.5, 12.5); 
rect( xPos+225, yPos+100, 12.5, 12.5); 
rect( xPos+212.5, yPos+325, 12.5, 12.5); 
rect( xPos+212.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+300, 12.5, 12.5); 
rect( xPos+212.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+275, 12.5, 12.5); 
rect( xPos+212.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+250, 12.5, 12.5); 
rect( xPos+212.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+125, 12.5, 12.5); 
rect( xPos+212.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+100, 12.5, 12.5); 
rect( xPos+200, yPos+325, 12.5, 12.5); 
rect( xPos+200, yPos+312.5, 12.5, 12.5); 
rect( xPos+200, yPos+300, 12.5, 12.5); 
rect( xPos+200, yPos+287.5, 12.5, 12.5); 
rect( xPos+200, yPos+275, 12.5, 12.5); 
rect( xPos+200, yPos+262.5, 12.5, 12.5); 
rect( xPos+200, yPos+250, 12.5, 12.5); 
rect( xPos+200, yPos+237.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+300, 12.5, 12.5); 
rect( xPos+187.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+275, 12.5, 12.5); 
rect( xPos+187.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+250, 12.5, 12.5); 
rect( xPos+187.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+175, yPos+300, 12.5, 12.5); 
rect( xPos+175, yPos+287.5, 12.5, 12.5); 
rect( xPos+175, yPos+275, 12.5, 12.5); 
rect( xPos+175, yPos+262.5, 12.5, 12.5); 
rect( xPos+175, yPos+250, 12.5, 12.5); 
rect( xPos+175, yPos+237.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+275, 12.5, 12.5); 
rect( xPos+162.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+250, 12.5, 12.5); 
rect( xPos+162.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+150, yPos+250, 12.5, 12.5); 
rect( xPos+150, yPos+237.5, 12.5, 12.5); 
  
fill(col2); 
stroke(col2); 
rect( xPos+87.5, yPos+225, 12.5, 12.5); 
rect( xPos+87.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+75, yPos+237.5, 12.5, 12.5); 
rect( xPos+75, yPos+225, 12.5, 12.5); 
rect( xPos+75, yPos+212.5, 12.5, 12.5); 
rect( xPos+75, yPos+200, 12.5, 12.5); 
rect( xPos+62.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+225, 12.5, 12.5); 
rect( xPos+62.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+200, 12.5, 12.5); 
rect( xPos+50, yPos+225, 12.5, 12.5); 
rect( xPos+50, yPos+212.5, 12.5, 12.5); 
  fill(255,247,100)
  stroke(255,247,100)
rect( xPos+187.5, yPos+200, 12.5, 12.5); 
rect( xPos+187.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+175, 12.5, 12.5); 
rect( xPos+175, yPos+175, 12.5, 12.5); 
rect( xPos+175, yPos+162.5, 12.5, 12.5); 
rect( xPos+175, yPos+150, 12.5, 12.5); 
rect( xPos+162.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+125, 12.5, 12.5); 
rect( xPos+150, yPos+125, 12.5, 12.5); 
rect( xPos+150, yPos+112.5, 12.5, 12.5); 
rect( xPos+137.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+137.5, yPos+100, 12.5, 12.5); 
rect( xPos+125, yPos+87.5, 12.5, 12.5); 
rect( xPos+125, yPos+100, 12.5, 12.5); 
  
fill(255,209,0) 
stroke(255,209,0) 
rect( xPos+312.5, yPos+175, 12.5, 12.5); 
rect( xPos+312.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+300, yPos+187.5, 12.5, 12.5); 
rect( xPos+300, yPos+175, 12.5, 12.5); 
rect( xPos+300, yPos+162.5, 12.5, 12.5); 
rect( xPos+300, yPos+150, 12.5, 12.5); 
rect( xPos+287.5, yPos+200, 12.5, 12.5); 
rect( xPos+287.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+175, 12.5, 12.5); 
rect( xPos+287.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+275, yPos+200, 12.5, 12.5); 
rect( xPos+275, yPos+175, 12.5, 12.5); 
rect( xPos+275, yPos+162.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+87.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+200, 12.5, 12.5); 
rect( xPos+262.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+150, 12.5, 12.5); 
rect( xPos+250, yPos+87.5, 12.5, 12.5); 
rect( xPos+250, yPos+200, 12.5, 12.5); 
rect( xPos+250, yPos+187.5, 12.5, 12.5); 
rect( xPos+250, yPos+162.5, 12.5, 12.5); 
rect( xPos+250, yPos+150, 12.5, 12.5); 
rect( xPos+237.5, yPos+87.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+200, 12.5, 12.5); 
rect( xPos+237.5, yPos+175, 12.5, 12.5); 
rect( xPos+237.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+150, 12.5, 12.5); 
rect( xPos+225, yPos+200, 12.5, 12.5); 
rect( xPos+225, yPos+187.5, 12.5, 12.5); 
rect( xPos+225, yPos+175, 12.5, 12.5); 
rect( xPos+225, yPos+162.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+175, 12.5, 12.5); 
rect( xPos+212.5, yPos+162.5, 12.5, 12.5); 
fill(col1); 
stroke(col1); 
rect( xPos+87.5, yPos+150, 12.5, 12.5); 
rect( xPos+87.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+75, yPos+162.5, 12.5, 12.5); 
rect( xPos+75, yPos+150, 12.5, 12.5); 
rect( xPos+75, yPos+137.5, 12.5, 12.5); 
rect( xPos+75, yPos+125, 12.5, 12.5); 
rect( xPos+62.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+150, 12.5, 12.5); 
rect( xPos+62.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+125, 12.5, 12.5); 
rect( xPos+50, yPos+150, 12.5, 12.5); 
  rect( xPos+50, yPos+137.5, 12.5, 12.5); 
  fill(244,117,122)
  stroke(244,117,122)
rect( xPos+262.5, yPos+300, 12.5, 12.5); 
rect( xPos+250, yPos+312.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+225, yPos+312.5, 12.5, 12.5); 
fill(209, 209, 209); 
stroke(209, 209, 209); 
rect( xPos+350, yPos+287.5, 12.5, 12.5); 
rect( xPos+350, yPos+275, 12.5, 12.5); 
rect( xPos+350, yPos+262.5, 12.5, 12.5); 
rect( xPos+350, yPos+250, 12.5, 12.5); 
rect( xPos+350, yPos+237.5, 12.5, 12.5); 
rect( xPos+350, yPos+225, 12.5, 12.5); 
rect( xPos+350, yPos+212.5, 12.5, 12.5); 
rect( xPos+350, yPos+200, 12.5, 12.5); 
rect( xPos+337.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+337.5, yPos+300, 12.5, 12.5); 
rect( xPos+337.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+337.5, yPos+275, 12.5, 12.5); 
rect( xPos+337.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+337.5, yPos+250, 12.5, 12.5); 
rect( xPos+337.5, yPos+200, 12.5, 12.5); 
rect( xPos+337.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+325, yPos+325, 12.5, 12.5); 
rect( xPos+325, yPos+312.5, 12.5, 12.5); 
rect( xPos+325, yPos+187.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+337.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+325, 12.5, 12.5); 
rect( xPos+312.5, yPos+200, 12.5, 12.5); 
rect( xPos+300, yPos+350, 12.5, 12.5); 
rect( xPos+300, yPos+337.5, 12.5, 12.5); 
rect( xPos+300, yPos+212.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+350, 12.5, 12.5); 
rect( xPos+287.5, yPos+337.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+225, 12.5, 12.5); 
rect( xPos+275, yPos+350, 12.5, 12.5); 
rect( xPos+275, yPos+337.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+350, 12.5, 12.5); 
rect( xPos+262.5, yPos+337.5, 12.5, 12.5); 
rect( xPos+250, yPos+350, 12.5, 12.5); 
rect( xPos+250, yPos+337.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+350, 12.5, 12.5); 
rect( xPos+237.5, yPos+337.5, 12.5, 12.5); 
rect( xPos+225, yPos+350, 12.5, 12.5); 
rect( xPos+225, yPos+337.5, 12.5, 12.5); 
rect( xPos+225, yPos+225, 12.5, 12.5); 
rect( xPos+212.5, yPos+350, 12.5, 12.5); 
rect( xPos+212.5, yPos+337.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+225, 12.5, 12.5); 
rect( xPos+200, yPos+350, 12.5, 12.5); 
rect( xPos+200, yPos+337.5, 12.5, 12.5); 
rect( xPos+200, yPos+225, 12.5, 12.5); 
rect( xPos+187.5, yPos+337.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+325, 12.5, 12.5); 
rect( xPos+187.5, yPos+225, 12.5, 12.5); 
rect( xPos+175, yPos+325, 12.5, 12.5); 
rect( xPos+175, yPos+312.5, 12.5, 12.5); 
rect( xPos+175, yPos+225, 12.5, 12.5); 
rect( xPos+162.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+300, 12.5, 12.5); 
rect( xPos+162.5, yPos+225, 12.5, 12.5); 
rect( xPos+162.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+150, yPos+300, 12.5, 12.5); 
rect( xPos+150, yPos+287.5, 12.5, 12.5); 
rect( xPos+150, yPos+275, 12.5, 12.5); 
rect( xPos+150, yPos+262.5, 12.5, 12.5); 
rect( xPos+150, yPos+225, 12.5, 12.5); 
rect( xPos+137.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+137.5, yPos+250, 12.5, 12.5); 
rect( xPos+137.5, yPos+237.5, 12.5, 12.5); 
fill(255,209,0) 
stroke(255,209,0); 
rect( xPos+325, yPos+175, 12.5, 12.5); 
rect( xPos+325, yPos+162.5, 12.5, 12.5); 
rect( xPos+325, yPos+150, 12.5, 12.5); 
rect( xPos+325, yPos+137.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+150, 12.5, 12.5); 
rect( xPos+312.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+100, 12.5, 12.5); 
rect( xPos+300, yPos+87.5, 12.5, 12.5); 
rect( xPos+300, yPos+200, 12.5, 12.5); 
rect( xPos+287.5, yPos+75, 12.5, 12.5); 
rect( xPos+275, yPos+75, 12.5, 12.5); 
rect( xPos+275, yPos+212.5, 12.5, 12.5); 
 
rect( xPos+262.5, yPos+75, 12.5, 12.5); 
rect( xPos+262.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+175, 12.5, 12.5); 
rect( xPos+250, yPos+75, 12.5, 12.5); 
rect( xPos+250, yPos+212.5, 12.5, 12.5); 

rect( xPos+237.5, yPos+75, 12.5, 12.5); 
rect( xPos+237.5, yPos+212.5, 12.5, 12.5); 

rect( xPos+225, yPos+75, 12.5, 12.5); 
rect( xPos+200, yPos+175, 12.5, 12.5); 
rect( xPos+200, yPos+162.5, 12.5, 12.5)
  
  fill(0)
  stroke(0)
  rect( xPos+262.5, yPos+175, 12.5, 12.5); 
  rect( xPos+250, yPos+175, 12.5, 12.5); 
  rect( xPos+237.5, yPos+187.5, 12.5, 12.5); 
  rect( xPos+275, yPos+187.5, 12.5, 12.5);
  
fill(176, 127, 106); 
stroke(176, 127, 106); 
rect( xPos+112.5, yPos+75, 12.5, 12.5); 
rect( xPos+100, yPos+75, 12.5, 12.5); 
fill(143, 143, 143); 
stroke(143, 143, 143); 
rect( xPos+75, yPos+87.5, 12.5, 12.5); 
rect( xPos+75, yPos+75, 12.5, 12.5); 
rect( xPos+75, yPos+100, 12.5, 12.5); 
  
fill(col3); 
stroke(col3); 
rect( xPos+87.5, yPos+300, 12.5, 12.5); 
rect( xPos+87.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+75, yPos+312.5, 12.5, 12.5); 
rect( xPos+75, yPos+300, 12.5, 12.5); 
rect( xPos+75, yPos+287.5, 12.5, 12.5); 
rect( xPos+75, yPos+275, 12.5, 12.5); 
rect( xPos+62.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+300, 12.5, 12.5); 
rect( xPos+62.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+275, 12.5, 12.5); 
rect( xPos+50, yPos+300, 12.5, 12.5); 
rect( xPos+50, yPos+287.5, 12.5, 12.5); 
fill(100, 211, 245); 
stroke(100, 211, 245); 
rect( xPos+275, yPos+137.5, 12.5, 12.5); 
rect( xPos+275, yPos+125, 12.5, 12.5); 
rect( xPos+262.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+250, yPos+137.5, 12.5, 12.5); 
rect( xPos+250, yPos+125, 12.5, 12.5); 
rect( xPos+237.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+225, yPos+137.5, 12.5, 12.5); 
rect( xPos+225, yPos+125, 12.5, 12.5); 
fill(0, 0, 0); 
stroke(0, 0, 0); 
rect( xPos+87.5, yPos+75, 12.5, 12.5); 
rect( xPos+87.5, yPos+62.5, 12.5, 12.5); 
rect( xPos+87.5, yPos+325, 12.5, 12.5); 
rect( xPos+87.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+87.5, yPos+275, 12.5, 12.5); 
rect( xPos+87.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+87.5, yPos+250, 12.5, 12.5); 
rect( xPos+87.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+87.5, yPos+200, 12.5, 12.5); 
rect( xPos+87.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+87.5, yPos+175, 12.5, 12.5); 
rect( xPos+87.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+87.5, yPos+125, 12.5, 12.5); 
rect( xPos+87.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+75, yPos+62.5, 12.5, 12.5); 
rect( xPos+75, yPos+325, 12.5, 12.5); 
rect( xPos+75, yPos+262.5, 12.5, 12.5); 
rect( xPos+75, yPos+250, 12.5, 12.5); 
rect( xPos+75, yPos+187.5, 12.5, 12.5); 
rect( xPos+75, yPos+175, 12.5, 12.5); 
rect( xPos+75, yPos+112.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+325, 12.5, 12.5); 
rect( xPos+62.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+250, 12.5, 12.5); 
rect( xPos+62.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+62.5, yPos+175, 12.5, 12.5); 
rect( xPos+62.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+50, yPos+325, 12.5, 12.5); 
rect( xPos+50, yPos+312.5, 12.5, 12.5); 
rect( xPos+50, yPos+275, 12.5, 12.5); 
rect( xPos+50, yPos+262.5, 12.5, 12.5); 
rect( xPos+50, yPos+250, 12.5, 12.5); 
rect( xPos+50, yPos+237.5, 12.5, 12.5); 
rect( xPos+50, yPos+200, 12.5, 12.5); 
rect( xPos+50, yPos+187.5, 12.5, 12.5); 
rect( xPos+50, yPos+175, 12.5, 12.5); 
rect( xPos+50, yPos+162.5, 12.5, 12.5); 
rect( xPos+50, yPos+125, 12.5, 12.5); 
rect( xPos+50, yPos+112.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+325, 12.5, 12.5); 
rect( xPos+37.5, yPos+312.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+300, 12.5, 12.5); 
rect( xPos+37.5, yPos+287.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+275, 12.5, 12.5); 
rect( xPos+37.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+250, 12.5, 12.5); 
rect( xPos+37.5, yPos+237.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+225, 12.5, 12.5); 
rect( xPos+37.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+200, 12.5, 12.5); 
rect( xPos+37.5, yPos+187.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+175, 12.5, 12.5); 
rect( xPos+37.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+150, 12.5, 12.5); 
rect( xPos+37.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+37.5, yPos+125, 12.5, 12.5); 
rect( xPos+37.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+312.5, yPos+125, 12.5, 12.5); 
rect( xPos+312.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+300, yPos+137.5, 12.5, 12.5); 
rect( xPos+300, yPos+125, 12.5, 12.5); 
rect( xPos+300, yPos+100, 12.5, 12.5); 
rect( xPos+287.5, yPos+87.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+50, 12.5, 12.5); 
rect( xPos+287.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+287.5, yPos+150, 12.5, 12.5); 
rect( xPos+275, yPos+87.5, 12.5, 12.5); 
rect( xPos+275, yPos+62.5, 12.5, 12.5); 
rect( xPos+275, yPos+225, 12.5, 12.5); 
rect( xPos+275, yPos+150, 12.5, 12.5); 
rect( xPos+262.5, yPos+62.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+50, 12.5, 12.5); 
rect( xPos+262.5, yPos+37.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+275, 12.5, 12.5); 
rect( xPos+262.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+225, 12.5, 12.5); 
rect( xPos+262.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+262.5, yPos+125, 12.5, 12.5); 
rect( xPos+262.5, yPos+100, 12.5, 12.5); 
rect( xPos+250, yPos+62.5, 12.5, 12.5); 
rect( xPos+250, yPos+225, 12.5, 12.5); 
rect( xPos+250, yPos+100, 12.5, 12.5); 
rect( xPos+237.5, yPos+50, 12.5, 12.5); 
rect( xPos+237.5, yPos+275, 12.5, 12.5); 
rect( xPos+237.5, yPos+262.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+225, 12.5, 12.5); 
rect( xPos+237.5, yPos+137.5, 12.5, 12.5); 
rect( xPos+237.5, yPos+125, 12.5, 12.5); 
rect( xPos+237.5, yPos+100, 12.5, 12.5); 
rect( xPos+225, yPos+87.5, 12.5, 12.5); 
rect( xPos+225, yPos+212.5, 12.5, 12.5); 
rect( xPos+225, yPos+150, 12.5, 12.5); 
rect( xPos+212.5, yPos+87.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+212.5, yPos+200, 12.5, 12.5); 
rect( xPos+212.5, yPos+150, 12.5, 12.5); 
rect( xPos+200, yPos+212.5, 12.5, 12.5); 
rect( xPos+200, yPos+200, 12.5, 12.5); 
rect( xPos+200, yPos+187.5, 12.5, 12.5); 
rect( xPos+200, yPos+137.5, 12.5, 12.5); 
rect( xPos+200, yPos+125, 12.5, 12.5); 
rect( xPos+200, yPos+112.5, 12.5, 12.5); 
rect( xPos+200, yPos+100, 12.5, 12.5); 
rect( xPos+187.5, yPos+212.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+187.5, yPos+150, 12.5, 12.5); 
rect( xPos+175, yPos+212.5, 12.5, 12.5); 
rect( xPos+175, yPos+200, 12.5, 12.5); 
rect( xPos+175, yPos+187.5, 12.5, 12.5); 
rect( xPos+175, yPos+137.5, 12.5, 12.5); 
rect( xPos+175, yPos+125, 12.5, 12.5); 
rect( xPos+162.5, yPos+175, 12.5, 12.5); 
rect( xPos+162.5, yPos+162.5, 12.5, 12.5); 
rect( xPos+162.5, yPos+150, 12.5, 12.5); 
rect( xPos+162.5, yPos+112.5, 12.5, 12.5); 
rect( xPos+150, yPos+137.5, 12.5, 12.5); 
rect( xPos+150, yPos+100, 12.5, 12.5); 
rect( xPos+137.5, yPos+87.5, 12.5, 12.5); 
rect( xPos+137.5, yPos+125, 12.5, 12.5); 
rect( xPos+125, yPos+75, 12.5, 12.5); 
rect( xPos+125, yPos+112.5, 12.5, 12.5); 
rect( xPos+112.5, yPos+87.5, 12.5, 12.5); 
rect( xPos+112.5, yPos+62.5, 12.5, 12.5); 
rect( xPos+112.5, yPos+100, 12.5, 12.5); 
rect( xPos+100, yPos+87.5, 12.5, 12.5); 
rect( xPos+100, yPos+62.5, 12.5, 12.5); 
rect( xPos+100, yPos+325, 12.5, 12.5); 
rect( xPos+100, yPos+312.5, 12.5, 12.5); 
rect( xPos+100, yPos+300, 12.5, 12.5); 
rect( xPos+100, yPos+287.5, 12.5, 12.5); 
rect( xPos+100, yPos+275, 12.5, 12.5); 
rect( xPos+100, yPos+262.5, 12.5, 12.5); 
rect( xPos+100, yPos+250, 12.5, 12.5); 
rect( xPos+100, yPos+237.5, 12.5, 12.5); 
rect( xPos+100, yPos+225, 12.5, 12.5); 
rect( xPos+100, yPos+212.5, 12.5, 12.5); 
rect( xPos+100, yPos+200, 12.5, 12.5); 
rect( xPos+100, yPos+187.5, 12.5, 12.5); 
rect( xPos+100, yPos+175, 12.5, 12.5); 
rect( xPos+100, yPos+162.5, 12.5, 12.5); 
rect( xPos+100, yPos+150, 12.5, 12.5); 
rect( xPos+100, yPos+137.5, 12.5, 12.5); 
rect( xPos+100, yPos+125, 12.5, 12.5); 
rect( xPos+100, yPos+112.5, 12.5, 12.5); 
}