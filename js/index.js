// Auto complete code for Animate.css 
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

$(".logo").mouseover(function() {
    $('.logo').animateCss('pulse');
});

$("[data-toggle='lightbox']").click(function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});


$('#show').on('click', function() {
    $('.card-reveal').slideToggle('slow');
});

$('.card-reveal .close').on('click', function() {
    $('.card-reveal').slideToggle('slow');
});

var options = {
        id: 59777392,
        width: 640,
        loop: true
    };

    var player = new Vimeo.Player('motion_player', options);

    player.setVolume(.2);

    player.on('play', function() {
        console.log('played the video!');
    });

