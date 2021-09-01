const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform1;
var platform2;
var platform3; 

var balls = 20;
var ball1;
balls1 = [];

var plate;

function preload() {
  plateImg = loadImage("Plate.png");
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  platform1 = new Platform(400, 400, 400, 100);


  for (var i = 0; i <= 20; i++) {
    var x = 400
    var y = 0
    var ball1 = new Ball(x, y, 75, 50);
    balls1.push(ball1);
  }

}


function draw() 
{
  background("yellow");
  Engine.update(engine);
  textSize(30);
  text("There are " + balls + " pieces of sushi...", 200, 600);
  text("You are a waiter giving the order to the customer...", 90, 650)
  text("Press left and right arrows to balance the plate!", 100, 700);
  textSize(40);
  text("DON'T DROP THE SUSHI!!!", 150, 100);

  platform1.display();


  for(var ball1 of balls1) {
    ball1.display();
  }

}

