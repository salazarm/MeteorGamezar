Meteor.methods({

  logoutCharacter: function() {
    user = Meteor.user();
    if ( user.currentCharacter ) {
      character = Units.findOne( user.currentCharacter );
      Maps.update({ _id : character.world }, { $pull : { users : { _id : character._id } } } );
      Units.update({ _id: user.currentCharacter }, { $set : {loggedIn: false } });
      Meteor.users.update({ _id: user._id}, { $set : { currentCharacter: null } });
    }
  },

  getSelf : function() {
    if (Meteor.userId())
      return Users.findOne( Meteor.userId() );
    return null
  },

  /*
    Get my characters
  */
  getCharacters : function() {
    return Units.find({ ownerId: Meteor.userId() }).fetch();
  },

  /*
    Picking a character returns both the character and the map that
    the character is in.
  */
  pickCharacter: function(selection) {
    var character;
    if( !Meteor.userId() ) {
      throw new Meteor.Error(403, "Must be logged in to play");
    } 
    if ( selection['characterId'] ) {
      character = Units.findOne( selection['characterId'] );
      if ( ( character.ownerId == Meteor.userId() ) ) {
        if ( character.loggedIn ) {
          throw new Meteor.Error(403, "The Character is already logged in");
        } else {
          Units.update( {_id: selection['characterId']}, { $set: { loggedIn: true } } );
          Meteor.users.update( {_id: Meteor.userId() }, { $set: { currentCharacter: selection['characterId'] } } );
        }
      } else {
        throw new Meteor.Error(403, 'Cannot select a character that does not belong to you');
      } 
    } else {
      if ( !selection['name'] ) {
        throw new Meteor.Error(500, 'Must give a name for your new character');
      } else {

        characterTemplate = Gamezar.Models.new("character");
        _.extend(characterTemplate, Models['Units']['base']);
        characterTemplate['ownerId'] = Meteor.userId();
        characterTemplate['name'] = selection['name'];

        var charId = Units.insert( characterTemplate );
        character = Units.findOne(charId) ;

        Units.update( { _id: Meteor.userId() }, { $set : { currentCharacter: charId } } );
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { currentCharacter: charId } } );
      }
    }


    Maps.update( {_id : character.world}, { $push : { users : Units.findOne( Meteor.user().currentCharacter ) } });
    map = Maps.findOne({ _id:  character.world });

    return { 
      'character' : character, 
      'map' : map 
    }
  },

  subscribeToMap: function(mapId) {
    user = Meteor.users.findOne(Meteor.userId());
    if ( user['currentCharacter'] ) {
      var currentMap = Maps.findOne(Units.findOne( user['currentCharacter']._id)['currentMap']);
      /*
        Validations on whether character can switch to this map go here.
      */
      Session.set("currentMapId", currentMapId );
    } else {
      /*
        Temporary solution, go back to character selection screen instead.
      */ 
      throw new Meteor.Error(403, "Character must be selected to play!");
    }
  },

  commitAction: function(action, params) {
    user = Meteor.users.findOne(Meteor.userId());
    character = Units.findOne(user['currentCharacter']);
    if (UnitActions[action]) {
      return UnitActions[action](character, params);
    } else {
      throw new Meteor.Error(403, "Action unrecognized");
    }
  },

  takePortal: function(portal) {
    user = Meteor.users.findOne(Meteor.userId());
    Units.update({_id: user.currentCharacter},{ $set : { world : Models['Portals'][portal]['map'] } });
    return Maps.findOne(  Models['Portals'][portal]['map'] );
  }
});