Template.returnPolicy.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/return-policy', {
  name: 'returnPolicy',
  title: 'Return Policy',
  action: function() {
    BlazeLayout.render('main', {main: 'returnPolicy'});
  },
});
