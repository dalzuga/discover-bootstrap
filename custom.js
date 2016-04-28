// jquery for after document loaded (ready)
$(document).ready(function() {
        // for popovers
        $('[data-toggle="popover"]').popover();
        // for star-rating functionality
        $('#input-1').rating({min:1, max:10, step:2, size:'xs'});
});
