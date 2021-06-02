document.write(
    unescape("%3Cscript src='https://code.jquery.com/jquery-3.6.0.js' type='text/javascript'%3E%3C/script%3E")
);

$(document).ready(function() {

    $(document).on('scroll', function() {

        if ($(this).scrollTop() >= $('#FlutterTile').position().top) {
            $("#flutterApps").fadeIn(1500);

            console.log('Flutter loaded');
        }

    })
});