function setup() {
  createCanvas(500,500);
  frameRate(36);
  angleMode(DEGREES);   
  background(40);
  strokeWeight(0.2);
  noFill();
}

function draw() {
  
  translate(width/2,height/2);

  stroke(lerpColor(color('#deff00'),color('#009999'),frameCount/360));
  line(sin(frameCount)*-200,cos(frameCount)*-200,0,-200);
     
  stroke(lerpColor(color('#660066'),color('#bf7843'),frameCount/360));
  line(sin(frameCount)*200,0,0,cos(frameCount)*200);

  stroke(lerpColor(color('#bf7843'),color('#660066'),frameCount/360));
  line(sin(frameCount)*200,-tan(frameCount)*200,0,0);
  line(-1/sin(frameCount)*200,-1/tan(frameCount)*200,0,0);
  line(-1/cos(frameCount)*220,0,0,-1/tan(frameCount)*220);
  
  stroke(lerpColor(color('#009999'),color('#deff00'),frameCount/360));
  line(0,-cos(frameCount)*250,1/-tan(frameCount)*250,0);
  
  if(frameCount==360) {
     noLoop()
     }
  
}