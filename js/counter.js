let counter_value=document.querySelector(".counterValue");
// let start_Btn=document.querySelector(".startBtn");
let pause_Btn=document.querySelector(".pauseBtn");
let nap_value=document.querySelector(".napValue");


// -----initialize global variable for counter-----
let counter=0;
// -------variable for catch setInterval value-----
let interval_value;
// --------variable for pause and resume ---------
let pause=false;


// ----------counter will start with setInterval-------
const startCount = () =>{
    interval_value=setInterval(counterIncrease, 100);
}
// --------counter increase function-------
function counterIncrease(){
    counter++;
    counter_value.innerHTML=counter;
}
// ------counter pause and resume function-----
const pauseCount =() =>{
    if(pause===false){
        clearInterval(interval_value)
        pause_Btn.innerHTML="Resume";     
        pause=true;
    }else{
        interval_value=setInterval(counterIncrease, 100);
        pause_Btn.innerHTML="Pause";
        pause=false;
    }   
}

// ---------counter reset function-------
const resetCount =() =>{
    counter=0;
    counter_value.innerHTML=counter;
}

// ----------counter show naplist function--------
const napCount =()=>{
   nap_value.innerHTML+=`<li>Nap Value:${counter}</li>`;
}