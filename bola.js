class bola{
constructor(x,y){
    this.raio=30
var propriedadesdabola={
    isStatic:true
}
this.body=Bodies.circle(x,y,this.raio,propriedadesdabola)
this.imgbola=loadImage("ca.png")
World.add(world,this.body)
}
atira(){
novoangulo=canhao1.angle-28
novoangulo=novoangulo*(3.14/180)
velocidadev=p5.Vector.fromAngle(novoangulo)
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:velocidadev.x*(180/3.14), y:velocidadev.y*(180/3.14)})


    


}






show(){


push()
imageMode(CENTER)
image(this.imgbola,this.body.position.x,this.body.position.y,this.raio,this.raio)

pop()
}

}