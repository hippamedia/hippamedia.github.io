$(document).ready(function(){
  $('.menu-tab').click(function(){
    $('.menu-hide').toggleClass('show');
    $('.menu-tab').toggleClass('active');
  });
  $('a').click(function(){
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
  });
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