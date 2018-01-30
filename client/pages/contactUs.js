Template.contactUs.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/contact-us', {
  name: 'contactUs',
  title: 'Contact Us',
  action: function() {
    BlazeLayout.render('main', {main: 'contactUs'});
  },
});
