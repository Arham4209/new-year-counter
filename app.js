
const newYear = "1/1/2024";

const days24 = document.querySelector(".days");
const hours24 = document.querySelector(".hours");
const min24 = document.querySelector(".min");
const sec24 = document.querySelector(".sec");

function timeCountdown() {

    const newDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSecond = (newYearDate - newDate) / 1000;


    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const min = Math.floor(totalSecond / 3600) % 60;
    const sec = Math.floor(totalSecond) % 60;


    days24.textContent = formatTime(days);
    hours24.textContent = formatTime(hours);
    min24.textContent = formatTime(min);
   sec24.textContent = formatTime(sec);

}
function formatTime(time){
    return time > 10 ? time : `0${time}`
}

timeCountdown()
setInterval(timeCountdown , 1000)