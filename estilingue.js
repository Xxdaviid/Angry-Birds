class Estilingue{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:10    
}
this.pointB=pointB
this.estilingue= Constraint.create(options);
World.add(world,this.estilingue);
}
fly(){
this.estilingue.bodyA=null;    
}
display(){
if(this.estilingue.bodyA){
var pontoA=this.estilingue.bodyA.position;
var pontoB=this.pointB;
strokeWeight(4);
line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
}

}
}