/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Rescaf - Food & Restauratn Template
    Version         : 1.1
    
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', async function() {


        
        

        /* ==================================================
            # Wow Init
         ===============================================*/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();


        /* ==================================================
            # Smooth Scroll
         ===============================================*/
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


        /* ==================================================
            # Banner Animation
        ===============================================*/
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $immortalCarousel = $('.animate_text'),
            $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //Initialize carousel
        $immortalCarousel.carousel();
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
        //Other slides to be animated on carousel slide event
        $immortalCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });


        /* ==================================================
            # Equal Height Init
        ===============================================*/
        $(window).on('resize', function() {
            $(".equal-height").equalHeights();
        });

        $(".equal-height").equalHeights().find("img, iframe, object").on('load', function() {
            $(".equal-height").equalHeights();
        });


        /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();


        // Data filter untuk setiap kategori
        const filters = [
            { name: "Semua Menu", class: "*" },
            { name: "Nasi", class: ".nasi" },
            { name: "Berkuah", class: ".berkuah" },
            { name: "Sayuran", class: ".sayuran" },
            { name: "Snack", class: ".snack" },
            { name: "Ayam", class: ".ayam" },
            { name: "Ikan", class: ".ikan" },
            { name: "Daging", class: ".daging" },
            { name: "Gorengan", class: ".gorengan" },
            { name: "Minuman", class: ".minuman" },
            { name: "Kopi", class: ".kopi" },
        ];

        // Ambil elemen menu
        const mixItemMenu = document.getElementById("mixItemMenu");

        // Loop melalui setiap filter dan buat tombol
        filters.forEach(filter => {
            const button = document.createElement("button");
            button.textContent = filter.name;
            button.setAttribute("data-filter", filter.class);
            mixItemMenu.appendChild(button);
        })

        const firstButton = mixItemMenu.querySelector('button');
        if (firstButton) {
            firstButton.classList.add("active");
        }

        $('.menu-carousel').owlCarousel({
            loop: true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                600: {
                    items: 5,
                    margin: 10
                },
                1000: {
                    items:6,
                    margin:0
                }
            },
            autoplay: false,
        });

        /* ==================================================
            # imagesLoaded active
        ===============================================*/
        $('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            const buttons = document.querySelectorAll(".mix-item-menu .owl-stage button");
            buttons.forEach(function(button) {
                button.addEventListener("click", function() {
                    buttons.forEach(function(btn) {
                        btn.classList.remove("active");
                    });

                    this.classList.add("active");
                });
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });

        });


         /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });


        /* ==================================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.magnific-mix-gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-iframe')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });

        /* ==================================================
            # Content Carousel
         ===============================================*/
        $('.content-carousel').owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });

        /* ==================================================
            # Offer Carousel
         ===============================================*/
        $('.offer-carousel').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });


        /* ==================================================
            # Services Carousel
         ===============================================*/
        $('.services-carousel').owlCarousel({
            loop: false,
            margin: 15,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* ==================================================
            #  Testimonials Carousel
         ===============================================*/
        $('.testimonials-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });

        /* ==================================================
            # Food Menu Carousel
         ===============================================*/
        $('.food-menu-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items:3
                }
            }
        });

        /* ==================================================
            # Banner Carousel
         ===============================================*/
         $('.banner-pantun-carousel').owlCarousel({
            loop: true,
            navigation:true,
            dots: true,
            items: 1,
            autoplay: true,
            
        });

        // const items = [
        //     { filter: ".nasi", imgSrc: "assets/img/icon/Nasi.svg", text: "Nasi" },
        //     { filter: ".kuah", imgSrc: "assets/img/icon/Bakmi & Soto.svg", text: "Berkuah" },
        //     { filter: ".sayur", imgSrc: "assets/img/icon/Sayuran.svg", text: "Sayuran" },
        //     { filter: ".snack", imgSrc: "assets/img/icon/Snack.svg", text: "Snack" },
        //     { filter: ".ayam", imgSrc: "assets/img/icon/033-fried chicken.svg", text: "Ayam" },
        //     { filter: ".ikan", imgSrc: "assets/img/icon/071-tom yum.svg", text: "Ikan" },
        //     { filter: ".daging", imgSrc: "assets/img/icon/023-curry.svg", text: "Daging" },
        //     { filter: ".gorengan", imgSrc: "assets/img/icon/028-empanada.svg", text: "Gorengan" },
        //     { filter: ".minuman", imgSrc: "assets/img/icon/Minuman.svg", text: "Minuman" },
        //     { filter: ".kopi", imgSrc: "assets/img/icon/001-afternoon tea.svg", text: "Kopi" }
        // ];
        
        // const menuCarousel = document.getElementById("menu-carousel");
        // items.forEach(item => {
        //     const link = document.createElement("a");
        //     link.href = "#";
        //     link.classList.add("item");
        //     link.setAttribute("data-filter", item.filter);
            
        //     const img = document.createElement("img");
        //     img.src = item.imgSrc;
        //     img.style.height = "fit-content";
        //     img.style.maxHeight = "100px";
        //     img.alt = "Image";
        //     img.height = 100;
        
        //     const div = document.createElement("div");
        //     div.classList.add("text-center");
        //     div.style.fontSize = "smaller";
        //     div.textContent = item.text;
        
        //     link.appendChild(img);
        //     link.appendChild(div);
            
        //     menuCarousel.appendChild(link);
        // });



        // let isOpenMenu = false;
        // const buttonMenu = document.getElementById("allMenu");
        // buttonMenu.addEventListener("click",(e)=>{
        //     e.preventDefault();
        //     if(isOpenMenu){
        //         isOpenMenu = false;
        //         buttonMenu.textContent = "Lihat Semua";
        //         menuCarousel.classList.add("fade-in");
        //         menuCarousel.classList.remove("fade-out");
        //         menuCarousel.classList.remove("hidden");
        //     } else {
        //         isOpenMenu = true;
        //         buttonMenu.textContent = "Tutup";
        //         menuCarousel.classList.remove("fade-in");
        //         menuCarousel.classList.add("fade-out");
        //         menuCarousel.classList.add("hidden");
        //     }
            
        // })

        


        /* ==================================================
            Preloader Init
         ===============================================*/
        // $('#preloader').addClass('loading');
        $(window).on('load', function () {
            setTimeout(function () {
            $('#preloader').fadeOut(500, function () {
                $('#preloader').removeClass('loading');
            });
            }, 500);
        });


        /* ==================================================
            Nice Select Init
         ===============================================*/
        $('select').niceSelect();


        /* ==================================================
            Contact Form Validations
        ================================================== */
        $('.contact-form').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .after('<img src="assets/img/ajax-loader.gif" class="loader" />')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            phone: $('#phone').val(),
                            comments: $('#comments').val()
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('.contact-form img.loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                        }
                    );
                });
                return false;
            });
        });

    }); // end document ready function
})(jQuery); // End jQuery