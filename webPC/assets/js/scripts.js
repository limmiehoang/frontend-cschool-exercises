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
        else {
            $(".navigation").hide();
            console.log("hide");
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});