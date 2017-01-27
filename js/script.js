function fadeInSlow(selector, delay = 50) {
  $(selector).css({display:'none'}).delay(delay).fadeIn('slow');
}



function showMobileMenu(event) {

  event.preventDefault();

  var barsClass = "fa fa-bars fa-2x";
  var closeClass = "fa fa-times fa-2x";
  var thisButton = $(this);

  thisButton.hasClass(barsClass) ?
  thisButton.removeClass(barsClass).addClass(closeClass) :
  thisButton.removeClass(closeClass).addClass(barsClass)
}



function smoothScroll() {
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top +1
        }, 300);
    });
}


// ON READY FUNCTION
$(function () {

  smoothScroll()
  fadeInSlow('nav');

  console.log(window.innerWidth);

  // Fade in each image in order
  $(".resize_fit_center").each(function(index) {
    fadeInSlow(this, 70*index);
  });

  // Event listener to mobile menu button (bars)
  $('#mobile-button').on("click", showMobileMenu)


});
