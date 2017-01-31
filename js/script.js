function fadeInSlow(selector, delay = 50) {
  $(selector).css({display:'none'}).delay(delay).fadeIn('slow');
}

function showMobileMenu(event) {

  event.preventDefault();

  var barsClass = "fa fa-bars fa-2x";
  var closeClass = "fa fa-times fa-2x";
  var menuButton = $('#mobile-button');
  var navbar = $('nav');
  var mobileLinks = $('.mobile-links');
  var container = $('.wrapper-container');

  navbar.toggleClass('get-menu')
  container.toggleClass('opacity')

  // show mobile menu links
  navbar.hasClass('get-menu') ? mobileLinks.delay(100).show(0) : mobileLinks.hide();

  // toggle mobile icons
  menuButton.hasClass(barsClass) ?
  menuButton.removeClass(barsClass).addClass(closeClass) :
  menuButton.removeClass(closeClass).addClass(barsClass)
}



function smoothScroll() {
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top -67
        }, 300);
    });
}


// ON READY FUNCTION
$(function () {

  // Lightbox Options
  lightbox.option({
    'resizeDuration': 100,
    'maxWidth': 800
  })

  smoothScroll()
  fadeInSlow('nav');

  // Fade in each image in order
  $(".resize_fit_center").each(function(index) {
    fadeInSlow(this, 70*index);
  });

  // Event listener to mobile menu button (bars)
  $('.mobile').on("click", showMobileMenu)

  // Form submit
  $('#submit').on('click', function(event) {
    event.preventDefault();
    console.warn("Data sent!");
  })

});
