var path;
var man;
var invisiblewall1; 
var invisiblewall2;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  man_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  man = createSprite(200,360)
  man.addAnimation("man",man_running);
  man.scale = .1

  invisiblewall1 = createSprite(15,200,50,400)
  invisiblewall2 = createSprite(395,200,50,400)
  invisiblewall1.visible = (false);
  invisiblewall2.visible = (false);
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

  if(keyIsDown(RIGHT_ARROW)){
    man.velocityX= man.velocityX + 2
  }

  if(keyIsDown(LEFT_ARROW)){
    man.velocityX= man.velocityX - 2
  }
  
  man.collide(invisiblewall1);
  man.collide(invisiblewall2);

  drawSprites();
}
