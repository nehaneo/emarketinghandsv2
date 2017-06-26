
jQuery(document).ready(function () {
  $(window).scroll(function (e) {
    parallaxScroll();
  });

  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.parallax-bg').css('top', (0 - (scrolled * .25)) + 'px');
    $('.parallax-fg').css('top', (0 - (scrolled * .4)) + 'px');
    // $('#parallax-bg-3').css('top', (0 - (scrolled * .75)) + 'px');
  }

});