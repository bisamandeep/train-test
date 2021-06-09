const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
const Constraint =Matter.Constraint;


var engine,world
var b1,b2,b3,b4

function preload(){
    getBackgroundImg();
}
function setup(){
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
}
function draw(){
 background(BackgroundImg)
    Engine.update(engine);


}

