export default class Head {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 30;
    this.height = 30;

    this.speed = { x: 0, y: 0 };
    this.maxSpeed = 5;

    this.position = { x: 20, y: 20 };
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(dt) {
    if (!dt) return;
    //moves left / right (even if movement is 0)
    this.position.x += this.speed.x;

    //checks collision with left / right wall
    if (this.position.x <= 0) this.position.x = 0;
    else if (this.position.x + this.width >= this.gameWidth)
      this.position.x = this.gameWidth - this.width;

    //moves up / down (even if movement is 0)
    this.position.y += this.speed.y;

    //checks collision with top / bottom wall
    if (this.position.y <= 0) this.position.y = 0;
    if (this.position.y + this.height >= this.gameHeight)
      this.position.y = this.gameHeight - this.height;
  }

  yAxis() {}

  moveLeft() {
    this.speed.x = -this.maxSpeed;
    this.speed.y = 0;
  }

  moveRight() {
    this.speed.x = this.maxSpeed;
    this.speed.y = 0;
  }

  moveUp() {
    this.speed.y = -this.maxSpeed;
    this.speed.x = 0;
  }

  moveDown() {
    this.speed.y = this.maxSpeed;
    this.speed.x = 0;
  }
}
