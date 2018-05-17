# ArcadeGame
- Build a Classical Arcade Game (Frogger Game Clone)(Project 4).
- Created for the Udacity Nanodegree Front End Web Developer- (Full Google Scholarship).

## Table of Contents

* [Project](#project)
* [Installation](#installation)
* [Play the Game](#play-the-game)
* [Game Logics](#game-logics)
* [Mockup](#mockup)
* [Game Start](#game-start)
* [Basic Game Functionality](#game-requirements)
* [Additional Game Functionality](#game-extras)
* [Code Dependencies](#dependencies)
* [Bugs](#bugs)
* [Contributing](#contributing)
* [Credits](#credits)

# Project:
- Students are given a Udacity startercode (HTML,CSS and various JS files) of the static ArcadeGame project.
- __Goal__: to get the Player from the road safely over the grass into the water.
- __Challenge:__ to avoid the Labybirds (Enemies) travelling on the road. 
- If a bug is touched, the Player is reset back at the beginning. 
- Upon reaching the water, the Player is also reset back to the beginning.

## Installation
Clone this project and open the `index.html` file in your browser, or click the link in the Project description.

# Play the Game:
Play the [ArcadeGame](https://dianavile.github.io/ArcadeGame/).

# Mockup:
Here you see the final result:
![Game](https://github.com/dianavile/ArcadeGame/blob/master/img/)

# Game Logics: (How the game works)
- __Goal game:__ get Player from the road safely over the grass into the water.
- __Challenge:__ to avoid the Ladybirds (bugs) that travel on the grass. 

# TODO-list ArcadeGame project
In order to let the game work properly, the following requirements need to be met:

# Game Start (How to begin):
- [ ] Start with the _app.js_ file
- [ ] **DO NOT EDIT** files: _styles.css, engine.js, resources.js and the img folder including the images_!
- [ ] Add Game instructions to README.md file. (_how to load and play the game_)

# Basic Game Functionality (Requirements):
* - [x] Inside the __app.js file__, create two objects using Object-Oriented JavaScript. 
- [x] Object1= _`Player`_ 
- [x] Object2= _`Enemy`_.
* __The __Enemy__ should:__
- [x] _move to one direction on the pavement_ only (= _right_).
- [x] move in _varying speeds_.
- [x] Create the `Enemy` function, which initiates the _Enemy_ by:
- [x] Load image by setting `this.sprite` to appropriate image in image folder (provided)
- [x] Set `initial location` of the Enemy (TODO)
-  [x] Set `Enemy speed` (TODO)
- [x] Create the `update` method for the Enemy
- [x] `Update location` of the Enemy 
- [x] Handle `collision` with the `Player` 
- [x] add __OWN__ `Enemy methods` if needed 
* __The __Player__ should:__
- [x] reach water using `arrowkeys`.(_up_, _right_, _down_ and _left_) 
- [x] ___NOT__ `collide`_ into an enemy.
- [x] Implement the `Player` class. Use the  `Enemy` class as example 
- [x] Create the `Player function`, which initiates the _Player_ by:
- [x] Load the image by setting `this.sprite` to appropriate img in image folder 
- [x] Use code from the  `Enemy` function as example to get started 
- [x] Set the `Player initial location` 
- [x] Create the `update` method for the Player. Use `Enemy` function code as example 
- [x] Create the `render method` method for the Player. Use the `Enemy` Render method code as example  
- [x] Create the `handleInput method` 
- [x] receives user input, allowedKeys (pressedKey) 
- [x] move the player according to input. In particular:
- [x] Left key: Move player to the left. 
- [x] Right key: Move player to the right. 
- [x] Up key: Move player up. 
- [x] Down key: Move player down.
- [x]  Recall `player cannot move off screen` (check it and handle appropriately)  
- [x] Add `own Player methods` if needed 
- Once completed implementing the Player and Enemy, instantiate them by:
- [x] Creating a new Player object
- [x] Creating several new Enemies objects 
- [x] Place new Enemies objects and placing in an array `called allEnemies[]`
* __Collision__:
- [x] If `player` and `enemy` `collide`, game will  _`reset`_.
*__Game End__:
- [x] If `player` reached the `water`, the player wins the game.
- [x] If the player reaches the water, 
- [x] game reset 
- [x] move `player` back to the initial location (separate `reset Player method` to handle).

### Additional Game Functionality (Extras):
In addition to the basic Game functionality, I will add the following additional Game features: 
* - __Score:__ 
- [x] Implement a Gamescore. 
- [x] Increase Score each time the player reaches the water
- [x] Reset Game to 0 (or reduced) when collision occurs.
* - __Collectables:__ 
- [x] Add `gems` to the game. 

### TODO:
- [x] Allow the `player` to collect gems.

### Code Dependencies
- This project is created based on the `Udacity starterscode`.
- I used the following codesnippets, fonts, images, backgrounds & emojis to create the game:
*  Codesnippets:
* Fonts:
* Images:
* Backgrounds: 
* Emojis:

# Bugs:
No known bugs, except for the ones on the screen.

### Contributing
No pull requests are accepted.

### Credits
