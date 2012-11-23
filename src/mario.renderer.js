// Renderer
// --------

// Render a template with data by passing in the template
// selector and the data to render.
Mario.Renderer = {

  // Render a template with data. The `template` parameter is
  // passed to the `TemplateCache` object to retrieve the
  // template function. Override this method to provide your own
  // custom rendering and template handling for all of Marionette.
  render: function(template, data){
    var templateFunc = typeof template === 'function' ? template : Mario.TemplateCache.get(template);
    var html = templateFunc(data);
    return html;
  }
};