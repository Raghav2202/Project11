//crearing a variable for the path
var road;
//creating a variable for the boy
var runner;
//creating variable for boundary sprite
var RightBoundary;
var LeftBoundary;

function preload(){
//pre-load images
  roadImg = loadImage("path.png");

//loading animation
  runningAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200);
  road.addImage(roadImg);
  road.velocityY = 4;
  road.scale = 1.2;

  runner = createSprite(200,300);
  runner.addAnimation("Running",runningAnimation);
  runner.scale = 0.07

  RightBoundary = createSprite(0,200,20,400);
  RightBoundary.visible = false;
  LeftBoundary = createSprite(400,200,20,400);
  LeftBoundary.visible = false;

}

function draw() {
  background("white");

//resetting the background
if(road.y > 400){
  road.y = 0 ;
}

//making the boy move
runner.x = mouseX; 

  drawSprites();
}
