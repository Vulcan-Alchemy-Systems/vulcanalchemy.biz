Template.review.rendered = function() {
  $("#testimonials-slider .slider-items").owlCarousel({
    items: 2,
    itemsDesktop: [1024, 2],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [640, 1],
    itemsMobile: [390, 1],
    navigation: !0,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
    autoPlay: true,
    singleItem: true
  });
}
