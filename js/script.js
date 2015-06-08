$(window).load(function() {

  $(".switch").on('click', function(){
    $(".lid").addClass("active");
    $(".cyl-3").addClass("active");
    $(".cyl-4").addClass("active");
    $(".cyl-5").addClass("active");
    $(".cyl-6").addClass("active");
    $(".switch").addClass("active");

    $(".cyl-6").one('transitionend webkitTransitionEnd', function(){
      $(".cyl-3").removeClass("active");
      $(".cyl-4").removeClass("active");
      $(".cyl-5").removeClass("active");
      $(".cyl-6").removeClass("active");
      $(".switch").removeClass("active");
      $(".lid").removeClass("active");
    });
    
  });



  

});

$(document).ready(function() {

});

