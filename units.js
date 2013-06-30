
/*
  doc_example = {
     abilities: {
         attack: {
           LifeId = someId for to the Lives collection.
           _id: skill_id, // reference to a skill in the Skills collection
           experience: 0
         },
         defend: {
           _id: skill_id,
           experience: 0
         },
         skill1: {
           _id: skill_id,
           experience: 0
         },
         skill2: {
           _id: skill_id,
           experience: 0
         },
         skill3: {
           _id: skill_id,
           experience: 0
         },
         skill4: {
           _id: skill_id,
           experience: 0
         }
         passive1: {
           _id: skill_id,
           experience: 0
         },
         passive2: {
           _id: skill_id,
           experience: 0
         },
         passive3: {
           _id: skill_id,
           experience: 0
         }
     },
     modifiers: {
       positive: [],
       negative: []
     },
     position: {
     }
   }
*/
var Unit = function(unitDoc){
	if( !(this instanceof Unit) ) {
		return new Unit(unitDoc);
	}
    var stats = unitDoc.stats;
    var abilities = unitDoc.abilities;
    var state = unitDoc.state;
    var position = unitDoc.position;


  return {

  //TODO Implement stamina regen, remove exhaustion when
  //stamina regenerates 100%
    attack: function(targets) {
      if (stats.stamina > abilities.attack.cost.stamina  &&
          !state.isExhausted) {
        stats.stamina -= abilities.attack.cost.stamina;
        _.each(targets, function(target){
          target.getHit(attack.value);
        });
      }
   },
  
   getHit: function(unit) {
      stats.health -= unit.attack();
      if (stats.health <= 0) {
        state.isDead = true;
        stats.health = 0;
      }
   },

   move: function(direction, isRunning) {
     if (stats.stamina >= stats.runSpeed.cost.stamina && 
         !state.isExhausted && isRunning) {
       stats.stamina -= stats.runSpeed.cost.stamina;
       position[x] += direction[x]*stats[runSpeed];
       position[y] += direction[y]*stats[runSpeed];

       if (stats.stamina <= 0) {
         state.isExhausted = true;
         stats.stamina = 0;
       }
     },
     else {
       position[x] += direction[x]*stats[walkSpeed];
       position[y] += direction[y]*stats[walkSpeed];
     }
   },

    getDocument: function(queryStats, noMod) {
      var queryResult = {};
      _.each(queryStats, function(queryStat) {
        if (_.has(stats, queryStat)) {
          queryResult[queryStat] = stats[queryStat];
        }
        return queryResult;
      });
    },

    : function() {
    },
		
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

instantiateMap(id) {

}


Meteor.update( current_user.character { position: })

