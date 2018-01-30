Template.newsList.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/news', {
  name: 'newsList',
  title: 'Terms and Conditions',
  action: function() {
    BlazeLayout.render('main', {main: 'newsList'});
  },
});
