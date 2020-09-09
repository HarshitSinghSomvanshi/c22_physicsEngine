const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 
    var ground_options ={
        isStatic: true
    }
 
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
   
    var ball1_options ={
         restitution: 1.0
    }
   ball1 = Bodies.circle(200,200,10,ball1_options);
   var ball2_options ={
    restitution: 1.0
}
   ball2 = Bodies.circle(300,200,20,ball2_options);
   World.add(world,ball1);
   World.add(world,ball2);
   
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,10,10);
    ellipse(ball2.position.x,ball2.position.y,20,20);

}