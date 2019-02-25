import Apple from "/src/apple.js";
import Head from "/src/head.js";
import InputHandler from "/src/inputHandler.js";

let canvas = document.getElementById("gameCanvas"); //Fetches canvas
let ctx = canvas.getContext("2d"); // Context

const GAME_HEIGHT = 400;
const GAME_WIDTH = 600;

let head = new Head(GAME_WIDTH, GAME_HEIGHT);
let apple = new Apple();

new InputHandler(head);

apple.randomPosition(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  head.update(dt);
  head.draw(ctx);
  apple.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
