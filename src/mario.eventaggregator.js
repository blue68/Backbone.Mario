// Event Aggregator
// ----------------
// A pub-sub object that can be used to decouple various parts
// of an application through event-driven architecture.
//
// Extends [Backbone.Wreqr.EventAggregator](https://github.com/marionettejs/backbone.wreqr)
// and mixes in an EventBinder from [Backbone.EventBinder](https://github.com/marionettejs/backbone.eventbinder).
Mario.EventAggregator = Backbone.Wreqr.EventAggregator.extend({

  constructor: function(){
    Mario.addEventBinder(this);
    Backbone.Wreqr.EventAggregator.prototype.constructor.apply(this, arguments);
  }

});
