Template.shippingPolicy.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/shipping-policy', {
  name: 'shippingPolicy',
  title: 'Shipping Policy',
  action: function() {
    BlazeLayout.render('main', {main: 'shippingPolicy'});
  },
});
