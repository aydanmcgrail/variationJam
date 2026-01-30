/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,fadeINandOUT///////////////////
let blueFadeIn = 255; //starts black and will go down to 0
let fondJeu1opacity = 255; //opacity of the background image when at 0 trigger next event
let blueOpacity = 0; //opacity of the background image, goes up when fondJeu1opacity is 0
let blueCinematicTrigger = 0; //starts at zero and goes up
let TouchOnCar = 0; // will go up when car is touched
let blueCinematicTrigger2 = 0; //starts after the first trigger.
let carGlow = 0;
let blueOpacityHand1 = 0;
let blueOpacityHand2 = 0;
let blueOpacityHand3 = 0;
let trayOpacity = 0; //goes up when hovering

let bigFaceOpacity = 0; //the close up of the whole face starts transparent
let MainCarOpacity = 255; //starts visible and will become transparent.
let paysageOpacity = 0;
let teethOpacity = 0;
let mouthOpacity = 0;

let blueInputEnabled = false; //no clicks at first

let tray = {
  x: 180,
  x2: 180,
  x3: 180,
  y: 840,
  y2: 780,
  direction: 1,
  width: 290,
  width2: 70,
  height: 100,
  height2: 120,
  velocity: 2,
};

let carMover = {
  x: 1620,
  x2: 900,
  y: 200,
  y2: 550,
  maxX: 1620,
  minX: 0,
  maxY: 215,
  minY: 185,
  speedX: 3,
  speedY: 0.2,
  size: 500,
  width: 890,
  height: 350,
};

let teeth1TopRight = undefined;
let teeth2TopRight = undefined;
let teeth4TopRight = undefined;
let teeth1TopLeft = undefined;
let teeth2TopLeft = undefined;
let teeth3TopLeft = undefined;
let teeth3TopRight = undefined;
let teeth4TopLeft = undefined;
let teeth1DownRight = undefined;
let teeth2DownRight = undefined;
let teeth3DownRight = undefined;
let teeth4DownRight = undefined;
let teeth1DownLeft = undefined;
let teeth2DownLeft = undefined;
let teeth3DownLeft = undefined;
let teeth4DownLeft = undefined;

////////////////////images//////////////////////
let blueImg1;
let blueImg2;
let blueImg3;
let blueImg4;
let blueImg5;
let blueImg6;
let blueImg7;
//let blueImg8;
let blueImg9;
let blueImg10;
let blueImg11;
let blueImg12;
let blueImg13;
let blueImg14;
let blueImg15;
let blueImg16;
let blueImg17;
let blueImg18;
let blueImg19;
let blueImg20;
let blueImg21;
let blueImg22;
let blueImg23;
let blueImg24;
let blueImg25;
let blueImg26;
let blueImg27;
let blueImg28;
let blueImg29;
let blueImg30;

/**
 * This will be called just before the blue variation starts
 */
