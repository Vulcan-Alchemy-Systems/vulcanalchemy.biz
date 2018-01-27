Template.blogList.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

// events
Template.blogList.events({

});

// route
FlowRouter.route('/blog', {
  name: 'blogList',
  title: 'Blogs',
  action: function() {
    BlazeLayout.render('main', {main: 'blogList'});
  },
});
