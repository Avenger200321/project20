
var r = 0;
var g = 0;
var b=0;




function setup(){

  createCanvas(400,400);

}


function draw(){

  if(mouseX<255){
    r=mouseX;
    g=mouseX+10;
    b=mouseX+20;
  }
  else{
    r=mouseX-100;
    g=mouseX-30;
    b=mouseX-50;  
  }
background(r,g,b);
ellipse(mouseX,200,15,15);
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}