
$(document).ready(function () {
    let imgElement = $('.slider_fill-img');
    let imgElementLength = $('.slider_fill-img').length;

    function render(element, height, backgroundClip) {
        
        $(element).each(function (index, value) {
            let url = $(value).attr('data-bg-image');
            $(value).css({ "background": "url(" + url + ")", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center", "background-clip": backgroundClip, "padding-top": height });
        });
        $(".slider_full").attr('data-active', 1);
        $(".slider_full").attr('data-speed', 2000);

    };

    render('.slider_fill-img', "33.333%");
    render('.product_item-img', 0, "content-box");
    render('.project-img');
    render('.project-outstanding_item');
    render('.project-outstanding_background');

    function slider() {
        $('.slider_full .slider_fill-img:gt(0)').hide();
        $(".slider_full").attr('data-speed')
        setInterval(function () {
            $(".slider_full :first-child").fadeOut().next('.slider_fill-img').fadeIn().end().appendTo('.slider_full')
        }, $(".slider_full").attr('data-speed'))
    }
    slider()


    // setInterval(function () {
    //     var index = $(".slider_full").attr('data-active');        
    //     var left = $($('.slider_fill-img')[Number(index)]).css('left');

    //     if (Number(index) == 0) {
    //         $($('.slider_fill-img:first')).css('left', 0);
    //         $($('.slider_fill-img:last')).css('left', "200%");
    //     }

    //     $(".slider_full").css('transform', "translateX(" + "-" +  left + ")");

    //     if(Number(index) >= imgElementLength - 1) {
    //         $($('.slider_fill-img:first')).css('left', imgElementLength + "00%")
    //         $($('.slider_fill-img:last')).css('left', "-100%")
    //     }
    //     index = index >= imgElementLength - 1 ? 0 : Number(index) + 1;

    //     $(".slider_full").attr('data-active', index);
    // }, $(".slider_full").attr('data-speed'));


    var heightMenu = $('.main-header').outerHeight();
    
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        $(".main-header").css("top", "-" + heightMenu + "px")

        if (scroll > heightMenu) {
            $('.site').addClass("scroll-menu")
        }

        if (scroll < heightMenu ) {
            $(".main-header").attr('style', 'top: -'+ heightMenu +'px !important');
        }

        if (scroll < 36) {
            $('.site').removeClass("scroll-menu")
        };
    });





    $(".header-search").click(function() {

        $(".header-search_search").toggle("500", "linear" );
        
    })
    //slick 
    $(document).ready(function(){
        $('.slider_full-slick').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false
        });

        
        var pc = 1024; // PC screen size.
        var tablet = 720; // Tablet screen size.
        var phone = 320; // Phone screen size.
        if ($(window).width() < 420) {

            $('.products_wrapper').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 3
            });
        } else {

            $('.products_wrapper-mobile').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            });
        }
      });

    





// btn-menu-click

    $('.btn-menu').click(function () {
        $('.site').toggleClass('btn-menu--acctive')
        if($('.site').hasClass('btn-menu--acctive')) {
            
            $(".menu-header-container-overlay").click(function() {
                $('.site').removeClass('btn-menu--acctive')
            })
        }
    })
    

    $('.menu-item').click(function() {
        $(".sub-menu--acctive").toggle(500);
    })

});

