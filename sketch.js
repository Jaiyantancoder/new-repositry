var bullet,wall;

var speed,weight,thickness;


function setup() {

//Creating the canvas
createCanvas(1600,800);

//Creating the car
bullet = createSprite(30,400,50,20);
bullet.shapeColor = "white";
//bullet.addImage(bulletimage);

//Creating the wall
wall = createSprite(1200,400,thickness,height/2);
wall.shapeColor = "blue"; 

//Declaring speed and weight and thickness
speed = random (135,175); 
weight = random (30,72);
thickness = random (70,120);
bullet.velocityX = speed;
wall.width = thickness;

}

function draw() {

//Creating the background
background(0,0,0);

if(isTouching(bullet,wall)){
  
 bullet.velocityX = 0;

 var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
 

if(deformation<10){

  wall.shapeColor = "green";
  
  }
  
  if(deformation<5 && deformation>10){
  
  wall.shapeColor = "yellow";
  
  }
  
  if(deformation>10){
  
  wall.shapeColor = "red";
  
  }

  }
  

drawSprites();

}



  




