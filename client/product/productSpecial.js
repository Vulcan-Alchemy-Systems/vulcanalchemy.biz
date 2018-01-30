Template.productSpecial.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/shop/specials', {
  name: 'productSpecial',
  title: 'Specials',
  action: function() {
    BlazeLayout.render('main', {main: 'productSpecial'});
  },
});
