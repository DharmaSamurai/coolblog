// SLIDER MOVING BOXES
(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel.on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 3;
            } else if (width >= 350) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-wrapper .nav.prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-wrapper .nav.next')
        .jcarouselControl({
            target: '+=1'
        });
    });
})(jQuery);