const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,30,option);
  World.add(world,ground);
  var balloption={
    restitution:3.0
  }

  ball=Bodies.circle(200,100,30,balloption);
  World.add(world,ball);
}

function draw() {
  background("Black");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  fill("gold");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30) 
  drawSprites();
}