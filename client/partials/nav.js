Template.nav.rendered = function() {


  $(function() {
    $(".category-sidebar ul > li.cat-item.cat-parent > ul").hide();
    $(".category-sidebar ul > li.cat-item.cat-parent.current-cat-parent > ul").show();

    jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat.cat-parent > ul").show();

    $(".category-sidebar ul > li.cat-item.cat-parent").on("click", function() {
      if ($(this).hasClass('current-cat-parent')) {
        var li = $(this).closest('li');
        li.find(' > ul').slideToggle('fast');
        $(this).toggleClass("close-cat");
      } else {
        var li = $(this).closest('li');
        li.find(' > ul').slideToggle('fast');
        $(this).toggleClass("cat-item.cat-parent open-cat");
      }
    });
    $(".category-sidebar ul.children li.cat-item,ul.children li.cat-item > a").on("click", function(e) {
      e.stopPropagation();
    });
  });

  jQuery('.mega-menu-title').on('click', function() {
    if (jQuery('.mega-menu-category').is(':visible')) {
      jQuery('.mega-menu-category').slideUp();
    } else {
      jQuery('.mega-menu-category').slideDown();
    }
  });


  jQuery('.mega-menu-category .nav > li').hover(function() {
    jQuery(this).addClass("active");
    jQuery(this).find('.popup').stop(true, true).fadeIn('slow');
  }, function() {
    jQuery(this).removeClass("active");
    jQuery(this).find('.popup').stop(true, true).fadeOut('slow');
  });


  jQuery('.mega-menu-category .nav > li.view-more').on('click', function(e) {
    if (jQuery('.mega-menu-category .nav > li.more-menu').is(':visible')) {
      jQuery('.mega-menu-category .nav > li.more-menu').stop().slideUp();
      jQuery(this).find('a').text('More category');
    } else {
      jQuery('.mega-menu-category .nav > li.more-menu').stop().slideDown();
      jQuery(this).find('a').text('Close menu');
    }
    e.preventDefault();
  });
}
