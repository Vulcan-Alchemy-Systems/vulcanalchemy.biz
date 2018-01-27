Template.orderView.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

// events
Template.orderView.events({
  'click .checkout-btn': function(event) {
    FlowRouter.go('cartCheckout');
  },
});

// route
FlowRouter.route('/account/orders/:id', {
  name: 'orderView',
  title: 'View',
  action: function() {
    BlazeLayout.render('main', {main: 'orderView'});
  },
});
