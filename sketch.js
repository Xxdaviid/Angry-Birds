const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, ground, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var imagemfundo;
var plataforma;
var estilingue;

function preload(){
imagemfundo= loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,400,1200,20);
    pig1 = new Pig(810,350); 
log1= new Log(810,260,300,PI/2);

box3= new Box(700,240,70,70);
box4= new Box(920,240,70,70);
pig2= new Pig(810,220);
log2= new Log(810,180,300,PI/2);

box5= new Box(810,160,70,70);
log3= new Log(760,120,150,PI/7);
log4= new Log(870,120,150,-PI/7);

bird = new Bird(100,100);

plataforma = new Ground(150,305,300,170);


estilingue= new Estilingue(bird.body,{x:200,y:100});
}

function draw(){
background(imagemfundo);
Engine.update(engine);
box1.display();
box2.display();
ground.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();
plataforma.display();
estilingue.display();
}

function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});    
}
function mouseReleased(){
estilingue.fly();
}