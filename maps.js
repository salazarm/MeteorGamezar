
Map = function(mapDoc) {
	if( !(this instanceof Map) ) {
		return new Map(mapDoc);
	}

	tiles = mapDoc.tiles;
	map = mapDoc.map;
	portals = mapDoc.portals;
	users = [];
	monsters = mapDoc.users;
	actions = mapDoc.map;
	monsters = mapDoc.monsters;
	patches = {}

	tileToCraftyTile = {}

	function checkForPortal(x,y) {
		for(var i=0; i<portals.length; i++) {
			portal = Models['Portals'][portals[i]];
			if (Math.abs(portal.position.x - x)<64 && Math.abs(portal.position.y - y)<64 ) {
				return portals[i];
			}
		}
		return false;
	}

	function loadSprites() {
		i = 0;
		if ( Meteor.isClient ) {
			_tiles = {}
			for(var key in tiles) {
				_tiles[key] = tiles[key]['position'];
				i++;
			} 
			Crafty.sprite(16, mapDoc.tilesUrl, _tiles);
		}
		console.log("sprites loaded, created "+i+" tiles");
	}

	return {
		generateMap : function(self) {
			loadSprites();

			for (var i=0; i<map[0].length; i++) {
				for (var j=0; j<map.length; j++ ) {
					for (var k=0; k<map[j][i].length; k++) {

						type = [map[j][i][k]];

						if ( tiles[type[0]]['sturdy'] ) {
				 			type.push(" sturdy");
				 			if (j == 0) {
				 				type.push(" wall_top");
				 			}
				 			if (j == map.length-1) {
				 				type.push(" wall_bottom");
				 			}
				 			if (i == 0) {
				 				type.push(" wall_left");
				 			}
				 			if (i == map[0].length-1) {
				 				type.push(" wall_right");
				 			}
						}

						if ( Meteor.isClient ) {
							Crafty.e("2D, Canvas, "+type.join(",")).attr({ x:i *16, y: j*16});
						}
					}	
				}
			}

			if ( Meteor.isClient ) {
				for (var i=0; i< users.length; i++) {
					user = users[i];
					xPos = user.position.x;
					yPos = user.position.y;

					Crafty.sprite(16, user.spriteUrl, {
						user : user.sprite_position
					});
					
					if (user._id != self._id) {
						Crafty.e("2D, Canvas, user, "+user._id)
							.attr({ x: xPos, y: yPos })
					} else {
						Crafty.c('CustomControls', {
							__move: {left: false, right: false, up: false, down: false},	
							_speed: 3,
							CustomControls: function(speed) {
								if(speed) this._speed = speed;
								var move = this.__move;
								
								portalCheck = checkForPortal;
								this.bind('enterframe', function() {
									self = this;
									//move the player in a direction depending on the booleans
									//only move the player in one direction at a time (up/down/left/right)
									if(this.isDown("RIGHT_ARROW")) {
										x = this.x += this._speed;
										if( checkForPortal)
										Meteor.call('commitAction', 'move', {
											direction : [1, 0], simulated: this.x
										});
									} 
									else if(this.isDown("LEFT_ARROW")) {
										x = this.x -= this._speed; 
										Meteor.call('commitAction', 'move', {
											direction : [-1, 0], simulated: this.x
										});
									}
									else if(this.isDown("UP_ARROW")) {
										y = this.y -= this._speed;
										Meteor.call('commitAction', 'move', {
											direction : [0, 1], simulated: this.y
										});
									}
									else if(this.isDown("DOWN_ARROW")) {
										y = this.y += this._speed;
										Meteor.call('commitAction', 'move', {
											direction : [0, -1], simulated: this.y
										});
									}
									portal = portalCheck(this.x, this.y);
									if ( portal ) {
										console.log("OMG A PORTAL");
										console.log(portal);
										Meteor.call('takePortal', portal, function(error, map) {
											Game.load(error, {map: map, character: Game.character });
										});
									}

								});
								
								return this;
							}
						});
						Crafty.e("2D, Canvas, user, Controls, CustomControls, Animate, Collision, "+self._id)
							.attr({ x: xPos, y: yPos })
						.CustomControls(user.stats.speed)
						.animate("walk_left", 6, 3, 8)
						.animate("walk_right", 9, 3, 11)
						.animate("walk_up", 3, 3, 5)
						.animate("walk_down", 0, 3, 2)
						.bind("enterframe", function(e) {
							if(this.isDown("LEFT_ARROW")) {
								if(!this.isPlaying("walk_left"))
									this.stop().animate("walk_left", 10);
							} else if(this.isDown("RIGHT_ARROW")) {
								if(!this.isPlaying("walk_right"))
									this.stop().animate("walk_right", 10);
							} else if(this.isDown("UP_ARROW")) {
								if(!this.isPlaying("walk_up"))
									this.stop().animate("walk_up", 10);
							} else if(this.isDown("DOWN_ARROW")) {
								if(!this.isPlaying("walk_down"))
									this.stop().animate("walk_down", 10);
							}
							}).bind("keyup", function(e) {
								this.stop();
							})
							.collision()
							.onHit("wall_left", function() {
								this.x += this._speed;
								this.stop();
							}).onHit("wall_right", function() {
								this.x -= this._speed;
								this.stop();
							}).onHit("wall_bottom", function() {
								this.y -= this._speed;
								this.stop();
							}).onHit("wall_top", function() {
								this.y += this._speed;
								this.stop();
							});
					}
				}
			}
		},


		updateChar : function(charId, direction) {
			for (var i=0; i<users.length; i++) {
				if (users[i]._id == charId) {
					x  = users[i].position.x + direction[0]*users[i].stats.speed;
					y  = users[i].position.y - direction[1]*users[i].stats.speed;
					Crafty.e("2D, Canvas, user")
							.attr({ x: x, y: y });
					console.log(x+" : "+y);
					console.log(users[i].position);
					console.log(direction);
					console.log(users[i].stats.speed);
				}
			}
		},

		moveChar : function(character, direction, projected) {
			if (direction[0]){ 
				character.position.x = projected;
			} else {
				character.position.y = projected;
			}
			return character;
		},

		setSelf : function(unit) {
			self = unit;
		},

		removeUnit : function(unit) {
			for(var i=0; i<users.length; i++) {
				if(users[i]._id == unit._id) {
					users.splice(i);
					return;
				}
			}
		},

		changeUnit : function(unit) {
			for (var i=0; i< users.length; i++) {
				if (users[i]._id  == unit._id) {
					users[i] = unit;
					return;
				}
			}
		},

		addUnit : function(unit) {
			users.push(unit);
			var unit_move = unit.move;
			unit.move = function() {
				unit.move()  = function(params) {
					new_position = unit.move(params); 
					if ( sturdyTiles[ map[new_position.y][new_position.x] ] ) {
						return;
					} else {
						
					}
				}
			}
		}
	}
}






