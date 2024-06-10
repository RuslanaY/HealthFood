$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
    });

    $("#prev-arrow").click(function() {
        $(".owl-carousel").trigger('owl.prev');
    });

    $("#next-arrow").click(function() {
        $(".owl-carousel").trigger('owl.next');
    });
});
