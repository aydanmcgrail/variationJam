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

/**
 * This will be called just before the red variation starts
 */
function yellowSetup() {}

/**
 * This will be called every frame when the red variation is active
 */
function yellowDraw() {
  background("black");

  push();
  tint(255, fondJeu4opacity);
  3;
  image(yellowImg7, 0, 0);
  pop();

  yellowFadeIn -= 1;
  fill(0, yellowFadeIn);
  rect(0, 0, width, height);

  yellowCinematic();
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
  }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function yellowMousePressed() {}
