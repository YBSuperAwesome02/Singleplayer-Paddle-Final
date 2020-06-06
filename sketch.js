                                                                                                                                      var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9; 
  ball.scale = 0.625
  paddle=createSprite(380,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(0,0,200);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  ball.bounceOff(paddle, randomVelocity)
//  randomVelocity()
  
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(-8,8);
}

