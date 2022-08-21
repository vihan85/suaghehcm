$(document).ready(function () {
    let imgElement = $('.slider_fill-img');
    let imgElementLength = $('.slider_fill-img').length;

    function slider() {
        let valueTransform = 0;
        $('.slider_fill-img').each(function (index, value) {
            let url = $(value).attr('data-bg-image');
            $(value).css({ "background": "url(" + url + ")", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center", "left": valueTransform + "%" });
            valueTransform = valueTransform + 100;
        });
        $(".slider_full").attr('data-active', 1);
        $(".slider_full").css('transform', "translateX(0%)");

    };

    slider();
            
    
    setInterval(function () {
        var index = $(".slider_full").attr('data-active');        

        var right = $($('.slider_fill-img')[Number(index)]).css('right');

        $(".slider_full").css('transform', "translateX(" + right + ")");

        index = index >= imgElementLength - 1 ? 0 : Number(index) + 1;
        $(".slider_full").attr('data-active', index);

    }, 6000);

}) 
