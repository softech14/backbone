define([
  'jquery',
  'underscore',
  'backbone',
  'models/result'
], function($, _, Backbone, ResultModel){
  var ResultCollection = Backbone.Collection.extend({
    model: ResultModel,
    url: 'data/results.json',
  fetch: function(options) {
      var o = $.extend(true, {}, this.url, options);
      return Backbone.Collection.prototype.fetch.call(this, o);
	},
	
	
	parse: function(res) {        
	  return res;
	}

  });

  return ResultCollection;
});
