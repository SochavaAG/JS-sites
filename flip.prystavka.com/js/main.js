jQuery(document).ready(function($) {
    var dragging = false,
      scrolling = false,
      resizing = false;
    var imageComparisonContainers = $('.cd-image-container');
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function() {
        if (!scrolling) {
            scrolling = true;
            (!window.requestAnimationFrame) ? setTimeout(function() {
                checkPosition(imageComparisonContainers);
            }, 100) : requestAnimationFrame(function() {
                checkPosition(imageComparisonContainers);
            });
        }
    });
    imageComparisonContainers.each(function() {
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });
    $(window).on('resize', function() {
        if (!resizing) {
            resizing = true;
            (!window.requestAnimationFrame) ? setTimeout(function() {
                checkLabel(imageComparisonContainers);
            }, 100) : requestAnimationFrame(function() {
                checkLabel(imageComparisonContainers);
            });
        }
    });
    function checkPosition(container) {
        container.each(function() {
            var actualContainer = $(this);
            if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });
        scrolling = false;
    }
    function checkLabel(container) {
        container.each(function() {
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });
        resizing = false;
    }
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousemove vmousemove", function(e) {
            dragElement.addClass('draggable2');
            resizeElement.addClass('resizable');
            var dragWidth = dragElement.outerWidth(),
              xPosition = dragElement.offset().left + dragWidth - e.pageX,
              containerOffset = container.offset().left,
              containerWidth = container.outerWidth(),
              minLeft = containerOffset + 10,
              maxLeft = containerOffset + containerWidth - dragWidth - 10;
            dragElement.parents().on("mousemove vmousemove", function(e) {
                if (!dragging) {
                    dragging = true;
                    (!window.requestAnimationFrame) ? setTimeout(function() {
                        animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
                    }, 100) : requestAnimationFrame(function() {
                        animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
                    });
                }
            }).on("mouseup vmouseup", function(e) {
                dragElement.removeClass('draggable2');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function(e) {
            dragElement.removeClass('draggable2');
            resizeElement.removeClass('resizable');
        });
    }
    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
        var leftValue = e.pageX + xPosition - dragWidth;
        if (leftValue < minLeft) {
            leftValue = minLeft;
        } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
        }
        var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';
        $('.draggable2').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable2');
            resizeElement.removeClass('resizable');
        });
        $('.resizable').css('width', widthValue);
        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging = false;
    }
    function updateLabel(label, resizeElement, position) {
        if (position == 'left') {
            (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
        } else {
            (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
        }
    }
});
function steps(id) {
    $('.st').addClass('hidden');
    $('.step').removeClass('active');
    $('#st' + id).removeClass('hidden');
    $('.step').eq(id - 1).addClass('active');
}
function steps2(id) {
    $('#review .slider2').addClass('hidden2');
    $('.step-2').removeClass('active');
    $('#review .slider2').eq(id - 1).removeClass('hidden2');
    $('.step-2').eq(id - 1).addClass('active');
    $('#review .slider2').eq(id - 1).slick('reinit');
}
function choose(id) {
    $('.choose').removeClass('active');
    $('.choose').eq(id - 1).addClass('active');
}
function choose2(id) {
    $('.choose-2').removeClass('active');
    $('.choose-2').addClass('hidden');
    $('.choose-2').eq(id - 1).removeClass('hidden');
    $('.choose-2').eq(id - 1).addClass('active');
}
function faq(id) {
    $('.faq').eq(id - 1).toggleClass('active');
}
$(document).on('ready', function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider2').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider3').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('#slider2').slick({
        slidesToShow: 4,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                  settings: {
                    slidesToShow: 2
                  }
            },
            {
                  breakpoint: 570,
                  settings: {
                    slidesToShow: 1
                  }
            }
        ]
    }); 
    if ($(window).width() >= '960'){
        $('#slider2 .slick-slide').css('padding', '0');
        $('#slider2 .slick-active').eq(1).css('padding', '0 5px');
        $('#slider2 .slick-active').eq(2).css('padding', '0 5px');
    }
});
$('#slider2').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if ($(window).width() >= '960'){
      $('#slider2 .slick-slide').css('padding', '0');
      $('#slider2 .slick-active').eq(1).css('padding', '0 5px');
      $('#slider2 .slick-active').eq(2).css('padding', '0 5px');
    }
});
