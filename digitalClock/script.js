 
const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

const showtime = () => {
    let date = new Date();
    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();


    hr = (hr % 12) || 12; 
    hr = hr < 10 ? `0${hr}` : hr;

    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${mins} : ${secs}`;
    timeformat.innerHTML = hr >= 12 ? "PM" : "AM";
};

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showtime, 1000);
});
