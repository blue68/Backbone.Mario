describe("pre-compiled template rendering", function(){
  "use strict";

  describe("when rendering views with pre-compiled template functions", function(){
    var templateFunc = _.template("<div>pre-compiled</div>");

    var View = Backbone.Mario.ItemView.extend({
      template: templateFunc
    });

    var view;
    var renderResult;
    var deferredDone;

    beforeEach(function(){

      // store and then replace the render method used by Marionette
      this.render = Backbone.Mario.Renderer.render;
      Backbone.Mario.Renderer.render = function(template, data){
        return template(data);
      };

      view = new View();
      view.render();
    });

    afterEach(function(){
      // restore the render method used by Marionette
      Backbone.Mario.Renderer.render = this.render;
    });

    it("should render the pre-compiled template", function(){
      expect(view.$el).toHaveText("pre-compiled");
    });

  });

});
