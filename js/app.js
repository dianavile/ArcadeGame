'use strict'; //whole-script strict mode syntax (from MDN: https://www.w3schools.com/js/js_strict.asp)

let gameStart = false;
const modal = document.getElementById('myModal');
const modal_content = document.querySelector('gameRules');
const btn = document.getElementById("myBtn");

const win_modal = document.getElementById('winModal'); //Declare Modal score settings

window.onload = restartGame();
if(gameStart === true){      
    modal.style.display = "none";
    } else {
    modal.style.display = "block";                
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

/* Player handleInput() method for ARROYKEYS */
handleInput (keyCode) {
  switch (keyCode) {
    case 'left':
        if (this.x - 101 < 0) {
            this.x = 0;            
        } else {
            this.x -= 101;
        }
        console.log('left');    
        break;
    case 'right':
        if (this.x + 101 > 404) {
            this.x = 404;
        } else {
            this.x += 101;
        }
        console.log('right');        
        break;
    case 'down':
        if (this.y + 85 > 404) {
            this.y = 404;
        } else {
            this.y += 83;
        }
        console.log('down');   
        break;
    case 'up':
        if (this.y - 85 < 0) { // Player reaches water
            resetPlayer(); // Player goes back to start
            counter = counter + 1; // Increase Score 
            points.innerHTML = counter; // Update score points in HTML
        } else {
            this.y -= 83;
        }
        console.log('up');          
        break;
  }
    console.log('player.handleInput');}

// Draw player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
  }
}

//-- CHECK THIS PART LATER: if Player reachs the water goes back to initial position
    if(this.y - 85) {
      //resetPlayer();
      score = counter + 1; // Increase Score 
      points.innerHTML = counter; // Update score points in HTML
      //score += 1;
      //scoreCounter.innerHTML = score;
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
        //lives.count = 0;
        lives = hearts -1; // Decrease Live 
        points.innerHTML = counter; // 
     }
  }

/* DRAW ENEMY on screen*/
// @param create Render method (=to show Enemy on "ctx"= Canvas) 
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

/* @description INSTANTIATE ALL (Enemy, Player and Gem) OBJECTS  */
//*  Create Counter for points & Use getElementById() method to define access to points
let counter = 0; 
const points = document.getElementById('points');
let player = new Player(202, 404); //Define player (x-)position: (0, 0 is top left corner) & (505 / 2 - 50.5 = 202) 
let lives = 3;
const hearts = document.getElementById('hearts');

const newEnemy = new Enemy(-100, 227.5, 50); //Define enemy (y-) position: to create enemies
const newEnemy1 = new Enemy(-100, 145, 50);
const newEnemy2 = new Enemy(-100, 61, 50);
const allEnemies = [newEnemy, newEnemy1, newEnemy2 ]; //Place allEnemy objects in allEnemies[] array 

const gem1 = new Gem();// Instantiate the Gem
let allGems = [gem1]; // Place all Gems in an array called allGems

const enemies = () => {
  for (let i = 0; i < 3; i++) {
    let enemy = new Enemy();
    allEnemies.push(enemy);
  }
};

/* **************COLLISION SECTION*********** */
/* CODE from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
 * Create Collision() function- to detect if Player and Enemy(bug) collide 
 * @param Check if 'this' Enemy collides with player
 *        resetPlayer() method to reset Player back to start
 *      
 *        Increase score (level) with one
 *        Update points
 */
function checkCollision(oneEnemy) { 
    if (player.x < oneEnemy.x + 80 && 
    player.x + 60 > oneEnemy.x &&
    player.y < oneEnemy.y + 80 &&
    40 + player.y > oneEnemy.y) {
        resetPlayer(); 
        counter = 0;// Player reaches water (without bug collision)= 1 point.
        console.log(points);
        points.innerHTML = counter; 
        //removeLive(); // TO ADD: delete 1 live
        //lives = i-1;//
        //console.log(hearts);
        }
    };

//resetPlayer () function
function resetPlayer() {
    setTimeout(() => {
    player.x = 202;
    player.y = 404;       
  }, 100);    
}

/* **************HEARTS=(LIVES) SECTION *********** */
function showLives() { // Generate html to display hearts-lives
  let lives = document.querySelector('.hearts');
  let heartHtml = '<img src="images/Heart.png">';
  lives.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    lives.innerHTML += heartHtml;
  }
} 	 

//GAME LOGIC
//if (points = 5) show modal gameWinModal
//bug collision = reset game to 0 points 
//if hit by bug 3= game over
//checkCollision(this); 

// DRAFT://function removeLive() {
//let lives = 3;
//const hearts = document.getElementById('hearts');
     //if (i > 1) {
      //lives.style.visibility = 'collapse';
//}

/* **************GEM COLLISION *********** 
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
}; */

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

function restartGame() {      
    btn.onclick = () => {
        lives = 3;
        counter = 0;
        gameStart = true;
        modal.style.display = "none";            
    }  
};

function winGame() {
// if Player scores 5 points_ show Win_Modal
    if (counter === 5) {
      gameStart = false;
      win_modal.classList.add("show-modal");
      //counter = 0;
      //resetplayer();  
    } else if (counter < 5){
      restartGame()
    }
}

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