function blueSetup() {
  ////////////                  1    2        3             4             5
  ////////////                  x,   y,      fill,         tint,         img
  teeth1TopRight = createTeeth(840, 240, "#e8e9dcff", teethOpacity, blueImg17);
  teeth2TopRight = createTeeth(950, 230, "#e8e9dcff", teethOpacity, blueImg20);
  teeth3TopRight = createTeeth(1060, 220, "#e8e9dcff", teethOpacity, blueImg24);
  teeth4TopRight = createTeeth(1165, 215, "#e8e9dcff", teethOpacity, blueImg28);
  teeth1TopLeft = createTeeth(710, 230, "#e8e9dcff", teethOpacity, blueImg16);
  teeth2TopLeft = createTeeth(590, 225, "#e8e9dcff", teethOpacity, blueImg6);
  teeth3TopLeft = createTeeth(490, 225, "#e8e9dcff", teethOpacity, blueImg23);
  teeth4TopLeft = createTeeth(380, 220, "#e8e9dcff", teethOpacity, blueImg27);
  teeth1DownRight = createTeeth(825, 550, "#e8e9dcff", teethOpacity, blueImg15);
  teeth2DownRight = createTeeth(935, 545, "#e8e9dcff", teethOpacity, blueImg19);
  teeth3DownRight = createTeeth(
    1050,
    545,
    "#e8e9dcff",
    teethOpacity,
    blueImg22,
  );
  teeth4DownRight = createTeeth(
    1165,
    540,
    "#e8e9dcff",
    teethOpacity,
    blueImg26,
  );
  teeth1DownLeft = createTeeth(710, 550, "#e8e9dcff", teethOpacity, blueImg14);
  teeth2DownLeft = createTeeth(600, 545, "#e8e9dcff", teethOpacity, blueImg18);
  teeth3DownLeft = createTeeth(490, 540, "#e8e9dcff", teethOpacity, blueImg21);
  teeth4DownLeft = createTeeth(375, 545, "#e8e9dcff", teethOpacity, blueImg25);

  ////////////////     1  2   3     4      5
  function createTeeth(x, y, fill, tint, img) {
    const teeth = {
      teethTop: {
        y: y, //will be set for each teeth
        readyToMove: false,
        bouncable: false,
      },
      teethDown: {
        y: y, //will be set for each teeth
        readyToMove: false,
        bouncable: false,
      },
      teethState: "untouchable",
      x: x, //will be set for each teeth
      fill: fill, //will be 0                     3
      width: 100, //they should all be the same
      height: 180, //they should all be the same
      tint: tint, //                               4
      timerBeforeFall: 0, //starts at zero
      speed: 24,
      teethTouchable: true,
      randomVelocityTeeth: random(-1, 1),
      //begoneTooth: 0, //does it have an end? not sure
      image: {
        //this is where i cross my fingers. I want to add a different img to each teeth
        img: img, //                                5
        dx: x,
        dy: y,
      },
    };
    return teeth;
  }
}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
  background("black");

  push();
  tint(255, fondJeu1opacity);
  image(blueImg7, 0, 0);
  pop();

  push();
  tint(255, blueOpacity); ///starts at zero
  image(blueImg3, 0, 0, width, height); ///paysage
  drawFirstTimeCar();
  pop();

  blueFadeIn -= 1;
  fill(0, blueFadeIn);
  rect(0, 0, width, height);
  drawGlowCar();
  drawBlueNewBackgroundForAditionalVistitsOfGame();
  push();
  tint(255, mouthOpacity);
  image(blueImg13, 0, 0); //inside of mouth

  tint(255, teethOpacity);
  blueCheckInput(teeth1TopRight);
  blueCheckInput(teeth2TopRight);
  blueCheckInput(teeth3TopRight);
  blueCheckInput(teeth4TopRight);
  blueCheckInput(teeth1TopLeft);
  blueCheckInput(teeth2TopLeft);
  blueCheckInput(teeth3TopLeft);
  blueCheckInput(teeth4TopLeft);
  blueCheckInput(teeth1DownRight);
  blueCheckInput(teeth2DownRight);
  blueCheckInput(teeth3DownRight);
  blueCheckInput(teeth4DownRight);
  blueCheckInput(teeth1DownLeft);
  blueCheckInput(teeth2DownLeft);
  blueCheckInput(teeth3DownLeft);
  blueCheckInput(teeth4DownLeft);

  drawTeethTop(teeth1TopRight);
  drawTeethTop(teeth2TopRight);
  drawTeethTop(teeth3TopRight);
  drawTeethTop(teeth4TopRight);
  drawTeethTop(teeth1TopLeft);
  drawTeethTop(teeth2TopLeft);
  drawTeethTop(teeth3TopLeft);
  drawTeethTop(teeth4TopLeft);

  drawTeethDown(teeth1DownRight);
  drawTeethDown(teeth2DownRight);
  drawTeethDown(teeth3DownRight);
  drawTeethDown(teeth4DownRight);
  drawTeethDown(teeth1DownLeft);
  drawTeethDown(teeth2DownLeft);
  drawTeethDown(teeth3DownLeft);
  drawTeethDown(teeth4DownLeft);

  tint(255, mouthOpacity);
  image(blueImg11, 0, 450); //lower jaw
  image(blueImg12, 0, 0); ///upperjaw
  pop();

  push();
  tint(255, bigFaceOpacity);
  image(blueImg4, 50, 40, 1500, 800);
  pop();

  push();
  tint(255, blueOpacity); //blueOpacity
  image(menuImg16, 0, 0); //cadre complet4
  tint(255, 0); //menuOpacityGlowProgression
  image(menuImg17, 0, 0); //cadre glow
  tint(255, 0); //menuOpacityGlowFinal
  image(menuImg18, 0, 0); //cadre final glow
  pop();

  moveTray();

  tint(255, teethOpacity);
  drawTeethTopOnTop(teeth1TopRight);
  drawTeethTopOnTop(teeth2TopRight);
  drawTeethTopOnTop(teeth3TopRight);
  drawTeethTopOnTop(teeth4TopRight);
  drawTeethTopOnTop(teeth1TopLeft);
  drawTeethTopOnTop(teeth2TopLeft);
  drawTeethTopOnTop(teeth3TopLeft);
  drawTeethTopOnTop(teeth4TopLeft);

  drawTeethDownOnTop(teeth1DownRight);
  drawTeethDownOnTop(teeth2DownRight);
  drawTeethDownOnTop(teeth3DownRight);
  drawTeethDownOnTop(teeth4DownRight);
  drawTeethDownOnTop(teeth1DownLeft);
  drawTeethDownOnTop(teeth2DownLeft);
  drawTeethDownOnTop(teeth3DownLeft);
  drawTeethDownOnTop(teeth4DownLeft);

  push();
  tint(255, trayOpacity);
  image(blueImg30, tray.x - 85, tray.y - 40);
  pop();

  blueCinematic();

  drawEscBlue();

  /*push();
  fill("green");
  textSize(20);
  text(blueFadeIn, 200, 200);
  text(carMover.x, 300, 200);
  fill(0, 0, 255);
  text(dropTimer, 500, 200);
  text(blueInputEnabled, 600, 200);
  fill(255, 0, 0);
  text(tray.velocity, 500, 440);
  pop();*/
}

