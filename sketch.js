
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 180;
var button,buttonImg;


function setup() {
  createCanvas(600,500);

  engine = Engine.create();
  world = engine.world;

  var ball_op = { 
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_op = {
    isStatic : true
  }

  
  ball = Bodies.circle(300,30,20,ball_op)
  World.add(world,ball);

  leg = Bodies.rectangle(0, 0, 700, 40);
  
  foot = Bodies.rectangle(300, 300, 200, 100, ground_op);
  World.add(world,foot);

  ground = Bodies.rectangle(0,490,700,20,ground_op);
  World.add(world,ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  //if (mouseClicked(foot)) {
  //  Matter.Body.apllyForce(ball,{x:0,y:0},{x:0,y:-0.1})
  //}

  rect(foot.position.x,foot.position.y,200, 100)
  rect(ground.position.x,ground.position.y,1200,20);

  Matter.Body.rotate(leg, angle);

  translate(leg.position.x, leg.position.y);
  rotate(angle);
  rect(0, 0, 700, 40);
}
