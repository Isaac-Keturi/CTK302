let cars = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

  //for (let i = 0; i < 20; i++) {
  //
  //}
}

function draw() {
  background("green");
  cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(5, 10), random(5, 10));
    this.a = random(200);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.size = random(15, 25)
  }

  // methods
  display() {
    fill('#e3562b');
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 1;
    
  }
}
