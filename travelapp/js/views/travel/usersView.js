define([
  'jquery',
  'underscore',
  'backbone',
  'collections/users',
  'models/users'
], function($, _, Backbone, usersCollection, usersModel){
  var usersView = Backbone.View.extend({
    el: '#user',
    initialize: function () {
    	this.model =  new usersCollection();
    },
    render: function () {
    	 var that = this;
         var userCollection = this.model.fetch();
         
         $.when(userCollection).done(function() {
       	  var template = _.template($('#user-list-template').html(), {users: that.model.toJSON()});
             $(that.el).html(template);  
         });
    },
    events: {
    	'change' : 'selectOption'
    },
    selectOption : function(e){
    	alert(e.target);
    }
  });

  return usersView;
});
