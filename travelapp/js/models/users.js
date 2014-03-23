define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var usersModel = Backbone.Model.extend({
    defaults: {
      id: 1,	
      name : 'user',
      age : '30'
    },
    initialize: function(){
    }

  });
  return usersModel;

});
