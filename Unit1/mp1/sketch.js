function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);

  if (mouseIsPressed) {

    background("red");
    fill('white');
    triangle(497, 257, 429, 371, 579, 371);

    ellipse(width / 2, 200, 200, 200);

    quad(463, 318, 449, 340, 409, 314, 421, 298);
    quad(538, 313, 551, 334, 578, 312, 572, 303);
    rect(457, 393, 25, 50);
    rect(537, 393, 25, 50);
    circle(462, 162, 40);
    circle(552, 162, 40);
    arc(500, 272, 90, 100, 280, 0, PIE);
    triangle(474, 230, 485, 230, 477, 265);
    triangle(514, 230, 524, 230, 517, 265);
    quad(469, 123, 491, 144, 480, 157, 445, 133);
    quad(542, 122, 565, 135, 534, 152, 525, 149);
    textSize(10);
    text('HOLY S*** EVERYBODY GET OUT OF HERE ITS SPOOKY GUY', 10, 30);

    // stuff that shows when the mouse is pressed

  } else {
    fill('white');
    triangle(497, 257, 429, 371, 579, 371)

    ellipse(width / 2, 200, 200, 200)

    quad(463, 318, 449, 340, 409, 314, 421, 298);
    quad(538, 313, 551, 334, 578, 312, 572, 303);
    rect(457, 393, 25, 50);
    rect(537, 393, 25, 50);
    circle(462, 162, 40);
    circle(552, 162, 40);
    arc(500, 242, 80, 80, 0, PI + QUARTER_PI, PIE);
    textSize(10);
    text('This is dude the vampire guy. Look how spooky he is. Oh geez what a spooky dude', 10, 30);
  }


}
