/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let game1Blue = {
  x: 450,
  y: 250,
  width: 290,
  height: 180,
  maxY: 280,
  minY: 200,
  maxX: 480,
  minX: 420,
};

let game2Green = {
  x: 500,
  y: 530,
  width: 290,
  height: 180,
  maxY: 540,
  minY: 460,
};

let game3Red = {
  x: 1000,
  y: 280,
  width: 290,
  height: 180,
  maxY: 320,
  minY: 220,
};

let game4Yellow = {
  x: 1000,
  y: 580,
  width: 290,
  height: 180,
  maxY: 620,
  minY: 520,
};

let escIcon = {
  x: 1350,
  y: 830,
  width: 250,
  height: 170,
  maxY: 840,
  minY: 820,
};

///////////////////////////CINEMATIC variables////////////////////////////////////
/////////////////////////////CINEMATIC variables////////////////////////////////////
let menuTitleTimer = 0; ////starts at zero will go up to the limit that will trigger titleOn = false////
let menuClicked = false; ////will be true when mouse is clicked to trigger next event////
let menuInputEnabled = false; //WHEN false will start opacity7 going Down.
let menuOpacityImg7 = 255;

let goGameTimer = 0; ////timer to go to the game after click////
let fadeOutToGame = 0; ////overall fade to black////

let fadeOutToGame1 = 0; ////actually a fade in to black when click on icon////
let fadeInToGame1 = 0; //this will make a glowing version of the icon when hovering//
let readyGame1 = false; ///will trigger the next page when true////

let fadeOutToGame2 = 0;
let fadeInToGame2 = 0;
let readyGame2 = false;

let fadeOutToGame3 = 0;
let fadeInToGame3 = 0;
let readyGame3 = false;

let fadeOutToGame4 = 0;
let fadeInToGame4 = 0;
let readyGame4 = false;

////for the mouvement of the 4 menu icons////
let menuSpeed = 0.2;
let menuSpeed2 = 0.08;
let menuSpeed3 = 0.6;
let direction = 1;
let easing = 0.5;

//////////////////////////////////images and visuals////////////////////////////////////////////////////////////////
//////////////////////////////////images and visuals////////////////////////////////////////////////////////////////
//////////////////////////////////images and visuals////////////////////////////////////////////////////////////////
//////////////////////////////////images and visuals////////////////////////////////////////////////////////////////
let menuImg1;
let menuImg2;
let menuImg3;
let menuImg4;
let menuImg5;
let menuImg6;
let menuImg7;
let menuImg8;
let menuImg9;
let menuImg10;
let menuImg11;
let menuImg12;
let menuImg13;
let menuImg14;
let menuImg15;

