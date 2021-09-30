let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {


  switch (state) {

    case 0:
      background('blue');
      textSize(15) ;
      text("If april brings may showers what do may flowers bring(ButtonVersion)", 0, height / 2);
      break;

    case 1:
      background('red');
      textSize(20) ;
      text('PILGRIMS(BUTTON HOW NEAT)', 0, height/2, );
      break;

  }


  rect(10, 10, 100, 100);

}

function mouseReleased() {

  if ((mouseX > 10) && (mouseX < 100) && (mouseY > 10) && (mouseY < 100)) {
    state++;
    if (state > 1) state = 0;
  }

}
