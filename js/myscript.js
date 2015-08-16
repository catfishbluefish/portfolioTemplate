//Uses jQuery plugin "Sticky" to stick the top navigation to the top of the page when scrolling down, and unsticks when scroll up
 $(document).ready(function() {
    $("#topNav").sticky({topSpacing:0});
 });


//Automatically scrolls to element when clicked on the top navigation
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});