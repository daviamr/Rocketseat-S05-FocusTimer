import { toggleMode, icon } from "./mode.js";
import { playBtn, initialize, timerBtn, timerInteraction, inputMinutes } from "./countdown.js";

//events

//mode handler
icon.icon.addEventListener('click', toggleMode);

//timer
playBtn.addEventListener('click', initialize);

timerBtn.addEventListener('click', timerInteraction)