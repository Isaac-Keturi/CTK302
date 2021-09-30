let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
  case 0:
      background('white');
      text("case 0", 250, 250);
      break;
  case 1:
      background('grey');
      text("case 1", 250, 250);
      break;
  case 2:
      background('pink');
      text("case 2", 250, 250);
      break;
  case 3:
      background ('yellow');
      text("case 3", 250, 250);
      break;
  case 4:
      background ('green');
      text("case 4", 250, 250);
      break;
  case 5:
      background ('purple');
      text("case 5", 250, 250);
      break;

  }


  timer++ ;
  if (timer > 2*60){
      timer = 0 ;
      state++ ;
      if (state > 5) state = 0 ;

  }

}
