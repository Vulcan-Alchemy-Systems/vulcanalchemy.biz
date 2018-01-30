Template.careers.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/careers', {
  name: 'careers',
  title: 'Sitemap',
  action: function() {
    BlazeLayout.render('main', {main: 'careers'});
  },
});
