/**
 * 5TH LEVEL: PLANES DESTRUCTION GAME
 * Converted from original JavaScript DOM-based game to p5.js
 * This file follows the same ordering style as the other variation files.
 */

///////////////////mouvement,opacity,suites///////////////////
let planes = [];
let forks = [];
let coins = [];
let explosions = [];

let planesHand;

let time = 0;
let timerP = 0;
let planesInitialized = false;
let planeFadeIn = 255;
let planeFadeSpeed = 5;
////////////////////images//////////////////////
let skyImg;
let forkImg;
let coinImg;
let explosionImg;
let handImg;
let handClosedImg;
let planeImgs = [];

function planesPreload() {
  console.log("planesPreload called");
  skyImg = loadImage("assets/images/sky.png");
  forkImg = loadImage("assets/images/fork.png");
  coinImg = loadImage("assets/images/coin.png");
  explosionImg = loadImage("assets/images/explosion.png");
  handImg = loadImage("assets/images/main.png");
  handClosedImg = loadImage("assets/images/mainClosed.png");

  for (let i = 1; i <= 9; i++) {
    planeImgs.push(loadImage(`assets/images/plane${i}.png`));
  }
}

function planesSetup() {
  console.log("planesSetup called");
  planeFadeIn = 255;
  time = 0;  planesPreload();
  createPlanes();
  createForks();
  createHand();
}

function planesDraw() {
  console.log("planesDraw called, planeFadeIn:", planeFadeIn);
  if (!planesInitialized) {
    planesSetup();
    planesInitialized = true;
  }

  if (skyImg) {
    image(skyImg, 0, 0, 1600, 900);
  } else {
    background(100, 150, 200);
  }

  timerP++;
  if (planesHand) {
    planesHand.x = mouseX;
    planesHand.y = mouseY;
  }

  updatePlanes();
  updateForks();
  updateCoins();
  updateExplosions();

  drawPlanes();
  drawForks();
  drawCoins();
  drawHand();
  drawExplosions();

  planeCinematic();
}

function planesMousePressed() {
  console.log("planesMousePressed called");
  if (!planesHand) {
    return;
  }

  planesHand.closed = true;
  planesHand.closeTimer = 0;

  const handBox = getHandFistBox();
  for (let i = 0; i < planes.length; i++) {
    const plane = planes[i];
    if (plane.alive && rectsIntersect(handBox, getPlaneCollisionBox(plane))) {
      createExplosion(plane.x, plane.y);
      plane.alive = false;
      break;
    }
  }
}

function planesKeyPressed(event) {
  // Add keyboard behavior when needed.
}

function createPlanes() {  console.log("createPlanes called");  planes = [];
  for (let i = 0; i < 5; i++) {
    planes.push({
      x: random(1600, 2200),
      y: random(100, 400),
      width: 120,
      height: 70,
      speed: random(2, 4),
      alive: true,
      imgIndex: floor(random(planeImgs.length)),
      wobbleOffset: random(TWO_PI),
      baseY: random(100, 400),
    });
  }
}

function createForks() {
  forks = [];
  for (let i = 0; i < 3; i++) {
    forks.push({
      x: random(200, 1400),
      y: random(500, 700),
      width: 90,
      height: 45,
      wobbleOffset: random(TWO_PI),
      baseX: random(200, 1400),
    });
  }
}

function createHand() {
  planesHand = {
    x: mouseX,
    y: mouseY,
    width: 80,
    height: 80,
    fistOffsetX: 20,
    fistOffsetY: 20,
    fistWidth: 40,
    fistHeight: 40,
    closed: false,
    closeTimer: 0,
  };
}

function createExplosion(x, y) {
  explosions.push({
    x: x,
    y: y,
    timer: 30,
    maxTimer: 30,
  });
}

