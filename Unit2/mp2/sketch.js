let state = 0 ;
let timer = 0
let velocity = 10 ;
let x = 0 ;
let song1 ;

function preload(){
  song1 = loadSound("assets/mp2song.wav") ;

  song1.pause() ;
}


function setup() {
  createCanvas(500, 500);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {

    switch (state) {
      case 0:
      background("black") ;
      fill("grey");
      arc(50, 50, 80, 80, 90, 0, OPEN);
      fill("red");
      quad(32, 83, 89, 47, 200, 145, 88, 215);
      fill("grey");
      arc(450, 50, 80, 80, 180, 0, OPEN);
      fill("red");
      quad(427,19,488,47,464,248,284,136);
      fill('white');
      text("When you're at the festival and you hear the call...", 100, 20) ;
      fill('pink');
      rect(width/2, height/2+90, 70, 120);
      fill('beige');
      ellipse(width/2, height/2, 100, 100) ;
      fill('white');
      ellipse(width/2-10, height/2-20, 27, 23);
      ellipse(width/2+20, height/2-20, 27, 23);
      ellipse(width/2+5, height/2+27, 30,30,);
      fill('blue');
      ellipse(width/2-7, height/2-20, 13, 9);
      ellipse(width/2+25, height/2-20, 13, 9);
      song1.play() ;

      state=1;
      break;

      case 1:
      break;

      case 2:
      background("black") ;
      fill('beige');
      ellipse(width/2, height/2, 400, 400) ;
      fill("white");
      ellipse(width/2-60, height/2-70, 100, 100);
      ellipse(width/2+90, height/2-70, 100, 100);
      ellipse(252, 342, 150, 160 );
      textSize(23);
      textStyle(BOLD);
      text('"OH MY GOOD GOD"', 200, 30,);
      fill('blue');
      ellipse(width/2-50, height/2-70, 55, 55);
      ellipse(width/2+95, height/2-70, 55, 55);
      fill('black');
      quad(172,90,237,126,243,104,198,73);
      quad(286,126,278,103,332,83,344,99);

      state = 2;
      break;

      case 3:
      break;

      case 4:
      background("black") ;
      fill("grey");
      arc(50, 50, 80, 80, 90, 0, OPEN);
      fill("red");
      quad(32, 83, 89, 47, 200, 145, 88, 215);
      fill("grey");
      arc(450, 50, 80, 80, 180, 0, OPEN);
      fill("red");
      quad(427,19,488,47,464,248,284,136);
      fill('white');
      fill('pink');
      rect(x, height/2+90, 70, 120);
      fill('beige');
      ellipse(x, height/2, 100, 100) ;
      fill('white');
      ellipse(x+20, height/2-20, 27, 23);
      ellipse(x-17, height/2-20, 27, 23);
      ellipse(x, height/2+27, 30,30,);
      fill('blue');
      ellipse(x+20, height/2-20, 13, 9);
      ellipse(x-17, height/2-20, 13, 9);
      x = x + velocity ;
      if (x > width) {
        x = 10 ;
      }
      velocity = 1;
      state = 4;
      break;

      case 5:
      state = 5;
      break;

      case 6:
      background("black") ;
      fill('beige');
      ellipse(width/2, height/2, 400, 400) ;
      fill("white");
      ellipse(width/2-60, height/2-70, 100, 100);
      ellipse(width/2+90, height/2-70, 100, 100);
      arc(252, 342, 150, 160, 0, 179, PIE );
      textSize(23);
      textStyle(BOLD);
      text('"Its a very niice"', 200, 30,);
      fill('blue');
      ellipse(width/2-50, height/2-70, 55, 55);
      ellipse(width/2+95, height/2-70, 55, 55);
      fill('black');
      quad(172,90,237,126,243,104,198,73);
      quad(286,126,278,103,332,83,344,99);
      state = 6;



}
    timer = timer + .5
    if (timer > 100) {
        timer = 0 ;
        state++;
        //if (state > 5) state = 6 ;
    }


fill('white');
textSize(10);
text("x = " + mouseX + ",  y = " + mouseY, 200, 50) ;
}
