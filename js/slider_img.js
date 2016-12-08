function startChangeImg() {
    changeImg(true);
}

function changeImg(switcher) {
    var switcher = switcher;
    var zMainImg = $('#mainImg').css('z-index');
    var zMainImg2 = $('#mainImg2').css('z-index');

    // Which image is upper
    if (zMainImg > zMainImg2) {
        var imgLower = $('#mainImg2');
        var imgUpper = $('#mainImg');
        var srcImg = $('#mainImg img').attr('src');
        var imgLower2 = $('#mainImg2 img');
    }
    else {
        var imgLower = $('#mainImg');
        var imgUpper = $('#mainImg2');
        var srcImg = $('#mainImg2 img').attr('src');
        var imgLower2 = $('#mainImg img');
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
    srcImg = 'img/slider/' + i + '.jpg';
    $(imgLower2).attr('src', srcImg);
    imgLower.fadeIn(1);

    imgUpper.fadeOut(1000, function() {
        imgLower.css('z-index', '2');
        imgUpper.css('z-index', '1');
    });
}

// EVENTS
$(document).ready(function() {
    var w = $('.block.soc ul.social li').css('width');
    $('.block.soc ul.social li').css('height', w);

    // SLIDER
    var runSlider = setInterval(startChangeImg, 2500);
    $('.slider_nav1').click(function(){changeImg(false)});
    $('.slider_nav2').click(function(){changeImg(true)});

    $('.slider').mouseenter(function() {
        clearInterval(runSlider);
    });

    $('.slider').mouseleave(function() {
        runSlider = setInterval(startChangeImg, 2500);
    });
});