class chain{
constructor(bodyA,bodyB)
{
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:6,
    stiffness:0.05

}

this.chain=Matter.Constraint.create(options)
  World.add(world,this.chain)

}
display()
{
var pointA=this.chain.bodyA.position
var pointB=this.chain.bodyB.position
line (pointA.x,pointA.y,pointB.x,pointB.y)


}



}