function moveTray() {
  tray.velocity;
  if (frameCount % 70 === 0) {
    randomVelocity = random(1, 6);
    tray.velocity = int(randomVelocity);
  }
  push();
  tint(255, 1); //trayOpacity
  if (tray.x <= 90 || tray.x >= 1520) {
    tray.direction *= -1;
  }
  tray.x += tray.velocity * tray.direction;
  tray.x2 = tray.x + 290;
  tray.x3 = tray.x - 70;
  image(blueImg29, tray.x - 65, tray.y - 40);
  fill(255, 100);
  rect(tray.x, tray.y, tray.width, tray.height); ///size of a teeth
  fill(255, 0, 0, 100);
  rect(tray.x2, tray.y2, tray.width2, tray.height2);
  fill(0, 255, 0, 100);
  rect(tray.x3, tray.y2, tray.width2, tray.height2);
  pop();
}

function blueCinematic() {
  if (blueFadeIn <= 50) {
    fondJeu1opacity -= 2;
  }
  if (fondJeu1opacity <= 150) {
    blueOpacity += 2;
  }

  if (blueFadeIn <= 200) {
  }
  ///"animations"triggers///
  //each time this value arrives at a set threshold, it will trigger a new event
  //blueCinematicTrigger += 1; //when game opens it starts

  if (blueCinematicTrigger >= 300) {
    drawHandPointingBlue();
    //blueInputEnabled = true;
    blueCinematicTrigger = 300;
    //blueCinematicTrigger2 += 1;
  } else {
    blueCinematicTrigger += 1;
  }

  if (TouchOnCar >= 1) {
    //this starts the next cooldown/treshhold that will eventually show the teeth
    blueCinematicTrigger2 += 1;
  }

  if (blueCinematicTrigger2 >= 200) {
    bigFaceOpacity -= 15; ///CROSSFADE
    teethOpacity += 15; ///CROSSFADE
    mouthOpacity += 15;
  }
}

function drawFirstTimeCar() {
  //WILL BE TRIGGERED WHEN X1 CONDITION IS TRUE. WHEN IT IS TIME FOR X2,
  // THIS FUNCTION WILL BE REMOVED TO LET ITS PLACE FOR X2'S FUNCTION
  push();
  tint(255, carGlow);
  image(blueImg9, carMover.x, carMover.y - 250, width, height);
  tint(255, MainCarOpacity); //starts visible and will become invisible
  image(blueImg1, carMover.x, carMover.y - 250, width, height);
  carMover.y += carMover.speedY * direction;
  if (carMover.y > carMover.maxY || carMover.y < carMover.minY) {
    direction *= -1;
  }

  if (carMover.x <= -200) {
    carMover.x;
    blueInputEnabled = true;
  } else {
    carMover.x -= carMover.speedX;
  }
  pop();
}
function drawEscBlue() {
  push();
  tint(255, blueOpacity - 100);
  image(blueImg2, escIcon.x, escIcon.y, escIcon.width, escIcon.height);
  fill(255, 0, 0, 0);
  //ellipse(rightSideFraming.x, escIcon.y, escIcon.width, escIcon.height);
  escIcon.y += escIcon.gameSpeedESC * direction;
  if (escIcon.y > escIcon.maxY || escIcon.y < escIcon.minY) {
    direction *= -1;
  }
  pop();
}