//////////////////////////////////images and visuals////////////////////////////////////////////////////////////////
function preload() {
  ////////////////////menu images//////////////////////
  menuImg1 = loadImage("./assets/images/jeu11.png");
  menuImg2 = loadImage("./assets/images/jeu21.png");
  menuImg3 = loadImage("./assets/images/jeu31.png");
  menuImg4 = loadImage("./assets/images/jeu41.png");
  menuImg5 = loadImage("./assets/images/ecrandaccueil1sanstexte.png");
  menuImg6 = loadImage("./assets/images/godhand.png"); //tied to mouse move
  menuImg7 = loadImage("./assets/images/ecrandaccueil1.png");
  menuImg8 = loadImage("./assets/images/jeu22.png");
  menuImg9 = loadImage("./assets/images/jeu32.png");
  menuImg10 = loadImage("./assets/images/jeu42.png");
  menuImg11 = loadImage("./assets/images/jeu1.png");
  menuImg12 = loadImage("./assets/images/godhandopenright.png"); //tied to mouse move
  menuImg13 = loadImage("./assets/images/godhandopenrightCLOSED.png"); //tied to mouse move
  menuImg14 = loadImage("./assets/images/godhandopenleft.png"); //tied to mouse move
  menuImg15 = loadImage("./assets/images/godhandopenleftCLOSED.png"); //tied to mouse move

  ////////////////////blue variation images//////////////////////
  blueImg1 = loadImage("./assets/images/auto.png"); //auto qui bouge
  blueImg2 = loadImage("./assets/images/escbutton.png"); ///escape button
  blueImg3 = loadImage("./assets/images/paysage.png"); ///paysage background
  blueImg4 = loadImage("./assets/images/semirapprocheplan.png"); //visage, next after auto
  //blueImg5 = loadImage("./assets/images/godhandopenright.png"); //tied to mouse move
  blueImg6 = loadImage("./assets/images/2tl.png");
  blueImg7 = loadImage("./assets/images/fondjeu12.png"); //accueil jeu
  blueImg8 = loadImage("./assets/images/cadrecomplet.png"); ///FRAME
  blueImg9 = loadImage("./assets/images/autoglow.png"); //glow of car when hovering
  blueImg10 = loadImage("./assets/images/paysage.png"); //WHEN going back to a game for 2nd time or more. there will be no fade ins like the first time.
  blueImg11 = loadImage("./assets/images/gencivedown.png");
  blueImg12 = loadImage("./assets/images/gencivetop.png");
  blueImg13 = loadImage("./assets/images/bouche.png");
  blueImg14 = loadImage("./assets/images/1dl.png");
  blueImg15 = loadImage("./assets/images/1dr.png");
  blueImg16 = loadImage("./assets/images/1tl.png");
  blueImg17 = loadImage("./assets/images/1tr.png");
  blueImg18 = loadImage("./assets/images/2dl.png");
  blueImg19 = loadImage("./assets/images/2dr.png");
  blueImg20 = loadImage("./assets/images/2tr.png");
  blueImg21 = loadImage("./assets/images/3dl.png");
  blueImg22 = loadImage("./assets/images/3dr.png");
  blueImg23 = loadImage("./assets/images/3tl.png");
  blueImg24 = loadImage("./assets/images/3tr.png");
  blueImg25 = loadImage("./assets/images/4dl.png");
  blueImg26 = loadImage("./assets/images/4dr.png");
  blueImg27 = loadImage("./assets/images/4tl.png");
  blueImg28 = loadImage("./assets/images/4tr.png");
  blueImg29 = loadImage("./assets/images/traytopGlow.png");
  blueImg30 = loadImage("./assets/images/traydownGlow.png");

  ////////////////////green variation images//////////////////////
  greenImg1 = loadImage("./assets/images/jeu1.png");
  greenImg2 = loadImage("./assets/images/jeu2.png");
  greenImg3 = loadImage("./assets/images/jeu3.png");
  greenImg4 = loadImage("./assets/images/jeu4.png");
  greenImg5 = loadImage("./assets/images/ecrandaccueil1sanstexte.png");
  greenImg6 = loadImage("./assets/images/godhand.png");
  greenImg7 = loadImage("./assets/images/fondjeu22.png");

  ////////////////////red variation images//////////////////////
  redImg1 = loadImage("./assets/images/jeu1.png");
  redImg2 = loadImage("./assets/images/jeu2.png");
  redImg3 = loadImage("./assets/images/jeu3.png");
  redImg4 = loadImage("./assets/images/jeu4.png");
  redImg5 = loadImage("./assets/images/ecrandaccueil1sanstexte.png");
  redImg5 = loadImage("./assets/images/godhand.png");
  redImg7 = loadImage("./assets/images/fondjeu32.png");

  ////////////////////yellow variation images//////////////////////
  yellowImg1 = loadImage("./assets/images/jeu1.png");
  yellowImg2 = loadImage("./assets/images/jeu1.png");
  yellowImg3 = loadImage("./assets/images/jeu1.png");
  yellowImg4 = loadImage("./assets/images/jeu1.png");
  yellowImg5 = loadImage("./assets/images/jeu1.png");
  yellowImg6 = loadImage("./assets/images/jeu1.png");
  yellowImg7 = loadImage("./assets/images/fondjeu42.png");
  //img8 = loadImage("./assets/images/frogidlestone.png");
}

/**
 * Display the main menu
 */
