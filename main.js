if (Meteor.isClient) {

}


if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}


Meteor.autorun(function() {
  if  ( Meteor.userId() ) {
    user = Users.findOne({_id: Meteor.userId() });
    if ( !user['current_character'] ) {
      Meteor.call("pickCharacter", function(err, res){
        if (err) {
          console.log(err);
        } else {
          Session.set('character', res);
        }
      });
    } else {
      if( Characters.findOne( user['current_character'] )['loggedIn'] ) {
        console.log('Character already being played');
        alert('This character is already logged in');
      } else {
        Meteor.call('subscripeToMap');
      }
    }
  }
});

