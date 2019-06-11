$("nav .burger").click(function() {
    $(".nav-links").slideToggle();
    $(".nav-links ul").css("display", "none");
});

$(window).resize(function() { 
    if($(window).width() > 1000){
        $("ul").removeAttr("style");
    }
});