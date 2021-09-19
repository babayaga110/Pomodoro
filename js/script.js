const pomodoroBtn = document.getElementById('pomodoroEl');
const shortBtn = document.getElementById('shortEl');
const longBtn = document.getElementById('longEl');
const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status'); 
const leftAnimation = document.querySelector(".left .fill")
const rightAnimation = document.querySelector(".right .fill")
let intervalFunction


pomodoroBtn.addEventListener('click',()=>{
    startTiming(25*60);
})

longBtn.addEventListener('click',()=>{
    startTiming(15*60);
})

shortBtn.addEventListener('click',()=>{
    startTiming(5*60);
})

function startTiming(time){
    if(typeof intervalFunction !== undefined){
        clearInterval(intervalFunction)
    }
    let allowedTime = time
    showTime(allowedTime)
    statusDisplay.innerText = `pause`
    animationstart(allowedTime)
    intervalFunction = setInterval(()=>{
        if(allowedTime == 0 ){
            clearInterval(intervalFunction)
            showTime(0)
            statusDisplay.innerText = `play`
        }else{
            allowedTime--
            showTime(allowedTime)
        }
    },1000)
}
function showTime(allowedTime) {
    let minutes = pad(Math.floor(allowedTime / 60 ))
    let seconds = pad(allowedTime % 60)
    
    let time = `${minutes}:${seconds}`
    document.title = time;
    timerDisplay.innerText = time
}

function pad(number) {
   return number < 10 ? `0${number.toString()}` : number
}

function animationstart(allowedTime) {
    let milliSeconds = allowedTime * 1000 / 2
    
    leftAnimation.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(180deg)'}
    ],{
        easing: "linear",
        fill:"both",
        duration: milliSeconds
    })

    rightAnimation.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(180deg)'}
    ],{
        easing: "linear",
        fill: "both",
        duration: milliSeconds,
        delay: milliSeconds
    })
}