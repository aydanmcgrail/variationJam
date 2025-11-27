/**
 * This file contains the code to run *only* the yellow variation part of the program.
 *
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the red variation starts
 */
function yellowSetup() {}

/**
 * This will be called every frame when the red variation is active
 */
function yellowDraw() {
  background("yellow");
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function yellowKeyPressed(event) {
  if (event.keyCode === 27) {
    state = "menu";
  }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function yellowMousePressed() {}
