const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, canvas;
var man;

var rain = [];
var x, y = 0;
var maxDrop = 50;

function preload(){
 thunder_img = loadImage("thunder.jpg");   
} 

function setup() {
  canvas = createCanvas(400,600);
  engine = Engine.create();
  world = engine.world; 

  ground = new Ground(100,height,100,20);
  man = new Umbrella(100,540);
}

function newDrop() {
    for (var i=0; i<3; i++){
      x = random (0,400);
      y = random(-20,100);
      rain.push(new Drop(x,y));
    }
}




function draw(){
 background(0);
 Engine.update(engine) ;
 
  newDrop();
     for (var j = 0; j < rain.length ; j++) {
     rain[j].display();
     }  
     
     man.display();
     
     if(frameCount%60===0){
         var thunder = createSprite(10,10,20,20);
             thunder.addImage(thunder_img,1,10,5,1);
             drawSprites();
       }
}

