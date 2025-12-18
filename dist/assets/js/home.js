
    $(function(){ 
        // const isRTL = $("html").attr("dir") == "rtl";
        // initializeSlider(isRTL);

        // $(".lang-switcher").on('click', function(event){
        //         event.preventDefault();
        //     if($("html").attr("dir", "ltr")){
        //         $("html").attr("dir", "rtl");
        //         console.log(isRTL);
        //         initializeSlider(!isRTL);
        //     }
        //     else if($("html").attr("dir", "rtl")){
        //         $("html").attr("dir", "ltr");
        //         initializeSlider(isRTL);
        //     }
                

            // console.log(isRTL);

            // if(){
            //     $("html").attr("dir", "rtl");


              
            // }
            // else{
            //     $("html").attr("dir", "ltr");

               
            // }
        // });
    
        
        

        // $('.testimonial-slider').on('beforeChange', function(event, slick, currentSlide){

        //     $('.students .waveline').css("transform", "translate(-650px, 0px)");

        // });

        // $('.testimonial-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //     console.log('beforeChange triggered'); // Debugging
        //     $('.students .waveline').css("transform", "translate(-650px, 0px)");
        // });
        


        // $('.testimonial-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //     let totalSlides = slick.slideCount; // Total number of slides
        //     let isForward = nextSlide > currentSlide || (currentSlide === totalSlides - 1 && nextSlide === 0);
        //     let isBackward = nextSlide < currentSlide || (currentSlide === 0 && nextSlide === totalSlides - 1);
            
        //     let animateWaveline = $('.students .waveline');
        //     let studentpic = $('.students .student > img');
        //     let studentdescH6 = $('.students .student-desc > h6');

           
        
        //     if (slick.currentSlide == '0' && isForward) {
        //         // Moving forward
        //         animateWaveline.eq(0).css("transform", "translate(-160px, 0px)");
        //         animateWaveline.eq(1).css("transform", "translate(160px, 0px)");

        //         if (window.matchMedia("(min-width: 1861px)").matches) {
        //             studentpic.eq(0).css("filter", "grayscale(1)");
        //             studentpic.eq(1).css("filter", "unset");
                  
        //           }else{
        //             studentpic.eq(0).css("filter", "unset");
        //           }
               
                
        //         // studentdescH6.eq(0).css("font-size","20px")
        //         // console.log(animateWaveline.eq(1));
        //     } else if (slick.currentSlide == '1' && isForward) {
        //         // Moving backward (reverse direction)
        //         animateWaveline.eq(1).css("transform", "translate(-160px, 0px)");
        //         animateWaveline.eq(2).css("transform", "translate(160px, 0px)");
        //         // studentdescH6.eq(0).css("font-size","18px")
        //         // studentdescH6.eq(1).css("font-size","20px")
        //         studentpic.eq(0).css("filter", "grayscale(1)");
        //         studentpic.eq(1).css("filter", "grayscale(1)");
        //         studentpic.eq(2).css("filter", "unset");
        //         // studentpic.eq(3).css("filter", "unset");
        //         // console.log('Moving backward');
        //     } else if (slick.currentSlide == '2' && isForward){
        //         // Moving backward (reverse direction)
        //         animateWaveline.eq(1).css("transform", "translate(160px, 0px)");
        //         animateWaveline.eq(2).css("transform", "translate(-160px, 0px)");
        //         studentpic.eq(2).css("filter", "unset");
        //         studentpic.eq(3).css("filter", "unset");
        //         // studentdescH6.eq(1).css("font-size","18px")
        //         // studentdescH6.eq(2).css("font-size","20px")
        //         // console.log('Moving backward');
        //     }
        //     else if (slick.currentSlide == '2' && isBackward) {
        //         // Moving backward
        //         animateWaveline.eq(1).css("transform", "translate(160px, 0px)");
        //         animateWaveline.eq(2).css("transform", "translate(-160px, 0px)");
        //         studentpic.eq(2).css("filter", "grayscale(1)");
        //         studentpic.eq(3).css("filter", "grayscale(1)");
        //         studentpic.eq(1).css("filter", "unset");
        //         // studentdescH6.eq(1).css("font-size","18px")
        //         // studentdescH6.eq(2).css("font-size","20px")
        //     }
        //     else if (slick.currentSlide == '1' && isBackward) {
        //         // Moving backward
        //         animateWaveline.eq(0).css("transform", "translate(160px, 0px)");
        //         animateWaveline.eq(1).css("transform", "translate(-160px, 0px)");
        //         studentpic.eq(2).css("filter", "grayscale(1)");
        //         studentpic.eq(3).css("filter", "grayscale(1)");
        //         studentpic.eq(0).css("filter", "unset");
        //         studentpic.eq(1).css("filter", "grayscale()");
        //     }
        // });

            $('.testimonial-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                let totalSlides = slick.slideCount; // Total slides
                let isForward = nextSlide >= currentSlide || (currentSlide === totalSlides - 1 && nextSlide === 0);
                let isBackward = nextSlide <= currentSlide || (currentSlide === 0 && nextSlide === totalSlides - 1);

                let animateWaveline = $('.students .waveline');
                let studentpic = $('.students .student > img');

                // Reset everything before applying
                animateWaveline.css("transform", "");
                studentpic.css("filter", "grayscale(1)");

                // Always highlight the active (next) student
                studentpic.eq(nextSlide).css("filter", "unset");

                // Handle waveline animation dynamically
                if (isForward) {
                    // Forward movement: current → next
                    animateWaveline.eq(currentSlide).css("transform", "translate(-160px, 0px)");
                    animateWaveline.eq(nextSlide).css("transform", "translate(160px, 0px)");
                } else if (isBackward) {
                    // Backward movement: current → next
                    animateWaveline.eq(currentSlide).css("transform", "translate(160px, 0px)");
                    animateWaveline.eq(nextSlide).css("transform", "translate(-160px, 0px)");
                }

                // Optional: for large screens, allow the previous slide to stay colored
                if (window.matchMedia("(min-width: 1861px)").matches) {
                    studentpic.eq(currentSlide).css("filter", "grayscale(1)");
                    studentpic.eq(nextSlide).css("filter", "unset");
                }
            });

            $('.testimonial-slider').on('afterChange', function(event, slick, currentSlide){
                let $items = $('.students');
                let $targetItem = $items.find('.student').eq(currentSlide);


                if (currentSlide > 3) {
                    // Scroll so that the current item is visible
                    $items.animate({
                    scrollTop: $items.scrollTop() + 
                                $targetItem.position().top
                    }, 400);
                }else{
                    $items.animate({
                    scrollTop: 0
                    }, 400);
                }
            }, );
        
    });

    $(function () {
        // Initialize the slider
        function initializeSlider() {
            const isRTL = $('html').attr('dir') === 'rtl';
            //   $('.video-slider').slick({
            //     autoplay: false,
            //     autoplaySpeed: 2000,  // Change slide every 2 seconds
            //     dots: true,           // Show navigation dots
            //     arrows: false,         // Show next/prev arrows
            //     infinite: true,       // Infinite looping
            //     speed: 500,
            //     rtl:isRTL         // Slide transition speed
            //     });

            //     $('.video-slider').on('afterChange', function(){
            //         let currentSlide = $('.video-slider').slick('slickCurrentSlide');
            //         console.log(currentSlide);
            //     })

            //     $(".videoContent button.play-pause").on('click',function (event) {

            //         event.preventDefault();
        
            //         let video = $(".video-slider video"); // Get video element
            //         let currentIndex = $('.video-slider').slick('slickCurrentSlide') + 1;
                
            //         if (video.attr("autoplay")){
            //             video.removeAttr("autoplay"); // Remove autoplay
            //             video[currentIndex].pause();
            //             $(this).html("<img class='play' src='assets/images/play-icon.png' alt='play'/>");
                    
            //         } else {
            //             video.attr("autoplay", "autoplay"); // Add autoplay
            //             video[currentIndex].play();
            //             $(this).html("<img src='assets/images/pause-03.png' alt='pause'/>");
            //         }
            
            //     });

        $('.partners .partners-logo-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,  // Change slide every 2 seconds
            dots: false,           // Show navigation dots
            arrows: false,         // Show next/prev arrows
            infinite: true,       // Infinite looping
            speed: 3000,
            slidesToShow: 6,
            slidesToScroll: 3, 
            rtl:isRTL, 
            responsive:[
                {
                    breakpoint: 1428,
                    settings: {
                        slidesToShow:4,
                        slidesToScroll:4, 
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow:3,
                        slidesToScroll:3, 
                    }
                },  
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:2,
                        slidesToScroll:3, 
                    }
                },  
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow:1,
                        slidesToScroll:1, 
                    }
                }   
                
            ]
        })
            

        $('.testimonial-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,  // Change slide every 3 seconds
            dots: true,           // Show navigation dots
            arrows: true,         // Show next/prev arrows
            infinite: false,       // Infinite looping
            speed: 2000,
            slidesToShow: 1.3,
            slidesToScroll: 1, 
            rtl:isRTL,           
            responsive:[
                    {
                        breakpoint: 1917,
                        settings: {
                            slidesToShow:1.1,
                        }
                    },
                    {
                        breakpoint: 1880,
                        settings: {
                            slidesToShow:1,
                        }
                    },  
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow:1,
                        }
                    }  
                    // {
                    //     breakpoint: 965,
                    //     settings: {
                    //         slidesToShow:1.7,
                    //     }
                    // },  
                    // {
                    //     breakpoint: 812,
                    //     settings: {
                    //         slidesToShow:1.4,
                    //     }
                    // },  
                    // {
                    //     breakpoint: 767,
                    //     settings: {
                    //         slidesToShow:1.3,
                    //     }
                    // },  
                    // {
                    //     breakpoint: 621,
                    //     settings: {
                    //         slidesToShow:1,
                    //     }
                    // }   
                    
            ]
            });
            $('.successStories').slick({
                autoplay: false,
                autoplaySpeed: 2000,  // Change slide every 2 seconds
                dots: false,           // Show navigation dots
                arrows: true,         // Show next/prev arrows
                infinite: false,       // Infinite looping
                speed: 500, 
                rtl:isRTL, 

                responsive:[
                    {
                        breakpoint: 1400,
                        settings: {
                            arrows:false,
                            dots:true
                        }
                    },
                ]



            });
            $('.successStories').on('wheel', function (e) {
                e.preventDefault();

                if (e.originalEvent.deltaY < 0) {
                // Scroll up → Previous slide
                $(this).slick('slickPrev');
                } else {
                // Scroll down → Next slide
                $(this).slick('slickNext');
                }
            });
            $('.cards-slider').slick({
                autoplay: false,
                autoplaySpeed: 2000,  // Change slide every 2 seconds
                dots: true,
                rows:2,           // Show navigation dots
                slidesToShow: 3,
                slidesToScroll: 3, 
                arrows: true,         // Show next/prev arrows
                infinite: false,       // Infinite looping
                speed: 500, 
                rtl:isRTL, 

                responsive:[
                    {
                        breakpoint: 1650,
                        settings: {
                            arrows:false,
                            dots:true
                        }
                    },
                    {
                        breakpoint: 1450,
                        settings: {
                            slidesToShow:2,
                            slidesToScroll:2,
                            arrows:false,
                            dots:true
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow:1,
                            slidesToScroll:1,
                            arrows:false,
                            dots:true
                        }
                    },
                ]



            });
            $('.certificates-slider').slick({
                autoplay: true,
                autoplaySpeed: 1000,  // Change slide every 2 seconds
                dots: true,           // Show navigation dots
                slidesToShow: 3,
                slidesToScroll: 1, 
                arrows: true,         // Show next/prev arrows
                infinite: false,       // Infinite looping
                speed: 200, 
                rtl:isRTL, 

                responsive:[
                    {
                        breakpoint: 1700,
                        settings: {
                            
                            arrows:false,
                           
                        }
                    },
                    {
                        breakpoint: 1432,
                        settings: {
                            slidesToShow:2.3,
                            arrows:false,
                          
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow:2,
                            arrows:false,
                         
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow:1,
                            arrows:false,
                            dots:true
                        }
                    },
                    
                ] 
            });
            $(".dashboard-home .nav .nav-item").on('click', function(){
                $('.certificates-slider').slick("unslick");
                $('.cards-slider').slick("unslick");
                $('.certificates-slider').slick({
                    autoplay: true,
                    autoplaySpeed: 1000,  // Change slide every 2 seconds
                    dots: true,           // Show navigation dots
                    slidesToShow: 3,
                    slidesToScroll: 1, 
                    arrows: true,         // Show next/prev arrows
                    infinite: false,       // Infinite looping
                    speed: 200, 
                    rtl:isRTL, 
    
                    responsive:[
                        {
                            breakpoint: 1700,
                            settings: {
                                
                                arrows:false,
                               
                            }
                        },
                        {
                            breakpoint: 1432,
                            settings: {
                                slidesToShow:2.3,
                                arrows:false,
                              
                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow:2,
                                arrows:false,
                             
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow:1,
                                arrows:false,
                                dots:true
                            }
                        },
                        
                    ] 
                });
                $('.cards-slider').slick({
                    autoplay: false,
                    autoplaySpeed: 2000,  // Change slide every 2 seconds
                    dots: true,
                    rows:2,           // Show navigation dots
                    slidesToShow: 3,
                    slidesToScroll: 3, 
                    arrows: true,         // Show next/prev arrows
                    infinite: false,       // Infinite looping
                    speed: 500, 
                    rtl:isRTL, 
    
                    responsive:[
                        {
                            breakpoint: 1650,
                            settings: {
                                arrows:false,
                                dots:true
                            }
                        },
                        {
                            breakpoint: 1450,
                            settings: {
                                slidesToShow:2,
                                slidesToScroll:2,
                                arrows:false,
                                dots:true
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow:1,
                                slidesToScroll:1,
                                arrows:false,
                                dots:true
                            }
                        },
                    ]
    
    
    
                });

            });
            $('.marketing-slider').slick({
                
                autoplay: false,
                autoplaySpeed: 2000,  // Change slide every 2 seconds
                dots: false,           // Show navigation dots
                slidesToShow: 3.05,
                slidesToScroll: 1, 
                arrows: false,         // Show next/prev arrows
                infinite: false,       // Infinite looping
                speed: 500, 
                adaptiveHeight:true,
                rtl:isRTL, 

                responsive:[
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 2.5,
                            arrows:false,
                            dots:false
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            arrows:false,
                            dots:false
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            arrows:false,
                            dots:false
                        }
                    },
                ] 
            })
        }

        initializeSlider();

        // Initial slider setup
       
        
        $(`.story-wrapper-01 .story-single`).on('click', function(){
            $('.story-wrapper-01 .story-single').removeClass("story-expanded");
            $('.story-wrapper-01 .story-single').addClass("story-collapse");
            
            if($('.story-single').hasClass('story-collapse')){
                $(this).removeClass('story-collapse');
                $(this).addClass('story-expanded');
                $(this).css('background-position', 'bottom right !important');

            }
            else{
                $(this).addClass('story-collapse');
                $(this).css('background-position', 'bottom center !important');
            }

        });
        $('.story-wrapper-02 .story-single').on('click', function(){
            
            $('.story-wrapper-02 .story-single').removeClass("story-expanded");
            $('.story-wrapper-02 .story-single').addClass("story-collapse");
            
            if($('.story-single').hasClass('story-collapse')){
                $(this).removeClass('story-collapse');
                $(this).addClass('story-expanded');
                $(this).css('background-position', 'bottom right !important');

            }
            else{
                $(this).addClass('story-collapse');
                $(this).css('background-position', 'bottom center !important');
            }
            

        });


       
        



        

        // Switch language button click event
        $(".lang-switcher").on('click', function () {
          const htmlElement = $('html');
          const isRTL = htmlElement.attr('dir') === 'rtl';
          htmlElement.attr('dir', isRTL ? 'ltr' : 'rtl');
        //   if($(this).text('العربية')){
        //     $(this).text('EN');
        //   }
        //   else{
        //     $(this).text('العربية');
        //   }
            
          // Destroy the current slider
          $('.testimonial-slider').slick('unslick');
          $('.video-slider').slick('unslick');
          $('.successStories').slick('unslick');
         
          // Reinitialize the slider with the new direction
          initializeSlider();
        });
    });


    $(".number").on('click', function(){

        $(".stage-popup-wrapper").toggleClass('showPopup');

    });
    

    

    $('.cross').on('click', function(){

        $(".stage-popup-wrapper").toggleClass('showPopup');

    });


    $(".number").on("click", function(){
        $(".full-page-overlay").toggleClass("d-none")
        $(".full-page-overlay").toggleClass("d-block")
    });


    $('.cross').on('click', function(){
        $(".full-page-overlay").toggleClass("d-none")
        $(".full-page-overlay").toggleClass("d-block")

    });

    $(".filter-btn").on('click', function(){

        $(".filter-box").toggleClass('showFilterBox');
        $(".full-page-overlay-filter").toggleClass("d-none")
        $(".full-page-overlay-filter").toggleClass("d-block")

    });
    $(".full-page-overlay-filter").on('click', function(){

        $(".filter-box").toggleClass('showFilterBox');
        $(".full-page-overlay-filter").toggleClass("d-none");
        $(".full-page-overlay-filter").toggleClass("d-block");

    });


    var checkboxes = document.querySelectorAll('.checkboxes-wrapper input[type="checkbox"]')

    checkboxes.forEach(checkbox => {

    checkbox.addEventListener('change', function(){
    if (this.checked) {
          this.closest('.checkboxes-wrapper').querySelector('label').style.backgroundColor = 'rgba(153, 153, 153, 1)';
          this.closest('.checkboxes-wrapper').querySelector('label').style.color = 'white';
        } else {
          this.closest('.checkboxes-wrapper').querySelector('label').style.backgroundColor = '';
          this.closest('.checkboxes-wrapper').querySelector('label').style.color = 'rgba(153, 153, 153, 1)';
        }

    })

});

   

