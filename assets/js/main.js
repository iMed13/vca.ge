
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

    var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}