$(document).ready(function() {
  "use strict";
  //Banner Arrow Script
  $('.scroll-link a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
  });

  //Counter Script
  $('.emizentech-counter').counterUp({
    delay: 50,
    time: 3000
  });
  
  //Scroll Script
  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
      $('.emizentech-navigation').addClass('open');
      $('header').addClass('open');
    } else {
      $('.emizentech-navigation').removeClass('open');
      $('header').removeClass('open');
      $('.has-dropdown').removeClass('dropdown-open');
    }
  });

  // Outside Click Remove Class Script
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.call-dropdown-link, .call-dropdown-wrap').length)  {
      $('.call-dropdown-wrap').slideUp();
    }
  });

  $('.has-dropdown').hover (
    function() {
      $(this).addClass('dropdown-open');
    },
    function() {
      $(this).removeClass('dropdown-open');
    }
  );

  //Add Remove Script
  $('[data-nav-link]').on('click', function () {
    var dataNavId = $(this).attr('data-nav-link');
    $('[data-nav-id = '+dataNavId+']').siblings().removeClass('active');
    $('[data-nav-id = '+dataNavId+']').addClass('active');
  });
  $('[data-popup-link]').on('click', function () {
      var dataPopupId = $(this).attr('data-popup-link');
      $('[data-popup-id = '+dataPopupId+']').addClass('popup-open');
    },
  );
  $('.main-dropdown li').click (function() {
    $('.main-dropdown li').removeClass('active');
    $(this).addClass('active');
  });
  $('.close-link').on('click', function () {
    $('[data-popup-id]').removeClass('popup-open');
    $('html').removeClass('popup-open-wrap');
  });
  $('.portfolio-item').on('click', function () {
    $('html').addClass('popup-open-wrap');
  });
  $('.emizentech-toggle').on('click', function () {
    $('.emizentech-navigation').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
  });
  $('.close-icon').on('click', function () {
    $('.emizentech-navigation').removeClass('open');
    $('.mobile-menu').removeClass('open');
  });
  $('.dark-icon').on('click', function () {
    $('body').toggleClass('dark');
  });
  $('.call-dropdown-link').on('click', function () {
    $('.call-dropdown-wrap').slideToggle();
  });
  $('.mobile-dropdown > a').on('click', function () {
    $('.mobile-dropdown').find('.mobile-dropdown-nav').stop().slideUp();
    $(this).closest('.mobile-dropdown').find('.mobile-dropdown-nav').stop().slideToggle();
  });
  $('.mobile-dropdown-icon').on('click', function () {
    $(this).parent().siblings().each(function(){
      $(this).find("ul[class=mobile-dropdown-sub]").slideUp();
    });
    $(this).parent().find("ul[class=mobile-dropdown-sub]").slideToggle();
  });
  $('.career1').on('click', function () {
    $('#career1').slideToggle();
  });
  $('.career2').on('click', function () {
    $('#career2').slideToggle();
  });
  $('.career3').on('click', function () {
    $('#career3').slideToggle();
  });
  $('.career4').on('click', function () {
    $('#career4').slideToggle();
  });
  $('.career-btn a').on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
  });

  //Add Remove Script
  $('.staff-style-two .emizentech-image, .staff-main-image').hover (
    function() {
      $(this).find('.staff-info-inner').first().stop(true, true).slideDown(300);
    },
    function() {
      $(this).find('.staff-info-inner').first().stop(true, true).slideUp(300);
    }
  );
  $('.develop-item').hover (
    function() {
      $(this).find('.develop-info-wrap').first().stop(true, true).slideDown(300);
    },
    function() {
      $(this).find('.develop-info-wrap').first().stop(true, true).slideUp(300);
    }
  );
  $('.notch-item').hover (
    function() {
      $(this).find('.notch-info-wrap').first().stop(true, true).slideDown(300);
    },
    function() {
      $(this).find('.notch-info-wrap').first().stop(true, true).slideUp(300);
    }
  );

  //Masonry Script
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.masonry-filters').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.masonry-filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });

  //Owl Carousel Slider Script
  $( window ).load(function() {
    $('.owl-carousel').each(function() {
      var $carousel = $(this);
      var $items = ($carousel.data('items') !== undefined) ? $carousel.data('items') : 1;
      var $items_tablet = ($carousel.data('items-tablet') !== undefined) ? $carousel.data('items-tablet') : 1;
      var $items_mobile_landscape = ($carousel.data('items-mobile-landscape') !== undefined) ? $carousel.data('items-mobile-landscape') : 1;
      var $items_mobile_portrait = ($carousel.data('items-mobile-portrait') !== undefined) ? $carousel.data('items-mobile-portrait') : 1;
      $carousel.owlCarousel ({
        loop : ($carousel.data('loop') !== undefined) ? $carousel.data('loop') : true,
        items : $carousel.data('items'),
        margin : ($carousel.data('margin') !== undefined) ? $carousel.data('margin') : 0,
        dots : ($carousel.data('dots') !== undefined) ? $carousel.data('dots') : false,
        nav : ($carousel.data('nav') !== undefined) ? $carousel.data('nav') : false,
        navText : ["<div class='slider-no-current'><span class='current-no'></span><span class='total-no'></span></div><span class='current-monials'></span>", "<div class='slider-no-next'></div><span class='next-monials'></span>"],
        autoplay : ($carousel.data('autoplay') !== undefined) ? $carousel.data('autoplay') : false,
        autoplayTimeout : ($carousel.data('autoplay-timeout') !== undefined) ? $carousel.data('autoplay-timeout') : 5000,
        animateIn : ($carousel.data('animatein') !== undefined) ? $carousel.data('animatein') : false,
        animateOut : ($carousel.data('animateout') !== undefined) ? $carousel.data('animateout') : false,
        mouseDrag : ($carousel.data('mouse-drag') !== undefined) ? $carousel.data('mouse-drag') : true,
        autoWidth : ($carousel.data('auto-width') !== undefined) ? $carousel.data('auto-width') : false,
        autoHeight : ($carousel.data('auto-height') !== undefined) ? $carousel.data('auto-height') : false,
        center : ($carousel.data('center') !== undefined) ? $carousel.data('center') : false,
        responsiveClass: true,
        dotsEachNumber: true,
        smartSpeed: 600,
        responsive : {
          0 : {
            items : $items_mobile_portrait,
          },
          767 : {
            items : $items_mobile_landscape,
          },
          992 : {
            items : $items_tablet,
          },
          1199 : {
            items : $items,
          }
        }
      });
      var totLength = $('.owl-dot', $carousel).length;
      $('.total-no', $carousel).html(totLength);
      $('.current-no', $carousel).html(totLength);
      $carousel.owlCarousel();
      $('.current-no', $carousel).html(1);
      $carousel.on('changed.owl.carousel', function(event) {
        var total_items = event.page.count;
        var currentNum = event.page.index + 1;
        $('.total-no', $carousel ).html(total_items);
        $('.current-no', $carousel).html(currentNum);
      });
    });
  });

  //Aos Script
  AOS.init({
    duration: 1200,
    once: true,
  });

  // Swiper Slider Script
  var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // Cookie Script
  setTimeout(function () {
    $("#cookieConsent").fadeIn(200);
  }, 4000);
  $("#closeCookieConsent, .banner-btn").click(function() {
    $("#cookieConsent").fadeOut(200);
  });

  var options = {
    title: '&#x1F36A; Accept Cookies & Privacy Policy?',
    message: 'We use cookies to improve your web experience. If you continue to browse our website, you acknowledge our use of cookies. For detailed information on how we use cookies, view our...',
    delay: 600,
    expires: 1,
    link: 'privacy-policy.html',
    onAccept: function(){
      var myPreferences = $.fn.ihavecookies.cookie();
      console.log('Yay! The following preferences were saved...');
      console.log(myPreferences);
    },
    uncheckBoxes: true,
    acceptBtnLabel: 'Accept Cookies',
    moreInfoLabel: 'More information',
    cookieTypesTitle: 'Select which cookies you want to accept',
    fixedCookieTypeLabel: 'Essential',
    fixedCookieTypeDesc: 'These are essential for the website to work correctly.'
  }

    $('body').ihavecookies(options);

    if ($.fn.ihavecookies.preference('marketing') === true) {
      console.log('This should run because marketing is accepted.');
    }

    $('#ihavecookiesBtn').on('click', function(){
      $('body').ihavecookies(options, 'reinit');
    });
});





/* code for cookie referrer */

$(document).ready(function(){
if(document.referrer == null || document.referrer == ''){
}else{
var referrer = document.referrer;

/*check for rtrack from googleads*/
const params = new URLSearchParams(window.location.search)
if(params.has("rtrack")){
        referrer = params.get("rtrack");
}
/*rtrack ends*/


str = referrer.match(/emizentech.com/g);
if(str == null || str == ''){
document.cookie = "referrer="+referrer+"; path=/;";
}
}
$('.cookie-test').text(document.cookie);
$('.referrer').text(document.referrer);
});
