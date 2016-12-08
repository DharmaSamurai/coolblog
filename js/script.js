// EVENTS
$(document).ready(function() {
    var w = $('.block.soc ul.social li').css('width');
    $('.block.soc ul.social li').css('height', w);

    // Main menu dropdown
    $('.tbs li').click(function(e) {
        var thisID = '#' + e.target.id;
        var prnt = $(thisID).parent().parent();
        var subID = '#' + $(prnt).attr('id');
        var t_body = $(subID + ' .tabs > div:first-child').attr('id').replace('1', '');

        var li = e.target;
        var liID = e.target.id;
        var tab = '#' + t_body + liID.substring(1, liID.length);

        if (!$(li).hasClass('active')) {
            $(subID + ' .tbs li').removeClass('active');
            $(subID + ' .tabs > div').removeClass('active');
            $(li).addClass('active');
            $(tab).addClass('active');
        }
    });

    // Categories toggle
    $('ul.cat > li').click(function(e){
        var submenuID = $(this).find('ul.subcat');

        $(submenuID).slideToggle("slow");
        if ($(this).hasClass('rot')) {
            $(this).find('span').rotate({animateTo: 0});
            $(this).removeClass('rot');
        } else {
            $(this).find('span').rotate({animateTo: 90});
            $(this).addClass('rot');
        }
    });

    // Categories, Comments and Tags
    $('.tbs_2 li').click(function(e) {
        var li = '.tbs_2 #' + e.target.id;
        var liID = e.target.id;
        var num = liID.replace('t', '');
        var tab = '.tabs_2 #tab' + num;

        if (!$(li).hasClass('active')) {
            $('.tbs_2 li').removeClass('active');
            $('.tabs_2 > div').removeClass('active');
            $(li).addClass('active');
            $(tab).addClass('active');
        }
    });

    $('body').on('click', '#rating div', function(e) {
        var tar = e.target.id;
        var ths = '#' + tar;
        var num = parseInt(tar.replace('star', ''));
        var less;

        for (i = 1; i < num; i++) {
            less = '#star' + i;
            $(less).css('background-image', 'url(img/star_filled.png)');
        }

        $(ths).css('background-image', 'url(img/star_filled.png)');

    });

});

