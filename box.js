class Box{
    constructor(x,y){
        var options={
            isStatic : false,
            'restitution': 0.2,
            'friction' : 1,
            'density': 0.1
        }
        this.body = Bodies.rectangle(x,y,60,60,options)
       World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        strokeWeight(2)
        stroke("black")
        rectMode(CENTER)
        rect(0,0,60,60)
        pop()
    }
}