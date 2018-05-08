# ArcadeGame
- Build a Classical Arcade Game (Frogger Game Clone)(Project 4).
- Created for the Udacity Nanodegree Front End Web Developer- (Full Google Scholarship).

# Instructions:
- Students are given a Udacity startercode(HTML,CSS and various JS files) of the static ArcadeGame project.
- Goal is to get the Player from the grass safely over the road into the water.
- The challenge: to avoid the bugs travelling on the road. 

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
* There are 2 objects: 
-  [ ] Object1= _`Player`_ 
 - [ ] Object2= _`Enemy`_.

* __The __Player__ should:__
-  [ ] reach water using arrowkeys.(_up_, _right_, _down_ and _left_) 
 - [ ] _not collide_ into an enemy.

* __The __Enemy__ should:__
-  [ ] _move to one direction_ only (= _right_).
-  [ ] move in _varying speeds_.

* __Collision__:
-  [ ] If player and enemy "collide", game should _reset_.

*__Game End__:
-  [ ] If player "reached the water", the player wins the game.

# Game Requirements:
In order to let the game work properly, the following TODO list is needed:

# How to begin:
1. - [ ] Start with the _app.js_ file
2. - [ ] **DO NOT EDIT** thefiles: _styles.css, engine.js, resources.js and the img folder including the images_!
3. - [ ] Add instructions how to load and play the game to the README.md file.
4. - [ ] Inside the app.js file, implement the Player and the Enemy classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided to you, and you will need to complete the following:
5. - [ ] The `Enemy` function, initiates the Enemy by:
    * - [ ] Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
    * - [ ] Setting the Enemy initial location (you need to implement)
    * - [ ] Setting the Enemy speed (you need to implement)
6. - [ ] The `update` method for the Enemy
    * - [ ] Updates the Enemy location (you need to implement)
    * - [ ] Handles collision with the Player (you need to implement)
7. - [ ] add your `own Enemy methods` as needed

- Implement the `Player` class: _use the Enemy class as an example on how to get started_. 
- At minimum you should implement the following:
8. - [ ] The `Player function`, which initiates the Player by:
    * - [ ] Load the image by setting `this.sprite` to the appropriate image in the image folder (use code from the Enemy function as ex example)
    * - [ ] Set the `Player initial location`
9. - [ ] The `update method` for the Player (similar to the Enemy one)
10. - [ ] The `render method` for the Player (use the Render method code from `Enemy`)
11. - [ ] The `handleInput method`, receives user input, allowedKeys (the key which was pressed) and move the player according to that input. 
- In particular:
    * - [ ] Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
    * - [ ] Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
    * - [ ] If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
12. - [ ] You can add your own Player methods as needed.

Once you have completed implementing the Player and Enemy, you should instantiate them by:
13. - [ ] Creating a new Player object
14. - [ ] Creating several new Enemies objects and placing them in an array called allEnemies

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

### Additional Functionality
In addition to the basic functionality, I will add the following additional features: 

* __[ ] Player selection:__ 
- Allow the user to select the image for the player character before starting the game. 
- Use different character images provided in the images folder.

* __[ ] Score:__ 
- Implement a Gamescore. 
- Increase Score each time the player reaches the water
- Reset Game to 0 (or reduced) when collision occurs.

* __[ ] Collectables:__
- Add 3 different game levels: _`easy`, `intermediate` & `advanced`).

* __[ ] Game Level:__ 
- Add gems to the game. 
- Allow the player to collect gems.

* - [ ] Sound: 
- Add sounds to the game 
- At game start, winning points, game end and collision.
