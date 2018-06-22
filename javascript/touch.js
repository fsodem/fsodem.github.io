let clr, sound, shotgunFiring, shotgunReloading, shotsFired;

function preload() {
  // sound = loadSound('/media/sounds/moo.mp3');
  shotgunFiring = loadSound('/media/sounds/shotgun firing sound.mp3');
  shotgunReloading = loadSound('/media/sounds/shotgun reload.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clr = color(130)
  shotsFired = 0
}

function draw() {
  background(clr);
}

function touchStarted() {
  clr = color(random(255), random(255), random(255));
  shotsFired = shotsFired + 1
  if (shotsFired > 2) {
    shotgunReloading.play();
    shotsFired = 0
  } else {
    shotgunFiring.play();
  }
}