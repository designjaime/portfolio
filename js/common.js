// Auto complete code for Animate.css 
// Jaime Yoon Logo Title Animation
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
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

        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },

});

$('[data-toggle="popover"]').popover()
$(".logo").mouseover(function () {
    $('.logo').animateCss('pulse');
});

$("[data-toggle='lightbox']").click(function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});

$('a[href="#totop"]').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});