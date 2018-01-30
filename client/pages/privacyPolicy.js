Template.privacyPolicy.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/privacy-policy', {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  action: function() {
    BlazeLayout.render('main', {main: 'privacyPolicy'});
  },
});
