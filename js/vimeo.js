var options = {
    id: 59777392,
    width: 640,
    loop: true
};

var player = new Vimeo.Player('motion_player', options);

player.setVolume(0.2);

player.on('play', function () {
    console.log('played the video!');
});

