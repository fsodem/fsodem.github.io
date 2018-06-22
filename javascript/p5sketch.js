let canvas, elvishMystic, tableTop, forest, ypos, dir, xpos;

function preload() {
  elvishMystic = loadImage("/media/magic card photos/elvish mystic.jpg");
  tableTop = loadImage("/media/other photos/table top.jpg");
  forest = loadImage("/media/magic card photos/forest.jpg");
  tableTop.resize(600, 600);
}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent('p5sketch');
  xpos = 225;
  ypos = 815;
  dir = -5;

}

function draw() {
  console.log(ypos);
  image(tableTop, 0, 0, 600, 600);
  image(forest, 225, 375, 150, 215);

  image(elvishMystic, xpos, ypos, 150, 215);

  ypos = ypos + dir;
  if (ypos === 150) {
    dir = 0
  }
}