function menuDraw() {
  background(0);

  push();
  tint(255, 255);
  fill(0, 255, 0, 0);
  noStroke();
  image(menuImg5, 0, 0);
  pop();

  //////////////////////1TEETHblue-variation////////////////////////////
  pop();
  tint(255, 255);
  image(menuImg1, game1Blue.x - 195, game1Blue.y - 155);
  noStroke();
  fill(0, 0);
  ellipse(game1Blue.x, game1Blue.y, game1Blue.width, game1Blue.height);
  tint(255, fadeInToGame1);
  image(menuImg11, game1Blue.x - 195, game1Blue.y - 155);
  push();

  game1Blue.y += menuSpeed * direction;
  if (game1Blue.y > game1Blue.maxY || game1Blue.y < game1Blue.minY) {
    direction *= -1;
  }

  game1Blue.x += menuSpeed * direction;
  if (game1Blue.x > game1Blue.maxX || game1Blue.x < game1Blue.minX) {
    direction *= -1;
  }

  ///////////////////////2OPALgreen-variation////////////////////////////
  pop();
  tint(255, 255);
  noStroke();
  fill(0, 0);
  image(menuImg2, game2Green.x - 195, game2Green.y - 105);
  ellipse(game2Green.x, game2Green.y, game2Green.width, game2Green.height);
  tint(255, fadeInToGame2);
  image(menuImg8, game2Green.x - 195, game2Green.y - 105);
  push();

  game2Green.y -= menuSpeed2 * direction;
  game2Green.x -= menuSpeed3 * direction;

  ///////////////////////////3LIGHTred-variation/////////////////////////////
  pop();
  tint(255, 255);
  image(menuImg3, game3Red.x - 190, game3Red.y - 225);
  noStroke();
  fill(0, 0);
  ellipse(game3Red.x, game3Red.y, game3Red.width, game3Red.height);
  tint(255, fadeInToGame3);
  image(menuImg9, game3Red.x - 190, game3Red.y - 225);
  push();

  game3Red.y += menuSpeed * direction;
  game3Red.x -= menuSpeed * direction;

  ////////////////////////4DEVOUTyellow-variation//////////////////////////
  pop();
  tint(255, 255);
  image(menuImg4, game4Yellow.x - 190, game4Yellow.y - 155);
  noStroke();
  fill(0, 0);
  ellipse(game4Yellow.x, game4Yellow.y, game4Yellow.width, game4Yellow.height);
  tint(255, fadeInToGame4);
  image(menuImg10, game4Yellow.x - 190, game4Yellow.y - 155);
  push();

  game4Yellow.y += menuSpeed2 * direction;
  game4Yellow.x += menuSpeed2 * direction;

  drawHandPointing();

  menuCinematic();
  menuGoToGame();
  menuCheckInput();

  push();
  fill(0, fadeOutToGame);
  rect(0, 0, width, height);
  /*fill(255);
  text(fadeOutToGame, 50, 200);

  text(fadeOutToGame1, 100, 100);
  fill(255, 0, 0);
  text(fadeOutToGame2, 300, 100);
  text(menuInputEnabled, 800, 100);
  fill(0, 255, 0);
  text(menuClicked, 400, 100);
  fill(255, 255, 0);
  fill(255);
  text(fadeInToGame4, 100, 400);
  text(fadeInToGame3, 200, 400);
  text(fadeInToGame2, 300, 400);*/
  pop();
}
function drawHandPointing() {
  push();
  tint(255, 255);
  image(menuImg6, mouseX - 60, mouseY - 60);
  pop();
}
function menuCinematic() {
  menuTitleTimer += 1; //will go up until it triggers disparition of title screen
  tint(255, menuOpacityImg7); //starts transparent
  image(menuImg7, 0, 0); //the title screen
  if (menuTitleTimer >= 100) {
    //the image on top with the title
    menuOpacityImg7 -= 1.5; //goes transparent
  }
  if (menuTitleTimer >= 350) {
    //CAN BE ADJUSTED, FOR FASTER TESTING
    menuInputEnabled = true; //when true= clicks work, otherwise no clicks
  }
  if (fadeOutToGame1 >= 1) {
    fadeOutToGame1 += 1.5;
  }
  if (fadeOutToGame2 >= 1) {
    fadeOutToGame2 += 1.5;
  }
  if (fadeOutToGame3 >= 1) {
    fadeOutToGame3 += 1.5;
  }
  if (fadeOutToGame4 >= 1) {
    fadeOutToGame4 += 1.5;
  }
  if (fadeOutToGame >= 1) {
    fadeOutToGame += 1.5;
    menuClicked = true;
  }

  if (fadeOutToGame1 >= 270) {
    readyGame1 = true;
    fadeInToGame1 = 270;
  }

  if (fadeOutToGame2 >= 270) {
    readyGame2 = true;
    fadeInToGame2 = 270;
  }

  if (fadeOutToGame3 >= 270) {
    readyGame3 = true;
    fadeInToGame3 = 270;
  }

  if (fadeOutToGame4 >= 270) {
    readyGame4 = true;
    fadeInToGame4 = 270;
  }
}

