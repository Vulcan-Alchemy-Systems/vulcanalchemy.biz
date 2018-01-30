Template.categoryNav.onCreated(function() {
  // auto run
  this.autorun(() => {
    this.subscribe('categoryApplication');
  });
});

Template.categoryNav.rendered = function(){

};

Template.categoryNav.helpers({
  categories: function() {
    var categories = category.find({}).fetch();
    return categories;
  }
});
