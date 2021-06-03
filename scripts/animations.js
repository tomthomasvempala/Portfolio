document.write(
    unescape("%3Cscript src='https://code.jquery.com/jquery-3.6.0.js' type='text/javascript'%3E%3C/script%3E")
);

flutterReached = false;

$(document).ready(function() {

    $(document).on('scroll', function() {
        if (!flutterReached)
            if ($(this).scrollTop() >= $('#FlutterTile').position().top) {
                $("#flutterApps").stop(true, true).fadeIn({ duration: 1000, queue: false }).css('display', 'none').slideDown(1500);

                // $("#flutterApps").slideDown(1500);
                flutterReached = true;
                console.log('Flutter loaded');
            }

    });

    // $(".oneApp").hover(function() {

    //         console.log('Flutter hovered');
    //         $(".oneApp").not(this).animate({ "opacity": "0.1" }, 100);
    //         $(this).animate({ "height": "500px" }, 100);
    //     },
    //     function() {

    //         console.log('Flutter hovered');
    //         $(".oneApp").not(this).animate({ "opacity": "1" }, 100);
    //         $(this).animate({ "height": "420px" }, 100);
    //     }
    // );
});