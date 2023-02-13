function playSnake(){

// Create the PixiJS application
const app = new PIXI.Application({
  width: 400,
  height: 400,
  backgroundColor: 0x1099bb,
});

// Add the PixiJS application to the HTML page
document.body.appendChild(app.view);

// Create the Snake
const snake = [];
for (let i = 0; i < 5; i++) {
  const segment = new PIXI.Graphics();
  segment.beginFill(0xffffff);
  segment.drawRect(0, 0, 10, 10);
  segment.endFill();
  segment.x = 200 + i * 10;
  segment.y = 200;
  snake.push(segment);
  app.stage.addChild(segment);
}

// Create the Snake's velocity
let vx = 10;
let vy = 0;

// Create the food
const food = new PIXI.Graphics();
food.beginFill(0xff0000);
food.drawCircle(0, 0, 5);
food.endFill();
food.x = Math.random() * app.screen.width;
food.y = Math.random() * app.screen.height;
app.stage.addChild(food);

// Listen for keyboard events
document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 37: // left
      vx = -10;
      vy = 0;
      break;
    case 38: // up
      vx = 0;
      vy = -10;
      break;
    case 39: // right
      vx = 10;
      vy = 0;
      break;
    case 40: // down
      vx = 0;
      vy = 10;
      break;
  }
});

// Start the update loop
app.ticker.add((delta) => {
  // Move the Snake
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i].x = snake[i - 1].x;
    snake[i].y = snake[i - 1].y;
  }
  snake[0].x += vx;
  snake[0].y += vy;

  // Check for collision with the food
  if (
    snake[0].x <= food.x + food.width &&
    snake[0].x + snake[0].width >= food.x &&
    snake[0].y <= food.y + food.height &&
    snake[0].y + snake[0].height >= food.y
  ) {
    // Create a new segment for the Snake
    const newSegment = new PIXI.Graphics();
    newSegment.beginFill(0xffffff);
    newSegment.drawRect(0, 0, 10, 10);
    newSegment.endFill();
    snake.push(newSegment);
    app.stage.addChild(newSegment);

       // Move the food to a new random position
    food.x = Math.random() * app.screen.width;
    food.y = Math.random() * app.screen.height;
  }

  // Check for collision with the screen edges
  if (snake[0].x < 0 || snake[0].x + snake[0].width > app.screen.width) {
    vx = -vx;
  }
  if (snake[0].y < 0 || snake[0].y + snake[0].height > app.screen.height) {
    vy = -vy;
  }

  // Check for collision with the Snake's body
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      console.log("game over");
    }
  }
});
  
}
