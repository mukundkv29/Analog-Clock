setInterval(() => {
    date = new Date;
    timeHour = date.getHours();
    timeMin = date.getMinutes();
    timeSec = date.getSeconds();
    hourRotation  =  timeHour*30 + timeMin/2;
    minRotation  =  timeMin*6 + timeSec/10;
    secRotation =  timeSec*6;
    console.log(date);
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);