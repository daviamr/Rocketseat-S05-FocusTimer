import { toggleMode, icon } from "./mode.js";
import { countdown } from "./countdown.js";

//events

//mode handler
icon.icon.addEventListener('click', toggleMode);

//countdown
countdown.playBtn.addEventListener('click', () => {
    countdown.start(countdown.timeInSeconds);
});