describe("closing views", function(){
  "use strict";

  describe("when closing a Marionette.View multiple times", function(){
    var View = Mario.View.extend({});
    var view;

    beforeEach(function(){
      view = new View();
      view.onBeforeClose = jasmine.createSpy("before close");

      view.close();
      view.close();
    });

    it("should only run the closing code once", function(){
      expect(view.onBeforeClose).toHaveBeenCalled();
    });

    it("should mark the view as closed", function(){
      expect(view.isClosed).toBe(true);
    });
  });

  describe("when closing a Marionette.ItemView multiple times", function(){
    var View = Mario.ItemView.extend({});
    var view;

    beforeEach(function(){
      view = new View();
      view.onBeforeClose = jasmine.createSpy("before close");

      view.close();
      view.close();
    });

    it("should only run the closing code once", function(){
      expect(view.onBeforeClose).toHaveBeenCalled();
    });

    it("should mark the view as closed", function(){
      expect(view.isClosed).toBe(true);
    });
  });

  describe("when rendering a Marionette.ItemView that was previously closed", function(){
    var View = Mario.ItemView.extend({
      template: function(){}
    });
    var view;

    beforeEach(function(){
      view = new View();
      view.onBeforeClose = jasmine.createSpy("before close");

      view.close();
      view.render();
    });

    it("should mark the view as not closed", function(){
      expect(view.isClosed).toBe(false);
    });
  });

  describe("when closing a Marionette.CollectionView multiple times", function(){
    var View = Mario.CollectionView.extend({});
    var view;

    beforeEach(function(){
      view = new View();
      view.onBeforeClose = jasmine.createSpy("before close");

      view.close();
      view.close();
    });

    it("should only run the closing code once", function(){
      expect(view.onBeforeClose).toHaveBeenCalled();
    });

    it("should mark the view as closed", function(){
      expect(view.isClosed).toBe(true);
    });
  });

  describe("when rendering a Marionette.CollectionView that was previously closed", function(){
    var ItemView = Mario.ItemView.extend({
      template: function(){}
    });

    var CollectionView = Mario.CollectionView.extend({
      itemView: ItemView
    });
    var view;

    beforeEach(function(){
      view = new CollectionView();
      view.onBeforeClose = jasmine.createSpy("before close");

      view.close();
      view.render();
    });

    it("should mark the view as not closed", function(){
      expect(view.isClosed).toBe(false);
    });
  });

  describe("when closing a Marionette.CompositeView multiple times", function(){
    var View = Mario.CompositeView.extend({});
    var view;

    beforeEach(function(){
      view = new View();
      view.onBeforeClose = jasmine.createSpy("before close");

      view.close();
      view.close();
    });

    it("should only run the closing code once", function(){
      expect(view.onBeforeClose).toHaveBeenCalled();
    });

    it("should mark the view as closed", function(){
      expect(view.isClosed).toBe(true);
    });
  });

  describe("when rendering a Marionette.CompositeView that was previously closed", function(){
    var ItemView = Mario.ItemView.extend({
      template: function(){}
    });

    var CompositeView = Mario.CompositeView.extend({
      template: function(){},
      itemView: ItemView
    });
    var view;

    beforeEach(function(){
      view = new CompositeView();
      view.onBeforeClose = jasmine.createSpy("before close");

      view.close();
      view.render();
    });

    it("should mark the view as not closed", function(){
      expect(view.isClosed).toBe(false);
    });
  });

});
