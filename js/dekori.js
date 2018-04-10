$(document).ready(function(){

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    //KASTAMONU DEKORI
    $("#kastamonu").click(function(){
        window.location.href='kastamonu.html';
    });

    $("#drvoDekori").hide();
    $("#uniDekori").hide();

    $("#drvo").click(function(){
        $("#drvoDekori").fadeToggle(1000);
        $('#uniDiv').fadeToggle();
        $("#arrowDownDrvo").toggleClass('fa-arrow-up fa-arrow-down');
    });

    $("#uni").click(function(){
        $("#uniDekori").fadeToggle(1000);
        $('#drvoDiv').fadeToggle();
        $("#arrowDownUni").toggleClass('fa-arrow-up fa-arrow-down');
    });



    for (let i = 1; i <= 75; i++) {
        $("#drvoDekori").append("<div class = \"dekoriBox\"><img src=\"images/dekori/kastamonu/kdd"+ i +".jpg\""+"></img><label>kdd"+ i +"</label><div>")
    }

    for (let i = 1; i <= 38; i++) {
        $("#uniDekori").append("<div class = \"dekoriBox\"><img src=\"images/dekori/kastamonu/uniBoje/kub"+ i +".jpg\""+"></img><label>kub"+ i +"</label><div>")
    }

    
});