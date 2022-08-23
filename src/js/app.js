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
    render($('.product_item-img'), 0, "content-box");

    function slider() {
        $('.slider_full .slider_fill-img:gt(0)').hide();
        console.log($(".slider_full").attr('data-speed'))
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




})

