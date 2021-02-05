class Hero{
    constructor(x,y,r){
        var options = {
            density: 0.4
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("images/Superhero-01.png")
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,300,200)
        pop()
    }
}