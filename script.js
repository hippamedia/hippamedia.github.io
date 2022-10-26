$( '.a' ).on("click", function(){
  $('#menuToggle').click();
});
   $(window).scroll(function() {

    if ($(this).scrollTop()>100)
     {
        $('.ball').fadeOut();
     }
    else
     {
      $('.ball').fadeIn();
     }
 });