jQuery(document).ready(function($){
    var touch 	= $('#touch-menu');
    var menu 	= $('.menu');
    $(touch).click(function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $("#accordion > li > div").click(function(){

        $("#accordion > li > div").css("background-color","white").css("color","black");
        $(".null").css("background-color","#0077b5").css("color","white");
        if(false == $(this).next().is(':visible')) {
            $('#accordion ul').slideUp(280);
            $(this).css("background-color","#0077b5").css("color","white");
        }
        $(this).next().slideToggle(280);
    });

    $('.reviews-about-product>div').mCustomScrollbar();
    $('.info-about-product>div').mCustomScrollbar();
    $('.product-this-manufacturer>div').mCustomScrollbar();

    var black = $(".hor-menu li a");
    black.click(function(){
        black.css("color","#0077b5");
        $(this).addClass("active").css("color","black");
    })

});

