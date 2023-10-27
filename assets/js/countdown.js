const inputMinutes = document.getElementById('minutes');
const inputSeconds = document.getElementById('seconds');

const time = {
    fixedTime: 240 / 60,
    minutes: 60 / 60,
    seconds: 60,
}

inputMinutes.value = time.minutes;
inputSeconds.value = `00`

let interval = setInterval(() => {

    if (time.seconds == 0) {
        time.minutes--
        time.seconds = 60;

    } else {
        time.seconds--;

    }
    if (time.minutes === 0 && time.seconds == 0) {
        console.log('terminou!');
        time.minutes = time.fixedTime;

        clearInterval(interval);
    }

    formatter(inputMinutes, time.minutes);
    formatter(inputSeconds, time.seconds);
}, 50);

//utils
function formatter(input, element) {
    element = element.toString()
    if (element.length === 1) {
        input.value = `0${element}`;
    } else {
        input.value = element;
    }
}