class canhao {
constructor(x,y,width,height,angle){
this.x=x
this.y=y
this.width=width
this.height=height
this.angle=angle
this.imgcanhao= loadImage("canon.png")
this.imgbasecanhao= loadImage("cannonBase.png")
}











show(){
    console.log(this.angle)
    if(keyIsDown(RIGHT_ARROW)&&this.angle<66)
    {
        this.angle=this.angle+1
    }
    if(keyIsDown(LEFT_ARROW)&&this.angle>-48)
    {
        this.angle=this.angle-1
    }
push()
translate(this.x,this.y)
rotate(this.angle)
imageMode(CENTER)
image(this.imgcanhao,0,0,this.width,this.height)
pop()

image(this.imgbasecanhao,70,20,200,200)




}

}





























































































































































































