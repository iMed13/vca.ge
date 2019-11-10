
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


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(".nav-ul").find('.nav-li').click("on", function(){
  var width = $(".active-nav-link").outerWidth();
  var offset = $(".active-nav-link").position();
  var left= offset.left; 
  $(".border-bottomm").css({"width" : width , "left" : left});

  
  $(this).siblings().removeClass('active-nav-link');
  $(this).addClass('active-nav-link');
  
  $(".nav-ul.active-menu").removeClass('active-menu');
  $(".hamburger.is-active").removeClass("is-active");
})




// Hmaburger click function,

$('.hamburger').click('on', function(){
  $(".nav-ul").toggleClass('active-menu');
})


//window resize function
$( window ).resize(function() {
  
  var width = $(".active-nav-link").outerWidth();
  var offset = $(".active-nav-link").position();
  var left= offset.left; 
  $(".border-bottomm").css({"width" : width , "left" : left});

  var widthh = $( window ).width();
  if( widthh >=767)
  {
    $(".nav-ul").removeClass('active-menu');
    $(".hamburger").removeClass("is-active");

  }
})

// on mouse scroll menu activing
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop() + 120;
  var width = $(".active-nav-link").outerWidth();
  var offset = $(".active-nav-link").position();
  var left= offset.left; 
  $(".border-bottomm").css({"width" : width , "left" : left});

  $('.scrol-sec').each(function(i) {
      if ($(this).offset().top <= scrollDistance) {
        $('.header-nav').find(".nav-li").eq(i).siblings().removeClass("active-nav-link");
        $('.header-nav').find(".nav-li").eq(i).addClass('active-nav-link');
      }
  });
}).scroll();


