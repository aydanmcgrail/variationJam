/**
 * This file contains the code to run *only* the yellow variation part of the program.
 *
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,suites///////////////////
let yellowFadeIn = 255; //starts black and will go down to 0
let fondJeu4opacity = 255; //opacity of the background image when at 0 trigger next event

////////////////////images//////////////////////
let yellowImg1;
let yellowImg2;
let yellowImg3;
let yellowImg4;
let yellowImg5;
let yellowImg6;
let yellowImg7;

//each will be triggered when the intruder object in each decor has been clicked.
//when each timer is triggered the image opacity will go up so we can see the overall picture better.
let timerAfterDecor1 = 0; //up to the treshold which will trigger the next decor event.
let timerAfterDecor2 = 0;
let timerAfterDecor3 = 0;
let timerAfterDecor4 = 0;

let flashlightX = 0;

/////https://editor.p5js.org/ebenjmuse/sketches/rJUFyTjbz

/**
 * This will be called just before the red variation starts
 */
function yellowSetup() {
  pixelDensity(1);
}

/**
 * This will be called every frame when the red variation is active
 */
function yellowDraw() {
  background("black");

  push();
  //image();

  pop();

  push();
  tint(255, fondJeu4opacity);
  image(yellowImg7, 0, 0);
  pop();

  yellowFadeIn -= 1;
  fill(0, yellowFadeIn);
  rect(0, 0, 1600, 900);

  push();
  tint(255, 255); //blueOpacity
  image(blueImg8, 0, 0); //cadre complet
  pop();

  yellowCinematic();

  loadPixels();
  let lightRadius = 90;
  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  img.loadPixels();
  for (let flashlightY = 0; flashlightY < height; flashlightY++) {
    for (let flashlightX = 0; flashlightX < width; flashlightX++) {
      var loc = (flashlightX + flashlightY * width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      let r = img.pixels[loc];
      let g = img.pixels[loc + 1];
      let b = img.pixels[loc + 2];

      // Calculate an amount to change brightness
      // based on proximity to the mouse
      var distance = dist(flashlightX, flashlightY, mouseX, mouseY);
      // The closer the pixel is to the mouse, the lower the value of "distance"
      // We want closer pixels to be brighter, however, so we invert the value using map()
      // Pixels with a distance greater than the lightRadius have a brightness of 0.0
      // (or negative which is equivalent to 0 here)
      // Pixels with a distance of 0 have a brightness of 1.0.
      var adjustBrightness = map(distance, 0, lightRadius, 1, 0);
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;

      // Constrain RGB to between 0-255
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);

      // Set the display pixel to the image pixel
      pixels[loc] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  updatePixels();
}

function yellowCinematic() {
  if (yellowFadeIn <= 50) {
    fondJeu4opacity -= 0.5;
  }
  //if fondJeu3opacity <= 0) {
  //}
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function yellowKeyPressed(event) {
  if (event.keyCode === 27) {
    state = "menu";
    menuClicked = false;
    readyGame4 = false;
    fadeOutToGame = 0;
  }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function yellowMousePressed() {}
