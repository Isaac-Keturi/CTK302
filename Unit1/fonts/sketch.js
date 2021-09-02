var font1 ;


function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/HotSweat.ttf") ;
}

function draw() {
  background("purple") ;
  textFont(font1, 48) ;
  text("Hello World", 100, 100) ;
}
