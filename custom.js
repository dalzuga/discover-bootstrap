// jquery for after document loaded (ready)
$(document).ready(function() {
        // for popovers
        $('[data-toggle="popover"]').popover();

        // for star-rating functionality
        $("#input-1").rating({min:0, max:3, step:.5, size:'xs', stars:3});

        // for star-rating alert
        $("#input-1").on('rating.change', function(event, value, caption) {
            alert("New value is " + value);
        });
});
