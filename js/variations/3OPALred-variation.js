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

let opalsStart = false;
///all the differrent type of opals to click on. many of each types will fall. .;.
let opalsBleu = [];
let maxOpalsBleu = 4;
const minimumOpalDelayB = 1000;
const maximumOpalDelayB = 4000;
let opalDelayB = maximumOpalDelayB;
//////////////////////////////////
let opalsMal = [];
let maxOpalsMal = 4;
const minimumOpalDelayM = 1000;
const maximumOpalDelayM = 4000;
let opalDelayM = maximumOpalDelayM;
let opalMalTouching = false;
////////////////////////////////////
let opalsRouge = [];
let maxOpalsRouge = 4;
const minimumOpalDelayR = 1000;
const maximumOpalDelayR = 4000;
let opalDelayR = maximumOpalDelayR;

let opalOpacity = 255;
let targetY = 700;

let opals = [];
let offrandes = [];

let offrandeBrightness = 230;

let grotteTopY = 0;

let hand = {
  hand1X: 200,
  hand2X: 1200,
  handY: 1100,
  handSize: 180,
  speed1: 2,
  direction1: 1,
  speed2: 4,
  direction2: 1,
  maxX1: 700,
  minX1: 150,
  maxX2: 1500,
  minX2: 900,
  maxY: 700,
  minY: 100,
  opacityLeftOpen: 255,
  opacityLeftClosed: 0,
  opacityRightOpen: 255,
  opacityRightClosed: 0,
  ready: false,
  side: "none",
  brightness: 255,
};

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
  /*setTimeout(addOpalMal, opalDelayM);
  setTimeout(addOpalRouge, opalDelayR);
  setTimeout(addOpalBleu, opalDelayB);*/
}

/**
 * This will be called every frame when the red variation is active
 */
function redDraw() {
  background("black");

  checkRedInput();

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
  /*push();
  fill(255);
  text(hand.side, 300, 100);
  text(hand.ready, 400, 100);
  fill("red");
  text(fondJeu3opacity, 100, 200);
  fill("green");
  text(grotteTopY, 200, 300);*/
  targetY;
  if (fondJeu3opacity <= -4200 && fondJeu3opacity >= -6200) {
    targetY -= 1;
  }
  pop();

  opalsCinematic();

  push();
  tint(255, redOpacity); //redOpacity
  image(menuImg16, 0, 0); //cadre complet4
  drawEscRed();
  tint(255, cadreCounter); //menuOpacityGlowProgression
  image(menuImg17, 0, 0); //cadre glow
  tint(255, cadreCounterFinal); //menuOpacityGlowFinal
  image(menuImg18, 0, 0); //cadre final glow

  textSize(42);
  fill("blue");
  text(cadreCounter, 1500, 800);
  pop();

  redCinematic();
  drawCursor();

  //console.log(opalsBleu.length, opalsRouge.length, opalsMal.length);
}

function drawEscRed() {
  push();
  tint(255, redOpacity - 100);
  image(blueImg2, escIcon.x, escIcon.y, escIcon.width, escIcon.height);
  fill(255, 0, 0, 0);
  //ellipse(rightSideFraming.x, escIcon.y, escIcon.width, escIcon.height);
  escIcon.y += escIcon.gameSpeedESC * escIcon.direction;
  if (escIcon.y > escIcon.maxY || escIcon.y < escIcon.minY) {
    escIcon.direction *= -1;
  }
  pop();
}

function drawCursor() {
  if (fondJeu3opacity <= -6500) {
    push();
    tint(255, redOpacity);
    image(menuImg22, mouseX, mouseY);
    pop();
  }
}

