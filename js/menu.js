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

///////////////////////////CINEMATIC variables////////////////////////////////////
/////////////////////////////CINEMATIC variables////////////////////////////////////
menuTitleTimer = 0; ////starts at zero will go up to the limit that will trigger titleOn = false////
let menuInputEnabled = false; //WHEN false will start opacity7 going Down.
let menuOpacityImg7 = 255;

let goGameTimer = 0; ////timer to go to the game after click////
let fadeOutToGame = 0; ////overall fade to black////
let fadeOutToGame1 = 0; ////actually a fade in to black////
let fadeOutToGame2 = 0;
let fadeOutToGame3 = 0;
let fadeOutToGame4 = 0;

////for the mouvement of the 4 menu icons////
let speed = 0.2;
let direction = 1;

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

//////////////////////////////////images and visuals////////////////////////////////////////////////////////////////
function preload() {
  ////////////////////menu images//////////////////////
  menuImg1 = loadImage("./assets/images/jeu1.png");
  menuImg2 = loadImage("./assets/images/jeu22.png");
  menuImg3 = loadImage("./assets/images/jeu32.png");
  menuImg4 = loadImage("./assets/images/jeu42.png");
  menuImg5 = loadImage("./assets/images/ecrandaccueil1sanstexte.png");
  menuImg6 = loadImage("./assets/images/godhand.png");
  menuImg7 = loadImage("./assets/images/ecrandaccueil1.jpg");

  ////////////////////blue variation images//////////////////////
  blueImg1 = loadImage("./assets/images/auto.jpg");
  blueImg2 = loadImage("./assets/images/jeu2.png");
  blueImg3 = loadImage("./assets/images/jeu3.png");
  blueImg4 = loadImage("./assets/images/jeu4.png");
  blueImg5 = loadImage("./assets/images/ecrandaccueil1sanstexte.png");
  blueImg6 = loadImage("./assets/images/godhand.png");
  blueImg7 = loadImage("./assets/images/fondjeu12.png");

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

  //1TEETHblue-variation//
  image(menuImg1, game1Blue.x - 195, game1Blue.y - 155);
  ellipse(game1Blue.x, game1Blue.y, game1Blue.width, game1Blue.height);

  game1Blue.y += speed * direction;
  if (game1Blue.y > game1Blue.maxY || game1Blue.y < game1Blue.minY) {
    direction *= -1;
  }

  //2OPALgreen-variation//
  image(menuImg2, game2Green.x - 195, game2Green.y - 155);
  ellipse(game2Green.x, game2Green.y, game2Green.width, game2Green.height);

  game2Green.y += speed * direction;

  //3LIGHTred-variation//
  image(menuImg3, game3Red.x - 190, game3Red.y - 225);
  ellipse(game3Red.x, game3Red.y, game3Red.width, game3Red.height);

  game3Red.y += speed * direction;

  //4DEVOUTyellow-variation//
  image(menuImg4, game4Yellow.x - 190, game4Yellow.y - 155);
  ellipse(game4Yellow.x, game4Yellow.y, game4Yellow.width, game4Yellow.height);

  game4Yellow.y += speed * direction;

  image(menuImg6, mouseX - 60, mouseY - 60);
  pop();

  menuCinematic();
  menuGoToGame();

  push();
  fill(0, fadeOutToGame);
  rect(0, 0, width, height);
  fill(255);
  text(fadeOutToGame, 100, 200);

  text(fadeOutToGame1, 100, 100);
  text(fadeOutToGame2, 200, 100);
  text(fadeOutToGame3, 300, 100);
  text(fadeOutToGame4, 400, 100);
  pop();
}

function menuCinematic() {
  menuTitleTimer += 1;
  tint(255, menuOpacityImg7);
  image(menuImg7, 0, 0);
  if (menuTitleTimer >= 100) {
    menuOpacityImg7 -= 1.5;
  }
  if (menuTitleTimer >= 150) {
    menuInputEnabled = true;
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
  }
}

function menuGoToGame() {
  if (fadeOutToGame1 >= 270) {
    state = "1TEETHblue-variation";
    blueSetup();
    fadeOutToGame1 = 0;
    fadeOutToGame = 0;
    rect(0, 0, width, height);
  }

  if (fadeOutToGame2 >= 270) {
    state = "2OPALgreen-variation";
    greenSetup();
    fadeOutToGame2 = 0;
    fadeOutToGame = 0;
    rect(0, 0, width, height);
  }

  if (fadeOutToGame3 >= 270) {
    state = "3LIGHTred-variation";
    redSetup();
    fadeOutToGame3 = 0;
    fadeOutToGame = 0;
    rect(0, 0, width, height);
  }

  if (fadeOutToGame4 >= 270) {
    state = "4DEVOUTyellow-variation";
    yellowSetup();
    fadeOutToGame4 = 0;
    fadeOutToGame = 0;
    rect(0, 0, width, height);
  }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {
  if (menuInputEnabled) {
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
    let d4Blue = dist(mouseX, mouseY, game4Yellow.x, game4Yellow.y);
    if (d4Blue < game4Yellow.width / 2) {
      fadeOutToGame4 += 1;
      fadeOutToGame += 1;
    }
  }
}
/**
 * Listen to the keyboard
 */ 3;
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
