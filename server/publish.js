Meteor.publish('currentMap', function() {
  currentMapId = Session.get("currentMapId");
  var sub = this;

  unitsHandle = Units.find({ currentMap: currentMapId }).observe({
    added : function(id, unit) {
      console.log("Meteor.publish(currentMap): Unit added");
      sub.added('units', id, unit);
    },
    changed : function(id, unit) {
      console.log("Meteor.publish(currentMap): Unit changed");
      sub.changed('units', id, unit);
    }
  });

  eventsHandle = Events.find({ map: currentMapId }).observe({
    changed : function(id, unit) {
      console.log("Meteor.publish(currentMap): Event changed (activated)");
      sub.changed('units', id, unit);
    }
  });

  actionsHandle = Actions.find({ map: currentMapId }).observe({
    added : function(id, action) {
      console.log("Meteor.publish(currentMap): Action added");
      sub.added('actions', id, action)
    }
  });

  selfHandle = Meteor.users.find({ _id: Meteor.userId() }).observe({
    changed : function(id, self) {
      if (self.currentMapId != currentMapId) {
        sub.stop();
      }
    }
  });

  sub.onStop(function() {
    actionsHandle.stop();
    eventsHandle.stop();
    unitsHandle.stop();
    selfHandle.stop();
  });

  map = Maps.findOne( currentMap );
  units = Units.find({ map: currentMapId });
  actions = Actions.find({ map: currentMapId });
  events = Events.find({ map: currentMapId });

  map['units'] = units;
  map['actions'] = actions;
  map['events'] = events;

  sub.ready();
  
  return map;
});