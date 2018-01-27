Template.orderList.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

// events
Template.orderList.events({
  'click .checkout-btn': function(event) {
    FlowRouter.go('cartCheckout');
  },
});

// route
FlowRouter.route('/account/orders', {
  name: 'orderList',
  title: 'Orders',
  action: function() {
    BlazeLayout.render('main', {main: 'orderList'});
  },
});
