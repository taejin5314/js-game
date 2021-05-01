const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const images = {};
images.player = new Image();
images.player.src = 'Character.png';
const characterActions = ['up', 'top right', 'right', 'down right', 'down', 'jump'];
const characters = [];
characters.push(new Character());

class Character {
  constructor() {
    this.width = 103.0625;
    this.height = 113.125;
    this.frameX = 3;
    this.frameY = 3;
    this.x = 0;
    this.y = 0;
    this.speed = (Math.random() * 1.5) + 3.5;
    this.action = 'right';
  }
  draw() {
    drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.y, this.x, this.width, this.height);
    if (this.frameX < 13) this.frameX++;
    else this.frameX = 3;
  }
  update() {
    if (this.action === 'right') {
      if (this.x < canvas.width + this.width) this.x += this.speed;
      else this.x = 0 - this.width;
    }
  }
}

// const playerWidth = 103.0625;
// const playerHeight = 113.125;
// let playerFrameX = 3;
// let playerFrameY = 3;
// let playerX = 0;
// let playerY = 0;
// const playerSpeed = 6;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  characters[0].draw();
  characters[0].update();
}

window.onload = setInterval(animate, 1000 / 30);

window.addEventListener('resize', function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
})