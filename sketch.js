const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3, ground1, paper1;

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  box1 = new box(700,600,20,70);
    box2 = new box(850,600,20,70);
    box3 = new box(775,623,125,20);
    ground1 = new Ground(500, 650, 1000, 30);
    paper1 = new paper(100, 100, 20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ground1.display()
 paper1.display()
keyPressed()
}

function keyPressed(){
if (keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper1.body, paper1.body.position,{x:3, y:-3});  
}
}

