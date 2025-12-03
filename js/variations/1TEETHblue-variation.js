/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

///////////////////mouvement,opacity,fadeINandOUT///////////////////
let blueFadeIn = 255; //starts black and will go down to 0
let fondJeu1opacity = 255; //opacity of the background image when at 0 trigger next event
let blueOpacity = 0; //opacity of the background image, goes up when fondJeu1opacity is 0
let gameSpeedESC = 0.08;
let blueCinematicTrigger = 0; //starts at zero and goes up
let TouchOnCar = 0; // will go up when car is touched
let blueCinematicTrigger2 = 0; //starts after the first trigger.
let carGlow = 0;
let blueOpacityHand1 = 0;
let blueOpacityHand2 = 0;
let blueOpacityHand3 = 0;

let bigFaceOpacity = 0; //the close up of the whole face starts transparent
let MainCarOpacity = 255; //starts visible and will become transparent.
let paysageOpacity = 0;
let teethOpacity = 255;

let blueInputEnabled = false; //no clicks at first

////////////////////////menu frame (divided in 3)///////////////////////////

let leftSideFraming = {
  x: -1600,
  y: 0,
  width: 1600,
  height: 900,
  maxX: 800,
  minX: 0,
  speed: 4,
};

let rightSideFraming = {
  x: 1600,
  y: 0,
  width: 1600,
  height: 900,
  maxX: 1600,
  minx: 800,
  speed: 4,
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
let teeth4TopLeft = undefined;
let teeth1downRight = undefined;
let teeth2downRight = undefined;
let teeth3downRight = undefined;
let teeth4downRight = undefined;
let teeth1downLeft = undefined;
let teeth2downLeft = undefined;
let teeth3downLeft = undefined;
let teeth4downLeft = undefined;

////////////////////images//////////////////////
let blueImg1;
let blueImg2;
let blueImg3;
let blueImg4;
let blueImg5;
let blueImg6;
let blueImg7;
let blueImg8;
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

/**
 * This will be called just before the blue variation starts
 */
function blueSetup() {
  ////////////                  1    2        3             4             5
  ////////////                  x,   y,      fill,         tint,         img
  teeth1TopRight = createTeeth(890, 300, "#e8e9dcff", teethOpacity, blueImg17);
  teeth2TopRight = createTeeth(1005, 290, "#e8e9dcff", teethOpacity, blueImg20);
  teeth3TopRight = createTeeth;
  teeth4TopRight = createTeeth;

  teeth1TopLeft = createTeeth(800, 300, "#e8e9dcff", teethOpacity, blueImg16);
  teeth2TopLeft = createTeeth;
  teeth3TopLeft = createTeeth;
  teeth4TopLeft = createTeeth;

  teeth1downRight = createTeeth;
  teeth2downRight = createTeeth;
  teeth3downRight = createTeeth;
  teeth4downRight = createTeeth;

  teeth1downLeft = createTeeth;
  teeth2downLeft = createTeeth;
  teeth3downLeft = createTeeth;
  teeth4downLeft = createTeeth;

  ////////////////     1  2   3     4      5
  function createTeeth(x, y, fill, tint, img) {
    const teeth = {
      x: x, //will be set for each teeth       1
      y: y, //will be set for each teeth           2
      fill: fill, //will be 0                     3
      width: 95, //they should all be the same
      height: 130, //they should all be the same           4
      tint: tint,
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

  //drawMouth();
  push();
  tint(255, teethOpacity);
  image(blueImg13, 0, 0); //inside of mouth
  drawTeeth(teeth1TopRight);
  drawTeeth(teeth2TopRight);
  drawTeeth(teeth1TopLeft);
  image(blueImg11, 0, 450); //lower jaw
  image(blueImg12, 0, 0); ///upperjaw
  pop();

  push();
  tint(255, bigFaceOpacity);
  image(blueImg4, 50, 40, 1500, 800);
  pop();

  push();
  tint(255, blueOpacity);
  image(blueImg8, 0, 0); //cadre complet
  pop();

  blueCinematic();

  drawEscBlue();

  push();
  fill(255);
  text(blueFadeIn, 200, 300);
  text(carMover.x, 300, 300);
  fill(0, 0, 255);
  text(TouchOnCar, 400, 300);
  text(carGlow, 500, 300);
  text(blueInputEnabled, 600, 300);
  fill(255, 0, 0);
  text(blueCinematicTrigger2, 500, 400);
  //ellipse(1005, 290, 95, 130); ///size of a teeth
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
  image(blueImg2, escIcon.x, escIcon.y - 110, escIcon.width, escIcon.height);
  fill(255, 0, 0, 0);
  ellipse(rightSideFraming.x, escIcon.y, escIcon.width, escIcon.height);
  escIcon.y += gameSpeedESC * direction;
  if (escIcon.y > escIcon.maxY || escIcon.y < escIcon.minY) {
    direction *= -1;
  }
  pop();
}

function drawTeeth(teeth) {
  push();
  noStroke();
  fill(255);
  ellipse(teeth.x, teeth.y, teeth.width, teeth.height);
  image(teeth.image.img, teeth.x - 70, teeth.y - 110);
  rect();
}
/*function drawMouth() {
  push();
  tint(255, teethOpacity);
  image(blueImg13, 0, 0); //inside of mouth
  image(blueImg11, 0, 450); //lower jaw
  image(blueImg12, 0, 0); ///upperjaw
  pop();
}*/

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
