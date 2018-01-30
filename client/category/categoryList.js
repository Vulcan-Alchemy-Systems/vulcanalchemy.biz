Template.categoryList.onCreated(function() {
  // auto run
  this.autorun(() => {
    this.subscribe('allProducts');
  });
});

Template.categoryList.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

Template.categoryList.helpers({
  products: function() {
    var products = product.find({}).fetch();
    console.log(products);
    return products;
  }
});


FlowRouter.route('/shop/:category/:subCategory', {
  name: 'categoryList',
  title: 'Shop',
  action: function() {
    BlazeLayout.render('main', {main: 'categoryList'});
  },
});
