define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/travel/page.html',
  'collections/users',
  'collections/cities',
  'collections/results'
], function($, _, Backbone, travelTemplate, usersCollection, CitiesCollection, ResultCollection){
  var TravelPage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
    	this.usersCollection =  new usersCollection();
    	this.citiesCollection = new CitiesCollection();
    },
    render: function () {
      var that = this;
      $(this.el).html(travelTemplate);

      var userCollection = this.usersCollection.fetch();
      $.when(userCollection).done(function() {
    	  var template = _.template($('#user-list-template').html(), {users: that.usersCollection.toJSON()});
          $('#user').html(template);  
      });

      var citiesCollection = this.citiesCollection.fetch();
      $.when(citiesCollection).done(function() {
    	  var template = _.template($('#cities-list-template').html(), {cities: that.citiesCollection.toJSON()});
          $('#cities').html(template);  
      });
            
    },
    events: {
    	'change #user' : 'selectUser',
    	'keyup #user' : 'selectUser',
    	'click .travelForm .submit' : 'submitForm'
    },
    submitForm : function(){
    	
    	var that = this;
    	this.resultCollection = new ResultCollection();
    	
    	var formObj = $('.travelForm'), formJSON = {};
    	if(formObj.find('#from').val().length > 0){
    		formJSON['from'] = formObj.find('#from').val();
    	}
    	
    	if(formObj.find('#to').val().length > 0){
    		formJSON['to'] = formObj.find('#to').val();
    	}
    	
    	if(formObj.find('#date').val().length > 0){
    		formJSON['startDate'] = formObj.find('#date').val();
    	}
    	if($.isEmptyObject(formJSON)){
    		$('.error').text('Please enter search criteria.').fadeIn(100, function(){
    			$(this).fadeOut(2000, function(){
    				formObj.find('#from').focus();
    			});
    			
    		});
    		
    		return;
    	}
    	var resultCollection = this.resultCollection.fetch();
        $.when(resultCollection).done(function() {
        	
        	var filtered = that.resultCollection.where(formJSON);
        	
        	require(['views/travel/resultsView'], function (ResultView) {
                var resultView = new ResultView({collection : filtered, el: '.travelResults'});
                resultView.render();
              });
        });
        
        

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
