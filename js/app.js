// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 200);
    this.sprite = 'images/enemy-bug.png';
};

Player.prototype.update = function() { // Add keyboard events
// Turn into if-else statement for boundaries of canvas
// i.e. if this.y > nnn;
// this.y = nnn; //(= do this for left, right and bottom)
// Add: top, if player reaches water, resetPlayer();
};

Player.prototype.render = function() { // Draw player on screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(e) { // Update Player Movements
    if (keyCode == 'left') {
        if (this.x - 101 < 0) {
            this.x = 0;
        } else {
            this.x -= 101;
        }
    };
    if (keyCode == 'right') {
        if (this.x + 101 > 404) {
            this.x = 404;
         } else {
            this.x += 101;
         }
    };
     if (keyCode == 'down') {
         if (this.y + 85 > 404) {
             this.y = 404;
         } else {
             this.y += 83;
         }
     };
     if (keyCode == 'up') {
        if (this.y - 85 < 0) {
             // resetPlayer();
        } else {
            this.y -= 83;
         }
     };       
};


// function checkCollision() {

// };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x <= 505) { // Enemies move horizontally (= ONLY x-value changes)
        this.x += this.speed * dt;
    } else {
        this.x = -100; // Enemy off-canvas. Back to left of canvas
    }
    // checkCollision(); // TODO: Add Check Collision  
};    

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() { // Rendering (=show Enemy on Canvas)
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
     this.x = x; 
     this.y = y; 
     this.speed = speed; 
     this.sprite = 'char-princess-girl.png'
};

// Instantiate Enemy and Player objects.
// Place the player object in a variable called player	
const player = new Player(202, 404, 50);
// Place all enemy objects in an array called allEnemies
const enemyOne = new Enemy(-100, 227.5, 50);
const enemyTwo = new Enemy(-100, 227.5, 50);
const enemyThree = new Enemy(-100, 145, 50);
const enemyFour = new Enemy(-100, 61, 50);
const enemyFive = new Enemy(-100, 61, 50);

let allEnemies = [];
allEnemies.push(enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
