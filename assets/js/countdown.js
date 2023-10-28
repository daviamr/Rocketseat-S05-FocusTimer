export const inputMinutes = document.getElementById('minutes');
export const inputSeconds = document.getElementById('seconds');
export const playBtn = document.getElementById('play');
export const timerBtn = document.getElementById('timer');
const icon = {
    play: `./assets/img/play_blue.svg`,
    pause: `./assets/img/pause_blue.svg`,
    stop: `./assets/img/pause_default.svg`,
    speaker: `./assets/img/speaker_blue.svg`,
    defaultSpeaker: `./assets/img/speaker_default.svg`
}
const audio = {
    pause: new Audio(`./assets/audio/button-press.wav`),
    alert: new Audio(`./assets/audio/kichen-timer.mp3`),
    music: new Audio(`./assets/audio/bg-audio.mp3`)
}
export let time = {
    fixedTime: 60,
    minutes: 1500 / 60,
    seconds: 0,
    pause: false,
    interval: null
}
const countdown = () => {
    if (time.seconds === 0) {
        time.seconds = 60;
        time.minutes--
    } else {
        time.seconds--;
    }

    if (time.minutes == 0 && time.seconds == 0) {
        stopTimer();
    }

    showTimerOnScreen()
}

//performing standard functions
showTimerOnScreen();

//functions
export function initialize() {
    if (time.pause) {
        pauseTimer();
        return
    }

    time.minutes === 0 && time.seconds === 0 ?
        alert('Tempo esgotado! \nResete o cronometrô.') : startTimer();
}

function startTimer() {
    handlerIcon(playBtn, icon.pause);
    time.interval = setInterval(countdown, 50);
    time.pause = true;
}

function pauseTimer() {
    handlerIcon(playBtn, icon.play);
    clearInterval(time.interval);
    time.pause = false;
    audio.pause.play();
}

function stopTimer() {
    handlerIcon(playBtn, icon.play);
    clearInterval(time.interval);
    time.pause = false;
    audio.alert.play();
}

export function timerInteraction() {
    pauseTimer();

    inputMinutes.value = '';
    inputMinutes.removeAttribute('disabled');
    inputMinutes.focus();

    //saving the new input value on focusout
    inputMinutes.addEventListener('focusout', () => {

        inputMinutes.setAttribute('disabled', '1');

        let length = inputMinutes.value.toString().length;

        if (length > 2 || length === 0) {
            inputMinutes.value = time.fixedTime;
            time.minutes = time.fixedTime;
        } else {
            time.minutes = inputMinutes.value;
        }
    })
}
//utils
function formatter(input, element) {
    element = element.toString();

    return element.length == 1 ? input.value = `0${element}` : input.value = element;
}

function handlerIcon(tag, pathIcon) {
    return tag.setAttribute('src', `${pathIcon}`);
}

function showTimerOnScreen() {
    inputMinutes.value = formatter(inputMinutes, time.minutes);
    inputSeconds.value = formatter(inputSeconds, time.seconds);
}