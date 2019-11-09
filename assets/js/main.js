
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
    $(".header-navigation").addClass("active-header");
  } else {
    mybutton.style.display = "none";
    $(".header-navigation").removeClass("active-header");
  }
}

$(".hamburger").click("on", function(){
  $(this).toggleClass('is-active')
})

});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('wheel', function(e)
{
  var secttion = $(".scrol-sec");
  var lnnnn = secttion.length;
  // console.log(secttion.eq(2).offset().top)
  for(var i=0; i<=5; i++)
  {
    if(secttion.eq(i).offset().top == 0)
    {
      
      $(".header-nav").find("li").removeClass("active-nav-link");
      $(".header-nav").find("li").eq(i).addClass("active-nav-link");
    }
  }

});

