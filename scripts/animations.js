document.write(
    unescape("%3Cscript src='https://code.jquery.com/jquery-3.6.0.js' type='text/javascript'%3E%3C/script%3E")
);

$(document).ready(function() {

    $(document).on('scroll', function() {
        $(".inclinedwall>ul>li").fadeIn(1000);

        if ($(this).scrollTop() >= $('#flutter').position().top) {
            $("#flutterApps").fadeIn(1000);
            console.log('Flutter loaded');
        }
    })
});