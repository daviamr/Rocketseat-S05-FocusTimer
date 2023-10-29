import { toggleMode, icon } from "./mode.js";
import { playBtn, initialize, timerBtn, timerInteraction, speakerBtn, bgAudioPlay } from "./countdown.js";

//events

//mode handler
icon.icon.addEventListener('click', toggleMode);

//timer events
playBtn.addEventListener('click', initialize);
timerBtn.addEventListener('click', timerInteraction);
speakerBtn.addEventListener('click', bgAudioPlay);