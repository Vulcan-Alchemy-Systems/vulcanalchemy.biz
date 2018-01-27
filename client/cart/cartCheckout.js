Template.cartCheckout.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}


// route
FlowRouter.route('/shop/cart/checkout', {
  name: 'cartCheckout',
  title: 'Shoping Cart',
  action: function() {
    BlazeLayout.render('main', {main: 'cartCheckout'});
  },
});
