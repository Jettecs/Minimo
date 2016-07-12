$(document).ready(function () {
    $(window).resize(function(){

        if($(document).width() < 585) {
            $('.categoryImg').removeClass('col-xs-4').addClass('col-xs-12');
        }else{
            $('.categoryImg').removeClass('col-xs-12').addClass('col-xs-4');
        };
    });


});