$(document).ready(function(){
    //Sticky navbar on scrolling
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // Navbar toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        
    });

    //showing the section while clicked in small screen mode

    $(".navbar li").click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
        
    })

    // Typing animation script

    const typed = new Typed(".typing", {
        strings: ["Application Developer", "Integration Engineer", "Fullstack developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }

        }
    })
})
