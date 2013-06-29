if (Meteor.isClient) {
  Meteor.autorun(function() {
    if  ( Meteor.userId() ) {
      Meteor.call('getSelf', function(error, self) { 
        if (error) {
          Session.set('user', null);
        }

        /*
          Do something with self;
        */
        if ( !user['currentCharacter'] ) {
          Meteor.call('pickCharacter', function(err, character) {
            if (err) {
              console.log(err);
            } else {
              /*
                Do something with character
              */
            }
          });
        }
      });
    }
  });
}


if (Meteor.isServer) {

  Meteor.startup(function () {

  });

}