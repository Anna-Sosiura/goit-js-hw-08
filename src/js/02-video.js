import Player from '@vimeo/player';
import throttle from "lodash.throttle";

    player.on('timeupdate', throttle(setTime, 1000));
    function setTime(currentTime){
        localStorage.setItem('videoplayer-current-time',JSON.stringify(currentTime));}
       const savedSecond= localStorage.getItem('videoplayer-current-time');
            const secondsValue=(JSON.parse(savedSecond));

        player.setCurrentTime(secondsValue.seconds).then(function(seconds) {
            // seconds = the actual time that the player seeked to
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
 
