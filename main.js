if (Meteor.isClient) {

}


if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}


Meteor.autorun(function() {
  if ( Meteor.userId() && !Session.get('character') ) {
    Meteor.call("pickCharacter", function(err, res){
      if (err) {
        console.log(err);
      } else {
        Session.set('character', res);
      }
    });
  } else
  if ( Meteor.userId() && Session.get('character') ) {
    if( Characters.findOne( Session.get('character')._id )['loggedIn'] ) {
      console.log('Character already being played');
      alert('This character is already logged in');
    } else {
      Meteor.call('subscripeToMap');
    }
  }

});

