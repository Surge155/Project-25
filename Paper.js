class paper{
    constructor(){
        var options = {
            isStatic: false,
            restitution:  0.3,
            friction: 0.5,
            density:1.2
          }
          this.Body = Bodies.circle(100,660,10,options);
          this.radius = 1;
          World.add(world,this.Body);

          this.image = loadImage("paper.png");
    }

    display(){
        fill(500);
        ellipseMode(CENTER);
        ellipse(100,600,this.radius,this.radius);

        imageMode(CENTER);
			image(this.image,100,600,this.width,this.height);
    }
}

