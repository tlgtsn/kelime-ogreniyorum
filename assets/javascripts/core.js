$(document).ready(function () {

  $(".mobilSearchIcon").click(function () {
    if($("#header .container .search").hasClass("active")) {
      $("#header .container .search").removeClass("active")
      $(".mobilSearchIcon").removeClass("active")
    } else {
      $("#header .container .search").addClass("active")
      $(".mobilSearchIcon").addClass("active")
    }
  })

  $(".mobilNavIcon").click(function () {
    $("div#nav").addClass("active")
    $("body").css("overflow","hidden")
  })

  $(".navMobileClose").click(function () {
    $("div#nav").removeClass("active")
    $("body").removeAttr("style")
  })
  
  $(".headerRight .cityFilter .cityList ul").niceScroll();
  $(".headerRight .cityFilter").click(function () {
    $(this).toggleClass("active")
  })
  $(".homeProducts .tabLinks a").click(function () {
    var i = $(this).index();
    $(".homeProducts .tabLinks a").removeClass("active")
    $(this).addClass("active")
    $(".homeProducts .tab").removeClass("active")
    $(".homeProducts .tab").eq(i).addClass("active")

  })
  

  $(".payment .container form .paymentTitle a").click(function () {
    var i = $(this).index()
    $(".payment .container form .paymentTitle a").removeClass("active")
    $(".payment .container form .paymentContents .paymentContent").removeClass("active")
    $(this).addClass("active")
    $(".payment .container form .paymentContents .paymentContent").eq(i).addClass("active")
  })

  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    autoplay:true,
    autoplayTimeout:5000
  })  

  if($(window).width() < 1200) {
    $("#nav .nav").click(function () {
      if($("#nav .nav").hasClass("active")) {
        $("#nav .nav").removeClass("active")
      } else {
        $("#nav .nav").removeClass("active")
        $(this).addClass("active")
      }
    })

    $(".orederTrackingForm .orderTrackingButton").click(function () {
      $(".orederTrackingForm").toggleClass("active")
    })

    $(".membershipForm .membershipButton").click(function () {
      $(".membershipForm").toggleClass("active")
    })
  }
});
$(document).ready(function () {  
  $('.js-example-basic-single').select2();
});