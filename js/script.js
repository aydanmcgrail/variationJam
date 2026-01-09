/**
 * Variation Menu
 * Pippin Barr
 *
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
 */
function setup() {
  createCanvas(1600, 900);
}

/**
 * Display the menu or the current variation
 */
function draw() {
  switch (state) {
    case "menu":
      menuDraw();
      break;
    case "3OPALred-variation":
      redDraw();
      break;
    case "2DEVOTgreen-variation":
      greenDraw();
      break;
    case "1TEETHblue-variation":
      blueDraw();
      break;
    case "4LIGHTyellow-variation":
      yellowDraw();
      break;
  }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
  switch (state) {
    case "menu":
      menuMousePressed();
      break;
    case "3OPALred-variation":
      redMousePressed();
      break;
    case "2DEVOTgreen-variation":
      greenMousePressed();
      break;
    case "1TEETHblue-variation":
      blueMousePressed();
      break;
    case "4LIGHTyellow-variation":
      yellowMousePressed();
      break;
  }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
  switch (state) {
    case "menu":
      menuKeyPressed(event);
      break;
    case "3OPALred-variation":
      redKeyPressed(event);
      break;
    case "2DEVOTgreen-variation":
      greenKeyPressed(event);
      break;
    case "1TEETHblue-variation":
      blueKeyPressed(event);
      break;
    case "4LIGHTyellow-variation":
      yellowKeyPressed(event);
      break;
  }
}
