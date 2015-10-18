/**
 * @constructor
 * @param {props} An object containing properties for the actor
 */
function Game(canvas) {
  this.context = canvas.getContext("2d");
  //Attach HTML events here for the canvas, and then use the appropriate dispatch methods
};


/**
 * Adds a new actor to the game. Each actor must be an independent object (new object). Make sure
 * to properly clone actors if adding multiple of the same type.
 * @param {actor} Actor to add to the game.
 */
Game.prototype.addActor = function(actor) {
  
}

Game.prototype.charactersUnder = function(left, top, width, height) {
  
}

Game.prototype.pointDispatch = function(event) {
   
}

Game.prototype.areaDispatch = function(event) {
  
}

Game.prototype.directDispatch = function(event, actor) {
  
}

Game.prototype.dispatchToAll = function(event) {
  
}

Game.prototype.dispatchTryAll = function(event) {
  
}

Game.prototype.dispatchDragFocus = function(event) {
  
}

Game.prototype.onDraw = function(context) {
  
}
