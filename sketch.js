//setting the mic and variables for the code
let mic;
var froggerImg;
var pipes = [];

//uploading the images to the library and preloading it
function preload() {
  froggerImg = loadImage("frogger.png");
  bImg = loadImage("gbackground.png");
}

//define canvas size and activate device mic
function setup() {
  createCanvas(640, 480);
  mic = new p5.AudioIn();
  mic.start();
  pipes.push(new Pipe());
}

//insert background image to canvas
function draw() {
  background(bImg);

  //tuning the mic level in order to make the frog jump
  micLevel = mic.getLevel();
  let y = height / 1.1 - micLevel * height * 3;
  image(froggerImg, width / 7, y, 50, 50);

  //setting the variable for the randomly generated pipe length
  for (var i = pipes.length - 2; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
  }

  if (frameCount % 150 == 0) {
    pipes.push(new Pipe());
  }
}
