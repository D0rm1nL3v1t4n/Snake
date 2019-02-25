export default class Apple {
  constructor() {
    this.image = document.getElementById("imgApple");
    this.width = 16;
    this.height = 16;

    this.position = { x: 0, y: 0 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  randomPosition(gameWidth, gameHeight) {
    this.position.x = 10 + Math.random() * (gameWidth - 20);
    this.position.y = 10 + Math.random() * (gameHeight - 20);
    console.log(this.position.x, this.position.y);
  }
}
