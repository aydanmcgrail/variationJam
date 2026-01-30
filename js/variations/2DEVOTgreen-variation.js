/**
 * This file contains the code to run only the green variation part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do separate from the rest of the program.
 */

///////////////////mouvement,opacity,suites///////////////////
let greenFadeIn = 255; //starts black and will go down to 0
let fondJeu2opacity = 255; //opacity of the background image when at 0 trigger next event
let greenOpacity = 0;
let fondBaseOpacity = 235;
let hideFondBase = 255;
let rightGlowingHandOpacity = 0;
let leftGlowingHandOpacity = 0;
let toucheOpacity1 = 0;
let toucheOpacity2 = 0;
////////////////////images//////////////////////
let greenImg1;
let greenImg2;
let greenImg3; //////perso
let greenImg4; //   //
let greenImg5; //   //
let greenImg6; //   //
let greenImg7; //   //
let greenImg8; //   //
let greenImg9; //   //
let greenImg10; ////perso fin
let greenImg11;
let greenImg12;
let greenImg13;
let greenImg14;
let greenImg15;
let greenImg16; //hand point bas no glow
let greenImg17; //hand point bas glow
let greenImg18; //hand point up no glow
let greenImg19; //
let greenImg20;
let greenImg21;
let greenImg22;
let greenImg23;
let greenImg24;
let greenImg25;
let greenImg26;
let greenImg27;
let greenImg28;
let greenImg29;
let greenImg30;
let greenImg31;

let words;
let randomWord = undefined;
let randomIndex = undefined;
let devotswitch = false;
let texteOpacity = 255;
let showText = false;

let persoArray = [];
let persoIndex = 0; //starts with first image
///for the up and down of the devots
let speedDevot = 0.2;
let directionDevot = 1;
let devotX = 530;
let devotY = 90;
let devotMinY = 80;
let devotMaxY = 100;
let devotState = "float";
let devotOpacity = 0;
////////////////////////////////////////////////////////////

let handX = 1190;
let handY = 670;
let handWidth = 1244;
let handHeight = 248;
let handMove = "0";
let handMoving = false;
let heavenTimer = false;
let heavenOpacity1 = 0;
let heavenOpacity2 = 0;
let heavenStart = false;

let leftHandX = -380; //-130
let leftHandY = 210; //210
let leftHandWidth = 1182;
let leftHandHeight = 506;
let leftHandMoving = "idle";
let leftHandOpacity = 0;
let shockTimer = false;

/**
 * This will be called just before the green variation starts
 */
function greenSetup() {}

/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {
  background("black");
  greenCinematic();

  push();
  let randomBackgroundLigth = random(12, 190);
  tint(randomBackgroundLigth, 255);
  image(greenImg2, 0, 0);
  pop();

  push();
  tint(255, heavenOpacity1);
  image(greenImg1, 0, 0);
  tint(255, heavenOpacity2);
  image(greenImg20, 0, 0);
  pop();

  push();
  tint(255, fondBaseOpacity);
  image(greenImg12, 0, -10); ///piece haut bas sans les devantures
  pop();

  drawDevots();
  push();
  tint(255, fondBaseOpacity);
  image(greenImg13, 0, -10);
  image(greenImg14, 0, 681);
  pop();

  push();
  fill(0, hideFondBase);
  rect(0, 0, width, height);
  pop();

  push();
  tint(255, fondJeu2opacity);
  image(greenImg11, 0, 0);
  pop();

  greenFadeIn -= 1;
  fill(0, greenFadeIn);
  rect(0, 0, width, height);

  push();
  tint(255, toucheOpacity1);
  image(greenImg21, 1355, 500, 200, 145);
  tint(255, toucheOpacity2);
  image(greenImg19, 55, 500, 200, 145);
  tint(255, greenOpacity);
  image(menuImg16, 0, 0); //cadre complet4
  drawEscGreen();
  tint(255, 0); //menuOpacityGlowProgression
  image(menuImg17, 0, 0); //cadre glow2
  tint(255, 0); //menuOpacityGlowFinal
  image(menuImg18, 0, 0); //cadre final glow
  pop();

  push();
  fill(255, 255);
  drawHandOpen();
  drawLeftHandPointing();
  pop();

  /*push();
  fill(255, 255);
  textSize(42);
  text(leftHandMoving, 200, 200);
  text(fondJeu2opacity, 200, 400);
  //text(randomWord, 200, 600);
  pop();*/
  push();
  tint(255, texteOpacity);
  drawTextDevot();
  pop();
}

