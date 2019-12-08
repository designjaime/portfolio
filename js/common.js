$(document).ready(function() {
    $(".button a").click(function() {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function() {
    $(".overlay").fadeToggle(200);
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});


// Auto complete code for Animate.css 
// Jaime Yoon Logo project-title Animation
$.fn.extend({
    animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },

});

$('[data-toggle="popover"]').popover()
$(".logo").mouseover(function() {
    $('.logo').animateCss('pulse');
});

$("[data-toggle='lightbox']").click(function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});

$('a[href="#totop"]').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});

// Button Bubble Effects
$('.button--bubble').each(function() {
    var $circlesTopLeft = $(this).parent().find('.circle.top-left');
    var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

    var tl = new TimelineLite();
    var tl2 = new TimelineLite();

    var btTl = new TimelineLite({
        paused: true
    });

    tl.to($circlesTopLeft, 1.2, {
        x: -25,
        y: -25,
        scaleY: 2,
        ease: SlowMo.ease.config(0.1, 0.7, false)
    });
    tl.to($circlesTopLeft.eq(0), 0.1, {
        scale: 0.2,
        x: '+=6',
        y: '-=2'
    });
    tl.to($circlesTopLeft.eq(1), 0.1, {
        scaleX: 1,
        scaleY: 0.8,
        x: '-=10',
        y: '-=7'
    }, '-=0.1');
    tl.to($circlesTopLeft.eq(2), 0.1, {
        scale: 0.2,
        x: '-=15',
        y: '+=6'
    }, '-=0.1');
    tl.to($circlesTopLeft.eq(0), 1, {
        scale: 0,
        x: '-=5',
        y: '-=15',
        opacity: 0
    });
    tl.to($circlesTopLeft.eq(1), 1, {
        scaleX: 0.4,
        scaleY: 0.4,
        x: '-=10',
        y: '-=10',
        opacity: 0
    }, '-=1');
    tl.to($circlesTopLeft.eq(2), 1, {
        scale: 0,
        x: '-=15',
        y: '+=5',
        opacity: 0
    }, '-=1');

    var tlBt1 = new TimelineLite();
    var tlBt2 = new TimelineLite();

    tlBt1.set($circlesTopLeft, {
        x: 0,
        y: 0,
        rotation: -45
    });
    tlBt1.add(tl);

    tl2.set($circlesBottomRight, {
        x: 0,
        y: 0
    });
    tl2.to($circlesBottomRight, 1.1, {
        x: 30,
        y: 30,
        ease: SlowMo.ease.config(0.1, 0.7, false)
    });
    tl2.to($circlesBottomRight.eq(0), 0.1, {
        scale: 0.2,
        x: '-=6',
        y: '+=3'
    });
    tl2.to($circlesBottomRight.eq(1), 0.1, {
        scale: 0.8,
        x: '+=7',
        y: '+=3'
    }, '-=0.1');
    tl2.to($circlesBottomRight.eq(2), 0.1, {
        scale: 0.2,
        x: '+=15',
        y: '-=6'
    }, '-=0.2');
    tl2.to($circlesBottomRight.eq(0), 1, {
        scale: 0,
        x: '+=5',
        y: '+=15',
        opacity: 0
    });
    tl2.to($circlesBottomRight.eq(1), 1, {
        scale: 0.4,
        x: '+=7',
        y: '+=7',
        opacity: 0
    }, '-=1');
    tl2.to($circlesBottomRight.eq(2), 1, {
        scale: 0,
        x: '+=15',
        y: '-=5',
        opacity: 0
    }, '-=1');

    tlBt2.set($circlesBottomRight, {
        x: 0,
        y: 0,
        rotation: 45
    });
    tlBt2.add(tl2);

    btTl.add(tlBt1);
    btTl.to($(this).parent().find('.button.effect-button'), 0.8, {
        scaleY: 1.1
    }, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to($(this).parent().find('.button.effect-button'), 1.8, {
        scale: 1,
        ease: Elastic.easeOut.config(1.2, 0.4)
    }, 1.2);

    btTl.timeScale(2.6);

    $(this).on('mouseover', function() {
        btTl.restart();
    });
});

$(".jumbotron").css({
    height: $(window).height() + "px"
});

$(window).on("resize", function() {
    $(".jumbotron").css({
        height: $(window).height() + "px"
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}