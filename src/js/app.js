
$(document).ready(function () {
    let imgElement = $('.slider_fill-img');
    let imgElementLength = $('.slider_fill-img').length;
    function render(element, height, backgroundClip) {
        $(element).each(function (index, value) {
            let url = $(value).attr('data-bg-image');
            $(value).children("img").attr('src',url)
        });
        $(".slider_full").attr('data-active', 1);
        $(".slider_full").attr('data-speed', 2000);
    };

    render('.product_item-img',);
    render('.project-img');
    render('.project-outstanding_item')

    function slider() {
        $('.slider_full .slider_fill-img:gt(0)').hide();
        $(".slider_full").attr('data-speed')
        setInterval(function () {
            $(".slider_full :first-child").fadeOut().next('.slider_fill-img').fadeIn().end().appendTo('.slider_full')
        }, $(".slider_full").attr('data-speed'))
    }
    slider()

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

        if (scroll < 36) {
            $('.site').removeClass("scroll-menu")
        };
    });

    $(".header-search").click(function () {

        $(".header-search_search").toggle("500", "linear");

    })
    var pc = 1024; // PC screen size.
    var tablet = 720; // Tablet screen size.
    var phone = 320; // Phone screen size.

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
    $(".menu-item").after().click(function() {
        $(".sub-menu").removeClass("show")
        $(this).children(".sub-menu").addClass("show")
    })

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

});

