var Units = {}
var Maps = {}
var Portals = {}

Units["base"] = {
	world: "kBvNRYx6GF6JtTgMd",
	position: {
		x: 0,
		y: 0
	}
}

Units["poke_professor"] = {
	name: "Professor",
	stats: {
		strength: 20,
		health: 100,
		stamina: 100,
		speed: 2
	},
	spriteUrl : "/images/pokemon.png",
	sprite_position: [0, 3],
	animations: [
    ["walk_left", 6, 3, 8],
		["walk_right", 9, 3, 11],
		["walk_down", 0, 3, 2],
		["walk_up", 3, 3, 5]
	]
}

Maps["world"] = {
  name: "World Map",
  monsters: [],
  users: [],
  tilesUrl: "/images/pokemon.png",
  tiles : {
    "grass1" : {
      position: [ 0, 0 ],
      sturdy: false
    }, 
    "grass2" : {
      position: [ 1, 0 ],
      sturdy: false
    }, 
    "grass3" : {
      position: [ 2, 0 ],
      sturdy: false
    }, 
    "grass4" : {
      position: [ 3, 0 ],
      sturdy: false 
    },
    "flower" : {
      position: [ 0, 1 ],
      sturdy: false
    },
    "bush1" : {
      position: [ 0, 2 ],
      sturdy: true,
    },
    "bush2" : {
      position: [ 1, 2 ],
      sturdy: true,
    }
  },
  actions : [],
  portals: ["portal_2"],
  map : [
    [ ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1" ] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1", "flower"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1"], ["grass4"], ["grass1"], ["grass3"], ["grass1"], ["grass3"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass3"], ["grass1", "bush2"] ],
    [ ["grass1", "bush2"], ["grass2"], ["grass1"], ["grass4"], ["grass2"], ["grass3"], ["grass1"], ["grass2"], ["grass4"], ["grass3"], ["grass1"], ["grass2"], ["grass2"], ["grass2"], ["grass1", "bush1"] ],
    [ ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1"], ["grass1", "bush1" ] ]
  ]
}


Maps["map2"] = {
  _id: "map2",
  name: "Map 2",
  monsters: [],
  users: [],
  tilesUrl: "/images/pokemon.png",
  tiles : {
    "grass1" : {
      position: [ 0, 0 ],
      sturdy: false
    }, 
    "grass2" : {
      position: [ 1, 0 ],
      sturdy: false
    }, 
    "grass3" : {
      position: [ 2, 0 ],
      sturdy: false
    }, 
    "grass4" : {
      position: [ 3, 0 ],
      sturdy: false 
    },
    "flower" : {
      position: [ 0, 1 ],
      sturdy: false
    },
    "bush1" : {
      position: [ 0, 2 ],
      sturdy: true,
    },
    "bush2" : {
      position: [ 1, 2 ],
      sturdy: true,
    }
  },
  actions : [],
  portals: ["portal_1"],
  map : []
}
var t = ['grass1', 'grass2', 'grass3', 'grass4', 'bush1', 'bush2' ]
for (var j=0; j<(600/16); j++) {
  Maps["map2"]['map'].push([]);
  for (var i=0; i<(600/16); i++) {
    Maps["map2"]['map'][j].push([ t[Math.round(Math.random()*(5))]]);
  }
}

Maps["map2"]['map'][10][10].push("flower");

Maps["nyanSpace"] = {
  name: "Nyan Space",
  tilesUrl: "/images/nyan_space.png",
  tiles: {
  },
  actions: [],
  portals: ["nyan2world"],
  map: []
}
for (var i = 0; i < 67; i++) {
  Maps["nyanSpace"]["map"].push([]);
  for (var j = 0; j < 120; j++) {
    if ((i + j) % 7 === 0) {
      Maps["nyanSpace"]["map"][i].push(["nyanStar"]);
    }
    else {
      Maps["nyanSpace"]["map"][i].push(["nyanEmpty"]);
    }
  }
}

Portals["portal_1"] = {
	active: true,
	map: "map2",
	position : {
		x: 2,
		y: 5
	},
	to: "portal_2"
}

Portals["portal_2"] = {
	active: true,
	map: "TuaWGDmLsjnpzFEPZ",
	position : {
		x: 10,
		y: 10
	},
	to: "portal_1"
}

Models = {
	Portals: Portals,
	Units: Units,
	Maps: Maps
}
