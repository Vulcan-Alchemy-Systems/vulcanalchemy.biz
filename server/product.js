// application category
Meteor.publish("allProducts", function() {
  return product.find();
});

// Single Category
Meteor.publish("productSingle", function(productId) {
  return product.find({_id: productId});
});
