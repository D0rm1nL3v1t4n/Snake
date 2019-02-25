export default class InputHandler {
  constructor(head) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          //move left - change to rotate left 90 deg
          head.moveLeft();
          break;

        case 38:
          //move up - remove
          head.moveUp();
          break;

        case 39:
          //move right - change to rotate right 90 deg
          head.moveRight();
          break;

        case 40:
          //move down - remove
          head.moveDown();
          break;
      }
    });
  }
}
