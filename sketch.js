const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground, hero, fly, backgroundImg
var box

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create()
  world = engine.world
  // create sprites here

  ground = new Ground(0,650,2500,20)

  hero = new Hero(250,400,10)

  fly = new Fly(hero.body,{x:250,y:100})

  box = new Box(500,600,60,60)
  box1 = new Box(600,600,60,60)
  box2 = new Box(700,600,60,60)
  box3 = new Box(800,600,60,60)

  box4 = new Box(500,538,60,60)
  box5 = new Box(600,538,60,60)
  box6 = new Box(700,538,60,60)
  box7 = new Box(800,538,60,60)
 
  box8 = new Box(500,476,60,60)
  box9 = new Box(600,476,60,60)
  box10 = new Box(700,476,60,60)
  box11 = new Box(800,476,60,60)

  box12 = new Box(500,414,60,60)
  box13 = new Box(600,414,60,60)
  box14 = new Box(700,414,60,60)
  box15 = new Box(800,414,60,60)

  box16 = new Box(500,352,60,60)
  box17 = new Box(600,352,60,60)
  box18 = new Box(700,352,60,60)
  box19 = new Box(800,352,60,60)

  box20 = new Box(500,290,60,60)
  box21 = new Box(600,290,60,60)
  box22 = new Box(700,290,60,60)
  box23 = new Box(800,290,60,60) 
  
  monster = new Monster(1000,600,200,20)

}

function draw() {
  background(backgroundImg);
  Engine.update(engine)

  ground.display()
  hero.display()
  fly.display()
  box.display()
  box1.display()
  box2.display()
  box3.display()

  box4.display()
  box5.display()
  box6.display()
  box7.display()

  box8.display()
  box9.display()
  box10.display()
  box11.display()

  box12.display()
  box13.display()
  box14.display()
  box15.display()

  box16.display()
  box17.display()
  box18.display()
  box19.display()

  box20.display()
  box21.display()
  box22.display()
  box23.display()

  monster.display()

  
}
function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}

