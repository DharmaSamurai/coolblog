$(document).ready(function() {
    var opnd = 0;
    // MENU
    $('#menu_btn').click(function() {
        if (opnd) {
            $('.menu_btn').css('background-image', 'url(img/menu.png)');
            opnd = 0;

            $('.all_rel').animate({
                marginLeft: "0"
            }, 500);

            $('.menu_adapt').animate({
                marginLeft: "-85%"
            }, 500);

        } else {
            $('.menu_btn').css('background-image', 'url(img/close.png)');

            opnd = 1;

            $('.all_rel').animate({
                marginLeft: "85%"
            }, 500);

            $('.menu_adapt').animate({
                marginLeft: "0"
            }, 500);
        }
    });

    // Slide Toggle MENU
    $('ul.ad_main_menu > li > div').click(function(e){
        var thisID = '#' + e.target.id;
        var submenuID = '#sm' + thisID.replace('#am', '');

        $(submenuID).slideToggle("slow");
        if ($(thisID).hasClass('rot')) {
            $(thisID).rotate({animateTo: 0});
            $(thisID).removeClass('rot');
        } else {
            $(thisID).rotate({animateTo: 90});
            $(thisID).addClass('rot');
        }
    });

});