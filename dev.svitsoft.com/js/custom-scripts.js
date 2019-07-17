(function ($) {
    var points = [],
            t = 1,
            curPercent = 0;

    $(function () {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        var $partners = $('.partners-logo').find('img'),
                inputs = '.contact-form input:not([type=submit]), .contact-form textarea',
                $masonry = $('.massonry-grid');

//        $partners.addClass('grayscale').addClass('grayscale-fade');

        $masonry.imagesLoaded(function () {
            $masonry.masonry({
                // set itemSelector so .grid-sizer is not used in layout 
                itemSelector: '.grid-item',
                // use element for option
                columnWidth: '.grid-item',
                percentPosition: true
            });
        });

        $(document).on('focusin focusout', inputs, function () {
            $(this).closest('.form-line').toggleClass('focused');
        });


        /* toggle-button */
        $('.navbar-ex1-collapse').on('show.bs.collapse hide.bs.collapse', function () {
            var $menu = $(this);

            $menu.closest('.site-navigation-inner').children('.ch-hamburger--menu').toggleClass('open');
        });
        $('.navbar-ex1-collapse').on('show.bs.collapse', function () {
            var $menu = $(this);

            $menu.closest('.site-navigation-inner').children('.ch-hamburger--menu').addClass('open');
        });
        /* end toggle-button */


        /* Canvas draw */
        var $canvasWrapper = $('[data-role=canvas-wrapper]'),
                $actionSection = $canvasWrapper.closest('section'),
                trigger = $actionSection.attr('id');

//        $canvasWrapper.imagesLoaded(function () {
//            setTimeout(function () {
//                $canvasWrapper.drawLines();
//            }, 2000);
//        });
      
        
        // init controller
        var controller = new ScrollMagic.Controller();

        // build scene
        new ScrollMagic.Scene({triggerElement: "#" + trigger, duration: 200})
                .addTo(controller)
//                .addIndicators()
                .on("enter", function (e) {
                    $canvasWrapper.drawLines();
                });


        $('[data-action=slick]').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
//                {
//                    breakpoint: 600,
//                    settings: {
//                        slidesToShow: 2,
//                        slidesToScroll: 1
//                    }
//                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });


    $.fn.drawLines = function (method) {
        var $cont = $(this),
                cHeight = $cont.outerHeight(),
                $elems = $cont.find('[data-role=target-element]'),
                $canvas = $cont.children('canvas'),
                ctx = $canvas[0].getContext("2d"),
                dotRadius = 1,
                dotColor = 'blue',
                iconPoints = [];

        var methods = {
            init: function () {
                var size = window
                        .getComputedStyle(document.querySelector('body'), '::before')
                        .getPropertyValue('content').replace(/\"/g, '');
                
                if (!$cont.hasClass('animated-finish') && size === "desktop") {
                    $cont.imagesLoaded(function () {
                        $cont.addClass('animated-finish');
                        methods['transform'].call($elems[0], 0);
                    });
                }
            },
            drawLines: function () {
                $elems.each(function () {
                    var $elem = $(this),
                            $li = $elem.closest('li'),
                            pos = $li.position();

                    iconPoints.push({
                        x: pos['left'] + ($li.outerWidth() / 2),
                        y: pos['top'] + 30
                    });
                });

//                console.log(iconPoints);

                points = methods['calcWaypoints'](iconPoints);

                $canvas.attr({
                    'width': $cont.outerWidth(),
                    'height': $cont.outerHeight()
                });

                methods['animateLine'].call();
            },
            transform: function (index) {
                var $elem = $(this);

                html2canvas($elem[0], {
//                    background: '#fff',
                    onrendered: function (canvas) {
                        var $canvas = $(canvas);

                        $canvas.attr('data-role', 'canvas-element');

                        $elem.children().replaceWith($canvas);
//                        $elem.after($canvas);
//                        $elem.hide();

//                        console.log(index);

                        if (index < $elems.length - 1) {
                            var newIndex = index + 1;
                            methods['transform'].call($elems[newIndex], newIndex);
                        } else {
                            methods['dropElements'].call();
                        }
                    }
                });
            },
            drawCircle: function (index) {
                var $elem = $(this),
                        $clone = $elem.clone();

                $clone.attr('data-role', 'canvas-back');
                $elem.after($clone);

                curPercent = 0;
                methods['animateCircle'].call($clone, curPercent, index);
            },
            animateCircle: function (current, index) {
                var $elem = $(this),
                        canvas = $elem[0],
                        context = canvas.getContext("2d"),
                        elemWidth = canvas.width,
                        center = {
                            x: elemWidth / 2,
                            y: elemWidth / 2
                        },
                        size = 1,
                        blurSize = 3,
                        radius = (elemWidth / 2) - (size + blurSize),
                        quart = Math.PI / 2,
                        circ = Math.PI * 2;

//                context.clearRect(0, 0, canvas.width, canvas.height);

                context.strokeStyle = '#6d92fd';
                context.beginPath();
                context.arc(center.x, center.y, radius, -(quart), ((circ) * current) - quart, false);
                context.stroke();
                curPercent++;
                if (curPercent <= 100) {
                    requestAnimationFrame(function () {
                        methods['animateCircle'].call($elem, curPercent / 40, index);
                    });
                } else {
                    context.fillStyle = '#fff';
                    context.fill();

                    context.shadowOffsetX = 0;
                    context.shadowOffsetY = 0;
                    context.shadowBlur = blurSize;
                    context.shadowColor = '#656565';
                    context.stroke();

                    if (index < $elems.length - 1) {
                        var newIndex = index + 1;
                        methods['dropElement'].call($elems[newIndex], newIndex);
                    } else {
                        methods['drawLines'].call();
                    }
                }
            },
            calcWaypoints: function (vertices) {
                var waypoints = [],
                        distanse = 30;

                for (var i = 1; i < vertices.length; i++) {
                    var pt0 = vertices[i - 1];
                    var pt1 = vertices[i];
                    var dx = pt1.x - pt0.x;
                    var dy = pt1.y - pt0.y;
                    for (var j = 0; j < distanse; j++) {
                        var x = pt0.x + dx * j / distanse;
                        var y = pt0.y + dy * j / distanse;
                        waypoints.push({
                            x: x,
                            y: y
                        });
                    }
                }
                return (waypoints);
            },
            animateLine: function () {
                if (t < points.length - 1) {
                    requestAnimationFrame(function () {
                        methods['animateLine'].call();
                    });
                } else {
                    var $span = $cont.find('span');

                    $span.animate({opacity: 1}, 'slow');
                }

                methods['drawDot'](points[t].x, points[t].y);
                t++;
            },

            drawDot: function (x, y) {
//                console.log('Draw dot: ' + x + 'x' + y);
                ctx.beginPath();
                ctx.arc(x, y, dotRadius, 0, 2 * Math.PI, false);
//                ctx.arc(x, y, dotRadius, 0*Math.PI,2*Math.PI);
                ctx.fillStyle = dotColor;
                ctx.fill();
//                ctx.stroke();
            },
            dropElements: function () {
                $elems = $cont.find('[data-role=canvas-element]');

                methods['dropElement'].call($elems[0], 0);
            },
            dropElement: function (index) {
                var dropDistance = (cHeight - 60) / 2;
                var dropY = methods['rand'](30, dropDistance, 10),
                        $elem = $(this),
                        $parent = $elem.closest('li');

                $parent.css({'top': 0});
                $parent.animate({'top': dropY}, 300, function () {
                    methods['drawCircle'].call($elem, index);
                });
            },

            rand: function (min, max, step) {
                var numbers = [];
                for (var n = min; n <= max; n += step) {
                    numbers.push(n);
                }

                var randomIndex = Math.floor(Math.random() * numbers.length);
                return numbers[randomIndex];
            }
        };

        console.log('actions');
        if (methods[method]) {
            console.log("method %s isset", method);
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else {
            console.log('run default method');
            return methods.init.apply(this, arguments);
        }
    };

})(jQuery);
