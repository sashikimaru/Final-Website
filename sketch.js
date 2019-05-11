
var value = 100;
var x = 0;
var y = 0;
function setup() {
  var canvas = createCanvas(windowWidth, 500);
  canvas.parent('header');
}

function draw() {

	//background ('#616161');
	noStroke();

    
    fill(255,255, value + 100);
    ellipse(400,55,50,50);
    
    //fill('#616161');
    //rect(0,340,windowWidth,340);
    
    fill('#01a9f4');
    rect(25,0,55,340);
    
    fill('#007ac1');
    triangle(80,0,80,70,160,0);
    triangle(80,40,80,340,500,340);
    
    fill('#67daff');
    triangle(80,40,80,70,100,53);
    
    fill('#67daff');
  triangle(80,40,80,70,100,53);
  
  fill('#01a9f4');
  triangle(140,240,140,280,280,340);
  
  fill('#007ac1');
  rect(80,280, 80, 60);
  
  fill('#67daff');
  triangle(160,280,160,340,250,340);
  
  fill('#007ac1');
  rect(120,240, 20, 40);
  
  fill('#01a9f4');
  rect(200,250,80,90);
  
  fill('#007ac1');
  rect(250,190,30,60);
  
  fill('#007ac1');
  rect(280,160,80, 180);
  rect(360, 80, 80, 260);
  rect(360, 0,80, 30);
    
    fill('#01a9f4');
  rect(440,80,windowWidth,260);
  rect(440,0,windowWidth,30);
  
  //fill('#616161');
  //rect(25,40, 55, 30);
    
    //fill('#616161');
  //triangle(80,340,80,640,425,340);
  //triangle(140,350,140.5,440,280,340);
    
    
    fill('#373737');
  rect(80,340,80,60);
    
   fill('#373737');
  rect(120,400,20,40);
  
  fill('#8e8e8e');
  triangle(160,340,160,400,240,340);
  
  fill('#8e8e8e');
  rect(200,340,80,80);
  
  fill('#8e8e8e');
  rect(250,420,30,70);
  
  fill('#373737');
  rect(280,340,80,160);
  rect(360,340,80,160);
  
  //fill('#616161');
  //rect(440,340,windowWidth,160);
 
  fill('#373737');
  rect(25,340, 55,160);  

	textSize(30);
	fill('#000000');
	text("Nam",50,200); //shadow
	text("Nguyen",50,225); //shadow
	fill('#ffffff');
	text("Nam",49,199);
	text("Nguyen",49,224);

}
