

Template.index.rendered = function() {
  jQuery('.mega-menu-category').slideDown();
}

FlowRouter.route('/', {
  name: 'index',
  title: 'Home',
  action: function() {
    BlazeLayout.render('main', {main: 'index'});
  },
});
