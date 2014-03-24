define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var ResultModel = Backbone.Model.extend({
    defaults: {
            trainName: "train1",
            trainNumber: "12786",
            startDate  : "12-02-2014",
            startTime  : "18:15",
            endDate  : "13-02-2014",
            endTime  : "07:15",
            from : "bangalore",
            to : "chennai"
    },
    initialize: function(){
    }

  });
  return ResultModel;

});
