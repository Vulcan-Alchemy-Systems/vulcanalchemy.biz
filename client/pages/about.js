Template.about.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

FlowRouter.route('/about', {
  name: 'about',
  title: 'About Us',
  action: function() {
    BlazeLayout.render('main', {main: 'about'});
  },
});
