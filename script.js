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

 });
 
$(document).ready(function() {
        $(window).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 1000);
            if (opacity >= 0.25) {
                $('.taustavideo video').css('opacity', opacity);
            }
        });
    });