/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,suites///////////////////
let redFadeIn = 255; //starts black and will go down to 0
let fondJeu3opacity = 255; //opacity of the background image when at 0 trigger next event

////////////////////images//////////////////////
let redImg1;
let redImg2;
let redImg3;
let redImg4;
let redImg5;
let redImg6;
let redImg7;

/**
 * This will be called just before the red variation starts
 */
function redSetup() {}

/**
 * This will be called every frame when the red variation is active
 */
function redDraw() {
  background("black");

  push();
  tint(255, fondJeu3opacity);
  3;
  image(redImg7, 0, 0);
  pop();

  redFadeIn -= 1;
  fill(0, redFadeIn);
  rect(0, 0, width, height);

  push();
  fill(255);
  text(fadeOutToGame3, 300, 100);
  text(fadeOutToGame, 100, 200);
  text(redFadeIn, 200, 300);
  pop();

  redCinematic();
}

function redCinematic() {
  if (redFadeIn <= 50) {
    fondJeu3opacity -= 0.5;
  }
  //if fondJeu3opacity <= 0) {
  //}
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function redKeyPressed(event) {
  if (event.keyCode === 27) {
    state = "menu";
    redFadeIn = 255;
    menuClicked = false;
  }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {}
