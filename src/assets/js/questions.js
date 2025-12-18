
$(
    function() {
        $(".subject").on('click',function() {
            $(".subject").removeClass("active"); // Remove 'active' from all links
            $(this).addClass("active");   // Add 'active' to the clicked link
        });
        $("label").on('click',function() {

                $(this).toggleClass("active"); // Remove 'active' from all links
         
                // $("label").addClass("active");   // Add 'active' to the clicked link  
        });
      


    
    }

   
)

$(".btn-wrapper .submit-btn").on('click', function(){

    $(".stage-popup-wrapper").toggleClass('showPopup');

});


$('.stage-popup-wrapper .cross').on('click', function(){
    $(".stage-popup-wrapper").toggleClass('showPopup');
});


$(".btn-wrapper .submit-btn").on("click", function(){
    $(".full-page-overlay").toggleClass("d-none")
    $(".full-page-overlay").toggleClass("d-block")
});


$('.stage-popup-wrapper .cross').on('click', function(){
   
    $(".full-page-overlay").toggleClass("d-none")
    $(".full-page-overlay").toggleClass("d-block")

});