function drawTeethTop(teeth) {
  push();
  noStroke();
  fill(255, 0);
  rect(teeth.x, teeth.teethTop.y, teeth.width, teeth.height);
  image(teeth.image.img, teeth.x - 50, teeth.teethTop.y - 70);
  //fill(50, 30, 60);
  //textSize(16);
  // text(teeth.teethTop.readyToMove, teeth.x + 50, teeth.teethTop.y + 110);
  //text(teeth.teethTop.y, teeth.x + 50, teeth.teethTop.y + 90);
  //text(teeth.fall, teeth.x + 50, teeth.teethTop.y + 80);
  text(teeth.teethState, teeth.x + 50, teeth.teethTop.y + 125);
  pop();
}

function drawTeethTopOnTop(teeth) {
  if (teeth.teethTop.readyToMove === true) {
    push();
    noStroke();
    fill(255, 255, 0, 100);

    rect(teeth.x, teeth.teethTop.y, teeth.width, teeth.height);
    //image(teeth.image.img, teeth.x - 50, teeth.teethTop.y - 70);
    //fill(50, 30, 60);
    //textSize(16);
    //text(teeth.teethTop.readyToMove, teeth.x + 50, teeth.teethTop.y + 110);
    //text(teeth.timerBeforeFall, teeth.x + 50, teeth.teethTop.y + 90);
    //text(teeth.fall, teeth.x + 50, teeth.teethTop.y + 80);
    //fill(255, 0, 0);
    //text(teeth.begoneTooth, teeth.x + 50, teeth.teethTop.y + 125);
    pop();
  }
}

function drawTeethDown(teeth) {
  push();
  noStroke();
  fill(255, 0);
  rect(teeth.x, teeth.teethDown.y, teeth.width, teeth.height);
  image(teeth.image.img, teeth.x - 50, teeth.teethDown.y - 70);
  fill(50, 30, 60);
  textSize(16);
  text(teeth.teethState, teeth.x + 50, teeth.teethDown.y + 110);
  //text(teeth.teethDown.y, teeth.x + 50, teeth.teethDown.y + 90);
  //text(teeth.fall, teeth.x + 50, teeth.teethDown.y + 80);*/
  pop();
}

function drawTeethDownOnTop(teeth) {
  if (teeth.teethDown.readyToMove === true) {
    push();
    noStroke();
    fill(255, 0);
    rect(teeth.x, teeth.teethDown.y, teeth.width, teeth.height);
    image(teeth.image.img, teeth.x - 50, teeth.teethDown.y - 70);
    /*fill(50, 30, 60);
    textSize(16);
    text(teeth.randomVelocityTeeth, teeth.x + 50, teeth.teethDown.y + 110);
    //text(teeth.teethDown.y, teeth.x + 50, teeth.teethDown.y + 90);
    //text(teeth.fall, teeth.x + 50, teeth.teethDown.y + 80);*/
    pop();
  }
}
function drawHandPointingBlue() {
  push();
  blueOpacityHand1 += 1;
  tint(255, blueOpacityHand1);
  image(menuImg6, mouseX - 60, mouseY - 60);
  tint(255, blueOpacityHand2);
  image(menuImg12, mouseX - 260, mouseY - 180);
  tint(255, blueOpacityHand3);
  image(menuImg13, mouseX - 260, mouseY - 180);
  pop();
}

function drawGlowCar() {
  let carDist = dist(mouseX, mouseY, carMover.x2, carMover.y2); //distance from mouse to center of icon
  if (carDist < (carMover.width, carMover.height) / 1.25 && carMover.x <= 0) {
    //if mouse is inside the icon
    carGlow += 15; //increase the glow
    if (carGlow > 255) {
      //cap the glow to 255
      carGlow = 255;
    }
  } else {
    carGlow -= 15; //decrease the glow when mouse is out
    if (carGlow < 0) {
      //cap the glow to 0
      carGlow = 0;
    }
  }
}
/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function blueKeyPressed(event) {
  if (event.keyCode === 27) {
    state = "menu";
    blueFadeIn = 255;
    menuClicked = false;
    readyGame1 = false;
    fadeOutToGame = 0;
  }
}

