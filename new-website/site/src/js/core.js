$(function() {
    // Show dropdown when clicked
    $('#header-btn').on('click', function(e) {
        $('#header-menu').toggleClass('active');
        $('.nav-btn').toggleClass('active');
    });

    // Hide menu after clicking menu item
    $('.dropdown-menu li').on('click', function(e) {
        $('#header-menu').removeClass('active');
        $('.nav-btn').removeClass('active');
    });

    // scroll body to 0px on click
    $('#back-top').click(function () {
        $('body,html').animate({
          scrollTop: 0 
        }, 800);
        return false;
    });
});

// fade in/out on scroll #scroll-top and navbar

$(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
        $('#scroll-down').fadeOut();
        $('#navbar-desktop').addClass('nav-shrink');
    }else{
        $('#navbar-desktop').removeClass('nav-shrink');
    }
});

if($(window).scrollTop() > 20){
    $('#navbar-desktop').addClass('nav-shrink');
    $('#scroll-down').fadeOut();
}

// Back to top on scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('#back-top').fadeIn();

    }else{
        $('#back-top').fadeOut();
    }
});

if($(window).scrollTop() > 50){
    $('#back-top').fadeIn();
    $('#back-top').css('display', 'flex');
}else{
    $('#back-top').fadeOut();
}

// AOS.init();
  
$(window).load(function(){

    $('.main-container').addClass('fade'); 
});

// if page 

// if ($('.page.homepage').length > 0){
//     var slideHeight = $('#dp-slider .dp_item:first-child').height();
//     $('#dp-slider').height(slideHeight);
// }