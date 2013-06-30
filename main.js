if (Meteor.isClient) {
 
}


if (Meteor.isServer) {
  Meteor.startup(function() {  
    Gamezar.build();
    Gamezar.Models.setNewModel('character', 'poke_professor', 'Units')
    if (Maps.find().fetch().length == 0) {
      Maps.insert(Gamezar.Models.get('Maps', 'world'));
    	console.log("Put the following in the base blueprint's world field: "+ Maps.find().fetch()[0]['_id']);
    }
    if (Maps.find().fetch().length == 1) {
    	Maps.insert(Gamezar.Models.get("Maps", 'map2'));
    }
  });
}