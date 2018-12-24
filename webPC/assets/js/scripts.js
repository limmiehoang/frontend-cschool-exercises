var $window = $(window);

function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 768) {
        $(".navigation").show();
    }
    else {
        $(".navigation").hide();
    }
}
// Execute on load
checkWidth();
// Bind event listener
$(window).resize(checkWidth);

// Show or hide navigation list when menu is clicked
$(".menu_icon").on('click', function() {
    $(".navigation")
        .toggle();
});

// Active on the current item in navigation bar
$(".navigation").on('click', 'li', function() {
    $(".navigation li").removeClass("is_active");
    $(this).addClass("is_active");
});