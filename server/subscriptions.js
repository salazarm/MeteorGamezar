Meteor.methods({

  pickCharacter: function(character_id) {
    if(!Meteor.userId()) {
      throw new Meteor.Error(403, "Must be logged in to play");
      return;
    } 

    if ( character_id ) {
      character = Characters.findOne( character_id );
      if ( (character.owner_id == Meteor.userId() ) ) {
        if ( character.loggedIn ) {
          throw new Meteor.Error(403, "The Character is already logged in");
        } else {
          Characters.update( {_id: character_id}, { $set: { loggedIn: true } } );
        }
      } else {
        throw new Meteor.Error(403, 'Cannot select a character that does not belong to you');
      } 
    } else {
      characterTemplate = Gamezar.Models[Gamezar.Models.NEW_CHARACTER]
      
    }

  },

  subscribeToMap: function() {
    if ( session.get('character') ) {
      Meteor.publish('currentMap', function() {
        var sub = this,
          actionHandle = null,
          chractrHandle = null

        function publishMap(map) {
          var actions = Actions.find({mapID: map._id});
          actionHandle = actions.observer({
            added: function(id, action) {
              sub.added('action', id, action);
            }
          });
        }

        characterHandle = Characters.find({_id: session.get('character')._id, owner_id: Meteor.userId() } ).observe({
          changed: function(collection, id, fields) {
            if ( fields['loggedIn'] ) {
              Meteor.call("characterLogout");
            }
          }
        });

      });
    } else {
      console.log("Error: No character logged in!");
      alert("Error: No character selected!");
      /*
        Temporary solution, go back to character selection screen instead.
      */ 
      throw new Meteor.Error(403, "Character must be selected to play!");
    }
}

});