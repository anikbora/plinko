const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions = [];
var plinko = [];
var particles = [];
function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
	world = engine.world;
  floor = new Ground(240,800,480,10)
}

function draw() {
  background(0 ,0 ,0); 
  floor.display()
  for(var n = 0; n<=5; n+=1){
    divisions.push(new Divisions(80*n, 650, 10, 300))
    divisions[n].display()
  }

  for (var j = 40; j <= 480; j += 50){
    plinko.push(new Plinkos(j, 75))
  }

  for (var j = 15; j <= width-10; j = j+50){
    plinko.push(new Plinkos(j, 175))
  }

  for (var j = 0; j < plinko.length; j++){
    plinko[j].display()
  }

  if(frameCount % 60 == 0){
    particles.push(new Particle(random(230, 250), 10, 10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display()
  }
  drawSprites();
}