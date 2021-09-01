class Ball {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage("Sushi.png");
        World.add(world, this.body);
    }

    display() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        fill("black");
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        noStroke();
        pop();
        }
}