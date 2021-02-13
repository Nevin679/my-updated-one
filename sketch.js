var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
var rand=randomNumber(400,1500)
console.log()
weight=(rand)
 bullet= createSprite(50, 200, 20, 40);
 bullet.ShapeColor= "white";
 wall=createSprite(1200,200,thickness,height/2);
 wall.color(80,80,80)


 thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)
}

function draw() {
  background(255,255,255);  
if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
}
if (damage>10){
  wall.ShapeColor=color(255,0,0);
}

if (damage<10){
    wall.ShapeColor=color(0,255,0);
  }
}
function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
    return true
  }
  return false;

  drawSprites();
}