# ArcadeGame
- Build a Classical Arcade Game (Frogger Game Clone)(Project 4).
- Created for the Udacity Nanodegree Front End Web Developer- (Full Google Scholarship).

# Instructions:
- Students are given a Udacity startercode(HTML,CSS and various JS files) of the static ArcadeGame project.
Goal is to 

# Play the Game:
Play the [ArcadeGame]().

# Mockup:
Here you see the final result:
- Startscreen:
- The Game Instructions:
- The Game:
- The Game:
- The GameOver:

# Game Logics: (How the game works)
- The goal of the game: to get your Player from the grass safely over the road into the water.
- The challenge: to avoid the bugs that travel on the road. 
- If a bug is touched, the Player is reset back at the beginning. 
- Upon reaching the water, the Player is also reset back to the beginning.
[Game Plan]()

# TODO-list ArcadeGame project
# Game Basic Functionality:
* There are 2 objects: Object1= _`Player`_ and Object2= _`Enemy`_.

__The __Player__ should:__
* reach water using arrow keys.(_up_, _right_, _down_ and _left_) 
* _not collide_ into an enemy.

__The __Enemy__ should:__
* _move to one direction_(right) only.
* move in _varying speeds_.

__Collision__:
* If player and enemy "collide", game should _reset_.

__Game End__:
* If player "reached the water", the player wins the game.

# Game Requirements:
In order to let the game work properly, the following TODO list is needed:

# How to begin:
1. - [ ] Start with the _app.js_ file
2. - [ ] **DO NOT EDIT** these files: _styles.css, engine.js, resources.js and the img folder including the images_!
3. - [ ] Add instructions how to load and play the game to the README.md file.
4. - [ ] Inside the app.js file, you will need to implement the Player and the Enemy classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided to you, and you will need to complete the following:
5. - [ ] The Enemy function, which initiates the Enemy by:
    * - [ ] Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
    * - [ ] Setting the Enemy initial location (you need to implement)
    * - [ ] Setting the Enemy speed (you need to implement)
6. - [ ] The update method for the Enemy
    * - [ ] Updates the Enemy location (you need to implement)
    * - [ ] Handles collision with the Player (you need to implement)
7. - [ ] You can add your own Enemy methods as needed

You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:
8. - [ ] The Player function, which initiates the Player by:
    * - [ ] Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
    * - [ ] Setting the Player initial location
9. - [ ] The update method for the Player (can be similar to the one for the Enemy)
10. - [ ] The render method for the Player (use the code from the render method for the Enemy)
11. - [ ] The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
    * - [ ] Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
    * - [ ] Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
    * - [ ] If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
12. - [ ] You can add your own Player methods as needed.

Once you have completed implementing the Player and Enemy, you should instantiate them by:
13. - [ ] Creating a new Player object
14. - [ ] Creating several new Enemies objects and placing them in an array called allEnemies

### Code Dependencies
This project is created based on the `Udacity starterscode`.

I used the following codesnippets, fonts, images, backgrounds & emojis to create the game:

### Contributing
No pull requests are accepted.

### Additional Functionality
In addition to the basic functionality, I will add the following additional features: 

* - [ ] Player selection: 
- Allow the user to select the image for the player character before starting the game. You can use the different character images provided in the images folder (we’ll get to that below).

* - [ ] Score: 
- Implement a Gamescore. 
- For example, the score can increase each time the player reaches the water, and it can be reset to 0 (or reduced) when collision occurs.

* - [ ] Collectables: 
- Add add different game levels, 
- (easy- intermediate- advanced).

* - [ ] Game Level: 
- Add gems to the game, 
- Allow the player to collect gems.

* - [ ] Sound: 
- Add sounds to the game, 
- At game start, winning points, game end and collision.
