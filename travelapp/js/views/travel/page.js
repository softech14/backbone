define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/travel/page.html',
  'collections/users'
], function($, _, Backbone, travelTemplate, usersCollection){
  var TravelPage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
    	this.usersCollection =  new usersCollection();
    },
    render: function () {
      var that = this;
      $(this.el).html(travelTemplate);
      var userCollection = this.usersCollection.fetch();
      
      
      $.when(userCollection).done(function() {
    	  var template = _.template($('#user-list-template').html(), {users: that.usersCollection.toJSON()});
          $('#user').html(template);  
      });
      
      
    },
    events: {
    	'change #user' : 'selectUser',
    	'keyup #user' : 'selectUser'
    },
    selectUser : function(event){
    	var id = $(event.target).find(':selected').val();
    	var selectedUserObj = _.find(this.usersCollection.models, function(user){
    		if(user.id == id){
    			return user;
    		}
    	});
    	if(_.isUndefined(selectedUserObj)){
    		return;
    	}
    	var age = selectedUserObj.get('age');
    	this.selectAge(age);
    },
    selectAge: function(age){
    	
    	$('#age option').each(function(){	
    		var ageRange = $(this).val().split('-');
    		var low = parseInt(ageRange[0]);
    		var high = parseInt(ageRange[1]);
    		
    		if(age >= low && age <= high){
    			$('#age').val($(this).val());
    			return;
    		}
    	});
    }
    
  });

  return TravelPage;
});
