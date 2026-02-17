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
  x: 400,
  x2: undefined,
  x3: undefined,
  y: 840,
  y2: 810,
  direction: 1,
  width: 290,
  width2: 50,
  height: 100,
  height2: 140,
  velocity: 2,
  updateVelocity: 0,
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
  direction: 1,
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
        x: x,
        y: y, //will be set for each teeth
        readyToMove: false,
        hasBounced: false,
        teethState: "idle",
        timerBeforeFall: 0, //starts at zero
        direction: 0,
        vy: 0, // vertical velocity
        vx: 0, // horizontal velocity
        point: true,
      },
      teethDown: {
        x: x,
        y: y, //will be set for each teeth
        readyToMove: false,
        hasBounced: false,
        teethState: "idle",
        timerBeforeFall: 0, //starts at zero
        direction: 0,
        vy: 0, // vertical velocity
        vx: 0, // horizontal velocity
        point: true,
      },
      fill: fill, //will be 0                     3
      width: 100, //they should all be the same
      height: 180, //they should all be the same
      tint: tint, //                               4
      //physics when droppping/////////////////////
      ////////////
      gravity: 0.6,
      bounceStrength: -10,
      sidePush: 10,
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
  noStroke();

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
  tint(255, cadreCounter); //menuOpacityGlowProgression
  image(menuImg17, 0, 0); //cadre glow
  tint(255, cadreCounterFinal); //menuOpacityGlowFinal
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
  tint(255, trayOpacity); //trayOpacity
  image(blueImg30, tray.x - 70, tray.y - 40);
  textSize(42);
  fill("blue");
  text(tray.UpdatableVelocityLow, 1500, 800);
  text(cadreCounter, 1500, 700);
  text(tray.velocity, 1500, 750);
  text(tray.UpdatableVelocityTop, 1500, 850);
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
  tray.x2 = tray.x + tray.width / 2 + tray.width2; // right rim
  tray.x3 = tray.x - tray.width / 2 - tray.width2; // left rim
  if (frameCount % 70 === 0) {
    randomVelocity = random(1, 6);
    tray.velocity = int(randomVelocity) + tray.updateVelocity;
  }
  push();
  tint(255, trayOpacity); //trayOpacity
  if (tray.x <= 90 || tray.x >= 1250) {
    tray.direction *= -1;
  }
  tray.x += tray.velocity * tray.direction;
  tray.x2 = tray.x + 300;
  tray.x3 = tray.x - 60;
  image(blueImg29, tray.x - 70, tray.y - 40);
  /*fill(255, 0, 0, 50);
  rect(tray.x, tray.y, tray.width, tray.height);
  fill(0, 255, 0, 50);
  rect(tray.x2, tray.y2, tray.width2, tray.height2);
  rect(tray.x3, tray.y2, tray.width2, tray.height2);*/
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
  carMover.y += carMover.speedY * carMover.direction;
  if (carMover.y > carMover.maxY || carMover.y < carMover.minY) {
    carMover.direction *= -1;
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
  escIcon.y += escIcon.gameSpeedESC * escIcon.direction;
  if (escIcon.y > escIcon.maxY || escIcon.y < escIcon.minY) {
    escIcon.direction *= -1;
  }
  pop();
}

function drawTeethTop(teeth) {
  push();
  noStroke();
  fill(255, 0);
  rect(teeth.teethTop.x, teeth.teethTop.y, teeth.width, teeth.height);
  image(teeth.image.img, teeth.teethTop.x - 50, teeth.teethTop.y - 70);
  pop();
}

function drawTeethTopOnTop(teeth) {
  if (teeth.teethTop.readyToMove === true) {
    push();
    noStroke();
    fill(255, 0);
    rect(teeth.teethTop.x, teeth.teethTop.y, teeth.width, teeth.height);
    image(teeth.image.img, teeth.teethTop.x - 50, teeth.teethTop.y - 70);
    //fill(255);
    //textSize(24);
    //text(teeth.teethTop.x, teeth.teethTop.x + 100, teeth.teethTop.y);
    pop();
  }
}

function drawTeethDown(teeth) {
  push();
  noStroke();
  fill(255, 0);
  rect(teeth.teethDown.x, teeth.teethDown.y, teeth.width, teeth.height);
  image(teeth.image.img, teeth.teethDown.x - 50, teeth.teethDown.y - 70);
  pop();
}

