Template.faqList.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);
}

// route
FlowRouter.route('/faq', {
  name: 'faqList',
  title: 'FAQ',
  action: function() {
    BlazeLayout.render('main', {main: 'faqList'});
  },
});
