import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveCurrentTime = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCAL_STORAGE, currentTime);
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

const savedTime = localStorage.getItem(LOCAL_STORAGE);

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });