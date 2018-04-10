$(document).ready(function(){

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    for (let i = 1; i <= 35; i++) {
        $("#namestajGalerija").append("<div class = \"one-third\"><a href=\"images/namestaj/"+ i +".jpg\""+"  class=\"example-image-link\" data-lightbox = \"namestaj\" ><img src=\"images/namestaj/"+ i +".jpg\""+"></img></a><div>")
    }

    for (let i = 1; i <= 34; i++) {
        $("#kuhinjeGalerija").append("<div class = \"one-third\"><a href=\"images/kuhinje/"+ i +".jpg\""+"  class=\"example-image-link\" data-lightbox = \"kuhinje\" ><img src=\"images/kuhinje/"+ i +".jpg\""+"></img></a><div>")
    }

    for (let i = 1; i <= 29; i++) {
        $("#stepenisteGalerija").append("<div class = \"one-third\"><a href=\"images/stepenista/"+ i +".jpg\""+"  class=\"example-image-link\" data-lightbox = \"stepenista\" ><img src=\"images/stepenista/"+ i +".jpg\""+"></img></a><div>")
    }

    for (let i = 1; i <= 37; i++) {
        $("#vrataGalerija").append("<div class = \"one-third\"><a href=\"images/vrata/"+ i +".jpg\""+"  class=\"example-image-link\" data-lightbox = \"vrata\" ><img src=\"images/vrata/"+ i +".jpg\""+"></img></a><div>")
    }

    for (let i = 1; i <= 8; i++) {
        $("#onamaGalerija").append("<div class = \"one-third\"><a href=\"images/about/"+ i +".jpg\""+"  class=\"example-image-link\" data-lightbox = \"onama\" ><img src=\"images/about/"+ i +".jpg\""+"></img></a><div>")
    }

   
});