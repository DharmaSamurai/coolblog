function total_cart() {
    var sum = 0.00;
    var itm, prc;

    $('#cart li').each(function() {
        itm = parseFloat($(this).find('#i').html());
        prc = parseFloat($(this).find('#p').html().replace('$', '')).toFixed(2);
        sum += (itm * prc);
    });

    sum = sum.toFixed(2);
    $('#total_prc').html('$' + sum);
}

$(document).ready(function() {
    // Counting total price
    if ($('.cart').children('#cart').length) {
        total_cart();
    }

    // Adding product to cart
    $('body').on('click', '#add_prod', function() {
        var itms = $('#itms').val();
        var name = $('#prod_name').html();
        var price = parseFloat($('#prc_now').html().replace('$', '')).toFixed(2);
        var img = $('#img_prod').attr('src');

        if ($('.cart').children('#cart').length) {
            // Adding got information
            $('#cart').append('<li>' +
            '<a href="" class="img"><img src="' + img + '" alt=""></a>' +
            '<a href="">' + name + '</a>' +
            '<div class="prc"><span id="i">' + itms +
            '</span> x <span id="p">' + price + '</span></div>' +
            '<div class="del" id="del1"></div>' +
            '</li>');

            var items = $('ul#cart li').size();
            if (items == 4) {
                $('.cart').css('margin-right', '-25px');
                $('.cart ul.art_list.prods.white').css('margin-right', '20px');
            }
        } else {
            $('.block_wrap.crt').html('<div class="cart">' +
                '<ul class="art_list prods white" id="cart"><li>' +
                '<a href="" class="img"><img src="' + img + '" alt=""></a>' +
                '<a href="">' + name + '</a>' +
                '<div class="prc"><span id="i">' + itms +
                '</span> x <span id="p">' + price + '</span></div>' +
                '<div class="del" id="del1"></div>' +
                '</li></ul></div>' +
                '</div>' +

                '<div class="crt_sub">' +
                    '<div class="total">' +
                        'Total: <span id="total_prc">$330.00</span>' +
                    '</div>' +
                    '<div class="btns">' +
                        '<a href="cart.html" class="red_link">View cart</a>' +
                        '<a href="checkout.html" class="red_link">Checkout</a>' +
                    '</div>' +
                '</div>');

            $('.cart').css('margin-right', '0');
            $('.cart ul.art_list.prods.white').css('margin-right', '8px');
        }

        // Recounting total price
        total_cart();

    });

    // Deleting product from cart
    $('body').on('click', '.del', function(e) {
        var thisID = '#' + e.target.id;
        var li = 'ul#cart li:nth-child(' + ($(thisID).parent().index() + 1) + ')';
        $(li).remove();

        // Recounting total price of all products
        var items = $('ul#cart li').size();
        // mega_total(items);

        if (!items) {
            $('.block_wrap.crt').html('<div class="cart">Your cart is empty yet.</div>');
        } else {
            // Recounting total price
            total_cart();

            if (items == 3) {
                $('.cart').css('margin-right', '0');
                $('.cart ul.art_list.prods.white').css('margin-right', '8px');
            }
        }
    });
});

