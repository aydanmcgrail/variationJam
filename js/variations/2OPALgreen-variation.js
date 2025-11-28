/**
 * This file contains the code to run *only* the green variation part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,suites///////////////////
let greenFadeIn = 255; //starts black and will go down to 0
let fondJeu2opacity = 255; //opacity of the background image when at 0 trigger next event

////////////////////images//////////////////////
let greenImg1;
let greenImg2;
let greenImg3;
let greenImg4;
let greenImg5;
let greenImg6;
let greenImg7;

/**
 * This will be called just before the green variation starts
 */
function greenSetup() {}

/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {
  background("black");

  push();
  tint(255, fondJeu2opacity);
  image(greenImg7, 0, 0);
  pop();

  greenFadeIn -= 1;
  fill(0, greenFadeIn);
  rect(0, 0, width, height);

  greenCinematic();
}

function greenCinematic() {
  if (greenFadeIn <= 50) {
    fondJeu2opacity -= 0.5;
  }
  //if fondJeu3opacity <= 0) {
  //}
}

/**
 * This will be called whenever a key is pressed while the green variation is active
 */
function greenKeyPressed(event) {
  if (event.keyCode === 27) {
    state = "menu";
  }
}

/**
 * This will be called whenever the mouse is pressed while the green variation is active
 */
function greenMousePressed() {}
