$(document).ready(function() {
    $('ul.tri_boxes.photos > li > img').click(function(e) {
        var imgSrc = e.target.src;
        $('.img_big > img').attr('src', imgSrc);
    });

    // MODAL WINDOW - IMAGES
    $('#img_big').click(function(e) {
        $('#modal_img_overlay').css('display', 'block');
        $('#modal_img_overlay').fadeIn(400,
            function() {
                $('#modal_img')
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: "50%"
                    }, 200);
        var bigImg = e.target.src;

        $('#mainImg').attr('src', bigImg);

        $('#mainImg').load(function() {
            var h = $(this).height();
            var w = $(this).width();

            var top = '-' + parseInt(parseInt(h)/2) + 'px';
            var left = '-' + parseInt(parseInt(w)/2) + 'px';

            $('.modal_img').css('margin-top', top);
            $('.modal_img').css('margin-left', left);

            var width = w + 'px';

            $('.modal_img').css('width', width);
            $('.modal_img .slider').css('width', width);

        });
    });

    // CLOSE MODAL WINDOW
    $('#modal_img_overlay').click(function() {
        $('#modal_img').animate({
            opacity: 0,
            top: '45%'
        }, 200,
            function() {
                $('#modal_img').css('display', 'none');
                $('#modal_img_overlay').fadeOut(400);
                $('#modal_img_overlay').css('display', 'none');
            });
        });

    });

    // SLIDER IN MODAL WINDOW IMAGES
    $('.modal_img #prev').click(function(){change_Img(false)});
    $('.modal_img #next').click(function(){change_Img(true)});

    function change_Img(switcher) {
        var switcher = switcher;
        var zMainImg = $('.modal_img #mainImg').css('z-index');
        var zMainImg2 = $('.modal_img #mainImg2').css('z-index');

        // Which image is upper
        if (zMainImg > zMainImg2) {
            var imgLower = $('.modal_img #mainImg2');
            var imgUpper = $('.modal_img #mainImg');
            var srcImg = imgUpper.attr('src');
        }
        else {
            var imgLower = $('.modal_img #mainImg');
            var imgUpper = $('.modal_img #mainImg2');
            var srcImg = imgUpper.attr('src');
        }

        var i;

        //Getting number of image
        i = parseInt(srcImg.substr(-5, 1));

        //Previous or next image
        if (switcher) {
            if (i >= 3) {i = 1;}
            else {++i;}
        } else {
            if (i <= 1) {i = 3;}
            else {--i;}
        }

        // Setting new source of image
        srcImg = 'img/photo/' + i + '.jpg';
        imgLower.attr('src', srcImg);
        imgLower.fadeIn(1);

        imgUpper.fadeOut(1000, function() {
            imgLower.css('z-index', '2');
            imgUpper.css('z-index', '1');
        });
    }
});