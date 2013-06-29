var Gamezar =  new (function() {
  models = {}
  animations = {}
  events = {}

  this.Models = {}
  this.Animations = {}
  this.Events = {}
  this.newModel = {}
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
      this.newModel[type] = this.models[real][name];
    } else { 
      this.newModel[type] = this.Models[type][name];
    }
  }

  this.Models.new = function(type) {
    return this.newModel[type];
  }

  return this;
})();