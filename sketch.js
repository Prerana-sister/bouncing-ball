const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  //createSprite(400, 200, 50, 50);

  var  option = {
    isStatic : true
  }
                                                                                        
  ground = Bodies.rectangle(400,390,800,20, option);
  
  World.add(world, ground);
  console.log(ground); 
  
  //circle
  var  option = {
    restitution:1.0
  }
                                                                                        
  ball = Bodies.circle(200,200,30, option);
  World.add(world, ball);
  console.log(ball); 

}

function draw() {
  background("lightBlue"); 
  Engine.update(engine)  ;
  fill("green")
  rectMode(CENTER);
  rect(ground.position.x ,ground.position.y,800,20 );
  fill("purple") 
  ellipseMode(RADIUS);
  ellipse(ball.position.x ,ball.position.y,30);
}