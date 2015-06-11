$(window).load(function() {
});

$(document).ready(function(){

  var audioElementOn = document.createElement('audio');
  audioElementOn.setAttribute('src', 'soundeffects/click.mp3');
  audioElementOn.load();

  var audioElementOff = document.createElement('audio');
  audioElementOff.setAttribute('src', 'soundeffects/click.mp3');
  audioElementOff.load();


  $(".switch").on('click', function(){
    audioElementOn.play();
    $(".lid").addClass("active");
    $(".cyl-3").addClass("active");
    $(".cyl-4").addClass("active");
    $(".cyl-5").addClass("active");
    $(".cyl-6").addClass("active");
    $(".switch").addClass("active");
    

    $(".cyl-6").one('transitionend webkitTransitionEnd', function(){
      audioElementOff.play();
      $(".cyl-3").removeClass("active");
      $(".cyl-4").removeClass("active");
      $(".cyl-5").removeClass("active");
      $(".cyl-6").removeClass("active");
      $(".switch").removeClass("active");
      $(".lid").removeClass("active");
    });   
  });



  var socket = io('http://10.0.1.112:5000');

  socket.on('clientData', function(data){
    $('#activeUsers').html(data.clients.active);
  });

  socket.on('clickData', function(data){
    $('#clickCount').html(data.clicks.count);
    console.log(data.clicks.count);
  });

  $('#switch').on('click', function() {
    socket.emit('click');
  });
});
