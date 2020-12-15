
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,600,1600,20);
	ball = new Ball(400,200,80,80);	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  ball.display();
  
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

if(keyCode === UP_ARROW)
{
	Matter.Body.applyForce(ball.body, ball.body.position, {x:800,y:200});
	}
