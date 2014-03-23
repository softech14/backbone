define([
  'jquery',
  'underscore',
  'backbone',
  'models/users'
], function($, _, Backbone, usersModel){
  var usersCollection = Backbone.Collection.extend({
    model: usersModel,
    url: 'data/users.json',
  fetch: function(options) {
      var o = $.extend(true, {}, this.url, options);
      return Backbone.Collection.prototype.fetch.call(this, o);
	},
	
	
	parse: function(res) {        
	  console.log('parse param');console.log(res);
	  return res;
	}

  });

  return usersCollection;
});
