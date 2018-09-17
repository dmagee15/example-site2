

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
    });
}

$(window).on("scroll", function() {
    if($(window).scrollTop() > $(".landing").height()+$(".carouselContainer").height()+$(".about").height()+$(".menu").height()
    || $(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".homeText").removeClass("activeButton");
        $(".aboutText").removeClass("activeButton");
        $(".menuText").removeClass("activeButton");
        $(".resText").addClass("activeButton");
    } else 
    if($(window).scrollTop() > $(".landing").height()+$(".carouselContainer").height()+$(".about").height()) {
        $(".homeText").removeClass("activeButton");
        $(".aboutText").removeClass("activeButton");
        $(".menuText").addClass("activeButton");
        $(".resText").removeClass("activeButton");
    } else
    if($(window).scrollTop() > $(".landing").height()) {
        $(".homeText").removeClass("activeButton");
        $(".aboutText").addClass("activeButton");
        $(".menuText").removeClass("activeButton");
        $(".resText").removeClass("activeButton");
    } 
    else
    {
        $(".homeText").addClass("activeButton");
        $(".aboutText").removeClass("activeButton");
        $(".menuText").removeClass("activeButton");
        $(".resText").removeClass("activeButton");
    }

    if($(window).scrollTop() > $(".landing").height()) {
        $(".dynamicHeader").addClass("headerActive");
    } else {
       $(".dynamicHeader").removeClass("headerActive");
    }
});

$(".homeButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".landing").offset().top+2},
        'slow');
});

$(".aboutButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});

$(".menuButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".menu").offset().top},
        'slow');
});

$(".locationButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".location").offset().top},
        'slow');
});