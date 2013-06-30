var Units = {}
var Maps = {}
var Portals = {}

Units['base'] = {
	world: 1
	position: {
		x: 0,
		y: 0
	}
}

Units['poke_professor'] = {
	name: "Professor",
	stats: {
		strength: 20,
		health: 100,
		stamina: 100,
		speed: 2
	},
	spriteUrl : "/pokemon.png",
	sprite_position: [0, 3],
	animations: {
		['walk_left', 6, 3, 8],
		['walk_right', 9, 3, 11],
		['walk_down', 0, 3, 2],
		['walk_up', 3, 3, 5]
	}	
}

Maps['world'] = {
	name: "World Map",
	tilesUrl: "/images/pokemon.png",
  tiles : {
  	'grass1' : [ 0, 1 ], 
  	'grass2' : [ 1, 0 ], 
  	'grass3' : [ 2, 0 ], 
  	'grass4' : [ 3, 0 ], 
  	'flower' : [ 0, 1 ], 
  	'bush1' : [ 0, 2 ], 
  	'bush2' : [ 1, 2 ]
  },
  actions : [],
  portals: ['portal_1', 'portal_2'],
  map : [ 
  	[ 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1' ],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'grass1', 'grass4', 'grass1', 'grass3', 'grass1', 'grass3', 'grass3', 'grass1', 'grass2', 'grass3', 'grass1', 'grass2' 'grass3', 'bush2'],
  	[ 'bush2', 'grass2', 'grass1', 'grass4', 'grass2', 'grass3', 'grass1', 'grass2', 'grass4', 'grass3', 'grass1', 'grass2', 'grass2', 'grass2', 'bush1'],
  	[ 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1', 'bush1' ],
  ]
}
Maps['nyanSpace'] = {
  name: "Nyan Space",
  tilesUrl: "/images/nyan_space.png",
  tiles: {
  },
  actions: [],
  portals: ['nyan2world'],
  map: []
}
for (var i = 0; i < 67; i++) {
  Maps['nyanSpace']['map'].push([]);
  for (var j = 0; j < 120; j++) {
    if ((i + j) % 7 === 0) {
      Maps['nyanSpace']['map'][i].push(['nyanStar']);
    }
    else {
      Maps['nyanSpace']['map'][i].push(['nyanEmpty']);
    }
  }
}

Portals['portal_1'] = {
	active: true,
	map: 'world',
	position : {
		x: 0,
		y: 0
	},
	to: 'portal_2'
}

Portals['portal_2'] = {
	active: true,
	map: 'world',
	position : {
		x: 10,
		y: 10
	},
	to: 'portal_1'
}

Portals['world2nyan'] = {
	active: false,
	map: 'world',
	position : {
		x: 30,
		y: 30
	},
	to: 'nyan2world'
}

Portals['nyan2world'] = {
	active: false,
	map: 'nyan_space',
	position : {
		x: 30,
		y: 30
	},
	to: 'world2nyan
}
