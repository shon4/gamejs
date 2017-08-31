/**
 * Here we initialize and run the game logic and therefore the game itself.
 */
const log = debug('./src/game');
const Level = require('./src/class.level');
const Input = require('./src/input');

// Game.
const Game = {};
let time, tickLength, lastTick;

/**
* Initializes the game.
* @param {object} payload: The initial game config (see EOF).
*/
Game.fncInit = (payload) => {
  time = 0;
  tickLength = payload.tickLength;
  lastTick = performance.now();
  Game.fncMain(Game.lastTick);
};

/**
* The main game loop.
* @param {number} raFrame: The current animation frame.
*/
Game.fncMain = (raFrame) => {
  Game.stopFncMain = window.requestAnimationFrame(() => Game.fncMain(performance.now()));
  Game.fncQueue(
    raFrame > lastTick + tickLength ? Math.floor((raFrame - lastTick) / tickLength) : 0
  );
};

/**
* Queues a game logic update.
* @param {number} tickC: The amount of ticks to be processed.
*/
Game.fncQueue = (tickC) => {
  for (let i = 0; i < tickC; i++) {
    lastTick = lastTick + tickLength;
    Game.fncUpdate(lastTick);
  }
};

/**
* Updates the game logic.
* Controlled by the main game loop.
* @param {number} lastTick: Tick to be updated.
*/
Game.fncUpdate = (lastTick) => {

};

/**
* Input the initial configuration for the game.
*/
Game.fncInit({
  level: 'lvl_cube',
  tickLength: 50,
});
