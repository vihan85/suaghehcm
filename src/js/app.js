
$(document).ready(function () {
    var heightMenu = $('.main-header').outerHeight();
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        $(".main-header").css("top", "-" + heightMenu + "px")

        if (scroll > heightMenu) {
            $('.site').addClass("scroll-menu")
        }

        if (scroll < heightMenu) {
            $(".main-header").attr('style', 'top: -' + heightMenu + 'px !important');
        }

        if (scroll < heightMenu) {
            $('.site').removeClass("scroll-menu")
        };
    });

    $(".header-search").click(function () {

        $(".header-search_search").toggle("500", "linear");

    })

    // btn-menu-click
    $('.btn-menu').click(function () {
        $('.site').toggleClass('btn-menu--acctive')
        if ($('.site').hasClass('btn-menu--acctive')) {

            $(".menu-header-container-overlay").click(function () {
                $('.site').removeClass('btn-menu--acctive')
                $('.sub-menu').removeClass("show")
            })
        }
    })

    //show submennu mobile and tablet
    $(".menu-item_icon-down").click(function() {
        $(this).parent().children(".sub-menu").toggleClass("show")
        $(this).toggleClass('menu-item_icon-up')
        $(this).toggleClass('menu-item_icon-down')
    });

    //slick
    $('.slider_full-slick').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.slider_full-slick').addClass('acctive')

    //slick products_wrapper
    $('.products_wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }

        ]
    })
});

