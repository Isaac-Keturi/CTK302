var font1 ; font2;


function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/HotSweat.ttf") ;
  font2= loadFont("assets/SnowKei.ttf") ;
}

function draw() {
  background("purple") ;
  textFont(font1,) ;
  textSize(48) ;
  text("Hello World", 100, 100) ;

  textFont(font2,) ;
  textSize(48) ;
  text("Hello World", 100, 200) ;
}
