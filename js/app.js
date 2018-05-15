/* DEFINE GLOBAL VARIABLES 
 * @description Create Counter for points 
 * & Use getElementById() method to define access to points
 */
let counter = 0;
const points = document.getElementById('points');

/* **************ENEMY SECTION*********** */
/* CREATE ENEMY class 
 * @description (enemy = bug, that player must avoid)
 * @param Define Variables to instances: x- & y-position on canvas, enemies´ speed, {img} sprite - to load enemies images
 */
var Enemy = function(x, y) { 
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png'; 
    this.speed = Math.floor((Math.random() * 200) + 100);
};

/* UPDATE ENEMY position
 * @description (=required game method)
 * @param {number} dt - a time delta between ticks
 * @param Multiply movement by 'dt' parameter (=required to run same game speed on all computers)
 * @description Detect collision and restart Player position
 */
Enemy.prototype.update = function(dt) {
    if (this.x <= 505) { // Enemies move horizontally (= ONLY change x-value)
        this.x += this.speed * dt;
         this.x = Math.floor(this.x);
    } else {
        this.x = -100; // Enemy off-canvas. Reset Enemy Position Back to left of canvas
    }
    checkCollision(this); 
    if (Math.abs(this.y - player.y) === 0) {
    if (Math.abs(this.x - player.x) < 75) {
      player.x = 202;
      player.y = 404;
      player.lives--;
      if (player.lives === 0) {
        gameOver();
      }
    }
  }  
}; 

/* DRAW ENEMY on screen
 * @description (=required game method)
 * @param create Render method (=to show Enemy on "ctx"= Canvas) 
 * @param Render Method uses ctx.drawImage() method with  three params: image, x, y
*/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
}; 

/* **************PLAYER SECTION*********** */
/**
 * @description PLAYER
 * Create Player class =Same as Enemy class, 'speed'(=not necessary?) 
 * @param Extra feature: add lives
 * @param Add update() method (=required game method)
 * @param Add render() method  (= to show Player on Canvas(=required game method)
 * @param Add handleInput() method (=required game method)
  */
var Player = function(x, y) { //Define Player class
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
    this.lives = 3;
    this.gameOver = false;
};

Player.prototype.update = function() { //Player update() method
    showLives(this.lives); 
};

