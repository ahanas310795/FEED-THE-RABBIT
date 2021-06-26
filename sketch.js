var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();

  drawSprites();
  
}

function createApples(){

  if(frameCount%60==0){
  apple=createSprite(80,40,10,10)
  apple.velocityY=4
  apple.shapeColor="red"
  apple.x=Math.round(random(50,350))
  }
}

function createLeaves(){

  if(frameCount%60==0){
  leaves=createSprite(80,40,10,10)
  leaves.velocityY=4
  leaves.shapeColor="green"
  leaves.x=Math.round(random(50,350))
  }
}



