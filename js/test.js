$(document).ready(function(){

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 700) {
          $('nav').removeClass('bg-transparent');
        } else if (ww >= 401) {
          $('nav').addClass('bg-transparent');
        };
      };
      $(window).resize(function(){
          console.log("kare");
        alterClass();
      });
    

    $("#kuhinje").click(function(){
        window.location.href='kuhinje.html';
    });
    $("#namestaj").click(function(){
        window.location.href='namestaj.html';
    });
    $("#stepenista").click(function(){
        window.location.href='stepeniste.html';
    });     
    $("#vrata").click(function(){
        window.location.href='vrata.html';
    });
    $("#dekori").click(function(){
        window.location.href='dekori.html';
    });
    $("#onama").click(function(){
        window.location.href='onama.html';
    });
    
    
});