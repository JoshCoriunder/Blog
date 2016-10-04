$(function() {
    
  // Smoothscroll to anchor in page load
  var hash = location.hash.replace('#','');
  if (hash != '' && $("#"+hash).length > 0) {
    $('html, body').animate({scrollTop: $("#"+hash).offset().top-60}, 600);
  }
 
})(jQuery);