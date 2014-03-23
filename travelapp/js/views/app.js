define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'events',
  'text!templates/layout.html'
], function($, _, Backbone, Vm, Events, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: '.container',
    render: function () {
      var that = this;
      $(this.el).html(layoutTemplate);
      
      require(['views/travel/page'], function (TravelPage) {
    	  
          var travelPage = new TravelPage();//Vm.create(that, 'TravelPage', TravelPage);
          travelPage.render();
        });
      
      /*require(['views/header/menu'], function (HeaderMenuView) {
        var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });*/
      /*require(['views/footer/footer'], function (FooterView) {
        // Pass the appView down into the footer so we can render the visualisation
        var footerView = Vm.create(that, 'FooterView', FooterView, {appView: that});
        footerView.render();
      });*/
    
    }
  });
  return AppView;
});
