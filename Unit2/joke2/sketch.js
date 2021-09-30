let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('blue');
      textSize(30) ;
      text("what did the ocean say to the beach", 0, height / 2);
      break;

    case 1:
      background('red');
      textSize(30) ;
      text('NOTHING IT JUST WAVED', 0, height/2,);
      break;
  }

timer++ ;
if (timer > 3*60){
    timer = 0 ;
    state++ ;
    if (state > 1) state = 0 ;
}


}
