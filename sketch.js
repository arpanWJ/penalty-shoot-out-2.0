var backgroundImg,footballImg,goalkeeperImg;
var marginTop,marginRight,marginLeft;
var football,goalkeeperleftsaveImage,
rightsaveImage,toprightsaveImage,topsaveImage,scoreBoard,scoreBoardImg;
var targetTL,targetTR,targetL,targetR,targetImg;
var shoot=1,goals=0;
var save1=0;
function preload(){
  backgroundImg=loadImage("assets/background.jpg");
  footballImg=loadImage("assets/football.png");
  goalkeeperImg=loadAnimation("assets/stand-small.png");
  leftsaveImage= loadAnimation("assets/left-save-small.png");
  rightsaveImage = loadAnimation("assets/right-save-small.png");
  topleftsaveImage = loadAnimation("assets/top-left-save-small.png");
  toprightsaveImage = loadAnimation("assets/top-right-save-small.png");
  scoreBoardImg=loadImage("assets/scoreBoard.png");
  targetImg=loadImage("assets/target.png");
}
function setup(){
  createCanvas(732,600);
   marginTop=createSprite(width/2,height/2-60,width,10);
   marginRight=createSprite(width/2-190,height/2-100,10,width);
   marginLeft=createSprite(width/2+190,height/2-100,10,width);
    // marginLeft.visible = false;
    // marginRight.visible = false;
    // marginTop.visible = false;
   scoreBoard=createSprite(width/2-250,height/3-150);
   scoreBoard.addImage("score",scoreBoardImg);
   scoreBoard.scale=0.3;

  goalkeeper=createSprite(width/2,height/2+95);
  goalkeeper.addAnimation("goalkeeper",goalkeeperImg);
   goalkeeper.addAnimation("goalkeeperTL",topleftsaveImage);
   goalkeeper.addAnimation("goalkeeperTR",toprightsaveImage);
   goalkeeper.addAnimation("goalkeeperL",leftsaveImage);
   goalkeeper.addAnimation("goalkeeperR",rightsaveImage);
  goalkeeper.scale=1.4;
  goalkeeper.debug=true;
  goalkeeper.setCollider("circle", 0,0,50);

  targetTL=createSprite(125,height-380,20,20);
   targetTL.addImage("target1",targetImg);
 targetTL.scale=0.2;  

 targetL=createSprite(110,height-200,20,20);
   targetL.addImage("target1",targetImg);
 targetL.scale=0.2;  
 targetL.debug=true;
 
 targetR=createSprite(600,height-200,20,20);
   targetR.addImage("target1",targetImg);
 targetR.scale=0.2;  
 targetR.debug=true;

 targetTR=createSprite(590,height-380,20,20);
   targetTR.addImage("target1",targetImg);
 targetTR.scale=0.2;  

 football=createSprite(width/2,height/2+270);
  football.addImage("football",footballImg);
  football.scale=0.8;
  football.debug=true;
}
function draw(){
  background(backgroundImg);
  if(shoot===2){
    saves();
  }
  
  shot();
  goalkeeper.collide(marginTop);
  goalkeeper.collide(marginLeft);
  goalkeeper.collide(marginRight);
  console.log("goals are "+goals);
  console.log(" and save are "+save1);
  drawSprites();
}
// goalkepper movement
function saves(){
  if(keyDown("D")){
    goalkeeper.position.x=goalkeeper.position.x+5;
    goalkeeper.changeAnimation("goalkeeperR",rightsaveImage);
  }

  if(keyDown("A")){
    goalkeeper.position.x=goalkeeper.position.x-5;
    goalkeeper.changeAnimation("goalkeeperL",leftsaveImage);
   
  }
  if(keyDown("W")){
    goalkeeper.position.y=goalkeeper.position.y-2.5;
    goalkeeper.position.x=goalkeeper.position.x-2.5;
    goalkeeper.changeAnimation("goalkeeperTL",toprightsaveImage);
    
  }
  if(keyDown("S")){
    goalkeeper.position.y=goalkeeper.position.y-2.5;
    goalkeeper.position.x=goalkeeper.position.x+2.5;
    goalkeeper.changeAnimation("goalkeeperTR",topleftsaveImage);
    
  }
  
}

function shot(){
  if(keyDown("UP_ARROW")&&shoot===1){
  shoot=2;
  football.x=width/2;
  football.y=height/2+270;
  football.setVelocity(-4,-5);
  console.log("up"+ shoot);
  
  }
  if(keyDown("LEFT_ARROW")&&shoot===1){
    shoot=2;
    football.x=width/2;
    football.y=height/2+270;
    football.setVelocity(-9,-5);
    console.log("up"+ shoot);
    
    }
    if(keyDown("RIGHT_ARROW")&&shoot===1){
      shoot=2;
      football.x=width/2;
      football.y=height/2+270;
      football.setVelocity(9,-5);
      console.log("up"+ shoot);
      
      }

      if(keyDown("DOWN_ARROW")&&shoot===1){
        shoot=2;
        football.x=width/2;
        football.y=height/2+270;
        football.setVelocity(20,-25);
        console.log("up"+ shoot);
        
        }

  if(football.collide(targetTL)||football.collide(targetL)||football.collide(targetR)||football.collide(targetTR)){
    resetGoal();
    goals=goals+1;
    console.log(goals);
  }
  if(football.collide(goalkeeper)){
  save1=save1+1;
  console.log(save1);
  resetGoal();
  }
}
function resetGoal(){
  shoot=1;
  football.setVelocity(0,0);
  football.position.x=width/2;
  football.position.y=height/2+270;
  goalkeeper.position.x=width/2;
  goalkeeper.position.y=height/2+85;
  goalkeeper.changeAnimation("goalkeeper",goalkeeperImg);
  
}
