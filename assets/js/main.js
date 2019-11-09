
$( document ).ready(function() {
    var width = $(".active-nav-link").outerWidth();
    var offset = $(".active-nav-link").position();
    var left= offset.left; 
    $(".header-nav").children("ul").append("<div class='border-bottomm'><div>");
    $(".border-bottomm").css({"width" : width , "left" : left});

    $(".header-nav").children("ul").find("li").mouseover("on", function(){
        var width = $(this).outerWidth();
        var offset = $(this).position();
        var left= offset.left; 
        $(".border-bottomm").css({"width" : width , "left" : left});
    })

    $(".header-nav").mouseleave("on", function(){
        var width = $(".active-nav-link").outerWidth();
        var offset = $(".active-nav-link").position();
        var left= offset.left;
        $(".border-bottomm").css({"width" : width , "left" : left});
    })
});
