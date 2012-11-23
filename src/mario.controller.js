// Mario Controller
// ---------------------
//
// A multi-purpose object to use as a controller for
// modules and routers, and as a mediator for workflow
// and coordination of other objects, views, and more.
Mario.Controller = function(options){
  this.triggerMethod = Mario.triggerMethod;
  this.options = options || {};

  Mario.addEventBinder(this);

  if (_.isFunction(this.initialize)){
    this.initialize(this.options);
  }
};

Mario.Controller.extend = Mario.extend;

// Controller Methods
// --------------

// Ensure it can trigger events with Backbone.Events
_.extend(Mario.Controller.prototype, Backbone.Events, {
  close: function(){
    this.unbindAll();
    this.triggerMethod("close");
    this.unbind();
  }
});
