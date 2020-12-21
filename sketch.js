const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bob1, bob2, bob3, bob4, bob5;
var groundObject;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

  var bobDiameter = 40;

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(410, 600, 160);
	bob2 = new Bob(570, 600, 160);
	bob3 = new Bob(730, 600, 160);
	bob4 = new Bob(890, 600, 160);
	bob5 = new Bob(1050, 600, 160);
  groundObject = new ground(width/2,150,width,20);
  rope1 = new Rope(bob1.body,groundObject.body, -bobDiameter*10,0);
  rope2 = new Rope(bob2.body,groundObject.body, -bobDiameter*5,0);
  rope3 = new Rope(bob3.body,groundObject.body, 0,0);
  rope4 = new Rope(bob4.body,groundObject.body, +bobDiameter*5,0);
  rope5 = new Rope(bob5.body,groundObject.body, +bobDiameter*10,0);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options : {
      width: 1200,
      height: 700,
      wireframes: false
    }
  })
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  groundObject.display();
 
}

function keyPressed() { 
	if (keyCode === 82){ 
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); 
  } 
} 

function drawLine(constraint) { 
  bobBodyPosition=constraint.bodyA.position 
  groundBodyPosition=constraint.bodyB.position 
  groundBodyOffset=constraint.pointB; 
  groundBodyX=groundBodyPosition.x+groundBodyOffset.x
   groundBodyY=groundBodyPosition.y+groundBodyOffset.y 
   line(bobBodyPosition.x, bobBodyPosition.y, groundBodyX,groundBodyY); 
  }