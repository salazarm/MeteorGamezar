var Actions = {
	'move' :   move,
	'attack' : attack
}

var move = function(character, params) {
	_character = Map.moveChar(character, params['direction']);
	if ( !isEmptyObject( _character ) ) {
		Units.update({ _id: _character._id }, { $set : _character });
		return _character;
	}
	return null;
}

var attack = function(character) {
	 units = Map.attack(character);
	 if ( !isEmptyObject( units ) ) {
	 	for (var i=0; i< units.length; i++) {
	 		Units.update({ _id: units[i]._id }, { $set : { units[i] } } );
	 	}
	 	return units;
  }
  return null;
}