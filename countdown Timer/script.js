const days = document.getElementById('days')
const hr = document.getElementById('hr')
const mins = document.getElementById('mins')
const secs = document.getElementById('Secs')


const updatecountdown = (deadline)=>{
    const currentTime= new Date();
    const timeDiffrence = deadline - currentTime;
    
    let calcsecs =Math.floor (timeDiffrence/1000)% 60;
    let calcmins =Math.floor (timeDiffrence/1000/60)% 60;
    let calchr =Math.floor (timeDiffrence/1000/60/60)% 24;
    let calcdays =Math.floor (timeDiffrence/1000/60/60/24);
    
    days.textContent=formatTime (calcdays);
    hr.textContent = formatTime(calchr);
    mins.textContent =formatTime (calcmins);
    secs.textContent =formatTime (calcsecs);
    
    
}
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
 }

const countdown = (targetdate)=>{
    setInterval( ()=>updatecountdown(targetdate) , 1000);
}

const targetdate = new Date("March 01 2024 10:37");
countdown(targetdate);
