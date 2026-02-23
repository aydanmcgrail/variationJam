/**
 * This file contains the code to run *only* the yellow variation part of the program.
 *
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,suites///////////////////
let yellowFadeIn = 255; //starts black and will go down to 0
let fondJeu4opacity = 255; //opacity of the background image when at 0 trigger next event
let yellowOpacity = 0; //opacity of the background image, goes up when fondJeu1opacity is 0
let fondNoirOpacity = 255; //opacity of the black screen that goes down when each decor event is triggered
let decor1Done = false;
let decor2Done = false;
let decor3Done = false;
let decor4Done = false;
let decorSpacing1 = 0; //timing between each decor transition so viewer can see the overall picture better.
let decorSpacing2 = 0;
let decorSpacing3 = 0;
let decorSpacing4 = 0;
////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////
////////////////////////////the targets////////////////////////////
//////////////////////////////////////////////////////
let target1 = {
  x: 1230,
  y: 500,
  size: 150,
  fill: "black",
  fills: {
    overlap: "red",
    noOverlap: "black",
  },
};

let target2 = {
  x: 280,
  y: 390,
  size: 95,
  fill: "black",
  fills: {
    overlap: "red",
    noOverlap: "black",
  },
};

let target3 = {
  x: 900,
  y: 545,
  width: 170,
  height: 50,
  fill: "black",
  fills: {
    overlap: "red",
    noOverlap: "black",
  },
};

let target4 = {
  x: 1005,
  y: 800,
  size: 50,
  fill: "black",
  fills: {
    overlap: "red",
    noOverlap: "black",
  },
};

let decor = [];
let decorIndex = 0;
///////////////////////////////////////////////////////////////////////////////////////////

function yellowSetup() {}

function yellowDraw() {
  background("black");

  push();
  //image();
  yellowTargets();
  pop();

  push();
  tint(255, fondJeu4opacity);
  image(yellowImg7, 0, 0); ///title text of game (les lumieres)
  pop();

  yellowFadeIn -= 1;
  fill(0, yellowFadeIn);
  rect(0, 0, 1600, 900);

  yellowDrawHandPointing();

  push();
  tint(255, yellowOpacity); //yellowOpacity
  image(menuImg17, 0, 0); //cadre complet4
  drawCounterBar();
  image(menuImg16, 0, 0);
  drawEscYellow();
  tint(255, cadreCounterFinal); //menuOpacityGlowFinal
  image(menuImg18, 0, 0); //cadre final glow
  textSize(42);
  fill("blue");
  text(cadreCounter, 1500, 800);
  pop();

  yellowCinematic();
  cadreCounterCheck();

  /*fill("green");
  textSize(42);
  text(decorSpacing1, 100, 100);
  text(decorSpacing2, 200, 100);
  text(decorSpacing3, 300, 100);
  text(decorSpacing4, 400, 100);*/
}

function drawEscYellow() {
  push();
  tint(255, yellowOpacity - 100);
  image(blueImg2, escIcon.x, escIcon.y, escIcon.width, escIcon.height);
  fill(255, 0, 0, 0);
  escIcon.y += escIcon.gameSpeedESC * escIcon.direction;
  if (escIcon.y > escIcon.maxY || escIcon.y < escIcon.minY) {
    escIcon.direction *= -1;
  }
  pop();
}

function yellowCinematic() {
  if (yellowFadeIn <= 50) {
    fondJeu4opacity -= 0.5;
  }

  if (fondJeu4opacity <= 150) {
    yellowOpacity += 2;
  }

  if (decor1Done === true) {
    fondNoirOpacity -= 2;
    decorSpacing1 += 1;
  }

  if (decor2Done === true) {
    fondNoirOpacity -= 2;
    decorSpacing2 += 1;
  }
  if (decor3Done === true) {
    fondNoirOpacity -= 2;
    decorSpacing3 += 1;
  }
  if (decor4Done === true) {
    fondNoirOpacity -= 2;
    decorSpacing4 += 1;
  }

  if (decorSpacing1 >= 275) {
    decorSpacing1 = 0;
    decor1Done = false;
    fondNoirOpacity = 255;
    decorIndex = 1;
  }

  if (decorSpacing2 >= 275) {
    decorSpacing2 = 0;
    decor2Done = false;
    fondNoirOpacity = 255;
    decorIndex = 2;
  }

  if (decorSpacing3 >= 275) {
    decorSpacing3 = 0;
    decor3Done = false;
    fondNoirOpacity = 255;
    decorIndex = 3;
  }

  if (decorSpacing4 >= 275) {
    decorSpacing4 = 0;
    decor4Done = false;
    fondNoirOpacity = 255;
    decorIndex = 0;
  }
}

function yellowDrawHandPointing() {
  push();
  tint(255, yellowOpacity);
  image(menuImg6, mouseX - 45, mouseY - 60, 300, 920);
  pop();
}

function yellowTargets() {
  let currentDecor = decor[decorIndex];

  ellipse(target1.x, target1.y, target1.size);
  ellipse(target2.x, target2.y, target2.size);
  ellipse(target3.x, target3.y, target3.width, target3.height);
  ellipse(target4.x, target4.y, target4.size);

  push();
  tint(255, 255); //blueOpacity
  image(currentDecor, 0, 0); //cadre complet
  pop();

  push();
  let maxHeight = 730;
  let minHeight = 160;
  let maxWidth = 1400;
  let minWidth = 200;
  let xConstrain = constrain(mouseX, minWidth, maxWidth) - 1400;
  let yConstrain = constrain(mouseY, minHeight, maxHeight) - 685;
  tint(255, fondNoirOpacity); //blueOpacity
  image(yellowImg5, xConstrain, yConstrain, 2800, 1375); //cadre complet
  pop();
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
function yellowMousePressed() {
  //next line
  const distanceToTarget1 = dist(mouseX, mouseY, target1.x, target1.y);
  const overlaptarget1 = distanceToTarget1 < target1.size / 2;

  const distanceToTarget2 = dist(mouseX, mouseY, target2.x, target2.y);
  const overlaptarget2 = distanceToTarget2 < target2.size / 2;

  const distanceToTarget3 = dist(mouseX, mouseY, target3.x, target3.y);
  const overlaptarget3 =
    distanceToTarget3 < target3.width / 2 + target3.height / 2;

  const distanceToTarget4 = dist(mouseX, mouseY, target4.x, target4.y);
  const overlaptarget4 = distanceToTarget4 < target4.size / 2;

  if (overlaptarget1 && decorIndex === 0) {
    decor1Done = true;
    cadreCounter += 150;
    endTitleLogo.opacity1 += 2;
    endTitleLogo.opacity2 += 10;
  }
  if (overlaptarget2 && decorIndex === 1) {
    decor2Done = true;
    cadreCounter += 150;
    endTitleLogo.opacity1 += 2;
    endTitleLogo.opacity2 += 10;
  }
  if (overlaptarget3 && decorIndex === 2) {
    decor3Done = true;
    cadreCounter += 50;
    endTitleLogo.opacity1 += 2;
    endTitleLogo.opacity2 += 10;
  }
  if (overlaptarget4 && decorIndex === 3) {
    decor4Done = true;
    cadreCounter += 50;
    endTitleLogo.opacity1 += 2;
    endTitleLogo.opacity2 += 10;
  }
}
