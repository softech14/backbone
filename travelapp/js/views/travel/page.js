define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/travel/page.html'
], function($, _, Backbone, travelTemplate){
  var TravelPage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
    },
    render: function () {
      $(this.el).html(travelTemplate);
      $('a[href="' + window.location.hash + '"]').addClass('active');
    },
    events: {
      'click a': 'highlightMenuItem'
    },
    highlightMenuItem: function (ev) {
      $('.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  });

  return TravelPage;
});
