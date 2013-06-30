Meteor.publish('currentMap', function() {
  cons
  currentMap = Maps.findOne( Units.findOne(Meteor.users.findOne(this.userId).currentCharacter).world );
  currentMapId = currentMap._id;
  console.log("Got subscriber");
  console.log()
  var sub = this;

  unitsHandle = Units.find({ world: currentMapId }).observe({
    added : function(unit, error) {
      console.log("Meteor.publish(currentMap): Unit added");
      sub.added('Units', unit._id, unit);
    },
    changed : function(unit, error) {
      sub.changed('Units', unit._id, unit);
    },
    removed : function(unit, error) {
      console.log("Meteor.publish(currentMap): Unit Removed");
      sub.removed('Units', unit._id, unit);
    }
  });

  eventsHandle = Events.find({ map: currentMapId }).observe({
    changed : function(id, unit) {
      console.log("Meteor.publish(currentMap): Event changed (activated)");
      sub.changed('Events', id, unit);
    }
  });

  actionsHandle = Actions.find({ map: currentMapId }).observe({
    _suppress_initial: true,
    added : function(action) {
      console.log("Meteor.publish(currentMap): Action added");
      sub.added('Actions', action._id, action)
    }
  });

  selfHandle = Meteor.users.find({ _id: this.userId }).observe({
    changed : function(id, self) {
      console.log("I changed?");
      console.log(currentMapId);
      user = Meteor.users.findOne(this.userId);
      if (!user) {
        sub.stop();
        return;
      }
      character = Units.findOne(user.currentCharacter);
      console.log(character);
      if ( character.world != currentMapId || !character.loggedIn) {
        console.log(currentMapId)
        console.log("stopping....");
        sub.stop();
      }
    }
  });


  sub.onStop(function() {
    console.log("Unsubscribing");
    try {
      actionsHandle.stop();
    } catch(e) {}
    try {
      eventsHandle.stop();
    } catch(e) {}
    try {
      unitsHandle.stop();
    } catch(e) {}
    try {
      selfHandle.stop();
    } catch(e) {}
  });

  map = Maps.findOne( currentMapId );
  units = Units.find({ map: currentMapId });
  actions = Actions.find({ map: currentMapId });
  events = Events.find({ map: currentMapId });

  map['units'] = units;
  map['actions'] = actions;
  map['events'] = events;

  console.log("Subscribe");
  sub.ready();
  
  return map;
});