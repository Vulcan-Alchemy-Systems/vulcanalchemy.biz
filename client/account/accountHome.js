Template.accountHome.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

// events
Template.accountHome.events({
  'click .checkout-btn': function(event) {
    FlowRouter.go('cartCheckout');
  },
});

// route
FlowRouter.route('/account', {
  name: 'accountHome',
  title: 'Account',
  action: function() {
    BlazeLayout.render('main', {main: 'accountHome'});
  },
});
