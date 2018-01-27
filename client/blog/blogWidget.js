Template.blogWidget.rendered = function() {
  $("#latest-news-slider .slider-items").owlCarousel({
    items: 4,
    itemsDesktop: [1024, 3],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [640, 1],
    itemsMobile: [480, 1],
    navigation: !0,
    navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
    slideSpeed: 500,
    pagination: !1,
    transitionStyle: "backSlide"
  });
}
