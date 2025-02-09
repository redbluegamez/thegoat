// Get the canvas element and context
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Game settings
const paddleWidth = 10, paddleHeight = 100, ballRadius = 10;
const paddleSpeed = 5, ballSpeedX = 4, ballSpeedY = 4;

// Create the paddle objects
let player1 = { x: 0, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 0 };
let player2 = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 0 };

// Create the ball object
let ball = { x: canvas.width / 2, y: canvas.height / 2, radius: ballRadius, dx: ballSpeedX, dy: ballSpeedY };

// Draw function to clear canvas and render game objects
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw paddles
  context.fillStyle = 'white';
  context.fillRect(player1.x, player1.y, player1.width, player1.height);
  context.fillRect(player2.x, player2.y, player2.width, player2.height);

  // Draw the ball
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();
  
  // Move paddles and ball
  movePaddles();
  moveBall();

  // Collision detection with paddles and walls
  detectCollisions();
  
  // Request next animation frame
  requestAnimationFrame(draw);
}

// Move the paddles based on player input
function movePaddles() {
  player1.y += player1.dy;
  player2.y += player2.dy;

  // Prevent paddles from going out of bounds
  player1.y = Math.max(0, Math.min(canvas.height - player1.height, player1.y));
  player2.y = Math.max(0, Math.min(canvas.height - player2.height, player2.y));
}

// Move the ball
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Ball collision with top and bottom walls
  if (ball.y + ball.dy < ball.radius || ball.y + ball.dy > canvas.height - ball.radius) {
    ball.dy = -ball.dy;
  }

  // Ball collision with left and right walls (reset ball)
  if (ball.x + ball.dx < ball.radi
