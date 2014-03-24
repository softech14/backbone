define([
  'jquery',
  'underscore',
  'backbone',
  'models/cities'
], function($, _, Backbone, CityModel){
  var CitiesCollection = Backbone.Collection.extend({
    model: CityModel,
    url: 'data/cities.json',
  fetch: function(options) {
      var o = $.extend(true, {}, this.url, options);
      return Backbone.Collection.prototype.fetch.call(this, o);
	},
	
	
	parse: function(res) {        
	  return res;
	}

  });

  return CitiesCollection;
});
