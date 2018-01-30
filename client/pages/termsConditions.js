Template.termsConditions.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/terms-conditions', {
  name: 'termsConditions',
  title: 'Terms and Conditions',
  action: function() {
    BlazeLayout.render('main', {main: 'termsConditions'});
  },
});
