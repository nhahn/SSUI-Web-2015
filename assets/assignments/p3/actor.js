/**
 * @constructor
 * @param {props} An object containing properties for the actor
 */
function Actor(props) {
  //TODO
};

/**
 * Sets the FSM for the particular actor. 
 * @param {fsm} The FSM object as detailed in the instructions
 */
Actor.prototype.setFSM = function(fsm) {
  //TODO
}

/**
 * Recieves an event from dispatch and transitions the FSM appropriately
 * @param {event} The event object recieved, which includes certain information depending on the event type
 * @return {boolean} True if the event was consumed by the actor, false if it was not consumed
 */
Actor.prototype.deliverEvent = function(event) {
  //TODO
}

/**
 * Transitions the FMS for a particular transition and event
 * @param {event} The event object recieved, which includes certain information depending on the event type
 */
Actor.prototype.makeTransition = function(event, transition) {
  //TODO
}

/**
 * Draws the actor on the canvas based on its parameters
 * @param {context} The HTML5 canvas context object to be drawn on. 
 */
Actor.prototype.draw = function(context) {
  //TODO
}

