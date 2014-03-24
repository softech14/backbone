define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var CityModel = Backbone.Model.extend({
    defaults: {
    	name : "Hyderabad"
    },
    initialize: function(){
    }

  });
  return CityModel;

});
