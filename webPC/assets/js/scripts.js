$(".menu_icon").click(function() {
    $(".navigation")
        .toggle();
});
$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 768) {
            $(".navigation").show();
        }
        if (windowsize <= 768) {
            $(".navigation").hide();
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});
console.log($(document).height());