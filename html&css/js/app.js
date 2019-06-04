$("nav .burger").click(function() {
    $(".nav-links").slideToggle();
    $(".nav-links ul").css("display", "none");
});

$(".nav-links li").click(function(){
    // $(".nav-links ul").slideUp();
    $(this).find("ul").slideToggle();
});

$(".nav-links ul li").focusout(function(){
    if($(window).width() < 850){
        $(".nav-links ul").css("display", "none");
        $(this).css("display", "none");
    }
});

// $("nav ul li").focusout(function(){
//     $("nav ul").css("display", "none");
// })

$(window).resize(function() {
    if($(window).width() > 768){
        $("ul").removeAttr("style");
    }
});