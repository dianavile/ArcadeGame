'use strict'; //whole-script strict mode syntax (from MDN: https://www.w3schools.com/js/js_strict.asp)

let gameStart = false;
const modal = document.getElementById('myModal');
const modal_content = document.querySelector('gameRules');
const btn = document.getElementById("myBtn");
restartGame();
if(gameStart === true){      
    modal.style.display = "none";
    } else {
    modal.style.display = "block";                
    }

/* **************ENEMY SECTION*********** */
/* CREATE ENEMY class */
class Enemy {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png'; 
    this.speed = Math.floor((Math.random() * 200) + 100);
  }

/* UPDATE ENEMY position */
// @Param: dt, a time delta between ticks (multiply movement by dt)
  update(dt) {
    this.x += this.speed * dt;
      if (this.x > 500) {this.x = -100;}// Enemies move horizontally (= ONLY change x-value)
    // Check if player collides with enemy
        checkCollision(this); 
      if (player.y === this.y) {
      if (player.x > this.x - 75 && player.x < this.x + 75) 
        player.resetPosition();
     }
  }

/* DRAW ENEMY on screen*/
// @param create Render method (=to show Enemy on "ctx"= Canvas) 
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
  }
}

/* **************PLAYER SECTION*********** */
/* CREATE PLAYER class */
class Player {

    constructor (x,y){ 
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
    this.lives = 3;
    this.gameOver = false;    
  }

/* Player update() method */
 update () { 
    showLives(this.lives); 
  }

// Draw player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
  }
}

/* **************GEM SECTION*********** */
/* CREATE GEM class */
class Gem {

    constructor (x,y){ 
    this.GemX; 
    this.GemY;
    this.sprite = 'images/Gem Orange.png';
  }

/* GEM UPDATE() method */
    update () {     
    let GemX = [0, 100, 200, 300, 400];
    let GemY = [72, 154, 236];
      if (this.GemX == undefined || this.GemY == undefined) {
        this.GemX = GemX[Math.floor(Math.random() * GemX.length)];
         this.GemY = GemY[Math.floor(Math.random() * GemY.length)];
     }
  // Check if player collides with gem
  //gemCollision(this);
  }
 
/* RENDER() method to Draw the Gems on the screen*/
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.GemX, this.GemY); 
    }
  }

/* Player handleInput() method for ARROYKEYS */
// Define allowedKeys 'left', 'right', 'down' & 'up'- see below 
Player.prototype.handleInput = function(keyCode) {
      if (keyCode == 'left') { // See allowedKeys below
          if (this.x - 101 < 0) {
            this.x = 0;
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

/*    const handleInput = (keyCode) => {
    switch(keyCode){
      case 'left':
          (this.x-101<0) ? this.x = 0:this.x-=101;
            break;
      case 'right': 
          (this.x+101>404) ? this.x = 404:this.x+=404;
            break; 
      case 'down':
          (this.y + 85 > 404)? this.y = 404:this.y+=83;
            break;
      case 'up':
          (this.y - 85 < 0) ? this.y = 0:this.y-=83;
            resetPlayer(); // Player goes back to start
            counter = counter + 1; // Increase Score 
            points.innerHTML = counter; // Update score points in HTML
            break;
    }
}

console.log (this.handleInput);
*/


/* @description INSTANTIATE ALL (Enemy, Player and Gem) OBJECTS  */
//*  Create Counter for points & Use getElementById() method to define access to points
let counter = 0; 
const points = document.getElementById('points');
let player = new Player(202, 404); //Define player (x-)position: (0, 0 is top left corner) & (505 / 2 - 50.5 = 202) 
let lives = 3;

const newEnemy = new Enemy(-100, 227.5, 50); //Define enemy (y-) position: to create enemies
const newEnemy1 = new Enemy(-100, 145, 50);
const newEnemy2 = new Enemy(-100, 61, 50);
let allEnemies = [newEnemy, newEnemy1, newEnemy2 ]; //Place allEnemy objects in allEnemies[] array 

const gem1 = new Gem();// Instantiate the Gem
let allGems = [gem1]; // Place all Gems in an array called allGems

/* **************COLLISION SECTION*********** */
/* CODE from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
 * Create Collision() function- to detect if Player and Enemy(bug) collide 
 * @param Check if 'this' Enemy collides with player
 *        resetPlayer() method to reset Player back to start
 *        TO ADD: delete 1 live
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
        showLives();
        }
    };

/**
 * @description resetPlayer
 * Define resetPlayer() function- to put player position back to x = 202 and y = 404
 */
function resetPlayer() { 
    player.x = 202;
    player.y = 404;
};

/* **************HEARTS=(LIVES) SECTION *********** */
function showLives() { // Generate html to display hearts-lives
  let lives = document.querySelector('.hearts');
  let heartHtml = '<img src="images/Heart.png">';
  lives.innerHTML = "";

  for (let i = 0; i < 3; i++) {
     //if (i > 1) {
    lives.innerHTML += heartHtml;
    //lives.style.visibility = 'collapse';
  }
} 	 

/* **************GEM COLLISION ***********  */
function gemCollision() {
   if (this.x > 500) this.x = -100; 
   gemCollision(this);
   if (player.y === this.y) {
   if (player.x > this.x - 75 && player.x < this.x + 75) 
    player.resetPosition();
    removeGem();
    console.log("Delete Gem");
  }
};    

function removeGem() {
  if (gemCollision(this) = true) {
        counter = (counter + 5);
        //console.log("Add 5 points");
        console.log(points);
        points.innerHTML = counter;
  }
}; 

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

function restartGame() {  
      
    btn.onclick = () => {
        gameStart = true;
        modal.style.display = "none";
        modal_content.style.display="none";        
    }  
};

// Select player at Gamestart
const choosePlayer = (selection) => {
    switch(selection){
      case "cat":
          player.sprite = 'images/char-cat-girl.png';
            break;
      case "boy": 
          player.sprite = 'images/char-boy.png';
            break; 
      case "horn":
          player.sprite = 'images/char-horn-girl.png';
            break;
      case "pink":
          player.sprite = 'images/char-pink-girl.png';
            break;
      case "princess":
          player.sprite = 'images/char-princess-girl.png';
          break;
    }
}

console.log (player.sprite);


/* **************MODAL SECTIONS*********** 
//Declare Modal score settings
/* 
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

/* **************KEY SECTION (EXTRA FEATURE)***********
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
//var key = new Key(getGemX());
*/ 

