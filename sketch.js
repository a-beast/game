var ninja_s
var ninja
var ground
var blade
var spikes
var tile
var box
var swon,swoff 
var doorclose,dooropen
var fence
var bg

function preload() {
 ninja_s=loadImage("assets/stand.png")
 ninja_r=loadAnimation("assets/Run__000.png","assets/Run__001.png","assets/Run__002.png","assets/Run__003.png",
 "assets/Run__004.png","assets/Run__005.png","assets/Run__006.png","assets/Run__007.png","assets/Run__008.png",
 "assets/Run__009.png")
fence=loadImage("assets/fence.png")
groundimg=loadImage("assets/tileL.png")
bgimg=loadImage("assets/bg.png")
}

function setup() {
createCanvas(windowWidth,windowHeight)

bg=createSprite(width/2,height/2)
bg.addImage(bgimg)
bg.scale=2.2


ninja=createSprite(50,height-200,50,50)
ninja.addImage(ninja_s)
ninja.scale=0.3

ninja.addAnimation("running",ninja_r)

ground=createSprite(150,height-100,10,10)
ground.addImage(groundimg)
ground.scale=0.5


}


function draw() {
 background(130)

if(bg.x<0){
bg.x=width/2
}

if (keyDown("space")) {
ninja.changeAnimation("running")
bg.velocity.x=-5
ground.velocity.x=-5
}

 drawSprites()
}

