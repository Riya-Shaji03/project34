class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1
        }
        this.rope = Matter.Constraint.create(options)
        Matter.World.add(world,this.rope)
        this.pointB = pointB
    }
    display(){
        strokeWeight(0)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}