timer=0

function setup() {
  createCanvas(400, 400);

}

function draw() {
  
  background(220);
 
  timer++
  if (timer>=1){
    
  if (timer==1){
    drawRun1()
  }
  if (timer==2){
    drawRun2()
  }
  if (timer==3){
    drawRun3()
  }
  if (timer==4){
    drawRun4()
  }
  if (timer==5){
    drawRun5()
  }
  if (timer==6){
    drawRun6()
  }
  if (timer==7){
    drawRun7()
  }
  if (timer==8){
    drawRun8()
    timer=1
  }
    frameRate(15)
  }
  
}

function drawRun1(){
   stroke(0)
  rotate(-0.40)
  fill(242, 34, 58)
  ellipse(117,290,30,20)
  
  rotate(0.40)
  fill(242,164,169,255)
  circle(200,200,55)
  
   rotate(0.70)
  fill(242, 34, 58)
  ellipse(278,54,30,20)
  
  rotate(-0.70)
  fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
  fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

  stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
  noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
  fill(0)
  circle(217,208,2)
}

function drawRun2(){
  stroke(0)
  rotate(-0.90)
  fill(242, 34, 58)
  ellipse(-30,312,30,20)
  
  rotate(0.90)
  fill(242,164,169,255)
  circle(200,200,55)
   
  fill(242, 34, 58)
  ellipse(168,210,20,30)
  
  fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
 fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

  stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
 noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
 fill(0)
  circle(217,208,2)
}

function drawRun3(){
  
   stroke(0)
  rotate(-0.40)
  fill(242, 34, 58)
  ellipse(117,290,30,20)
  
  rotate(0.40)
  fill(242,164,169,255)
  circle(200,200,55)
  
   rotate(0.70)
  fill(242, 34, 58)
  ellipse(278,58,30,20)
  
  rotate(-0.70)
  fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
  fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

  stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
 noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
  fill(0)
  circle(217,208,2)
}

function drawRun4(){
    stroke(0)
  rotate(-0.10)
  fill(242, 34, 58)
  ellipse(189,240,30,20)
  
  rotate(0.10)
  fill(242,164,169,255)
  circle(200,200,55)
  

  fill(242, 34, 58)
  ellipse(197,225,30,20)
  

fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
 fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

  stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
 noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
  fill(0)
  circle(217,208,2)
}

function drawRun5(){
  stroke(0)
  rotate(0.60)
  fill(242, 34, 58)
  ellipse(276,80,30,20)
  
  rotate(-0.60)
  fill(242,164,169,255)
  circle(200,200,55)
  
  rotate(-0.50)
  fill(242, 34, 58)
  ellipse(86,302,30,20)
  

  rotate(0.50)
  fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
 fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

 stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
 noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
  fill(0)
  circle(217,208,2)
  
}

function drawRun6(){
    stroke(0)
  rotate(1.30)
  fill(242, 34, 58)
  ellipse(255,-111,30,20)
  
  rotate(-1.30)
  fill(242,164,169,255)
  circle(200,200,55)
  
  rotate(-0.90)
  fill(242, 34, 58)
  ellipse(-34,314,30,20)
  
  rotate(0.90)
  fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
 fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

  stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
 noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
  fill(0)
  circle(217,208,2)
}

function drawRun7(){
  stroke(0)
  rotate(0.60)
  fill(242, 34, 58)
  ellipse(276,80,30,20)
  
  rotate(-0.60)
  fill(242,164,169,255)
  circle(200,200,55)
  
  rotate(-0.50)
  fill(242, 34, 58)
  ellipse(86,302,30,20)
  

  rotate(0.50)
fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
  fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
 noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
  fill(0)
  circle(217,208,2)
}

function drawRun8(){
  stroke(0)
  rotate(-0.50)
  fill(242, 34, 58)
  ellipse(82,297,30,20)
  
  rotate(0.50)
  fill(242,164,169,255)
  circle(200,199,55)
  
 rotate(0.40)
  fill(242, 34, 58)
  ellipse(261,132,30,20)
  
rotate(-0.40)
fill(0)
  ellipse(220,195,4,13)
  ellipse(210,195,4,13)
  
  fill(255)
  noStroke()
  circle(220,192,4)
  circle(210,192,4)

  stroke(0)
  fill(242,164,169,255)
  circle(185,200,10)
  
 noStroke()
  fill(240, 98, 174)
  ellipse(200,200,9,4)
  
  fill(0)
  circle(217,208,2)
}