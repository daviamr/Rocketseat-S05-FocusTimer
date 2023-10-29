export const inputMinutes = document.getElementById('minutes');
export const inputSeconds = document.getElementById('seconds');
export const playBtn = document.getElementById('play');
export const timerBtn = document.getElementById('timer');
export const speakerBtn = document.getElementById('speaker');
const icon = {
    play: `./assets/img/play_blue.svg`,
    pause: `./assets/img/pause_blue.svg`,
    stop: `./assets/img/stop_default.svg`,
    timer: `./assets/img/timer_default.svg`,
    speaker: `./assets/img/speaker_blue.svg`,
    defaultSpeaker: `./assets/img/speaker_default.svg`
}
const audio = {
    pause: new Audio(`./assets/audio/button-press.wav`),
    alert: new Audio(`./assets/audio/kichen-timer.mp3`),
    music: new Audio(`./assets/audio/bg-audio.mp3`)
}
export const time = {
    maxTime: 3600 / 60,
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
        timeIsOver();
    }

    showTimerOnScreen()
}

//performing standard functions
showTimerOnScreen();

//functions
export function initialize() {
    if (time.pause) {
        pauseTimer();
        handlerIcon(timerBtn, icon.timer);
        return
    }

    time.minutes === 0 && time.seconds === 0 ?
        alert('Tempo esgotado! \nResete o cronômetro.') :
        startTimer()
    handlerIcon(timerBtn, icon.stop);
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

function stopAndReset() {
    pauseTimer()
    handlerIcon(timerBtn, icon.timer)
    clearInterval(time.interval);

    time.minutes = 25;
    time.seconds = 0;
    showTimerOnScreen()
}

function timeIsOver() {
    handlerIcon(playBtn, icon.play);
    clearInterval(time.interval);
    time.pause = false;
    audio.alert.play();
}


export function timerInteraction() {
    if (time.pause) {
        stopAndReset();
        return
    }

    pauseTimer();

    inputMinutes.value = '';
    inputMinutes.removeAttribute('disabled');
    inputMinutes.focus();

    //saving the new input value on focusout
    inputMinutes.addEventListener('focusout', () => {

        inputMinutes.setAttribute('disabled', '1');

        let length = inputMinutes.value.toString().length;

        if (length > 2 || length === 0 || inputMinutes.value > 60) {
            inputMinutes.value = time.maxTime;
            time.minutes = time.maxTime;
        } else {
            time.minutes = inputMinutes.value;
        }
    })
}

export function bgAudioPlay() {
    const speakerAttr = speakerBtn.getAttribute('src');

    if (speakerAttr === icon.defaultSpeaker) {
        handlerIcon(speakerBtn, icon.speaker);
        audio.music.play();
        audio.music.loop = true;
        return
    }

    handlerIcon(speakerBtn, icon.defaultSpeaker);
    audio.music.pause();
    audio.music.currentTime = 0;
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