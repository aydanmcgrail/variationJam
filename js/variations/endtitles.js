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
  x: 1540,
  y: 550,
  width: 300,
  height: 380,
  opacity: 255,
};

let langue = {
  x: 480,
  y: -145,
  maxY: 300,
  minY: -145,
  maxX: 500,
  minX: 480,
  state: "0",
};

let mainY;

let poingX = 800;
let poingY = 0;
let poingSpeed = 8;
let poingDirection = 1;
let poingState = "knocking";
let startTimerFist = 0;
let timerFistGoLeft = 0;
let poingOpacity = 0;

let femmeOpacity = 0;
let endOpacityOpen = 255;
let endOpacityClosed = 0;

let finFadeIn = 255;
let introFinOpacity = 255;

let vitreOpacity1 = 255;
let vitreOpacity2 = 255;
let vitreOpacity3 = 255;
let vitreOpacity4 = 255;
let vitreWidthGauche = 754;
let vitreWidthDroite = 846;
let vitreHeight = 450;

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
let endImg21;
let endImg22;

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

  push();
  tint(255, 255);
  image(endImg9, 0, 0);
  image(endImg7, -15, 0); //femme
  drawFemmeLangue();
  push();
  drawPoing();
  pop();

  push();
  tint(255, vitreOpacity1); //vitreOpacity
  image(endImg17, 0, 0, vitreWidthGauche, vitreHeight); //cadre gauche haut
  tint(255, vitreOpacity2); //vitreOpacity
  image(endImg11, 0, 450, vitreWidthGauche, vitreHeight); //cadre gauche bas
  tint(255, vitreOpacity3); //vitreOpacity
  image(endImg21, 754, 0, vitreWidthDroite, vitreHeight); //cadre droite haut
  tint(255, vitreOpacity4); //vitreOpacity
  image(endImg22, 754, 450, vitreWidthDroite, vitreHeight); //cadre droite bas
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
  drawHandEnd();
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
  textSize(32);
  //text(startTimerFist, 200, 200);
  //text(timerFistGoLeft, 250, 200);
  text(langue.state, 1500, 380);
  text(femmeOpacity, 1500, 430);
  pop();

  let fadeOutEnd = 0;
  if (femmeOpacity >= 3900) {
    push();
    fadeOutEnd += 2;
    tint(255, fadeOutEnd);
    fill("black");
    rect(0, 0, 1600, 900);
    pop();
  }
}

function endCinematic() {
  if (finFadeIn <= 25) {
    introFinOpacity -= 4;
  }
}

