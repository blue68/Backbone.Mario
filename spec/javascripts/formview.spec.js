/*globals Marionette, beforeEach, $, require, jasmine, describe, it, expect, loadFixtures, Backbone*/

describe("FormView", function () {
  "use strict";
  var stopSubmit,
      readySpy,
      submitSpy,
      submitFailSpy,
      validationErrorSpy;

  beforeEach(function () {
    loadFixtures("formTemplate.html");
    stopSubmit = function(e) {
      e.preventDefault();
      return false;
    };

    readySpy = jasmine.createSpy('onReady');
    submitSpy = jasmine.createSpy('onSubmit').andCallFake(stopSubmit);
    submitFailSpy = jasmine.createSpy('onSubmitFail');
    validationErrorSpy = jasmine.createSpy('onValidationFail');
  });

  it("Should create a base model from data and fields", function () {
    var fieldsHash = {
        fname : {
          el : ".fname"
        }
      },
      dataHash = {
        fname : 'test'
      };

    var form = new (Mario.FormView.extend({
      template : "#form-template",
      data     : dataHash,
      fields   : fieldsHash
    }))();
    form.render();

    expect(form.model.get('fname')).toBe(dataHash.fname);
  });
  
  it("Should set a new model to form", function() {
  	  var fieldsHash = {
        fname : {
          el : ".fname"
        }
      };
  	  var model = new Backbone.Model({
        fname : 'test'
      });
     
      var form = new (Mario.FormView.extend({
	      template : "#form-template",
	      fields   : fieldsHash
	    }))();
	    form.render();
	    form.reconfig({
	    	model : model,
	    	fields : fieldsHash
	    });
	    
	    expect(form.model.get('fname')).toBe(model.get('fname'));
  });

  it("Should populate fields from model", function () {
    var fieldsHash = {
        fname : {
          el : ".fname"
        }
      };
    var model = new Backbone.Model();
    model.set('fname','foo');

    var form = new (Mario.FormView.extend({
      template : "#form-template",
      fields   : fieldsHash,
      model    : model
    }))();
    form.render();

    expect(form.$('.fname').val()).toEqual(model.get('fname'));
  });
  
  it("Should reconfig model and fields to a model", function() {
  	var fieldsHash = {
        fname : {
          el : ".fname"
        }
      };
    var model = new Backbone.Model();
    model.set('fname','foo');

    var form = new (Mario.FormView.extend({
      template : "#form-template"
    }))();
    form.render();
    
    form.reconfig({
    	fields : fieldsHash,
    	model : model
    });

    expect(form.$('.fname').val()).toEqual(model.get('fname'));
  });

  it("Should Call onSubmit upon form submit click", function () {
    var form = new (Mario.FormView.extend({
      template : "#form-template",
      onSubmit : submitSpy
    }))();
    form.render();
    form.$('input[type=submit]').click();

    expect(submitSpy).toHaveBeenCalled();
  });

  it("Should Call OnSubmit upon formview.submit()", function () {
    var form = new (Mario.FormView.extend({
      template : "#form-template",
      onSubmit : submitSpy
    }))();
    form.render();
    form.submit();

    expect(submitSpy).toHaveBeenCalled();
  });

  it("Should call external submit event upon formview.submit()", function () {
    var form = new (Mario.FormView.extend({
      template : "#form-template",
      fields   : {
        fname : {
          el : ".fname"
        }
      }
    }))();
    form.render();
    form.form.submit(submitSpy);
    form.submit();

    expect(submitSpy).toHaveBeenCalled();
  });

  it("Should Call OnSubmit upon actual form submission", function () {
    var form = new (Mario.FormView.extend({
      template : "#form-template",
      onSubmit : submitSpy
    }))();
    form.render();
    form.form.submit();

    expect(submitSpy).toHaveBeenCalled();
  });

  it("Should call onSubmitError when a field does not pass validation", function () {
    var form = new (Mario.FormView.extend({
      template : "#form-template",
      fields : {
        fname : {
          el       : '.fname',
          required : true
        }
      },
      onSubmit : submitSpy,
      onSubmitFail : submitFailSpy
    }))();
    form.render();
    form.submit();

    expect(submitFailSpy).toHaveBeenCalled();
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it("Should call onSubmitFail but not onSubmit and not actually submit when a field does not pass validation", function () {
    var form = new (Mario.FormView.extend({
      template : "#form-template",
      fields : {
        fname : {
          el       : '.fname',
          required : true
        }
      },
      onSubmit : submitSpy,
      onSubmitFail : submitFailSpy
    }))();
    form.render();
    form.form.on('submit',submitSpy);
    form.submit();

    expect(submitFailSpy).toHaveBeenCalledWith({
      fname : {
        el : '.fname',
        error : ['This field is required'],
        field : 'fname'
      }
    });
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('Validating on input events',function(){
    // Trying to generalize event testing.
    function createEventSpec(event) {
      return function(){
        var form = new (Backbone.Mario.FormView.extend({
          template : "#form-template",
          fields   : {
            fname : {
              el       : ".fname",
              required : true,
              validateOn : event
            }
          },
          onValidationFail : validationErrorSpy,
          onSubmitFail : submitFailSpy,
          onSubmit : submitSpy
        }))();

        form.render();

        form.$('.fname').trigger(event);

        expect(validationErrorSpy).toHaveBeenCalledWith({
          el : '.fname',
          error : ['This field is required'],
          field : 'fname'
        });
        expect(submitFailSpy).not.toHaveBeenCalled();
        expect(submitSpy).not.toHaveBeenCalled();
      };
    }

    it("Should call field errors on field blur", createEventSpec('blur'));
    it("Should call field errors on field keyup", createEventSpec('keyup'));
    it("Should call field errors on field keydown", createEventSpec('keydown'));
    it("Should call field errors on field change", createEventSpec('change'));
  });

  it("Should Call OnReady when form is attached and ready", function () {
    var form = new (Mario.FormView.extend({
      template : "#form-template",
      onReady : readySpy
    }))();

    form.render();
    expect(readySpy).toHaveBeenCalled();
  });

});
