var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  box.shapeColor=color("white")

}

function draw() 
{
   background("green");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box.shapeColor=color("red")
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box.shapeColor=color("black")
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box.shapeColor=color("blue")
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box.shapeColor=color("orange")
  }

  drawSprites();
  
}




