Template.blogView.rendered = function() {
  jQuery('.mega-menu-category').slideUp();
  $('body').scrollTop(0);

  jQuery("#related-posts .slider-items").owlCarousel({
    items: 3,
    itemsDesktop: [1024, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [640, 2],
    itemsMobile: [390, 1],
    navigation: !0,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: !1,
    autoPlay: true
  });
}

// events
Template.blogView.events({

});

// route
FlowRouter.route('/blog/:blog-slug', {
  name: 'blogView',
  title: 'Blogs',
  action: function() {
    BlazeLayout.render('main', {
      main: 'blogView'
    });
  },
});
