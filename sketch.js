var GameState = "START";

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Ground1 = new Ground(400, 700, 800, 20);

	Stone1 = new Stone(25, 565, 40, 40);

	ConstraintConnecter = new Ground(45, 595, 0.000000000000000000000000000001, 0.00000000000000000000000000000000000000001);

	Mango1 = new Mango(520, 390, 0.7, 70);
	Mango2 = new Mango(500, 300, 0.6, 60);
	Mango3 = new Mango(570, 250, 0.65, 65);
	Mango4 = new Mango(650, 370, 0.75, 75);
	Mango5 = new Mango(700, 300, 0.55, 55);
	Mango6 = new Mango(610, 320, 0.55, 55);
	Mango7 = new Mango(730, 380, 0.65, 65);
	Mango8 = new Mango(450, 360, 0.65, 65);

	Tree1 = new Tree(400, 215, 400, 500);

	Chain1 = new Chain(Stone1.body, ConstraintConnecter.body, 0, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#BBE5F3");
  
  Ground1.display();

  Tree1.display();

  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();

  Chain1.display();

  ConstraintConnecter.display();
  //ConstraintConnecter2.display();

  image(boyImg, 10, 545, 200, 200);

  Stone1.display();

  drawSprites();

  /*detectcollision(Stone1, Mango1);
  detectcollision(Stone1, Mango2);
  detectcollision(Stone1, Mango3);
  detectcollision(Stone1, Mango4);
  detectcollision(Stone1, Mango5);
  detectcollision(Stone1, Mango6);
  detectcollision(Stone1, Mango7);
  detectcollision(Stone1, Mango8);*/
 
}

function mouseDragged(){
    if(GameState == "START") {
    Matter.Body.setPosition(Stone1.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    GameState = "FINISH";
    Chain1.fly();
    ConstraintConnecter.x = 500;
    ConstraintConnecter.y = 1000;

}

function keyPressed(){
    if(keyCode === 32){
        Chain1.attach(Stone1.body);
        Matter.Body.setPosition(Stone1.body, {x: mouseX , y: mouseY});
        
        
    }
}
