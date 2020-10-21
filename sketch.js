var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1200,400);
speed = random(5,0);
weight = random(1,1);
thickness=random(22,80)

wall = createSprite(1100,200,60,200);
//wall.shapeColor = color(70,70,70);

bullet = createSprite(200,200,25,25);  
bullet.velocityX = speed;
bullet.shapeColor = "white";

}

function draw() {
  background(0,0,0);  

    //hasCollided();hasCollided 
    
  if(wall.x-bullet.x<(bullet.width = wall.width/2)){

    bullet.velocity = 0; 
    var deformation = 0.5*weight*speed*speed/22509;

    if(deformation<180){
      bullet.velocityX = 0;
      wall.shapeColor = color(255,0,0);      
    }
  
    if(deformation<180 && deformation>100){
      bullet.velocityX = 0;
      wall.shapeColor = color(230,230,0);
    }
  
    if(deformation>100){
      bullet.velocityX = 0;
      wall.shapeColor = color(0,255,0); 
    }
  }

  


  
  

 
  drawSprites();
}

//function hasCollided(bullet,wall){

//bulletRightEdge = bullet.x + bullet.width;
//wallLeftEdge = wall.x;

// if(bulletRightEdge>=wallLeftEdge){
 //  return true;
// }
 //return false;}



