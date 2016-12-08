// Total price of one product in cart
function total(num, val, items) {
    var num = num;
    var val = val;
    var items = items;

    var price = $('#tr' + num + ' td:nth-child(2)').html();
    price = parseFloat(price.replace('$', ''));
    var total = (price * val).toFixed(2);
    $('#tr' + num + ' td:nth-child(4)').html('$' + total);

    mega_total(items);
}

// Total price of all products
function mega_total(items) {
    var sum = 0;
    for (i = 2; i < (items + 1); i++) {
        var totPrice = $('.tblCart tr:nth-child(' + i + ') td:nth-child(4)').html();
        totPrice = parseFloat(totPrice.replace('$', ''));
        sum += totPrice;
    }

    sum = sum.toFixed(2);
    $('.total_price').html('$' + sum);
}

$(document).ready(function() {
    // Deleting product from cart
    $('.del').click(function(e) {
        var thisTR = '#' + e.target.id;
        var tr = '#' + $(thisTR).parent().parent().attr('id');
        $(tr).remove();

        // Recounting total price of all products
        var items = $('.tblCart tr').size();
        mega_total(items);
    });

    // Quantity of product
    $('.cnt .more').click(function(e) {
        var num = e.target.id.replace('mor', '');
        var inp = '#inp' + num;

        var val = parseInt($(inp).val());
        if (val) {
            ++val;
            $(inp).val(val);

            // Getting count of products in cart
            var items = $('.tblCart tr').size();

            total(num, val, items);
        } else {
            $(inp).val(1);
        }
    });

    $('.cnt .less').click(function(e) {
        var num = e.target.id.replace('les', '');
        var inp = '#inp' + num;

        var val = parseInt($(inp).val());
        if (val) {
            if (val > 1) {
                --val;
                $(inp).val(val);

                // Getting count of products in cart
                var items = $('.tblCart tr').size();

                total(num, val, items);
            }
        } else {
            $(inp).val(1);
        }
    });

    // Slide Toggle READ MORE
    $('.rdmr').hide();
    $('.expand').click(function(e){
        var num = parseInt((e.target.id).replace('exp_', ''));
        var rm = '#rdmr_' + num;

        $(rm).slideToggle("slow");

        console.log(num);

    });

});