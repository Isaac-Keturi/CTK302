let djimg, lozimg, catimg ;


function setup() {
  createCanvas(500, 500);
  djimg = loadImage("assets/djcomewitachune.jpg") ;
  lozimg = loadImage("assets/LOZMM.jpg") ;
  catimg = loadImage("assets/cat.jpg") ;
  imageMode(CENTER) ;
}

function draw() {
  background ("purple") ;
  image(djimg, width/2, height/2, 100, 100) ;
  image(lozimg, width/2, height/2 - 120, 100, 100) ;
  image(catimg, width/2, height/2 + 120, 100, 100) ;

}