function drawTextDevot() {
  if (randomWord !== undefined) {
    // First half red, second half green
    //if (randomIndex <= 3) {
    image(randomWord, 200, 100, 550, 200);
  }
  if (showText === true) {
    randomIndex = floor(random(words.length));
    randomWord = words[randomIndex];
  }
}

function drawEscGreen() {
  push();
  tint(255, greenOpacity - 100);
  image(blueImg2, escIcon.x, escIcon.y - 110, escIcon.width, escIcon.height);
  fill(255, 0, 0, 0);
  //ellipse(rightSideFraming.x, escIcon.y, escIcon.width, escIcon.height);
  escIcon.y += escIcon.gameSpeedESC * direction;
  if (escIcon.y > escIcon.maxY || escIcon.y < escIcon.minY) {
    direction *= -1;
  }
  pop();
}

function greenCinematic() {
  if (greenFadeIn <= 50) {
    //50
    fondJeu2opacity -= 1; //2
  }
  if (fondJeu2opacity <= 150) {
    greenOpacity += 2;
  }
  if (greenOpacity >= 255) {
    devotOpacity += 2;
    hideFondBase -= 2;
  }
  if (greenOpacity === 200) {
    showText = true;
  } else {
    showText = false;
  }
}

function drawLeftHandPointing() {
  tint(255, leftGlowingHandOpacity);
  image(greenImg31, leftHandX, leftHandY);
  tint(255, greenOpacity);

  image(greenImg17, leftHandX, leftHandY);

  tint(255, leftHandOpacity);
  image(greenImg16, leftHandX, leftHandY);

  const distMouseLeftHand =
    mouseX > leftHandX &&
    mouseX < leftHandX + 574 &&
    mouseY > leftHandY &&
    mouseY < leftHandY + 506;

  if (distMouseLeftHand && leftHandMoving === "idle") {
    leftGlowingHandOpacity += 15;
    toucheOpacity2 += 15;
    if (leftGlowingHandOpacity > 255 || toucheOpacity2 > 255) {
      //cap the glow to 255
      leftGlowingHandOpacity = 255;
      toucheOpacity2 = 255;
    }
  } else {
    leftGlowingHandOpacity -= 5; //decrease the glow when mouse is out
    toucheOpacity2 -= 5;
    if (leftGlowingHandOpacity < 0 || toucheOpacity2 < 0) {
      //cap the glow to 0
      leftGlowingHandOpacity = 0;
      toucheOpacity2 = 0;
    }
  }

  if (leftHandMoving === "moving") {
    leftHandX += 4;
    if (leftHandX >= -150) {
      leftHandX = -150;
      leftHandMoving = "stop";
    }
  } else if (leftHandMoving === "stop") {
    leftHandOpacity += 180;
    fondBaseOpacity = 0;
    shockTimer += 1;
    if (shockTimer >= 70) {
      leftHandMoving = "shockedDone";
      shockTimer = 0;
      leftHandOpacity = 0;
    }
  } else if (leftHandMoving === "shockedDone") {
    leftHandX -= 4;
    fondBaseOpacity = 255;
    devotState = "shockedToHell";
    if (leftHandX <= -380) {
      leftHandX = -380;
      leftHandMoving = "idle";
    }
  }
}

