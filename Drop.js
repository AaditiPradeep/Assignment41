class Drop {
    constructor(x, y){
        var options ={
            speed :30,
            density:1.0, 
        }
     
        this.body = Bodies.circle(x, y,10, options);
        //this.radius = radius;
        
        World.add(world, this.body);
}

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("blue");
        circle(0,0,10)
        pop();
        }
    }
