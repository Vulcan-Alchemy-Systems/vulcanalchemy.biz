Template.upSellProductWidget.rendered = function() {
  jQuery("#upsell-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        })
}
