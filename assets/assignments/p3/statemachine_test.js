// Provides the state machine descriptions and creates a new game

window.onload = function() { 
  var canvas = document.getElementById("myDiv"); 
  var actor1 = new Actor({
    height: 50,
    width: 50,
    x: 20,
    y: 20,
    img: 'icon_black.png',
  }); 
  var actor2 = new Actor({
    height: 50,
    width: 50,
    x: 80,
    y: 20,
    img: 'icon.png',
  }); 
  var actor3 = new Actor({
    height: 50,
    width: 50,
    x: 200,
    y: 20,
    img: 'icon.png',
  }); 
  var actor4 = new Actor({
    height: 50,
    width: 50,
    x: 20,
    y: 20,
    img: 'crosshair.png',
  }); 
  
  actor1.setFSM({ 
    states: [ 
    { 
      name: "start", 
      transitions: [ 
        { 
          event: "message",  
          actions: [{
            func: Actions.changeImg,
            params: {
              img: 'heart.png'
            }
          }],
          message: '$INIT$',
          endState: "start"
        }, { 
          event: "buttonPress",  
          actions: [{
            func: Actions.changeImg,
            params: {
              img: 'icon_black.png'
            }
          }],
          endState: "start",
          target: 'button0'
        },{ 
          event: "mousedown",  
          actions: [{
            func: Actions.changeImg,
            params: {
              img: 'icon.png'
            }
          }],
          endState: "start"
        },{ 
          event: "mouseup",  
          actions: [{
            func: Actions.changeImg,
            params: {
              img: 'icon_red.png'
            }
          }],
          endState: "start",
        },{ 
          event: "mousemove",  
          actions: [{
            func: Actions.changeImg,
            params: {
              img: 'crosshair.png'
            }
          }],
          endState: "start"
        },{
          event: "buttonPress",  
          actions: [{
            func: Actions.runAnim,
            params: {
              movingActor: actor1,
              targetActor: actor2,
              duration: 5000,
              passOverMessage: "passover",
              endMessage: "ChangeToHeart"
            }
          }],
          endState: "start",
          target: 'button1'          
        }, { 
          event: "animStart",  
          actions: [{
            func: Actions.changeImg,
            params: {
              img: 'icon_red.png'
            }
          }], 
          endState: "start"
        },{ 
          event: "animMove",  
          actions: [{
            func: Actions.followEventPosition
          }],
          endState: "start"
        },{ 
          event: "animEnd",  
          actions: [{
            func: Actions.followEventPosition
          },{
            func: Actions.changeImg,
            params: {
              img: 'crosshair.png'
            }
          }],
          endState: "start"
        }
      ] 
    }] 
  });
 
  actor2.setFSM({ 
    states: [ 
    { 
      name: "start", 
      transitions: [ 
        { 
          event: "mousedown",  
          actions: [{
            func: Actions.getDragFocus  
          },{
            func: Actions.changeImg,
            params: {
              img: 'icon_red.png'
            }
          }],
          endState: "start"
        },{ 
          event: "dragmove",  
          actions: [{
            func: Actions.followEventPosition  
          }],
          endState: "start"
        },{ 
          event: "dragend",  
          actions: [{
            func: Actions.dropDragFocus  
          },{
            func: Actions.changeImg,
            params: {
              img: 'icon.png'
            }
          }],
          endState: "start"
        },{ 
          event: "message",  
          actions: [{
            func: Actions.changeImg,
            params: {
              img: 'heart.png'
            }
          }],
          endState: "start",
          message: "ChangeToHeart"
        }
      ] 
    }] 
  });
  
  actor3.setFSM({ 
    states: [ 
    { 
      name: "start", 
      transitions: [ 
        { 
          event: "message",  
          actions: [{
            func: Actions.getDragFocus  
          },{
            func: Actions.changeImg,
            params: {
              img: 'heart.png'
            }
          }],
          endState: "start",
          message: 'passover'
        }
      ] 
    }] 
  });
  
  actor4.setFSM({ 
    states: [ 
    { 
      name: "state0", 
      transitions: [ 
        { 
          event: "buttonPress",
          predicate: function(event, params, actor) { return event.shiftKey },
          actions: [{
            func: Actions.moveTo,
            params: {
              targetAbsoluteX: 50,
              targetAbsoluteY: 100
            }
          }],
          endState: "state1"
        }
      ]
    },{
      name: "state1",
      transitions: [
        { 
          event: "buttonPress",
          predicate: function(event, params, actor) { return event.shiftKey },
          actions: [{
            func: Actions.moveInc,
            params: {
              targetOffsetX: 20,
              targetOffsetY: 30
            }
          }],
          endState: "state1"
        }
      ]
    },{
      name: "state2",
      transitions: [
        { 
          event: "buttonPress",
          predicate: function(event, params, actor) { return event.shiftKey },
          actions: [{
            func: Actions.moveTo,
            params: {
              targetAbsoluteX: 10,
              targetAbsoluteY: 150
            }
          }],
          endState: "state1"
        }
      ]
    }] 
  });
  
  var game = new Game(document.getElementById("game"));
  game.addActor(actor1);
  game.addActor(actor2);
  game.addActor(actor3);
  game.addActor(actor4);
  
  document.getElementById("button0").addEventListener("click", function(event) {
    game.dispatchToAll(event);
  });
  
  document.getElementById("button1").addEventListener("click", function(event) {
    game.dispatchToAll(event);
  });
};