function drawHandEnd() {
  push();
  tint(255, endOpacityOpen);
  let minHeightHand = 50;
  let maxHeightHand = 900;
  let yConstrainHand = constrain(mouseY, minHeightHand, maxHeightHand);
  image(menuImg12, mouseX - 200, yConstrainHand, 380, 920);
  tint(255, endOpacityClosed);
  image(menuImg13, mouseX - 200, yConstrainHand - 100, 380, 920);
  pop();
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

function drawFemmeLangue() {
  push();
  tint(255, femmeOpacity);
  image(endImg8, 0, 0);
  image(endImg19, langue.x, langue.y); //langue
  image(endImg20, 0, 0);
  pop();

  if (femmeOpacity >= 350 && langue.state === "0") {
    langue.state = "1";
  } else if (femmeOpacity >= 800 && langue.state === "1") {
    langue.state = "2";
  } else if (femmeOpacity >= 1250 && langue.state === "2") {
    langue.state = "3";
  } else if (femmeOpacity >= 1650 && langue.state === "3") {
    langue.state = "4";
  } else if (femmeOpacity >= 2100 && langue.state === "4") {
    langue.state = "5";
  } else if (femmeOpacity >= 2550 && langue.state === "5") {
    langue.state = "6";
  } else if (femmeOpacity >= 3000 && langue.state === "6") {
    langue.state = "7";
  } else if (femmeOpacity >= 3450 && langue.state === "7") {
    langue.state = "8";
  }

  if (femmeOpacity >= 500 && femmeOpacity <= 950) {
    push();
    tint(255, 255);
    image(endImg13, 500, 400);
    pop();
  } else if (femmeOpacity >= 1450 && femmeOpacity <= 1750) {
    push();
    tint(255, 255);
    image(endImg14, 500, 400);
    pop();
  } else if (femmeOpacity >= 2250 && femmeOpacity <= 2600) {
    push();
    tint(255, 255);
    image(endImg15, 500, 400);
    pop();
  } else if (femmeOpacity >= 3200 && femmeOpacity <= 3450) {
    push();
    tint(255, 255);
    image(endImg16, 500, 400);
    pop();
  }

  if (langue.state === "1") {
    if (langue.y >= langue.maxY && langue.x >= langue.maxX) {
      langue.y = langue.maxY;
      langue.x = langue.maxX;
    } else {
      langue.y += 4;
      langue.x += 0.18;
    }
  }
  if (langue.state === "2") {
    if (langue.y <= langue.minY && langue.x <= langue.minX) {
      langue.y = langue.minY;
      langue.x = langue.minX;
      5;
    } else {
      langue.y -= 4;
      langue.x -= 0.18;
    }
  }
  if (langue.state === "3") {
    if (langue.y >= langue.maxY && langue.x >= langue.maxX) {
      langue.y = langue.maxY;
      langue.x = langue.maxX;
    } else {
      langue.y += 4;
      langue.x += 0.18;
    }
  }
  if (langue.state === "4") {
    if (langue.y <= langue.minY && langue.x <= langue.minX) {
      langue.y = langue.minY;
      langue.x = langue.minX;
      5;
    } else {
      langue.y -= 4;
      langue.x -= 0.18;
    }
  }
  if (langue.state === "5") {
    if (langue.y >= langue.maxY && langue.x >= langue.maxX) {
      langue.y = langue.maxY;
      langue.x = langue.maxX;
    } else {
      langue.y += 4;
      langue.x += 0.18;
    }
  }
  if (langue.state === "6") {
    if (langue.y <= langue.minY && langue.x <= langue.minX) {
      langue.y = langue.minY;
      langue.x = langue.minX;
      5;
    } else {
      langue.y -= 4;
      langue.x -= 0.18;
    }
  }
  if (langue.state === "7") {
    if (langue.y >= langue.maxY && langue.x >= langue.maxX) {
      langue.y = langue.maxY;
      langue.x = langue.maxX;
    } else {
      langue.y += 4;
      langue.x += 0.18;
    }
  }
  if (langue.state === "8") {
    if (langue.y <= langue.minY && langue.x <= langue.minX) {
      langue.y = langue.minY;
      langue.x = langue.minX;
      5;
    } else {
      langue.y -= 4;
      langue.x -= 0.18;
    }
  }
}

function drawTorchon() {
  push();
  noStroke();
  tint(255, torchon.opacity); //finOpacity
  image(
    endImg12,
    torchon.x - 120,
    torchon.y - 140,
    torchon.width,
    torchon.height,
  );
  ellipse(torchon.x, torchon.y, torchon.width, torchon.height);
  pop();
}

function endCheckInput() {
  const distanceToTorchon = dist(mouseX, mouseY, torchon.x, torchon.y);
  const overlapTorchon =
    distanceToTorchon < torchon.width / 2 + torchon.height / 2;

  const overlapVitre1Torchon = //haut gauche
    mouseX > 53 && mouseX < 800 && mouseY > 80 && mouseY < 450;

  const overlapVitre2Torchon = //bas gauche
    mouseX > 53 && mouseX < 800 && mouseY > 450 && mouseY < 749;

  const overlapVitre3Torchon = //haut droite
    mouseX > 800 && mouseX < 1479 && mouseY > 80 && mouseY < 450;

  const overlapVitre4Torchon = //haut droite
    mouseX > 800 && mouseX < 1479 && mouseY > 450 && mouseY < 749;

  if (overlapTorchon && mouseIsPressed && overlapVitre1Torchon) {
    vitreOpacity1 -= 1;
    if (vitreOpacity1 <= 80) {
      vitreOpacity1 = 80;
    }
  }
  if (overlapTorchon && mouseIsPressed && overlapVitre2Torchon) {
    vitreOpacity2 -= 1;
    if (vitreOpacity2 <= 80) {
      vitreOpacity2 = 80;
    }
  }
  if (overlapTorchon && mouseIsPressed && overlapVitre3Torchon) {
    vitreOpacity3 -= 1;
    if (vitreOpacity3 <= 80) {
      vitreOpacity3 = 80;
    }
  }
  if (overlapTorchon && mouseIsPressed && overlapVitre4Torchon) {
    vitreOpacity4 -= 1;
    if (vitreOpacity4 <= 80) {
      vitreOpacity4 = 80;
    }
  }

  if (overlapTorchon && mouseIsPressed) {
    // console.log("ez");
    let minHeightTorchon = 100;
    let maxHeightTorchon = 900;
    let yConstrainTorchon = constrain(
      mouseY,
      minHeightTorchon,
      maxHeightTorchon,
    );
    torchon.x = mouseX;
    torchon.y = yConstrainTorchon;
    endOpacityClosed = 255;
    endOpacityOpen = 0;
  } else {
    torchon.x;
    torchon.y;
    endOpacityClosed = 0;
    endOpacityOpen = 255;
  }

  if (
    vitreOpacity1 <= 80 &&
    vitreOpacity2 <= 80 &&
    vitreOpacity3 <= 80 &&
    vitreOpacity4 <= 80
  ) {
    torchon.opacity -= 8;
    startTimerFist += 1;
    endOpacityClosed -= 8;
    endOpacityOpen -= 8;
    vitreOpacity1 = 0;
    vitreOpacity2 = 0;
    vitreOpacity3 = 0;
    vitreOpacity4 = 0;
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
