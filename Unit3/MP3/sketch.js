let state = 0;
let cars = [];
let timer = 0;
let mouseLoc;
let lol;
let orc;
let song;

function preload() {
  song = loadSound('assets/lotrsong.mp3');

  song.loop();
  song.pause();

}

function setup() {
  createCanvas(500, 500);
  lol = loadImage("assets/lol.jpg");
  orc = loadImage("assets/orc3.jpg");
  mouseLoc = createVector(0, 0);
  rectMode(CENTER);
  imageMode(CENTER);
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }
}

function resetTheGame() {
  timer = 0;
  cars = [];
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }
}

function draw() {
  switch (state) {
    //welcome
    case 0:
      song.play();
      state = 1;
      break;

    case 1:
      background("purple");
      fill("yellow");
      textSize(30);
      text("WELCOME WELCOME WELCOME", 10, 30);
      text("Can you defeat the orcs?", width / 2 - 160, 70);
      fill("white");
      rect(width / 2, height / 2, 100, 100);
      textSize(20);
      text("click here to begin", width / 2 - 80, height / 2 - 60);
      break;

      //game


    case 2:
      game();
      if (cars.length == 0) {
        state = 3;
      }
      timer++;
      if (timer >= 7 * 60) {
        state = 4;
      }
      fill("white");
      textSize(20);
    //  song.pause();
      break;

      //win
    case 3:
      background("green");
      fill("white");
      textSize(25);
      text("YOU WON!", width / 2 - 50, 100);
      text("THATS NOT SUPPOSED TO HAPPEN", width / 2 - 210, 150);
      song.pause();
      //song.loop();
      break;

      //lose
      //click to switch back
    case 4:
      background("red");
      image(lol, width / 2, height / 2, 200, 200);
      fill("white");
      textSize(30);
      text("YOU LOST! HAHAHAHAHAHAHAHA", width / 2 - 250, 100);
      song.pause();
      //song.loop();
      break;
  }
}

function game() {
  background("brown");

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].clicked == true) {
      cars.splice(i, 1);
    }
  }
}

function mouseReleased() {
  //song.pause();

  //if (song.isPlaying()) {
    //song.pause();
  //} else {
  //  song.loop();
  //}


  switch (state) {
    case 1:
      if (
        mouseX > width / 2 - 50 &&
        mouseX < width / 2 + 50 &&
        mouseY > height / 2 - 50 &&
        mouseY < height / 2 + 50
      ) {
        state = 2;
      }
      break;

    case 2:
      mouseLoc.x = mouseX;
      mouseLoc.y = mouseY;

      for (let i = 0; i < cars.length; i++) {
        if (cars[i].pos.dist(mouseLoc) < cars[i].size / 2) {
          cars[i].clicked = true;
        }
      }
      break;

    case 3:
      resetTheGame();
      //win state
      state = 0;
      break;

    case 4:
      resetTheGame();
      state = 0;
      break;
  }


}

class Car {
  constructor() {
    // attributes

    this.pos = createVector(random(width), random(height));
    this.timer = random(300);
    this.vel = createVector(random(5, 10), random(5, 10));

    this.size = (40, 40);
    this.clicked = false;
  }

  // methods
  display() {
    image(orc, this.pos.x, this.pos.y, this.size, this.size);

  }

  move() {
    this.timer--;
    if (this.timer <= 0) {
      this.timer = random(300);
      this.pos.x = random(width);
      this.pos.y = random(height);
    }
  }
}

function touchStarted() {
  getAudioContext().resume();
}