function updatePlanes() {
  console.log("updatePlanes called, time:", time);
  for (let i = planes.length - 1; i >= 0; i--) {
    const plane = planes[i];
    if (!plane.alive) {
      continue;
    }

    plane.x -= plane.speed;
    plane.y = plane.baseY + sin(timerP * 0.05 + plane.wobbleOffset) * 10;

    if (plane.x < -plane.width) {
      plane.x = 1600 + plane.width;
      plane.baseY = random(100, 400);
      plane.imgIndex = floor(random(planeImgs.length));
    }
  }
}

function updateForks() {
  forks.forEach((fork) => {
    fork.x = fork.baseX + sin(timerP * 0.05 + fork.wobbleOffset) * 20;
  });
}

function updateCoins() {
  // Optional coin logic can be added here later.
}

function updateExplosions() {
  for (let i = explosions.length - 1; i >= 0; i--) {
    const explosion = explosions[i];
    explosion.timer--;
    if (explosion.timer <= 0) {
      explosions.splice(i, 1);
    }
  }
}

function drawPlanes() {
  console.log("drawPlanes called, planes.length:", planes.length);
  planes.forEach((plane) => {
    if (!plane.alive) {
      return;
    }
    if (planeImgs[plane.imgIndex]) {
      image(
        planeImgs[plane.imgIndex],
        plane.x,
        plane.y,
        plane.width,
        plane.height,
      );
    } else {
      fill(100, 100, 150);
      rect(plane.x, plane.y, plane.width, plane.height);
    }
  });
}

function drawForks() {
  forks.forEach((fork) => {
    if (forkImg) {
      image(forkImg, fork.x, fork.y, fork.width, fork.height);
    } else {
      fill(150, 75, 0);
      rect(fork.x, fork.y, fork.width, fork.height);
    }
  });
}

function drawCoins() {
  coins.forEach((coin) => {
    if (coinImg) {
      image(coinImg, coin.x, coin.y, coin.width, coin.height);
    } else {
      fill(255, 215, 0);
      ellipse(coin.x, coin.y, coin.width, coin.height);
    }
  });
}

function drawHand() {
  if (!planesHand) {
    return;
  }

  if (planesHand.closed && handClosedImg) {
    image(
      handClosedImg,
      planesHand.x,
      planesHand.y,
      planesHand.width,
      planesHand.height,
    );
  } else if (handImg) {
    image(
      handImg,
      planesHand.x,
      planesHand.y,
      planesHand.width,
      planesHand.height,
    );
  } else {
    fill(200, 200, 200);
    rect(planesHand.x, planesHand.y, planesHand.width, planesHand.height);
  }
}

function drawExplosions() {
  explosions.forEach((explosion) => {
    const alpha = (explosion.timer / explosion.maxTimer) * 255;
    if (explosionImg) {
      tint(255, alpha);
      image(explosionImg, explosion.x, explosion.y, 100, 100);
      noTint();
    } else {
      fill(255, 100, 0, alpha);
      ellipse(explosion.x, explosion.y, 100, 100);
    }
  });
}
function planeCinematic() {
  console.log("planeCinematic called, planeFadeIn:", planeFadeIn);
  if (planeFadeIn > 0) {
    noStroke();
    fill(0, planeFadeIn);
    rect(0, 0, width, height);
    planeFadeIn -= planeFadeSpeed;
    if (planeFadeIn < 0) {
      planeFadeIn = 0;
    }
  }
}
function getHandFistBox() {
  return {
    x: planesHand.x + planesHand.fistOffsetX,
    y: planesHand.y + planesHand.fistOffsetY,
    width: planesHand.fistWidth,
    height: planesHand.fistHeight,
  };
}

function getPlaneCollisionBox(plane) {
  return {
    x: plane.x,
    y: plane.y,
    width: plane.width,
    height: plane.height,
  };
}

function rectsIntersect(a, b) {
  return !(
    a.x + a.width < b.x ||
    b.x + b.width < a.x ||
    a.y + a.height < b.y ||
    b.y + b.height < a.y
  );
}

// Export these functions explicitly so the menu and state machine can access them.
window.planesPreload = planesPreload;
window.planesSetup = planesSetup;
window.planesDraw = planesDraw;
window.planesMousePressed = planesMousePressed;
window.planesKeyPressed = planesKeyPressed;
