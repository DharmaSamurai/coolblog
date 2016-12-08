$(document).ready(function() {
    $('.reply').click(function(e) {
        var num = (e.target.id).replace('r', '');

        $('#add_reply').remove();
        $('#com_' + num + ' > .block_wrap').after('<div class="rev_wrap add_reply" id="add_reply">' +
            '<form action="" method="POST">' +
                '<div>' +
                    '<input type="text" placeholder="Name*">' +
                    '<input type="email" placeholder="Email*">' +
                    '<div class="rating">' +
                        '<div class="img">' +
                            '<div class="img">' +
                                '<div class="img">' +
                                    '<div class="img">' +
                                        '<div class="img"></div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<textarea name="" id="" cols="30" rows="10"></textarea>' +
                '<input type="submit" value="Submit" class="red_link">' +
                '<div class="cancel_rep" id="cncl_rep">Cancel Reply</div>' +
            '</form>' +
        '</div>');
    });

    $('body').on('click', '#cncl_rep', function() {
        console.log('yes');
        $('#add_reply').remove();
        $('.reviews').append('<div class="rev_wrap add_reply" id="add_reply">' +
            '<form action="" method="POST">' +
                '<div>' +
                    '<input type="text" placeholder="Name*">' +
                    '<input type="email" placeholder="Email*">' +
                    '<div class="rating">' +
                        '<div class="img">' +
                            '<div class="img">' +
                                '<div class="img">' +
                                    '<div class="img">' +
                                        '<div class="img"></div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<textarea name="" id="" cols="30" rows="10"></textarea>' +
                '<input type="submit" value="Submit" class="red_link">' +
            '</form>' +
        '</div>');
    });
});