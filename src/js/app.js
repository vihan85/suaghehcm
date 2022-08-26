$(document).ready(function () {
    let imgElement = $('.slider_fill-img');
    let imgElementLength = $('.slider_fill-img').length;

    function render(element, valueTransform, backgroundClip) {

        $(element).each(function (index, value) {
            let url = $(value).attr('data-bg-image');
            $(value).css({ "background": "url(" + url + ")", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center", "background-clip": backgroundClip });
        });
        $(".slider_full").attr('data-active', 1);
        $(".slider_full").attr('data-speed', 2000);

    };

    render('.slider_fill-img');
    render('.product_item-img', 0, "content-box");
    render('.project-img');
    render('.project-outstanding_background');

    
    // function slider() {
    //     $('.slider_full .slider_fill-img:gt(0)').hide();
    //     console.log($(".slider_full").attr('data-speed'))
    //     setInterval(function () {
    //         $(".slider_full :first-child").fadeOut(4000).next('.slider_fill-img').fadeIn(4000).end().appendTo('.slider_full')
    //     }, $(".slider_full").attr('data-speed'))
    // }
    // slider()


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


    var heightMenu = $('.site-header').outerHeight();
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        
    
        if(scroll >400) {
            $('.site-header').addClass("scroll-menu")
            $('.header-top').css("display","none")
            $(".scroll-menu").css("top", "-100px")
            $('.site-header').css({"transform": "translateY(100px)", "transition": "transform 2s"})
            

        }else if(scroll <300) {
            // $('.site-header').removeClass("scroll-menu").css("position", "absolute")
            // if(!$('.site-header').hasClass("scroll-menu")) {
            //     // $('.header-top').css("position", "relative")
            //     console.log('test')
            // }
            
            $('.header-top').css("display","")
            $('.site-header').css({"top":"0","transform": "translateY(36px)", "transition": "transform 3s"})
            // $('.site-header').css({"top": "0" , "transition": "top 0.5s"})

        
        }
    });


})

