
var Map = function(mapDoc) {
	if( !(this instanceof Map) ) {
		return new Map(mapDoc);
	}


	tileSheet = mapDoc.tileSheet;
	grids = mapDoc.grids;	


	function loadSprites() {
		Crafty.sprite(8, tileSheet, tiles);
	}

	return {
		generateMap : function() {
			loadSprites();
			for (var i=0; i<map[0].length; i++) {
				for (var j=0; j<map.length; j++ ) {
					type = [map[j][i]];
					if (sturdyTiles[type[0]]) {
						type.push("sturdy");
					}
					Crafty.e("2D, canvas, "+type.join(","))
						.atr({ x:i *8, y: j*8});
				}
			}
		},

		addUnit : function(unit) {
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