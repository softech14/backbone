define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var ResultView = Backbone.View.extend({
    render: function () {
    	var that = this;
         var resultsCollection = this.collection;
         
         if($.isEmptyObject(resultsCollection)){
        	 
        	 $('.error').text('No records found.').fadeIn(100, function(){
     			$(this).fadeOut(2000);
     			$(that.el).html('');
     			
     		});
        	 return;
         }
       	 var template = _.template($('#results-list-template').html(), {results: resultsCollection});
         $(this.el).html(template);  
    }
  });

  return ResultView;
});
