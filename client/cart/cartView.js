Template.cartView.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

// events
Template.cartView.events({
  'click .checkout-btn': function(event) {
    FlowRouter.go('cartCheckout');
  },
});

// route
FlowRouter.route('/shop/cart', {
  name: 'cartView',
  title: 'Shoping Cart',
  action: function() {
    BlazeLayout.render('main', {main: 'cartView'});
  },
});
