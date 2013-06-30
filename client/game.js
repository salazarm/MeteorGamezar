Game = (function() {
	craftyMap = null;
	character = null;
	allies = {};
	monster = {};
	initialized = false;

	return {
		init: function(){
			Crafty.init(10, 600, 620);
		  Crafty.canvas();
		},

		load : function(error, response) {
			Meteor.subscribe('currentMap');
			console.log("Game.load()");
			console.log(response);
			if (error) {
				alert(error);
				window.location = window.location;
			} else {
				$("#chars").fadeOut(200);
			}

			if ( !initialized ) {
				Game.init();
			}

		  console.log("Logging in Character");
		  console.log(response);
		
		  character = response.character;
		  map = response.map;

		  craftyMap = new Map(map);
		  craftyMap.setSelf(character);

		  Crafty.scene("main", function() {
			  craftyMap.generateMap(character);
			});

		  loadNeeding = [response.map.tilesUrl];
		  for( var i=0; i<response.map.users.length; i++) {
		  	loadNeeding.push(response.map.users[i].spriteUrl);
		  }

	    Crafty.load(loadNeeding, function() {
	    	console.log("loading main");
	      Crafty.scene("main");
	    });

	    Units.find().observe({
	    	added: function(unit) {
	    		craftyMap.addUnit(unit);
	    		craftyMap.generateMap(character);
	    	},
	    	removed: function(unit) {
	    		craftyMap.removeUnit(unit);
	    		craftyMap.generateMap(character);
	    	}
	    })
			Actions.find().observe({
				added: function(action) {
					if (action.user_id != character._id) {
						if( action.type == 0) {
							craftyMap.updateChar(action['user_id'], action['direction']);
						}
					}
				}
			});

			Events.find().observe({
				changed: function(event) {
					console.log("Events Changed------");
					console.log(id);
					console.log(event);
				}
			});
			console.log("Observations initiated");
		},


		setCharacter : function(_character) {
			character = _character;
			console.log({ "Set character:": character });
		},

		setMap : function(_map) {
			map = _map;
			console.log({ "Set map": map });
		},

		performAction : function (action) {
			console.log({"Action was ":action });
		},

	}
})();