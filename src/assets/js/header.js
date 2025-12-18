$(function(){

    $(".nav-icon").on("click", function(){
        console.log("clicked");
        $("header nav").toggleClass("nav-height");
        $(".video-slider").toggleClass("videoSliderMargin");
    });
    $('.close').on('click', function(){
        console.log("clicked");
        $(".purchase-major-guide").css("top","-600px")
        $(".full-page-overlay").toggleClass("d-none")
        $(".full-page-overlay").toggleClass("d-block")

    });

    $(".purchase-btn-wrapper").on("click", function(){
        console.log("clicked");
        $(".purchase-major-guide").css("top","212px");
        $(".full-page-overlay").toggleClass("d-none")
        $(".full-page-overlay").toggleClass("d-block")
    });


});



$(".header-dashboard .searchInput").on('click', function(){
    $(".search-box").css('transform','translate(0, 0)');
    $(".header-content-wrapper").css('border-radius', '0');
    $(this).css('display', 'none');
});

$(".search-box .cross-searchBox").on('click', function(){
    $(".search-box").css('transform','translate(0, -700px)');
    $(".header-content-wrapper").css('border-radius', '0 0 50px 50px');
    $(".header-dashboard .searchInput").css('display', 'block');
});

$(function() {
    $('.password-field .eye-icon').on('click', function() {
        let passwordField = $(this).next('.password-textBox');
        let icon = $(this).find('.eye-icon');

        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text'); // Show password
            icon.removeClass('fa-eye').addClass('fa-eye-slash'); // Change icon
        } else {
            passwordField.attr('type', 'password'); // Hide password
            icon.removeClass('fa-eye-slash').addClass('fa-eye'); // Change icon back
        }
    });

   
});


$(document).ready(function() {
    // Ensure Bootstrap JS is loaded before using it
    if (typeof bootstrap !== 'undefined') {
        if (!localStorage.getItem('modalShown')) {
            var myModal = new bootstrap.Modal(document.getElementById('firstVisitModal'));
            myModal.show();
            localStorage.setItem('modalShown', 'true');
        }
    } else {
        console.error("Bootstrap is not loaded properly.");
    }
});


         