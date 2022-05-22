
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var radius = 30;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic : false,
		restitution: 0.3,
		friction : 0,
		desntiy : 1.2

	} 
	groundObj = new Ground (width/2,670,width,20);
	leftSide = new Ground (1100,600,20,120);
	rightSide = new Ground (1350,600,20,120);
	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  
 groundObj.display();

 rightSide.display();
 leftSide.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}
