var bubbles = [];
let url = '';
let song;
//let shrug ;

function preload() {
  song1 = loadSound("assets/Latg.mp3")


}

function setup() {
  song1.play() ;
  // let key = '1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0'; // WORKING KEY of the URL from the sheet

   let key = '1Y4uF2E_muLuW0L-tNnZUCY3ZW2bBrcWl2O-fOtjk2cQ'; // this is KEY of the URL from the sheet


  // shrug = loadImage("assets/shrug.jpeg") ;

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.

  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
     bubbles.push(new Bubble(data[i]['Do you like books or tv entertainment more (tv, movies, video games, etc.)'], data[i]["Do you pay attention to news"], data[i]["Do you enjoy coding?"])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  background('blue');
//  image(shrug, width/2,heigh/2, 100, 100) ;
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(tvbooks, news, coding) { // only the order of these parameters matters!
    this.tvbooks = tvbooks;
    this.news = news;
    this.coding = coding;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);

  }


  display() {

    stroke('white')
    noFill() ;
    fill('white');
    rect(this.pos.x, this.pos.y, 210, 100) ;
    fill('purple') ;

    text(this.coding + "\n" + this.news + "\n" + this.tvbooks, this.pos.x, this.pos.y);

    this.pos.add(this.vel) ;
    if(this.pos.x>width) this.pos.x=0 ;
  }


}

function touchStarted() {
  getAudioContext().resume();
}
