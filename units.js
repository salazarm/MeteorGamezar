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
     }
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
	}
}