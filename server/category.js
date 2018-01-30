// application category
Meteor.publish("categoryApplication", function() {
  return category.find();
});

// Single Category
Meteor.publish("categorySingle", function(categoryId) {
  return category.find({_id: categoryId});
});
