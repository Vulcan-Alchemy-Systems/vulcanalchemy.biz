Template.wishlistList.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

// events
Template.wishlistList.events({
  'click .checkout-btn': function(event) {
    FlowRouter.go('cartCheckout');
  },
});

// route
FlowRouter.route('/account/wishlist', {
  name: 'wishlistList',
  title: 'Shoping Cart',
  action: function() {
    BlazeLayout.render('main', {main: 'wishlistList'});
  },
});
