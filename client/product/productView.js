Template.productView.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}


// route
FlowRouter.route('/shop/:categoryslug/:subCategorySlug/:productSlug', {
  name: 'productView',
  title: 'Product',
  action: function() {
    BlazeLayout.render('main', {main: 'productView'});
  },
});
