
Template.notFound.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
}

FlowRouter.notFound = {
    name: 'notFound',
    title: 'Not Found',
    action: function() {
      BlazeLayout.render('main', {main: 'notFound'});
    }
};
