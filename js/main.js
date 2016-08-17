/*var $window = $(window),
    $tbc = $('#table-of-contents'),
    windowTop = $tbc.offset().top;

$window.scroll(function() {
    $tbc.toggleClass('anchor', $window.scrollTop() > windowTop);
});*/

$('#menu-btn').click(function() {
   $('#mobile-nav').slideToggle(500); 
});

if($(window).width() > 600) {
   $('#mobile-nav').hide();
} 

$(window).resize(function() {
   if($(window).width() > 600) {
       $('#mobile-nav').hide();
   } 
});

/****************************
 Smooth Scrolling
****************************/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 20
        }, 900);
        return false;
      }
    }
  });
});