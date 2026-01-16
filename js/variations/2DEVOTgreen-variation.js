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
let greenImg8;
let greenImg9;
let greenImg10;
let greenImg11;
let greenImg12;
let greenImg13;
let greenImg14;
let greenImg15;

const persoArray = [
  greenImg3, //kayak   0
  greenImg4, //jumeaux   1
  greenImg5, //jimmybillbob  2
  greenImg6, //soldate   3
  greenImg7, //spaghetti   4
  greenImg8, //demon 5
  greenImg9, //cavernes 6
  greenImg10, //billy 7
];

let persoIndex = 0; //starts with first image
let currentPerso = persoArray[persoIndex];
//if(persoIndex>= persoArray.length){persoIndex=0;}//loop back to start if over length.

/**
 * This will be called just before the green variation starts
 */
function greenSetup() {}

/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {
  background("black");

  image(greenImg12, 0, 0);

  //image(greenImg4, mouseX, mouseY);
  image(greenImg13, 0, 0);
  image(greenImg14, 0, 0);

  push();
  tint(255, fondJeu2opacity);
  image(greenImg11, 0, 0);
  pop();

  greenFadeIn -= 1;
  fill(0, greenFadeIn);
  rect(0, 0, width, height);

  push();
  tint(255, 255); //greenOpacity
  image(menuImg16, 0, 0); //cadre complet4
  tint(255, 0); //menuOpacityGlowProgression
  image(menuImg17, 0, 0); //cadre glow
  tint(255, 0); //menuOpacityGlowFinal
  image(menuImg18, 0, 0); //cadre final glow
  pop();

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
    menuClicked = false;
    readyGame2 = false;
    fadeOutToGame = 0;
  }
}

/**
 * This will be called whenever the mouse is pressed while the green variation is active
 */
function greenMousePressed() {}
