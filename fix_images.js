$(document).ready(function() {
    $('img').each(function(index) {
        var img = $(this),
            src = img.attr('src'),
            regexp = /file:\/\/\/Users\/amiel\/src\/shopify-presentation\//;
        if (regexp.test(src)) {
            img.attr('src', src.replace(regexp, ""));
        }
    });
});