function blueCheckInput(teeth) {
  const distTeethTopToTray =
    teeth.x + teeth.width / 2 > tray.x - tray.width / 2 &&
    teeth.x - teeth.width / 2 < tray.x + tray.width / 2 &&
    teeth.teethTop.y + teeth.height / 2 > tray.y - tray.height / 2 &&
    teeth.teethTop.y - teeth.height / 2 < tray.y + tray.height / 2;

  const distTeethTopToTrayRightSide =
    teeth.x + teeth.width / 2 > tray.x2 - tray.width2 &&
    teeth.x - teeth.width / 2 < tray.x2 + tray.width2 &&
    teeth.teethTop.y + teeth.height / 2 > tray.y2 - tray.height2 / 2 &&
    teeth.teethTop.y - teeth.height / 2 < tray.y2 + tray.height2 / 2;

  const distTeethTopToTrayLeftSide =
    teeth.x + teeth.width / 2 > tray.x3 - tray.width2 &&
    teeth.x - teeth.width / 2 < tray.x3 + tray.width2 &&
    teeth.teethTop.y + teeth.height / 2 > tray.y2 - tray.height2 / 2 &&
    teeth.teethTop.y - teeth.height / 2 < tray.y2 + tray.height2 / 2;

  /*if (distTeethTopToTrayRightSide) {
    console.log("tray touch teeth RIGHT");
  }

  if (distTeethTopToTrayLeftSide) {
    console.log("tray touch teeth LEFT");
  }*/

  if (distTeethTopToTray) {
    console.log("tray touch teeth TOP");
  }

  const teethMouseOverlapTop =
    mouseX > teeth.x &&
    mouseX < teeth.x + teeth.width &&
    mouseY > teeth.teethTop.y &&
    mouseY < teeth.teethTop.y + teeth.height; //
  //useY < height / 2.1;

  const teethMouseOverlapDown =
    mouseX > teeth.x &&
    mouseX < teeth.x + teeth.width &&
    mouseY > teeth.teethDown.y &&
    mouseY < teeth.teethDown.y + teeth.height &&
    mouseY > height / 1.9 &&
    mouseY < height / 1.05;

  if (teethOpacity === 255) {
    // console.log("all teeth visible");
    teeth.teethState = "idle";
  } else if (
    teethMouseOverlapTop &&
    mouseIsPressed &&
    teeth.teethState === "idle"
  ) {
    teeth.teethTop.y += 1;
    if (teeth.teethTop.y >= 300) {
      teeth.teethState = "removed";
    }
  } else if (teethMouseOverlapTop && teeth.teethState === "removed") {
    teeth.x = mouseX - 50;
    teeth.teethTop.y = mouseY - 50;
    teeth.teethTop.readyToMove = true;
    teeth.timerBeforeFall += 1;
    trayOpacity += 2;
    if (trayOpacity > 255) {
      trayOpacity = 255;
    }
    if (teeth.timerBeforeFall >= 50 && mouseIsPressed) {
      teeth.teethState = "drop";
    }
  } else if (teeth.teethState === "drop") {
    teeth.teethTop.y += 8;
    if (
      (distTeethTopToTrayRightSide && !distTeethTopToTray) ||
      (distTeethTopToTrayLeftSide && !distTeethTopToTray)
    ) {
      console.log("tray touch teeth SIDES");
      teeth.teethState = "bounce";
    }
  } else if (teeth.teethState === "bounce") {
    teeth.teethTop.bouncable = true;
    teeth.teethTop.y -= 8;
    if (teeth.teethTop.bouncable === true) {
      teeth.randomVelocityTeeth;
      teeth.x += teeth.speed * teeth.randomVelocityTeeth;
    }
    if (teeth.teethTop.y <= 575) {
      console.log("top limit");
      teeth.teethState = "finalDrop";
    }
  } else if (teeth.teethState === "finalDrop") {
    teeth.teethTop.y += 8;
  }

  if (teethOpacity === 255) {
    // console.log("all teeth visible");
    teeth.teethState = "idle";
  } else if (
    teethMouseOverlapDown &&
    mouseIsPressed &&
    teeth.teethState === "idle"
  ) {
    teeth.teethDown.y -= 1;
    if (teeth.teethDown.y <= 450) {
      teeth.teethState = "removed";
    }
  } else if (teethMouseOverlapDown && teeth.teethState === "removed") {
    teeth.x = mouseX - 50;
    teeth.teethDown.y = mouseY - 50;
    teeth.teethDown.readyToMove = true;
    teeth.timerBeforeFall += 1;
    trayOpacity += 2;
    if (trayOpacity > 255) {
      trayOpacity = 255;
    }
    if (teeth.timerBeforeFall >= 50 && mouseIsPressed) {
      teeth.teethState = "drop";
    }
  } else if (teeth.teethState === "drop") {
    teeth.teethDown.y += 6.5;
  }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {
  if (!blueInputEnabled === false && TouchOnCar <= 0) {
    //only register once
    //&&value is not >= x
    TouchOnCar += 1;
    bigFaceOpacity = 255;
    carMover.x = 2000; //GET THE HELL OUT
    carMover.y = 2000; ///GET THE HELL OUT AS WELL!
    paysageOpacity = 255;
  }
}

function drawBlueNewBackgroundForAditionalVistitsOfGame() {
  push();
  tint(255, paysageOpacity);
  image(blueImg10, 0, 0);
  pop();
}
