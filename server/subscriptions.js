Meteor.methods({
  getSelf : function() {
    return Users.findOne( Meteor.userId() );
  },

  getCharacters : function() {
    return Characters.find({ ownerId: Meteor.userId() }).fetch();
  },

  pickCharacter: function(selection) {
    var character;
    if( !Meteor.userId() ) {
      throw new Meteor.Error(403, "Must be logged in to play");
    } 
    if ( selection['characterId'] ) {
      character = Characters.findOne( selection['characterId'] );
      if ( ( character.ownerId == Meteor.userId() ) ) {
        if ( character.loggedIn ) {
          throw new Meteor.Error(403, "The Character is already logged in");
        } else {
          Characters.update( {_id: characterId}, { $set: { loggedIn: true } } );
          Users.update( {_id: Meteor.userId() }, { $set: { currentCharacter: characterId } } );
        }
      } else {
        throw new Meteor.Error(403, 'Cannot select a character that does not belong to you');
      } 
    } else {
      if ( !selection['name'] ) {
        throw new Meteor.Error(500, 'Must give a name for your new character');
      } else {
        characterTemplate = Gamezar.Models.new("character");
        characterTemplate[ownerId] = Meteor.userId();
        characterTemplate[name] = selection['name'];
        var charId = Characters.insert( characterTemplate );
        character = Characters.findOne(charId);
        Users.update( {_id: Meteor.userId(), { $set: { currentCharacter: charId } } } );
      }
    }
    map = Maps.findOne({ _id: character['currentMap'] });
    return { 
      'character' : character, 
      'map' : map 
    }
  },

  subscribeToMap: function(mapId) {
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

        characterHandle = Characters.find({_id: session.get('character')._id, ownerId: Meteor.userId() } ).observe({
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
  },

  commitAction: function(action, params) {
    user = Meteor.users.findOne(Meteor.userId());
    character = Characters.findOne(user['currentCharacter']);
    if (Actions[action]) {
      return Actions[action](character, params);
    } else {
      throw new Meteor.Error(403, "Action unrecognized");
    }
  }

});