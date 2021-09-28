let state = 0;
let timer = 0;

{}
function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('blue');
      text("If april brings may showers what do mayflowers bring", width / 2, height / 2);
      break;

    case 1:
      background('red');
      text('PILGRIMS', width/2, height/2, 50, 50,);
      break;
  }

timer++ ;
if (timer > 3*60){
    timer = 0 ;
    state++ ;
    if (state > 1) state = 0 ;
}
  // joke 2:  text('what did the ocean say to the beach, nothing it just waved') ;

}


function mouseReleased() {
  state++;
  if(state > 1) state = 0;

}
