jQuery(document).ready(function ($) {
    $('#row').css("background-color", "transparent");
    var sdownonce = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {

            $('.navbar').css({"background-color": "rgb(11, 43, 59, 0.8)"}).css("transition", "0.5s ease-in-out ");
            $('.hdr').css({'box-shadow' : '0 4px 2px -2px #111'});
            $('.logo2').css({ opacity: 1.0 }).css("transition", "0.5s ease-in-out ");
            $('.row').css({ opacity: 0.0 }).css("transition", "0.5s ease-in-out "); //.animate({ opacity: 0.0 });

        } else {
            $('.navbar').css("background-color", "rgb(11, 43, 59, 1.0)").css("transition", "0.5s ease-in-out ");
            $('.hdr').css("box-shadow", "none").css("transition", "0.5s ease-in-out ");
            $('.logo2').css({ opacity: 0.0 }).css("transition", "0.5s ease-in-out ");

            $('.row').css({ opacity: 1.0 }).css("transition", "0.5s ease-in-out "); //.animate({ opacity: 1.0 });



        }
    });
});