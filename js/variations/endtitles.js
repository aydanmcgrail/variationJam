"use strict";

let targetEnd1 = {
  x: 1230,
  y: 500,
  size: 150,
  fill: "black",
  fills: {
    overlap: "red",
    noOverlap: "black",
  },
};

let torchon = {
  x: 1560,
  y: 550,
  width: 100,
  height: 260,
  opacity: 255,
};

let poingX = 800;
let poingY = 0;
let poingSpeed = 8;
let poingDirection = 1;
let poingState = "knocking";
let startTimerFist = 0;
let timerFistGoLeft = 0;
let poingOpacity = 0;

let femmeOpacity = 0;

let finFadeIn = 255;
let introFinOpacity = 255;

let vitreOpacity = 255;
let vitreWidth = 1600;
let vitreHeight = 900;

let cadreFrameOpacityHaut = 255;
let cadreFrameOpacityBas = 255;
let cadreFrameOpacityGauche = 255;
let cadreFrameOpacityDroit = 255;

//let texte = [];
//let texteIndex = 0;

let endImg1;
let endImg2;
let endImg3;
let endImg4;
let endImg5;
let endImg6;
let endImg7;
let endImg8;
let endImg9;
let endImg10;
let endImg11;
let endImg12;
let endImg13;
let endImg14;
let endImg15;
let endImg16;
let endImg17;
let endImg18;
let endImg19;
let endImg20;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function endTitlesSetup() {
  createCanvas(1600, 900);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function endTitlesDraw() {
  background("black");
  endCinematic();
  endCheckInput();

  // let currentTexte = texte[texteIndex];

  /*ellipse(targetEnd1.x, targetEnd1.y, targetEnd1.size);

  push();
  tint(255, 255); //blueOpacity
  image(currentTexte, 0, 0); //cadre complet
  pop();

  push();
  let maxHeight = 705;
  let minHeight = 160;
  let maxWidth = 1400;
  let minWidth = 200;
  tint(0, 0); //blueOpacity
  let xConstrain = constrain(mouseX, minWidth, maxWidth) - 1400;
  let yConstrain = constrain(mouseY, minHeight, maxHeight) - 685;
  image(img6, xConstrain, yConstrain, 2800, 1375); //cadre complet
  pop();

  push();
  tint(255, 255); //blueOpacity
  image(img1, 0, 0); //cadre complet
  pop();
*/
  push();
  tint(255, 255);
  image(endImg9, 0, 0);
  image(endImg7, -15, 0); //femme
  push();
  tint(255, femmeOpacity);
  image(endImg8, 0, 0);
  image(endImg19, 511, 300); //langue
  image(endImg20, 0, 0);
  pop();
  push();
  drawPoing();
  pop();

  push();
  tint(255, vitreOpacity); //vitreOpacity
  image(endImg11, 0, 0, vitreWidth, vitreHeight); //cadre complet
  pop();

  push();
  tint(255, 255); //finOpacity
  image(endImg6, 0, 0);
  tint(255, cadreFrameOpacityHaut);
  image(endImg5, 0, 0);
  tint(255, cadreFrameOpacityGauche);
  image(endImg4, 0, 0);
  tint(255, cadreFrameOpacityDroit);
  image(endImg3, 0, 0);
  tint(255, cadreFrameOpacityBas);
  image(endImg2, 0, 0);
  drawTorchon();
  pop();

  push();
  tint(255, poingOpacity);
  image(endImg10, poingX, poingY);
  pop();

  push();
  tint(255, introFinOpacity);
  image(endImg18, 0, 0);
  pop();

  finFadeIn -= 4;
  fill(0, finFadeIn);
  rect(0, 0, 1600, 900);

  push();
  fill(255, 255);
  textSize();
  text(startTimerFist, 200, 200);
  text(timerFistGoLeft, 250, 200);
  text(poingState, 200, 400);
  pop();
}

function endCinematic() {
  if (finFadeIn <= 25) {
    introFinOpacity -= 4;
  }
}
function drawPoing() {
  push();
  image(endImg10, poingX, poingY);
  pop();

  if (poingState === "knocking") {
    poingY += poingSpeed * poingDirection;
    if (poingY > 50 || poingY < 0) {
      poingDirection *= -1;
    }
    if (startTimerFist >= 100) {
      poingState = "readyToSlam";
    }
  } else if (poingState === "readyToSlam") {
    poingY += 48;
    if (poingY >= 200) {
      cadreFrameOpacityDroit = 0;
    }
    if (poingY >= 400) {
      poingY = 400;
      poingOpacity = 255;
      timerFistGoLeft += 1;
    }

    if (timerFistGoLeft >= 100) {
      poingX -= 50;
      if (poingX <= 800) {
        cadreFrameOpacityBas = 0;
      }
      if (poingX <= 50) {
        poingX = 50;
      }
      if (startTimerFist >= 230) {
        poingState = "goesUp";
      }
    }
  } else if (poingState === "goesUp") {
    poingY -= 42;
    poingOpacity = 0;
    cadreFrameOpacityGauche = 0;
    if (poingY <= 0) {
      poingY = 0;
      poingX += 50;
      if (poingX >= 400) {
        cadreFrameOpacityHaut = 0;
      }
      if (poingX >= 800) {
        poingX = 800;
        poingState = "goDown";
      }
    }
  } else if (poingState === "goDown") {
    poingY += 10;
  }

  if (startTimerFist >= 380) {
    femmeOpacity += 2;
  }
}

function drawTorchon() {
  push();
  noStroke();
  tint(255, torchon.opacity); //finOpacity
  image(endImg12, torchon.x - 120, torchon.y - 140);
  ellipse(torchon.x, torchon.y, torchon.width, torchon.height);
  pop();
}

function endCheckInput() {
  const distanceToTorchon = dist(mouseX, mouseY, torchon.x, torchon.y);
  const overlapTorchon =
    distanceToTorchon < torchon.width / 2 + torchon.height / 2;

  const overlapVitreTorchon =
    mouseX > 53 && mouseX < 1479 && mouseY > 80 && mouseY < 749;

  if (overlapTorchon && mouseIsPressed && overlapVitreTorchon) {
    vitreOpacity -= 2;
    console.log("wash");
  }

  if (overlapTorchon && mouseIsPressed) {
    // console.log("ez");
    torchon.x = mouseX;
    torchon.y = mouseY;
  } else {
    torchon.x;
    torchon.y;
  }

  if (vitreOpacity <= 10) {
    torchon.opacity -= 8;
    startTimerFist += 1;
  }
}

function endTitlesKeyPressed(event) {
  if (event.keyCode === 27) {
    //&& other condition now uncreated
    state = "menu";
    menuClicked = false;
    5;
    readyEndTitles = false;
    fadeOutToGame = 0;
  }
}

function endTitlesMousePressed() {}

/**
 * if click on torchontarget = le torchon va suivre
 *
 */
//next line
/**const distanceTotargetEnd1 = dist(mouseX, mouseY, targetEnd1.x, targetEnd1.y);
  const overlaptargetEnd1 = distanceTotargetEnd1 < targetEnd1.size / 2;

  const distanceToTargetEnd2 = dist(mouseX, mouseY, targetEnd2.x, targetEnd2.y);
  const overlaptargetEnd2 = distanceToTargetEnd2 < targetEnd2.size / 2;
  const distanceToTargetEnd3 = dist(mouseX, mouseY, targetEnd3.x, targetEnd3.y);
  const overlaptargetEnd3 =
    distanceToTargetEnd3 < targetEnd3.width / 2 + targetEnd3.height / 2;

  const distanceToTargetEnd4 = dist(mouseX, mouseY, targetEnd4.x, targetEnd4.y);
  const overlaptargetEnd4 = distanceToTargetEnd4 < targetEnd4.size / 2;

  if (overlaptargetEnd1 && decorIndex === 0) {
    decorIndex = 1;
  }
  if (overlaptargetEnd2 && decorIndex === 1) {
    decorIndex = 2;
  }
  if (overlaptargetEnd3 && decorIndex === 2) {
    decorIndex = 3;
  }
  if (overlaptargetEnd4 && decorIndex === 3) {
    decorIndex += 1;
  }*/
