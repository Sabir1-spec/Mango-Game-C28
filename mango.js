class Mango {
    constructor(x,y,radius, scale) {
      var options = {
          isStatic: true,
          retitution: 0,
          friction: 1,
          density: 1.2

        }
        
      this.image = loadImage("sprites/mango.png");

      this.scale = scale;

      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius * 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      //fill("brown");
      image(this.image, pos.x, pos.y, this.radius, this.scale);
    }
  };