let timedisplay = document.querySelector(".timedisplay");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;

let timerid = null;

startbtn.addEventListener('click',function(){
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid= setInterval(starttimer, 10);
});
  stopbtn.addEventListener('click',function(){
    clearInterval(timerid);
});
resetbtn.addEventListener('click',function(){
    clearInterval(timerid);
    timedisplay.innerHTML = `00: 00: 00`;
    msec = secs = mins = 0o0;
});

function starttimer(){
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs== 60) {
            secs =0;
            mins++;
        }
    }
   let msecString = msec < 10 ? `0${msec}` : msec;
   let secsString = secs < 10 ? `0${secs}` : secs;
   let minsString = mins < 10 ? `0${mins}` : mins;

   timedisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
//    let msecstring;
//     if (msec < 10) {
//         msecstring= `0${msec}`;
//     }  else{
//         msecstring = msec;
//     }


}

