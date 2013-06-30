UnitActions = {
	'move' :   move,
	'attack' : attack
}

function move(character, params) {
	Actions.insert({
		 user_id: character._id, 
  	 map: character.world,
  	 type: 0,
  	 direction: params['direction']
  });
  console.log(params['direction']);
  x = character.position.x += character.stats.speed * params['direction'][0];
  y = character.position.y -= character.stats.speed * params['direction'][1];
	Units.update({ _id: character._id }, { $set : { position : { x: x, y: y } } });
}

function attack(character) {
	// characterInstance = Gamezar.instantiate('unit', character);
	mapDoc = Maps.findOne(character.world);
	units = (new Map(mapDoc)).attack(character);
	if ( !isEmptyObject( units ) ) {
	 	for (var i=0; i< units.length; i++) {
	 		Units.update({ _id: units[i]._id }, { $set :  units[i] } );
	 	}
	 	return units;
  }
  return null;
}