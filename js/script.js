/* *************** FUNCTIONS ***************
-------------------------------------------- */


/* Fade In Slow Function
-------------------------------------------- */
function fadeInSlow(selector, delay = 50) {
  $(selector).hide().delay(delay).fadeIn('slow');
}


/* Show Mobile Menu Function
-------------------------------------------- */
function showMobileMenu(event) {

  event.preventDefault();

  var barsClass = "fa fa-bars fa-2x";
  var closeClass = "fa fa-times fa-2x";
  var menuButton = $('#mobile-button');
  var navbar = $('nav');
  var mobileLinks = $('.mobile-links');
  var container = $('.wrapper-container');
  var mask = $('.mask');
  var body = $('body');

  body.toggleClass('has-active-menu')
  mask.toggleClass('is-active ')
  navbar.toggleClass('get-menu')
  container.toggleClass('opacity')

  // show mobile menu links
  navbar.hasClass('get-menu') ? mobileLinks.delay(100).show(0) : mobileLinks.hide();

  // toggle mobile icons
  menuButton.hasClass(barsClass) ?
  menuButton.removeClass(barsClass).addClass(closeClass) :
  menuButton.removeClass(closeClass).addClass(barsClass)
}


/* Smooth Scroll Function
-------------------------------------------- */
function smoothScroll() {
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top -67
        }, 300);
    });
}


/* Fade in each image in order
-------------------------------------------- */
$(".resize_fit_center").each(function(index) {
  fadeInSlow(this, 30*index);
});



/* *********** ON READY FUNCTION ***********
-------------------------------------------- */
$(function () {

  // Lightbox Options
  lightbox.option({
    'resizeDuration': 100,
    'maxWidth': 800
  })


  // Add smooth scrolling to site
  smoothScroll();



  // Event listener to mobile menu button (bars) and mask
  $('.mobile').on("click", showMobileMenu)
  $('.mask').on("click", showMobileMenu)



  // Form submit
  $('#submit').on('click', function(event) {
    event.preventDefault();
    console.warn("Data sent!");
  })

});
