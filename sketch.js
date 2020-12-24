

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var score = 0;


//const Constraint=Matter.Constraint
var  circle1,ground;	
var world,sling;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
 
ground=new Ground(400,400,230,20);
 	World.add(world, ground);

 	box1=new Box(310,370,30,40);

box2=new Box(340,370,30,40);
box3=new Box(370,370,30,40);
box4=new Box(400,370,30,40);
box5=new Box(430,370,30,40);
box6=new Box(460,370,30,40);
box7=new Box(490,370,30,40);
box8=new Box(340,330,30,40);
box9=new Box(370,330,30,40);
box10=new Box(400,330,30,40);
box11=new Box(430,330,30,40);
box12=new Box(460,330,30,40);
box13=new Box(370,290,30,40);
box14=new Box(400,290,30,40);
box15=new Box(430,290,30,40);
box16=new Box(400,250,30,40);
circle1=new Circle(100,200,30);

ground1=new Ground(900,200,230,20);
boxq=new Box(840,170,30,40);
boxw=new Box(870,170,30,40);
boxe=new Box(900,170,30,40);
boxr=new Box(930,170,30,40);
boxt=new Box(960,170,30,40);
boxy=new Box(990,170,30,40);
boxu=new Box(840,130,30,40);
boxi=new Box(870,130,30,40);
boxo=new Box(900,130,30,40);
boxp=new Box(930,130,30,40);
boxa=new Box(960,130,30,40);
boxs=new Box(870,90,30,40);
boxd=new Box(900,90,30,40);
boxf=new Box(930,90,30,40);
boxg=new Box(900,50,30,40);
boxh=new Box(810,170,30,40);
	
	sling =new SlingShot (circle1.body,{x:130,y:200});
	

Engine.run(engine);
	
  
}


function draw() {
	background("lightblue");
Engine.update(engine);
  rectMode(CENTER);
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

boxq.score();
boxw.score();
boxe.score();
boxr.score();
boxt.score();
boxy.score();
boxu.score();
boxi.score();
boxo.score();
boxp.score();
boxa.score();
boxs.score();
boxd.score();
boxf.score();
boxg.score();
boxh.score();

 
  sling.display();
  circle1.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ground.display();

  boxq.display();
  boxw.display();
  boxe.display();
  boxr.display();
  boxt.display();
  boxy.display();
  boxu.display();
  boxi.display();
  boxo.display();
  boxp.display();
  boxa.display();
  boxs.display();
  boxd.display();
  boxf.display();
  boxg.display();
  boxh.display();
  ground1.display();
 

  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
 
  drawSprites();



 
}


   
  function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }
  function keyPressed(){

    if(keyCode === 32){
    circle1.x = 100;
    circle1.y = 200
    sling.attach(circle1.body);
    
    
    }

  }
