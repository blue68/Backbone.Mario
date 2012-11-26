// Helpers
// -------

// For slicing `arguments` in functions
var slice = Array.prototype.slice;

// Mario.extend
// -----------------

// Borrow the Backbone `extend` method so we can use it as needed
Mario.extend = Backbone.Model.extend;

// Marionette.getOption
// --------------------

// Retrieve an object, function or other value from a target
// object or it's `options`, with `options` taking precedence.
Mario.getOption = function(target, optionName){
  if (!target || !optionName){ return; }
  var value;

  if (target.options && target.options[optionName]){
    value = target.options[optionName];
  } else {
    value = target[optionName];
  }

  return value;
};
