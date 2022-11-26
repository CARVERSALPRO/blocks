
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic:true
  };
  
  ground=Bodies.rectangle(100,300,400,20);
  ground = Bodies.rectangle(100,300,400,20,ground_options);
  World.add(world,ground);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var box_options={
    isStatic:true
  };
  box=Bodies.rectangle(200,100,50,50,)
  box=Bodies.rectangle(200,100,50,50,box_options);
  World.add(world,box)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    
    box=new Box(mouseX,mouseY,20,20)
   
    

    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,400,10);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();

}

box=new Box(mouseX,mouseY,20,20)
      
  }
  


