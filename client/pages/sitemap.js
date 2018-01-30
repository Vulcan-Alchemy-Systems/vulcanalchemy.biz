Template.sitemap.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.route('/sitemap', {
  name: 'sitemap',
  title: 'Sitemap',
  action: function() {
    BlazeLayout.render('main', {main: 'sitemap'});
  },
});
