class Umbrella {
      constructor(x, y){
          var options = {
            isStatic:true
          }
          this.body = Bodies.circle(x, y, 50, options);
          this.image = loadImage("umbrella.png");
          World.add(world, this.body);
      }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0,100,120);
        pop();
        }
    
}