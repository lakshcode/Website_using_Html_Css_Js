const days =document.getElementById("days");
const hours =document.getElementById("hours");
const min =document.getElementById("min");
const sec =document.getElementById("sec");


const newyeartime =new Date('January 1 2023 00:00:00');


function updateCountdowntime(){
    const currenttime =new Date();
    const diff = newyeartime -currenttime;

    const d= Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%60;
    const s=Math.floor(diff/1000)%60;

    days.innerHTML=d;
    hours.innerHTML=h < 10 ? '0' + h :h;
    min.innerHTML=m < 10 ? '0' + m :m;
    sec.innerHTML=s < 10 ? '0' + s :s;

    console.log(d,h,m,s);
}

updateCountdowntime();

setInterval(updateCountdowntime,1000);