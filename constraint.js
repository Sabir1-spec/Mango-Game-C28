class Chain {
    constructor(body1, body2, offsetX, offsetY) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

         var options = {

             bodyA :body1,
             bodyB :body2,
             pointB: {x: this.offsetX, y: this.offsetY},
             stiffness : 0.01,
             length :2
         }

        this.bodyX = body1;
        this.bodyY = body2;

         this.chain = Constraint.create(options);
         World.add(world, this.chain);

    }

    attach(body) {

        this.chain.bodyA = body;
    }
    
     fly() {

        this.chain.bodyA = null;
    }

        display() {

            if(this.chain.bodyA != null) {

                var pointA = this.chain.bodyA.position;
                var pointB = this.chain.bodyB.position;

                strokeWeight(3);

                var Anchor1X = pointA.x;
                var Anchor1Y = pointA.y;

                var Anchor2X = pointB.x;
                var Anchor2Y = pointB.y;

                Anchor2X = pointB.x + this.offsetX;
                Anchor2Y = pointB.y + this.offsetY;

                line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

        }

        }
    
}