function menuGoToGame() {
  if (readyGame1 === true) {
    state = "1TEETHblue-variation";
    blueSetup();
    fadeOutToGame1 = 0;

    rect(0, 0, width, height);
  }

  if (fadeOutToGame2 >= 270) {
    state = "2OPALgreen-variation";
    greenSetup();
    fadeOutToGame2 = 0;
    rect(0, 0, width, height);
  }

  if (fadeOutToGame3 >= 270) {
    state = "3LIGHTred-variation";
    redSetup();
    fadeOutToGame3 = 0;
    rect(0, 0, width, height);
  }

  if (fadeOutToGame4 >= 270) {
    state = "4DEVOUTyellow-variation";
    yellowSetup();
    fadeOutToGame4 = 0;
    rect(0, 0, width, height);
  }
}

function menuCheckInput() {
  ///////////////////////////blue icon/////////////////////////
  let d1Blue = dist(mouseX, mouseY, game1Blue.x, game1Blue.y); //distance from mouse to center of icon
  if (d1Blue < game1Blue.width / 2) {
    //if mouse is inside the icon
    fadeInToGame1 += 15; //increase the glow
    if (fadeInToGame1 > 255) {
      //cap the glow to 255
      fadeInToGame1 = 255;
    }
  } else {
    fadeInToGame1 -= 5; //decrease the glow when mouse is out
    if (fadeInToGame1 < 0) {
      //cap the glow to 0
      fadeInToGame1 = 0;
    }
  }
  //////////////////////////green icon/////////////////////////
  let d2Green = dist(mouseX, mouseY, game2Green.x, game2Green.y); //
  if (d2Green < game2Green.width / 2) {
    fadeInToGame2 += 15;
    if (fadeInToGame2 > 255) {
      fadeInToGame2 = 255;
    }
  } else {
    fadeInToGame2 -= 5;
    if (fadeInToGame2 < 0) {
      fadeInToGame2 = 0;
    }
  }
  ////////////////////////////////red icon//////////
  let d3Red = dist(mouseX, mouseY, game3Red.x, game3Red.y);
  if (d3Red < game3Red.width / 2) {
    fadeInToGame3 += 15;
    if (fadeInToGame3 > 255) {
      fadeInToGame3 = 255;
    }
  } else {
    fadeInToGame3 -= 5;
    if (fadeInToGame3 < 0) {
      fadeInToGame3 = 0;
    }
  }
  /////////////////////////yellow icon/////////////////////////
  let d4Yellow = dist(mouseX, mouseY, game4Yellow.x, game4Yellow.y);
  if (d4Yellow < game4Yellow.width / 2) {
    fadeInToGame4 += 15;
    if (fadeInToGame4 > 255) {
      fadeInToGame4 = 255;
    }
  } else {
    fadeInToGame4 -= 5;
    if (fadeInToGame4 < 0) {
      fadeInToGame4 = 0;
    }
  }
}
/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {
  if (!menuInputEnabled === false && menuClicked === false) {
    //after the && this is to prevent clicking on another menu that will send to next game.
    //1 blue game//
    let d1Blue = dist(mouseX, mouseY, game1Blue.x, game1Blue.y);
    if (d1Blue < game1Blue.width / 2) {
      fadeOutToGame1 += 1;
      fadeOutToGame += 1;
    }

    //2 green game//
    let d2Green = dist(mouseX, mouseY, game2Green.x, game2Green.y);
    if (d2Green < game2Green.width / 2) {
      fadeOutToGame2 += 1;
      fadeOutToGame += 1;
    }

    //3 red game//
    let d3Red = dist(mouseX, mouseY, game3Red.x, game3Red.y);
    if (d3Red < game3Red.width / 2) {
      fadeOutToGame3 += 1;
      fadeOutToGame += 1;
    }

    //4 yellow game//
    let d4Yellow = dist(mouseX, mouseY, game4Yellow.x, game4Yellow.y);
    if (d4Yellow < game4Yellow.width / 2) {
      fadeOutToGame4 += 1;
      fadeOutToGame += 1;
    }
  }
}
/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
  switch (event.keyCode) {
    case 51:
      1;
      state = "3LIGHTred-variation";
      redSetup();
      break;

    case 50:
      state = "2OPALgreen-variation";
      greenSetup();
      break;

    case 49:
      state = "1TEETHblue-variation";
      blueSetup();
      break;

    case 52:
      state = "4DEVOUTyellow-variation";
      yellowSetup();
      break;
  }
}
