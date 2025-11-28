/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,suites///////////////////
let blueFadeIn = 255; //starts black and will go down to 0
let fondJeu1opacity = 255; //opacity of the background image when at 0 trigger next event
let grotteOpacity = 0; //opacity of the cave image, goes up when fondJeu1opacity is 0

////////////////////images//////////////////////
let blueImg1;
let blueImg2;
let blueImg3;
let blueImg4;
let blueImg5;
let blueImg6;
let blueImg7;

/**
 * This will be called just before the blue variation starts
 */
function blueSetup() {}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
  background("black");

  blueCinematic();

  push();
  tint(255, fondJeu1opacity);
  image(blueImg7, 0, 0);
  pop();

  push();
  tint(255, grotteOpacity);
  image(blueImg1, 0, 0, width, height);
  pop();

  blueFadeIn -= 1;
  fill(0, blueFadeIn);
  rect(0, 0, width, height);

  push();
  fill(255);
  text(blueFadeIn, 200, 300);
  pop();
}

function blueCinematic() {
  if (blueFadeIn <= 50) {
    fondJeu1opacity -= 1;
  }
  if (fondJeu1opacity <= 150) {
    grotteOpacity += 2;
    11;
  }
}

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function blueKeyPressed(event) {
  if (event.keyCode === 27) {
    state = "menu";
    blueFadeIn = 255;
  }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {}
