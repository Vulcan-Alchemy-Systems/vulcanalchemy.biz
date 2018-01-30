Template.categoryWidget.onCreated(function() {
  // auto run
  this.autorun(() => {
    this.subscribe('categoryApplication');
  });
});

Template.categoryWidget.rendered = function(){

};

Template.categoryWidget.helpers({
  categories: function() {
    var categories = category.find({}).fetch();
    return categories;
  }
});
