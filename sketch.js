var thief , thiefImg , edges;
var tower,towerImg;
var boomer,boomer1Img, boomer2Img, boomer3Img;
var obstacle,obstacleImg;
 
function preload(){
  towerImg = loadImage("Images/Tower.jpg");
  boomer1Img = loadImage('Images/bommer1.png');
  boomer2Img = loadImage('Images/boomer2.png');
  boomer3Img = loadImage('Images/boomer3.png');
  thiefImg= loadAnimation('Images/Theif1.png' , 'Images/Theif2.png', 'Images/Theif3.png');
  obstacleImg = loadImage('Images/Obstacle.png');

}

function setup() {
  createCanvas(600,600);

  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityX = -2;

  thief = createSprite(10, 350, 20, 50);
  thief.addAnimation('running',thiefImg);
  thief.scale = 0.5;
}
function draw() {
  background("black");
  
  if(tower.x<0){
    tower.x = 300;
  }
 thief.x = World.mouseX;
 thief.y = World.mouseY;
  edges = createEdgeSprites();
  //thief.collide(edges);
  spawnBoomers();
  spawnObstacles();

  drawSprites();
} 

function spawnBoomers(){
  if(frameCount % 240 === 0){
   boomer = createSprite(600,365,10,40);
   boomer.scale = 0.2;
   boomer.velocityX = -1;
   boomer.y = Math.round(random(250,50));
   var rand = Math.round(random(1,2));
   boomer.lifetime = 600;

   switch(rand){
     case 1:boomer.addImage(boomer1Img);
     
     break;

     case 2:boomer.addImage(boomer2Img);
     break;

     case 3:boomer.addImage(boomer3Img);
     break;
   }
  }
}
 
function spawnObstacles(){
  if(frameCount % 240 === 0){
    obstacle = createSprite(600,475,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImg);
    obstacle.lifetime = 100;
  }
}
