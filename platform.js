class Platform {
    constructor(x, y, width, height, angle) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.angle = this.body.angle;
      this.collapse = false;
      this.image = loadImage("Plate3.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, -PI / 256); // -90 degree
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      if (keyIsDown(RIGHT_ARROW)) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(LEFT_ARROW)) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      push();
      imageMode(CENTER);
      translate(pos.x, pos.y);
      noStroke();
      fill("black");
      rotate(angle);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  