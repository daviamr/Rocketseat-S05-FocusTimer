import { inputMinutes, inputSeconds } from "./countdown.js";

const body = document.getElementById('body');
const separator = document.getElementsByClassName('separator')[0];

export const icon = {
    icon: document.getElementById('modeH'),
    white: `./assets/img/sun.svg`,
    dark: `./assets/img/moon.svg`
}

//functions
export function toggleMode() {

    let pathIcon = icon.icon.getAttribute('src');

    if (pathIcon === icon.white) {
        modeStyleHandler(icon.dark, '#F8F8FC', '#121214');
    } else {
        modeStyleHandler(icon.white, '#121214', '#F8F8FC');
    }
}

//utils
function modeStyleHandler(iconImg, screenColor, textColor) {
    icon.icon.setAttribute('src', `${iconImg}`);
    body.style.background = `${screenColor}`;
    inputMinutes.style.color = `${textColor}`;
    separator.style.color = `${textColor}`;
    inputSeconds.style.color = `${textColor}`;
}