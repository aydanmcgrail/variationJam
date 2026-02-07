/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,suites///////////////////
let redFadeIn = 255; //starts black and will go down to 0
let fondJeu3opacity = 255; //opacity of the background image when at 0 trigger next event
let redOpacity = 0;
let redScenarioStep = "0";
///all the differrent type of opals to click on. many of each types will fall. .;.
let opalBleue = [];
let opalMale = [];
let opalRouge = [];
let opalOpacity = 255;
let targetY = 700;

let opals = [];
let offrandes = [];

let offrandeBrightness = 230;

let grotteTopY = 0;

let offrande1Y = 300; //////1
let offrande1X = 750; //
let offrande2Y = 300; //////2
let offrande2X = 750; //
let offrande3Y = 300; //////3
let offrande3X = 750; //
let offrande4Y = 300; //////4
let offrande4X = 750; //
let offrande5Y = 300; //////5
let offrande5X = 750; //

let cauldronY1 = 900;
let cauldronY2 = 900;

////////////////////images//////////////////////
let redImg1;
let redImg2;
let redImg3;
let redImg4;
let redImg5;
let redImg6;
let redImg7;
let redImg8;
let redImg9;
let redImg10;
let redImg11;
let redImg12;
let redImg13;
let redImg14;
let redImg15;
let redImg16;
let redImg17;
let redImg18;
let redImg19;
let redImg20;
let redImg21;
let redImg22;
let redImg23;
let redImg24;
let redImg25;

//This will be called just before the red variation starts

function redSetup() {
  angleMode(DEGREES);
}

/**
 * This will be called every frame when the red variation is active
 */
function redDraw() {
  background("black");

  push();
  tint(255, fondJeu3opacity);
  image(redImg1, 0, 0);
  pop();

  redFadeIn -= 2;
  fill(0, redFadeIn);
  rect(0, 0, width, height);

  drawCauldronBack();
  drawGrotte();
  drawOffrande();
  drawFinalGrotte();

  push();
  tint(255, redOpacity);
  image(redImg13, 50, grotteTopY, 1500, 2121);
  pop();

  drawCauldronFront();
  push();
  fill(255);
  text(targetY, 300, 100);
  fill("red");
  text(fondJeu3opacity, 100, 200);
  fill("green");
  text(grotteTopY, 200, 300);
  fill(0, 0);
  targetY;
  if (fondJeu3opacity <= -4200 && fondJeu3opacity >= -6200) {
    targetY -= 1;
  }
  pop();

  push();
  tint(255, redOpacity); //redOpacity
  image(menuImg16, 0, 0); //cadre complet4
  tint(255, 0); //menuOpacityGlowProgression
  image(menuImg17, 0, 0); //cadre glow
  tint(255, 0); //menuOpacityGlowFinal
  image(menuImg18, 0, 0); //cadre final glow
  textSize(42);
  fill("blue");
  text(cadreCounter, 1500, 800);
  pop();

  redCinematic();
}

function redCinematic() {
  if (redFadeIn <= 50) {
    fondJeu3opacity -= 2;
  }
  if (fondJeu3opacity <= 150 && grotteTopY >= -4900) {
    redOpacity += 2;
    grotteTopY -= 2;
  }

  if (grotteTopY <= -3000) {
    //console.log("end");
    if (cauldronY2 <= -900) {
      cauldronY1 = cauldronY1;
      cauldronY2 = cauldronY2;
    } else {
      //if (cauldronY2 <= 0) {
      //cauldronY2 = 0;
      // } else {
      cauldronY2 -= 1;
      //}
      //if (cauldronY1 <= 0) {
      // cauldronY1 = 0;
      //} else {
      cauldronY1 -= 1.1;
    }
  }

  if (grotteTopY <= -2400 && grotteTopY >= -3400) {
    if (offrandeBrightness <= 20) {
      offrandeBrightness = 20;
    } else {
      offrandeBrightness -= 0.5;
    }
  }
  if (grotteTopY <= -3500) {
    offrandeBrightness += 0.8;
  }
}

function drawOpals() {
  for (let opal of opals) {
    push();
    tint(255, opalOpacity);
    opal.y += 6;
    opal.x += 0.8 * opal.direction;
    if (opal.opalType === "1") {
      image(redImg2, opal.x, opal.y);
    } else if (opal.opalType === "2") {
      image(redImg3, opal.x, opal.y);
    } else if (opal.opalType === "3") {
      image(redImg4, opal.x, opal.y);
    }
    if (fondJeu3opacity <= -5800 && fondJeu3opacity >= -6400) {
      opalOpacity -= 0.05;
    }
    pop();
  }
}

function addOpals() {
  push();
  opal = {
    x: 700,
    y: targetY,
    direction: random(-1, 1),
    opalType: random(["1", "2", "3"]),
  };
  opals.push(opal);
  pop();
}

function drawOffrande() {
  for (let offrande of offrandes) {
    push();
    tint(offrandeBrightness, 255);
    offrande.y += 6;
    offrande.x += 0.8 * offrande.direction;
    if (offrande.offrandeType === "1") {
      image(redImg5, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "2") {
      image(redImg6, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "3") {
      image(redImg7, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "4") {
      image(redImg8, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "5") {
      image(redImg19, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "6") {
      image(redImg20, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "7") {
      image(redImg21, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "8") {
      image(redImg22, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "9") {
      image(redImg23, offrande.x, offrande.y);
    } else if (offrande.offrandeType === "10") {
      image(redImg24, offrande.x, offrande.y);
    }
    pop();
  }
}
function addOffrande() {
  push();
  offrande = {
    x: random(660, 725),
    y: -200,
    direction: random(-1, 1),
    offrandeType: random(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
  };
  offrandes.push(offrande);
  pop();
}

function drawFinalGrotte() {
  push();
  tint(255, 255);
  image(redImg18, 0, cauldronY1 + 990);
  pop();
}

function drawGrotte() {
  push();
  tint(255, redOpacity);
  //noStroke();
  fill(0, 0, 0);

  image(redImg14, 50, grotteTopY + 2058, 1500, 1938);

  if (grotteTopY <= -1200 && grotteTopY >= -4800) {
    if (frameCount % 20 === 0) {
      addOffrande();
    }
  }
  push();
}

function drawCauldronBack() {
  push();
  tint(255, redOpacity);
  image(redImg17, 0, cauldronY1);
  image(redImg15, 0, cauldronY2);
  pop();
}

function drawCauldronFront() {
  push();
  tint(255, redOpacity);
  image(redImg25, 0, cauldronY2);
  if (fondJeu3opacity <= -4100 && fondJeu3opacity >= -6400) {
    drawOpals();
    if (frameCount % 20 === 0) {
      addOpals();
    }
  }
  image(redImg16, 0, cauldronY2);
  pop();
}

function drawOpal() {
  let opalX = 200; //random(0, 1600);
  let opalY = 100;
  let opalSize = 175;
  //let opalDiameter = 0;

  fill(255);
  // ellipse(opalX, opalY, opalSize);
  //opalY -= 0.25;
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function redKeyPressed(event) {
  if (event.keyCode === 27) {
    state = "menu";
    redFadeIn = 255;
    menuClicked = false;
    readyGame3 = false;
    fadeOutToGame = 0;
  }

  if (event.keyCode === 82) {//r
    cadreCounter += 1;
  } else {
    cadreCounter = cadreCounter;
  }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {
  console.log("addoapl");
  addOpals();
}

function opalFallingLoop() { }
