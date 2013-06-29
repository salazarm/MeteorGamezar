if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {

  if ( session.get('character') ) {
    Meteor.publish('currentMap', function() {
      var sub = this,
        actionHandles = [],
        mapHandles = []

      function publishMap(map) {
        var actions = Actions.find({mapID: map._id});
        actionHandles = actions.observer({
          added: function(id, action) {
            sub.added('action', id, action);
          }
        });
      }




    });

  }

  });
}