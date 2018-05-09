# ArcadeGame
- Build a Classical Arcade Game (Frogger Game Clone)(Project 4).
- Created for the Udacity Nanodegree Front End Web Developer- (Full Google Scholarship).

# Instructions:
- Students are given a Udacity startercode (HTML,CSS and various JS files) of the static ArcadeGame project.
- __Goal__: to get the Player from the grass safely over the road into the water.
- __Challenge:__ to avoid the Enemies (bugs) travelling on the road. 
- If a bug is touched, the Player is reset back at the beginning. 
- Upon reaching the water, the Player is also reset back to the beginning.

# Play the Game:
Play the [ArcadeGame]().

# Mockup:
Here you see the final result:
- The Game Instructions:
- The Game startscreen:
- The Game:
- The GameOver:

# Game Logics: (How the game works)
- __Goal game:__ get Player from the grass safely over the road into the water.
- __Challenge:__ to avoid the Enemies (bugs) that travel on the road. 

# TODO-list ArcadeGame project
In order to let the game work properly, the following requirements need to be met:

# Game Start (How to begin):
- [ ] Start with the _app.js_ file
- [ ] **DO NOT EDIT** files: _styles.css, engine.js, resources.js and the img folder including the images_!
- [ ] Add Game instructions to README.md file. (_how to load and play the game_)

# Basic Game Functionality (Requirements):
* - [ ] Inside the __app.js file__, create two objects: the 1) `Player` and the 2) `Enemy` classes, using Object-Oriented JavaScript. 
     - [ ] Object1= _`Player`_ 
     - [ ] Object2= _`Enemy`_.

* __The __Enemy__ should:__
-  [ ] _move to one direction on the pavement_ only (= _right_).
-  [ ] move in _varying speeds_.
- [ ] Create the `Enemy` function, which initiates the _Enemy_ by:
    * - [x] Load image by setting `this.sprite` to appropriate image in image folder (provided)
    * - [ ] Set `initial location` of the Enemy (TODO)
    * - [ ] Set `Enemy speed` (TODO)
- [ ] Create the `update` method for the Enemy
    * - [ ] `Update location` of the Enemy (TODO) 
    * - [ ] Handle `collision` with the `Player` (TODO) 
- [ ] add __OWN__ `Enemy methods` if needed (TODO) 

* __The __Player__ should:__
-  [ ] reach water using `arrowkeys`.(_up_, _right_, _down_ and _left_) 
- [ ] ___NOT__ `collide`_ into an enemy.
   * - [ ] Implement the `Player` class (TODO). Use the  `Enemy` class as example (TODO)
- [ ] Create the `Player function`, which initiates the _Player_ by:
    * - [ ] Load the image by setting `this.sprite` to appropriate img in image folder (TODO) 
    * - [ ] Use code from the  `Enemy` function as example to get started (TODO) 
    * - [ ] Set the `Player initial location` (TODO) 
- [ ] Create the `update` method for the Player. Use `Enemy` function code as example (TODO) 
- [ ] Create the `render method` method for the Player. Use the `Enemy` Render method code as example (TODO)     
- [ ] Create the `handleInput method` (TODO) 
  * - [ ] receives user input, allowedKeys (pressedKey)  (TODO) 
  * - [ ] move the player according to input. In particular:
    * - [ ] Left key: Move player to the left. (TODO) 
    * - [ ] Right key: Move player to the right. (TODO) 
    * - [ ] Up key: Move player up. (TODO) 
    * - [ ] Down key: Move player down. (TODO) 
 * - [ ]  Recall `player cannot move off screen` (check it and handle appropriately) (TODO)  
- [ ] Add `own Player methods` if needed (TODO) 

- Once completed implementing the Player and Enemy, instantiate them by:
- [ ] Creating a new Player object
- [ ] Creating several new Enemies objects 
- [ ] Place new Enemies objects and placing in an array `called allEnemies[]`

* __Collision__:
-  [ ] If `player` and `enemy` `collide`, game will  _`reset`_.

*__Game End__:
-  [ ] If `player` reached the `water`, the player wins the game.
 - [ ] If the player reaches the water, 
       * - [ ] game reset 
       * - [ ] move `player` back to the initial location (separate `reset Player method` to handle).

### Additional Game Functionality (Extras):
In addition to the basic Game functionality, I will add the following additional Game features: 
* - __Player selection:__ 
 - [ ] User can select image for `player` character BEFORE game start. 
 - [ ] Use of __different character images__ (provided in img folder).
* - __Score:__ 
- [ ] Implement a Gamescore. 
- [ ] Increase Score each time the player reaches the water
- [ ] Reset Game to 0 (or reduced) when collision occurs.
* - __Game Level:__ 
- [ ] Add different game levels
- [ ] __Level 1:__ `easy`
- [ ] __Level 2:__ `intermediate`
- [ ] __Level 3:__ `advanced`
* - __Collectables:__ 
- [ ] Add `gems` to the game. 
- [ ] Allow the `player` to collect gems.
* - __Sound:__ 
- [ ] Add sounds to the game 
- [ ] At Game start
- [ ] During Game: if reaching water (=winning points)
- [ ] During Game: if obtaining gems (=collectables)
- [ ] During Game: if collision between `player` and `enemy`(=bug).
- [ ] At Game End: if game is over (=game end).

### Code Dependencies
- This project is created based on the `Udacity starterscode`.
- I used the following codesnippets, fonts, images, backgrounds & emojis to create the game:
*  Codesnippets:
* Fonts:
* Images:
* Backgrounds: 
* Emojis:

### Contributing
No pull requests are accepted.

### Thanks to