function drawTeethDownOnTop(teeth) {
  if (teeth.teethDown.readyToMove === true) {
    push();
    noStroke();
    fill(255, 0);
    rect(teeth.teethDown.x, teeth.teethDown.y, teeth.width, teeth.height);
    image(teeth.image.img, teeth.teethDown.x - 50, teeth.teethDown.y - 70);
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
  if (teethOpacity >= 255) {
    const hitCenterT =
      teeth.teethTop.x + teeth.width > tray.x && // right edge of teeth
      teeth.teethTop.x < tray.x + tray.width && // left edge of teeth
      teeth.teethTop.y + teeth.height > tray.y && // bottom edge
      teeth.teethTop.y < tray.y + tray.height; // top edge

    const hitRightT =
      teeth.teethTop.x + teeth.width > tray.x2 &&
      teeth.teethTop.x < tray.x2 + tray.width2 &&
      teeth.teethTop.y + teeth.height > tray.y2 &&
      teeth.teethTop.y < tray.y2 + tray.height2;

    const hitLeftT =
      teeth.teethTop.x + teeth.width > tray.x3 &&
      teeth.teethTop.x < tray.x3 + tray.width2 &&
      teeth.teethTop.y + teeth.height > tray.y2 &&
      teeth.teethTop.y < tray.y2 + tray.height2;

    let goLeft = false;
    let goRight = false;

    /////////////////////////////////top////////////////////////////////////////
    const teethMouseOverlapTop =
      mouseX > teeth.teethTop.x &&
      mouseX < teeth.teethTop.x + teeth.width &&
      mouseY > teeth.teethTop.y &&
      mouseY < teeth.teethTop.y + teeth.height;
    /////////////////////////////////////////////////////////////////
    //////////////////first click/////////////////////////
    if (
      teethMouseOverlapTop &&
      mouseIsPressed &&
      teeth.teethTop.teethState === "idle"
    ) {
      teeth.teethTop.teethState = "removing";
    }
    //////////////////removing the tooth/////////////////////
    if (
      teethMouseOverlapTop &&
      mouseIsPressed &&
      teeth.teethTop.teethState === "removing"
    ) {
      teeth.teethTop.y += 0.5;
      if (teeth.teethTop.y >= 300) {
        teeth.teethTop.teethState = "removed";
      }
    } //////////////////////////////////////////////////////////////////////////////
    if (teethMouseOverlapTop && teeth.teethTop.teethState === "removed") {
      teeth.teethTop.x = mouseX - 50;
      teeth.teethTop.y = mouseY - 50;
      teeth.teethTop.readyToMove = true;
      teeth.teethTop.timerBeforeFall += 1;
      trayOpacity += 2;
      if (trayOpacity > 255) {
        trayOpacity = 255;
      } /////////////////////////////////////////////////////////////////////////
      if (
        teeth.teethTop.timerBeforeFall >= 60 &&
        mouseIsPressed &&
        mouseY < 450
      ) {
        teeth.teethTop.teethState = "drop";
      }
    } else if (teeth.teethTop.teethState === "drop") {
      teeth.teethTop.y += 0.5;
      //gravity
      teeth.teethTop.vy += teeth.gravity;
      teeth.teethTop.y += teeth.teethTop.vy;
      //limit
      let groundY = 885;
      let groundedTeeth = teeth.teethTop.y >= groundY;

      if (teeth.teethTop.y > groundY) {
        teeth.teethTop.y = groundY;
      }

      if (
        (hitRightT || hitLeftT) &&
        !teeth.teethTop.hasBounced &&
        !groundedTeeth
      ) {
        teeth.teethTop.vy = teeth.bounceStrength;
        teeth.teethTop.direction = random(-1, 1);
        ///////////horizontally///////////////////
        teeth.teethTop.hasBounced = true;
      }

      if (hitLeftT && groundedTeeth) {
        //console.log("groundteethleft");
        goLeft = true;
        if (goLeft) {
          teeth.teethTop.x -= 5;
        }
      }

      if (hitRightT && groundedTeeth) {
        //console.log("groundteethright");
        goRight = true;
        if (goRight) {
          teeth.teethTop.x += 5;
        }
      }

      if (teeth.teethTop.hasBounced === true) {
        teeth.teethTop.vx = teeth.sidePush * teeth.teethTop.direction;
        teeth.teethTop.x += teeth.teethTop.vx;
      }

      if (!hitRightT && !hitLeftT && hitCenterT && !groundedTeeth) {
        teeth.teethTop.teethState = "caught";
      }
    }
    if (teeth.teethTop.teethState === "caught" && hitCenterT) {
      let groundYTray = 850;
      teeth.teethTop.y += 4;
      if (teeth.teethTop.point) {
        cadreCounter += 2;
        tray.updateVelocity += 0.25;
        endTitleLogo.opacity2 += 1;
        teeth.teethTop.point = false;
      }
      if (teeth.teethTop.y > groundYTray) {
        teeth.teethTop.y = groundYTray;
      }
      teeth.teethTop.x += tray.velocity * tray.direction;
    }

    ///////////////////////////////////////////down/////////////////////////////////
    ///////////////////////////////////////////down/////////////////////////////////
    ///////////////////////////////////////////down/////////////////////////////////
    const hitCenterD =
      teeth.teethDown.x + teeth.width > tray.x && // right edge of teeth
      teeth.teethDown.x < tray.x + tray.width && // left edge of teeth
      teeth.teethDown.y + teeth.height > tray.y && // bottom edge
      teeth.teethDown.y < tray.y + tray.height; // top edge

    const hitRightD =
      teeth.teethDown.x + teeth.width > tray.x2 &&
      teeth.teethDown.x < tray.x2 + tray.width2 &&
      teeth.teethDown.y + teeth.height > tray.y2 &&
      teeth.teethDown.y < tray.y2 + tray.height2;

    const hitLeftD =
      teeth.teethDown.x + teeth.width > tray.x3 &&
      teeth.teethDown.x < tray.x3 + tray.width2 &&
      teeth.teethDown.y + teeth.height > tray.y2 &&
      teeth.teethDown.y < tray.y2 + tray.height2;

    const teethMouseOverlapDown =
      mouseX > teeth.teethDown.x &&
      mouseX < teeth.teethDown.x + teeth.width &&
      mouseY > teeth.teethDown.y &&
      mouseY < teeth.teethDown.y + teeth.height;

    /////////////////////////////////////////////////////////////////
    //////////////////first click/////////////////////////
    if (
      teethMouseOverlapDown &&
      mouseIsPressed &&
      teeth.teethDown.teethState === "idle"
    ) {
      teeth.teethDown.teethState = "removing";
    }
    //////////////////removing the tooth/////////////////////
    if (
      teethMouseOverlapDown &&
      mouseIsPressed &&
      teeth.teethDown.teethState === "removing"
    ) {
      teeth.teethDown.y -= 0.5;
      if (teeth.teethDown.y <= 450) {
        teeth.teethDown.teethState = "removed";
      }
    } //////////////////////////////////////////////////////////////////////////////
    if (teethMouseOverlapDown && teeth.teethDown.teethState === "removed") {
      teeth.teethDown.x = mouseX - 50;
      teeth.teethDown.y = mouseY - 50;
      teeth.teethDown.readyToMove = true;
      teeth.teethDown.timerBeforeFall += 1;
      trayOpacity += 2;
      if (trayOpacity > 255) {
        trayOpacity = 255;
      } /////////////////////////////////////////////////////////////////////////
      if (
        teeth.teethDown.timerBeforeFall >= 60 &&
        mouseIsPressed &&
        mouseY < 600
      ) {
        teeth.teethDown.teethState = "drop";
      }
    } else if (teeth.teethDown.teethState === "drop") {
      teeth.teethDown.y += 0.5;
      //gravity
      teeth.teethDown.vy += teeth.gravity;
      teeth.teethDown.y += teeth.teethDown.vy;
      //limit
      let groundY = 885;
      let groundedTeeth = teeth.teethDown.y >= groundY;

      if (teeth.teethDown.y > groundY) {
        teeth.teethDown.y = groundY;
      }

      if (
        (hitRightD || hitLeftD) &&
        !teeth.teethDown.hasBounced &&
        !groundedTeeth
      ) {
        teeth.teethDown.vy = teeth.bounceStrength;
        teeth.teethDown.direction = random(-1, 1);
        ///////////horizontally///////////////////
        teeth.teethDown.hasBounced = true;
      }

      if (hitLeftD && groundedTeeth) {
        //console.log("groundteethleft");
        goLeft = true;
        if (goLeft) {
          teeth.teethDown.x -= 5;
        }
      }

      if (hitRightD && groundedTeeth) {
        //console.log("groundteethright");
        goRight = true;
        if (goRight) {
          teeth.teethDown.x += 5;
        }
      }

      if (teeth.teethDown.hasBounced === true) {
        teeth.teethDown.vx = teeth.sidePush * teeth.teethDown.direction;
        teeth.teethDown.x += teeth.teethDown.vx;
      }

      if (!hitRightD && !hitLeftD && hitCenterD && !groundedTeeth) {
        teeth.teethDown.teethState = "caught";
      }
    }
    if (teeth.teethDown.teethState === "caught" && hitCenterD) {
      let groundYTray = 850;
      teeth.teethDown.y += 4;
      if (teeth.teethDown.point) {
        cadreCounter += 1;
        tray.updateVelocity += 0.25;
        tray.updateVelocity += 0.25;
        endTitleLogo.opacity2 += 1;
        teeth.teethDown.point = false;
      }
      if (teeth.teethDown.y > groundYTray) {
        teeth.teethDown.y = groundYTray;
      }
      teeth.teethDown.x += tray.velocity * tray.direction;
    }
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
