class paper {
    constructor(x, y, radius) {
      var options = {
          'friction':0.5,
          'density':1.2,
          isStatic:false,
          friction:0.5

      }
      this.body =Matter.Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      ellipse(0, 0, this.radius);
      pop();
    }
  };