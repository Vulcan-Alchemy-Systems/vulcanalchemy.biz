

Template.categoryList.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}


// route
FlowRouter.route('/shop/:category/:subCategory', {
  name: 'categoryList',
  title: 'Shop',
  action: function() {
    BlazeLayout.render('main', {main: 'categoryList'});
  },
});
