$(function() {
    $("#filter").slider({
      range: true,
      min: 6,
      max: 500,
      values: [ 75, 420 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#filter" ).slider( "values", 0 ) +
      " - $" + $( "#filter" ).slider( "values", 1 ) );
});