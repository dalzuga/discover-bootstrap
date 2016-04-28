// jquery for after document loaded (ready)
$(document).ready(function() {
        // for popovers
        $('[data-toggle="popover"]').popover();

        // for star-rating functionality
        for (var i = 1; i <= 6; i++) {
                $("#input-" + i).rating({min:0, max:3, step:.5, size:'xs', stars:3});
                $("#input-" + i).on('rating.change', function(event, value, caption) {
                        alert("New value is " + value);
                })
        }
});