function drawHandOpen() {
  tint(255, greenOpacity);
  image(greenImg15, handX, handY);

  tint(255, rightGlowingHandOpacity); //rightGlowingHandOpacity
  image(greenImg30, handX, handY);

  const distMouseRightHand =
    mouseX > handX &&
    mouseX < handX + handWidth &&
    mouseY > handY &&
    mouseY < handY + handHeight;

  if (distMouseRightHand && handMove === "0") {
    rightGlowingHandOpacity += 15;
    toucheOpacity1 += 15;
    if (rightGlowingHandOpacity > 255 || toucheOpacity1 > 255) {
      //cap the glow to 255
      rightGlowingHandOpacity = 255;
      toucheOpacity1 = 255;
    }
  } else {
    rightGlowingHandOpacity -= 5; //decrease the glow when mouse is out
    toucheOpacity1 -= 5;
    if (rightGlowingHandOpacity < 0 || toucheOpacity1 < 0) {
      //cap the glow to 0
      rightGlowingHandOpacity = 0;
      toucheOpacity1 = 0;
    }
  }

  if (handX === 640 && handY === 670) {
    handMove = "2";
    devotState = "up";
  } else if (handX === 640 && handY === 170) {
    handMove = "3";
  } else if (handX === 1190 && handY === 170) {
    handMove = "4";
  }
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  if (handX >= 700 && handY <= 170 && handX <= 1150) {
    heavenStart = true;
    //heavenTimer += 1;
    //console.log("hit");
  } else {
    heavenStart = false;
  }

  if (heavenStart === true) {
    heavenTimer += 1;
    randomBackgroundLigth = 0;
  } else {
    heavenTimer = 0;
    heavenOpacity1 = 0;
    heavenOpacity2 = 0;
    randomBackgroundLigth = random(12, 190);
  }

  if (heavenTimer >= 10) {
    heavenOpacity1 += 6;
    heavenOpacity2 = random(0, 255);
    fondBaseOpacity = 0;
    //console.log("hit2");
  } else {
    fondBaseOpacity = 255;
  }
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  if (handMove === "1") {
    handX -= 6;
    if (handX <= 640) {
      2;
      handX = 640;
    }
  } else if (handMove === "2") {
    handY -= 8;
    if (handY <= 170) {
      handY = 170;
    }
    upDevot = true;
  } else if (handMove === "3") {
    handX += 3;
    if (handX >= 1190) {
      handX = 1190;
    }
  } else if (handMove === "4") {
    handY += 4;
    devotOpacity += 2;
    if (handY >= 670) {
      handY = 670;
      handMove = "0";
      handMoving = false;
    }
  }
}

function drawDevots() {
  let currentPerso = persoArray[persoIndex];
  push();
  tint(255, devotOpacity);
  image(currentPerso, devotX, devotY, 550, 640); //510, 80
  pop();
  if (devotState === "float") {
    devotY += speedDevot * directionDevot;
    if (devotY >= devotMaxY || devotY <= devotMinY) {
      directionDevot *= -1;
    }
  } else if (devotState === "up") {
    devotY -= 8;
  } else if (devotState === "shockedToHell") {
    devotY += 8;
    /*if (devotY >= 100) {
      devotY = 90;
      devotState = "float";
      persoIndex += 1;
      devotOpacity = 0;
      if (persoIndex >= 9) {
        persoIndex = 1;
      }*/
  }
  if (devotY <= -1400 || devotY >= 900) {
    devotY = 90;
    devotState = "float";
    persoIndex += 1;
    devotOpacity += 2;
    randomIndex = floor(random(words.length));
    randomWord = words[randomIndex];
    texteOpacity += 2;
    if (persoIndex >= 8) {
      persoIndex = 0;
    }
  }
}
//}

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
  if (event.keyCode === 38 && handMoving === false) {
    handMove = "1";
    handMoving = true;
  }
  if (event.keyCode === 40 && handMoving === false) {
    leftHandMoving = "moving";
  }

  if (event.keyCode === 32) {
    randomIndex = floor(random(words.length));
    randomWord = words[randomIndex];
  }
}

function cadreColore123() {
  /**if(changement de personnages fait+main bougee){
   lopacite des 3 cadres va varier sans arret pour chaque frame. 
   assez vite donc +=2
   mais cest la multiplication qui sera change de +1 a -1
  }
  */
  push();
  fill(255, 255); //opacitecadrenew1
  image(greenImg1);
  fill(255, 255); //opacitecadrenew2
  image(greenImg2);
  fill(255, 255); //opacitecadrenew3
  image(greenImg20);
  pop();
}

/**
 * This will be called whenever the mouse is pressed while the green variation is active
 */
function greenMousePressed() {
  /*persoIndex += 1;

  if (persoIndex >= 8) {
    persoIndex = 0;
  }*/
}
