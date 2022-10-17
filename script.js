$(".btn").on("click", function(){
  $(".btn").toggleClass("close-btn");
  $(".menu").toggleClass("open-menu");
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