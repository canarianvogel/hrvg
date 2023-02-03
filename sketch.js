const Engine=Matter.Engine
const World = Matter.World;
const Bodies= Matter.Bodies;
var engine;
var world;
var chao
var pchao
var fundo
var torre
var imgtorre
var ptorre
var canhao1
var bola1
var novoangulo
var velocidadev
var matrizb=[]
function preload (){
fundo=loadImage("background.gif")
imgtorre=loadImage("tower.png")

}






function setup(){
createCanvas(1200,600);
engine=Engine.create();
world=engine.world;
angleMode(DEGREES)
pchao={
  isStatic:true
  }
  chao=Bodies.rectangle(0,height-1,width*2,100,pchao)
  World.add(world,chao)




  ptorre={

    isStatic:true
  }
  torre=Bodies.rectangle(160,350,160,310,ptorre)
  World.add(world,torre)

canhao1=new canhao(180,110,130,100,15)




}
function draw()
{
background(fundo);
Engine.update((engine))

rectMode(CENTER)
rect(chao.position.x,chao.position.y,width*2,100)
push()
imageMode(CENTER)
image(imgtorre, torre.position.x,torre.position.y,160,310)
pop()
canhao1.show()
for(var galo=0;galo<matrizb.lenght;galo++){
 mostrabola (matrizb[galo])





}
}



function keyReleased(){
if (keyCode==32){
matrizb[matrizb.length-1].atira()

}

}

function keyPressed(){
if(keyCode==32){
  bola1=new bola(canhao1.x,canhao1.y)
Matter.Body.setAngle(bola1.body,canhao1.angle)
matrizb.push(bola1)

}


}
function mostrabola(bola1){

if(bola1){

  bola1.show()
}
}


















































































































