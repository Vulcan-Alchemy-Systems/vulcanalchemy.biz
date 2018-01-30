Template.navSearch.onCreated(function() {
  // auto run
  this.autorun(() => {
    this.subscribe('categoryApplication');
  });
});

Template.navSearch.rendered = function(){

};

Template.navSearch.helpers({
  categories: function() {
    var categories = category.find({}).fetch();
    return categories;
  }
});