// Draw the player on the screen
Player.prototype.render = function() { // Draw player on screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
 * @description ARROYKEYS
 * Player handleInput() method for Arrow keys
 * Define allowedKeys 'left', 'right', 'down' & 'up'- see below
 */
Player.prototype.handleInput = function(keyCode) {
 if (keyCode == 'left') { // See allowedKeys below
        if (this.x - 101 < 0) {
            this.x = 0;
            resetPlayer(); // Player back to start
            counter = counter + 1; // Players scores extra level
            points.innerHTML = counter;  // Update points
        } else {
            this.x -= 101;
        }
    }
    if (keyCode == 'right') {
        if (this.x + 101 > 404) {
            this.x = 404;
        } else {
            this.x += 101;
        }
    }
    if (keyCode == 'down') {
        if (this.y + 85 > 404) {
            this.y = 404;
        } else {
            this.y += 83;
        }
    }
    if (keyCode == 'up') {
        if (this.y - 85 < 0) { // Player reaches water
            resetPlayer(); // Player goes back to start
            counter = counter + 1; // Increase Score 
            points.innerHTML = counter; // Update score points in HTML
        } else {
            this.y -= 83;
        }
    }
};

/* **************COLLISION SECTION*********** */
/* @description COLLISION
 * CODE from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
 * Create Collision() function- to detect if Player and Enemy(bug) collide 
 * @param Check if 'this' Enemy collides with player
 *        resetPlayer() method to reset Player back to start
 *        Increase score (level) with one
 *        Update points
 */
function checkCollision(oneEnemy) { 
    if (player.x < oneEnemy.x + 80 && 
    player.x + 60 > oneEnemy.x &&
    player.y < oneEnemy.y + 80 &&
    40 + player.y > oneEnemy.y) {
        resetPlayer(); 
        counter = 0;
        console.log(points);
        points.innerHTML = counter; 
        }
    };

/**
/*  @description resetPlayer
 * Define resetPlayer() function- to put player position back to x = 202 and y = 404
 */
function resetPlayer() { 
    player.x = 202;
    player.y = 404;
};
 	 
/**
/* @description INSTANTIATE Enemy and Player objects.
 * Place player object in variable 
 * Define player (x-)position: (0, 0 is top left corner) & (505 / 2 - 50.5 = 202) 
 * Place enemy object in variable
 * Define enemy (y-) position: to create enemies
 * Place allEnemy objects in allEnemies[] array 
 */
let player = new Player(202, 404); 
const newEnemy = new Enemy(-100, 227.5, 50); 
const newEnemy1 = new Enemy(-100, 145, 50);
const newEnemy2 = new Enemy(-100, 61, 50);
/*const newEnemy3 = new Enemy(-100, 227.5, 50);
const newEnemy4 = new Enemy(-100, 145, 50);
const newEnemy5 = new Enemy(-100, 61, 50);*/

let allEnemies = [newEnemy, newEnemy1, newEnemy2, /*newEnemy3, newEnemy4, newEnemy5*/];

/* @description ARROYKEYS
 * This Event listens for key Presses and send keys to 
 * Player.handleInput() method (for Arrow keys)- Code provided by Udacity.
 */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/* **************GEM SECTION (EXTRA FEATURE)*********** */
/* @description GEM
 * Create Gem class
 * Generate random X & Y-coordinates for each Gem
 * Implement gem collection mechanism
 * If player gets gem, remove gem from board
*/

let gem = {
  green: 'images/Gem Green.png',
  blue: 'images/Gem Blue.png',
  orange: 'images/Gem Orange.png'
};

var Gem = function(sprite, x, y) {
  this.sprite = 'images/Gem Green.png'; 
  this.x = x;
  this.y = y;
};

var getGemX = function getX() {
  var gemX = [0, 100, 200, 300, 400];
  return gemX[Math.floor(Math.random() * gemX.length)];
};

var getGemY = function getY() {
  var gemY = [72, 154, 236];
  return gemY[Math.floor(Math.random() * gemY.length)];
};

// Implement gem collection mechanism
Gem.prototype.update = function() {
    // Check if all gems are collected
  if (gem1.x === -500 && gem2.x === -500 && gem3.x === -500) {
    // If player collects gem, remove it from board  
    if (Math.abs(this.y - player.y) === 0) {
      if (Math.abs(this.x - player.x) < 80) {
        this.x = -500;
        gameWin();
      }
    }
  }
}     
// Render (=Draw) the Gem on the screen
Gem.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Instantiate the Gem
const gem1 = new Gem('images/Gem Green.png', getGemX(), getGemY());
const gem2 = new Gem('images/Gem Blue.png', getGemX(), getGemY());
const gem3 = new Gem('images/Gem Orange.png', getGemX(), getGemY());

// Place all Gems in an allGems[] array
let allGems = [gem1, gem2, gem3];

// Generate gem
//var gem = new Gem(getGemX()); // Is this needed? 

/* **************KEY SECTION (EXTRA FEATURE)*********** */
// Key Class
var Key = function(x) {
  this.sprite = 'images/Key.png';
  this.x = x;
  this.y = -10;
};

// Render Key on canvas
Key.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Implement key collection mechanism
Key.prototype.update = function() {
  // Check if all gems are collected
  if (gem1.x === -500 && gem2.x === -500 && gem3.x === -500) {
    // If player collects key, remove it from board
    if (Math.abs(this.y - player.y) === 0) {
      if (Math.abs(this.x - player.x) < 80) {
        this.x = -500;
        gameWin();
      }
    }
  }
};

// Generate key
var key = new Key(getGemX());

/* **************HEARTS=(LIVES) SECTION (EXTRA FEATURE)*********** */
// Generate html to display hearts-lives
function showLives(num) {
  var lives = document.querySelector('.hearts');
  var heartHtml = '<img src="images/Heart.png">';
  lives.innerHTML = "";

  for (let i = 0; i < num; i++) {
    lives.innerHTML += heartHtml;
  }
}

/* **************MODAL SECTIONS*********** */
/*Declare Modal score settings
 
const modal = document.getElementById("modal"); // Declare Modal var
const canvasName = document.getElementById("gameStart"); // Declare Canvas var
let showModal = document.getElementById("gameComplete");
let hideModal = document.getElementById("restart");
//Declare totalMoves variable
let totalMoves = document.getElementById("totalMoves").innerHTML;
// declare playAgain button on modal
const playAgain = document.querySelector(".restart");

// Display modal game-start when game starts
document.addEventListener("DOMContentLoaded", gameStart);

function gameStart() {
  var gameStartModal = document.querySelector('.game-start');
  var modal = document.querySelector('.modal');
  //gameStartModal.style.display = "block";
  //canvas.style.display = "none";
  //lives[3].innerHTML = hearts[0].innerHTML;
  //gems[0].innerHTML = heart[0].innerHTML;
  //console.log("game");
}
  // If user clicks outside modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// Display modal game-over after player dies
function gameOver() {
  var gameOverModal = document.querySelector('.game-over');
  gameOverModal.style.display = "block";

  var restartButton = document.querySelector('.--over');
  restartButton.addEventListener('click', function() {
    location.reload();
  });
}

// Display modal game-win after player wins game
function gameWin() {
  var gameWinModal = document.querySelector('.game-win');
  gameWinModal.style.display = "block";

  var restartButton = document.querySelector('.--win');
  restartButton.addEventListener('click', function() {
    location.reload();
  });
}
*/
