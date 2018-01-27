Template.clientBannerWidget.rendered = function(){
  $("#our-clients-slider .slider-items").owlCarousel({
    items: 6,
    itemsDesktop: [1024, 4],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [640, 2],
    itemsMobile: [360, 1],
    navigation: false,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: false,
    autoPlay: true
  });
}
