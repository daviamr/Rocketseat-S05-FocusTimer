import { time } from './mode.js';

const playBtn = document.getElementById('play');
const timeInSeconds = 10;

time.innerText = `${formatter(timeInSeconds)}`;

// functions
function start(timer) {

    const reduceSeconds = setInterval(() => {

        timer--
        const formattedTimer = formatter(timer);

        if (timer >= 0) {
            time.innerText = `${formattedTimer}`;
        } else {
            clearInterval(reduceSeconds);
        }
    }, 1000);
}

//utils
function formatter(element) {
    return new Date(element * 1000).toLocaleTimeString("pt-Br", {
        minute: "2-digit",
        second: "2-digit",
    });;
}

//exports
export const countdown = {
    timeInSeconds,
    playBtn,
    start
}