function drawHands() {
  if (fondJeu3opacity <= -6500 && fondJeu3opacity >= -7200) {
    //-6500//-7200
    if (hand.handY <= hand.maxY) {
      hand.handY = hand.handY;
      hand.ready = true;
    } else {
      hand.handY -= 4;
    }
  }

  if (
    mouseX >= 0 &&
    mouseX <= 800 &&
    mouseY <= height && //900
    mouseY >= height / 2 //450
  ) {
    hand.side = "left"; // Mouse is on the left half
    //("left");
  } else if (
    mouseX >= 800 &&
    mouseX <= width && //1600
    mouseY <= height && //900
    mouseY >= height / 2 //450
  ) {
    hand.side = "right"; // Mouse is on the right half
    //console.log("right");
  }

  const mouseLeft = hand.side === "left" && hand.ready === true;
  if (mouseLeft) {
    let target1X = constrain(mouseX, hand.minX1, hand.maxX1);
    hand.hand1X = lerp(hand.hand1X, target1X, 0.1);
  }

  if (!mouseLeft) {
    if (hand.hand1X <= hand.minX1) {
      hand.direction1 = 1; // goes right
    }
    if (hand.hand1X >= hand.maxX1) {
      hand.direction1 = -1; //goes left
    }
    hand.hand1X += hand.speed1 * hand.direction1;
  }

  const mouseRight = hand.side === "right" && hand.ready === true;
  if (mouseRight) {
    let target2X = constrain(mouseX, hand.minX2, hand.maxX2);
    hand.hand2X = lerp(hand.hand2X, target2X, 0.1);
  }

  if (!mouseRight) {
    if (hand.hand2X <= hand.minX2) {
      hand.direction2 = 1; // goes right
    }
    if (hand.hand2X >= hand.maxX2) {
      hand.direction2 = -1; //goes left
    }
    hand.hand2X += hand.speed2 * hand.direction2;
  }

  push();
  fill(0, 0, 0, 0);
  tint(hand.brightness, hand.opacityLeftOpen);
  image(redImg9, hand.hand1X - 373, hand.handY - 200); //left
  tint(hand.brightness, hand.opacityLeftClosed);
  image(redImg10, hand.hand1X - 400, hand.handY - 200); //left
  ellipse(hand.hand1X, hand.handY, hand.handSize); //left
  tint(hand.brightness, hand.opacityRightOpen);
  image(redImg11, hand.hand2X - 280, hand.handY - 200); //right
  tint(hand.brightness, hand.opacityRightClosed);
  image(redImg12, hand.hand2X - 280, hand.handY - 200); //right
  ellipse(hand.hand2X, hand.handY, hand.handSize); //right
  pop();
}

function opalsCinematic() {
  if (fondJeu3opacity <= -6600 && !opalsStart) {
    opalsStart = true;
    addOpalMal();
    addOpalRouge();
    addOpalBleu();
  }
  if (opalsStart) {
    draw3Opals();
  }
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
    if (cauldronY2 <= -900) {
      cauldronY1 = cauldronY1;
      cauldronY2 = cauldronY2;
    } else {
      cauldronY2 -= 1;
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

  if (fondJeu3opacity <= -6490) {
    drawHands();
  }
}
///////////////////////////////DECORATIVE OPALS//////////////////////////////////
///////////////////////////////DECORATIVE OPALS////////////////////////////////////////
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
///////////////////////////////DECORATIVE OPALS END////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////
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
//////////////////////////////////OPALS ARRAY/////////////////////////////
//////////////////////////////////OPALS ARRAY/////////////////////////////
//////////////////////////////////OPALS ARRAY/////////////////////////////
//////////////////////////////////OPALS ARRAY/////////////////////////////

function draw3Opals() {
  for (let opalR of opalsRouge) {
    moveOpalR(opalR);
    drawOpalR(opalR);
  }
  for (let opalB of opalsBleu) {
    moveOpalB(opalB);
    drawOpalB(opalB);
  }
  for (let opalM of opalsMal) {
    moveOpalM(opalM);
    drawOpalM(opalM);
  }
}
////////////////////////////////OPALE ROUGE//////////////////////////////////////
////////////////////////////////OPALE ROUGE//////////////////////////////////////
function addOpalRouge() {
  if (opalsRouge.length < maxOpalsRouge) {
    const opalR = createOpalR();
    opalsRouge.push(opalR);
  }
  opalDelayR -= random(0, 100);
  opalDelayR = constrain(opalDelayR, minimumOpalDelayR, maximumOpalDelayR);
  setTimeout(addOpalRouge, opalDelayR);
}
function createOpalR() {
  const opalR = {
    x: random(100, 1500),
    y: -100,
    velocity: {
      x: 0,
      y: random(4, 8),
    },
    size: 100,
    fill: "#dd2e4b",
    img: redImg4,
  };
  return opalR;
}
function moveOpalR(opalR) {
  opalR.x += opalR.velocity.x;
  opalR.y += opalR.velocity.y;
  if (opalR.y > height + 200) {
    const index = opalsRouge.indexOf(opalR);
    opalsRouge.splice(index, 1);
  }
}
function drawOpalR(opalR) {
  push();
  noStroke();
  fill(opalR.fill);
  ellipse(opalR.x, opalR.y, opalR.size);
  tint(255, 255);
  image(opalR.img, opalR.x - 75, opalR.y - 75);
  pop();
}
////////////////////////////////OPALE BLEU//////////////////////////////////////
////////////////////////////////OPALE BLEU//////////////////////////////////////
function addOpalBleu() {
  if (opalsBleu.length < maxOpalsBleu) {
    const opalB = createOpalB();
    opalsBleu.push(opalB);
  }
  opalDelayB -= random(0, 100);
  opalDelayB = constrain(opalDelayB, minimumOpalDelayB, maximumOpalDelayB);
  setTimeout(addOpalBleu, opalDelayB);
}
function createOpalB() {
  const opalB = {
    x: random(100, 1500),
    y: -100,
    velocity: {
      x: 0,
      y: random(2, 6),
    },
    size: 100,
    fill: "#2e3add",
    img: redImg3,
  };
  return opalB;
}
function moveOpalB(opalB) {
  opalB.x += opalB.velocity.x;
  opalB.y += opalB.velocity.y;
  if (opalB.y > height + 30) {
    const index = opalsBleu.indexOf(opalB);
    opalsBleu.splice(index, 1);
  }
}
function drawOpalB(opalB) {
  push();
  noStroke();
  fill(opalB.fill);
  ellipse(opalB.x, opalB.y, opalB.size);
  tint(255, 255);
  image(opalB.img, opalB.x - 75, opalB.y - 75);
  pop();
}
////////////////////////////////OPALE MAL//////////////////////////////////////
////////////////////////////////OPALE MAL//////////////////////////////////////
function addOpalMal() {
  if (opalsMal.length < maxOpalsMal) {
    const opalM = createOpalM();
    opalsMal.push(opalM);
  }
  opalDelayM -= random(0, 100);
  opalDelayM = constrain(opalDelayM, minimumOpalDelayM, maximumOpalDelayM);
  setTimeout(addOpalMal, opalDelayM);
}
function createOpalM() {
  const opalM = {
    x: random(100, 1500),
    y: -100,
    velocity: {
      x: 0,
      y: random(6, 8),
    },
    size: 80,
    fill: "#43bb57",
    img: redImg2,
  };
  return opalM;
}
function moveOpalM(opalM) {
  opalM.x += opalM.velocity.x;
  opalM.y += opalM.velocity.y;
  if (opalM.y > height + 200) {
    const index = opalsMal.indexOf(opalM);
    opalsMal.splice(index, 1);
  }
}
function drawOpalM(opalM) {
  push();
  noStroke();
  fill(opalM.fill);
  ellipse(opalM.x, opalM.y, opalM.size);
  tint(255, 255);
  image(opalM.img, opalM.x - 75, opalM.y - 75);
  pop();
}
//////////////////////////////////OPALS ARRAY/////////////////////////////
//////////////////////////////////OPALS ARRAY/////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////
//////////////
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
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {
  /////////////////HAND OPACITY//////////////////////////
  hand.opacityLeftClosed = 255;
  hand.opacityLeftOpen = 0;
  hand.opacityRightClosed = 255;
  hand.opacityRightOpen = 0;
  //////////////////////OPALS//////////////////////////////
  for (let opalR of opalsRouge) {
    const dRougeLeft = dist(hand.hand1X, hand.handY, opalR.x, opalR.y);
    const dRougeRight = dist(hand.hand2X, hand.handY, opalR.x, opalR.y);
    // Check if it's close enough
    if (dRougeLeft < opalR.size || dRougeRight < opalR.size) {
      // If so get the index
      const indexR = opalsRouge.indexOf(opalR);
      // And remove it
      opalsRouge.splice(indexR, 1);
      cadreCounter += 1;
      endTitleLogo.opacity2 += 1;
    }
  }

  for (let opalB of opalsBleu) {
    const dBleuLeft = dist(hand.hand1X, hand.handY, opalB.x, opalB.y);
    const dBleuRight = dist(hand.hand2X, hand.handY, opalB.x, opalB.y);
    // Check if it's close enough
    if (dBleuLeft < opalB.size || dBleuRight < opalB.size) {
      // If so get the index
      const indexB = opalsBleu.indexOf(opalB);
      // And remove it
      opalsBleu.splice(indexB, 1);
      cadreCounter += 1;
      endTitleLogo.opacity2 += 1;
    }
  }

  for (let opalM of opalsMal) {
    // Get
    const dMalLeft = dist(hand.hand1X, hand.handY, opalM.x, opalM.y);
    const dMalRight = dist(hand.hand2X, hand.handY, opalM.x, opalM.y);
    // Check if it's close enough
    if (dMalLeft < opalM.size || dMalRight < opalM.size) {
      // If so get the index
      const indexM = opalsMal.indexOf(opalM);
      // And remove it
      opalsMal.splice(indexM, 1);
      cadreCounter -= 1;
      endTitleLogo.opacity2 -= 1;
    }
  }
}

function redMouseReleased() {
  hand.opacityLeftClosed = 0;
  hand.opacityLeftOpen = 255;
  hand.opacityRightClosed = 0;
  hand.opacityRightOpen = 255;
}

function checkRedInput() {
  let touching = false;

  for (let opalM of opalsMal) {
    const dMalLeft = dist(hand.hand1X, hand.handY, opalM.x, opalM.y);
    const dMalRight = dist(hand.hand2X, hand.handY, opalM.x, opalM.y);

    if (dMalLeft < opalM.size || dMalRight < opalM.size) {
      touching = true;
      break; // stop checking others
    }
  }
  // trigger only once when touch starts
  if (touching && !opalMalTouching) {
    cadreCounter -= 2;
  }
  opalMalTouching = touching;
  if (touching) {
    hand.brightness = 0;
  } else {
    hand.brightness = 255;
  }
}
