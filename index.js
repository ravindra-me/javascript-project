
let hoursElem = document.querySelector('#hours');
let minElem = document.querySelector('#min');
let secElem = document.querySelector('#sec');
let amPm = document.querySelector('#am-pm');
let dayElem = document.querySelector('#day');
let monthElem = document.querySelector('#month');
let dateElem = document.querySelector('#date'); 
function getTimeZone(date){
    hours=date.getHours();
    if(hours>12){
        amPm.innerText='pm.';
        hours -=12;
    }else{
        amPm.innerText='am';
    }
    minutes=date.getMinutes();
    seconds=date.getSeconds();
}
function makeDoubleDigit(val){
    if(val>10){
        return val;
    }else{
        return val = '0' + val;
    }

}
function setDate(){
    const date= new Date();
    let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday' ,'Thrusday' ,'Friday', 'Saturday'];
    dayElem.innerHTML=days[date.getDay()];
    monthElem.innerHTML= date.toLocaleString('default', { month: 'long' }) 
    dateElem.innerHTML=date.getDate();
}
function runGetByDate(){
    const date = new Date();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
    hours=date.getHours(); 
    getTimeZone(date);
    makeDoubleDigit();
    setDate();
    hoursElem.innerHTML=makeDoubleDigit(hours);
    minElem.innerHTML=makeDoubleDigit(minutes);
    secElem.innerHTML=makeDoubleDigit(seconds);

}
setInterval(()=>{ runGetByDate();} , 1000);