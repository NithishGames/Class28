
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var tree , stone , ground , mango1;
var boy , boyImage  ,slingshot;



function preload()
{

  
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground (750,690,1500,20)
	tree = new Tree(1000,360,700,700)
	mango1 = new Mango(670,300,25,25)
	mango2 = new Mango(760,350,25,25)
	mango3 = new Mango (830,350,25,25)
	mango4 = new Mango(1000,300,25,25)
	mango5 = new Mango (1200,350,25,25)
	mango6 = new Mango (1110,350,25,25)
	mango7 = new Mango (905,350,25,25)
	mango8 = new Mango (1280,350,25,25)
	mango9 = new Mango (1320,280,25,25)
	mango10 = new Mango (710,230,25,25)
	boy = new Boy (350,590,265,350)
	stone = new Stone (265,500,25,25) 

	slingshot = new SlingShot(stone.body,{x:265,y:500});  
}




function draw() {
  background("Orange");
	Engine.update(engine);
	rectMode(CENTER);
	textSize(30)
	//Fill("white")

drawSprites();  

  slingshot.display();
  tree.display();
  boy.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display(); 
  mango9.display();
  mango10.display(); 

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  fill("white")
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY) 
	  

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPreseed (){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:200,y:100});
        slingshot.attach(stone.body);
    }
}

function detectCollision(lstone,lmango){
   mangoBodyPosition = lmango.body.position
   stoneBodyPosition = lstone.body.position

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false)
   }
}