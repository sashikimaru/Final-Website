
var value = 100;
var x = 0;
var y = 0;
function setup() {
  var canvas = createCanvas(windowWidth, 500);
  canvas.parent('header');
}

function draw() {

	background (21,1,77);
    if (x < 380){
y = pow(x,.5)+36;
  x = x+.3;}

  else if(x=380){value = 0;
  }
    
    fill(255,255, value + 100);
    ellipse(x,y,50,50);
    
    fill(21,1,77);
    rect(0,340,windowWidth,340);
    
    fill(value + 73,0,159);
    rect(25,0,55,340);
    
    fill(value+16,0,125);
    triangle(80,0,80,70,160,0);
    triangle(80,40,80,340,500,340);
    
    fill(value+73,0,159);
    triangle(80,40,80,70,100,53);
    
    fill(value+73,0,159);
  triangle(80,40,80,70,100,53);
  
  fill(value+16,0,125);
  triangle(140,240,140,280,280,340);
  
  fill(69,65,value+155);
  rect(80,280, 80, 60);
  
  fill(88,130,value+55);
  triangle(160,280,160,340,250,340);
  
  fill(0,value-6,129);
  rect(120,240, 20, 40);
  
  fill(value+73,0,159);
  rect(200,250,80,90);
  
  fill(0,94,value+29);
  rect(250,190,30,60);
  
  fill(value-31,65,255);
  rect(280,160,80, 180);
  rect(360, 80, 80, 260);
  rect(360, 0,80, 30);
    
    fill(value+16,0,125);
  rect(440,80,windowWidth,260);
  rect(440,0,windowWidth,30);
  
  fill(0,value+58,216);
  rect(25,40, 55, 30);
    
    fill(0,value+25,113);
  triangle(80,340,80,640,425,340);
  triangle(140,350,140.5,440,280,340);
    
    
    fill(18,value+61,0);
  rect(80,340,80,60);
    
   fill(0,value+58,216);
  rect(120,400,20,40);
  
  fill(4,199,value+65);
  triangle(160,340,160,400,240,340);
  
  fill(55,value+6,63);
  rect(200,340,80,80);
  
  fill(0,value+58,216);
  rect(250,420,30,70);
  
  fill(18,value+61,0);
  rect(280,340,80,160);
  rect(360,340,80,160);
  
  fill(0,value+25,113);
  rect(440,340,windowWidth,160);
 
  fill(55,value+6,63);
  rect(25,340, 55,160);  

	textSize(30);
	fill(255);
	text("Nam",50,200); //shadow
	text("Nguyen",50,225); //shadow
	fill(250);
	text("Nam",49,199);
	text("Nguyen",49,224);

}