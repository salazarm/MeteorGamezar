Gamezar =  new (function() {
  models = {}
  animations = {}
  events = {}
  newModel = {}

  this.Models = {}
  this.Animations = {}
  this.Events = {}
  this.interfaces = {}

  this.Models.add = function(type, name, model) {
    if ( !models[type] ) {
      models[type] = {}
    }
    if ( models[type][name] ) {
      console.log("Warning: Gamezar model with name "+name+" will be overwritten");
    }
    models[type][name] = model;
  }

  this.Models.get = function(type, name) {
    return models[type][name];
  }

  this.Models.setInterface = function(type, interface) {
    this.interfaces[type] = interface;
  }

  this.Models.instantiate = function(type, document) {
    return this.interfaces[type](document);
  }

  this.Animations.add = function(name, object) {
    animations[name] = object;
  }

  this.Animations.get = function(name) {
    return animations[name];
  }

  this.Events.add = function(name, object) {
    events[name] = object;
  }

  this.Events.get = function(name) {
    return events[name];
  }

  this.Models.setNewModel = function(type, name, real) {
    if (real) {
      newModel[type] = models[real][name];
    } else { 
      newModel[type] = models[type][name];
    }
  }

  this.Models.new = function(type) {
    return newModel[type];
  }

  this.build = function() {
    for (var key in Models ) {
      type = key;
      for (model in Models[type]) {
        Models[type][model]['_name'] = model;
        Gamezar.Models.add(type, model, Models[type][model]) 
      }
    }
  }

  return this;
})();