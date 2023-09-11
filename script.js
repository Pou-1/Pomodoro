

//Exercice timer------------------------------------------

let heures = 0;
let minutes = 25;
let secondes = 0;
let secondesPrint;
let minutesPrint;
let heuresPrint;

let travail = 1;

let StopStartTimer = 0;

document.getElementById("timer").innerHTML = heures + " : " + minutes + " :" + secondes;

function formatHour(Heures, Minutes, Secondes, HeuresPrint, MinutesPrint, SecondesPrint) {
    console.log(Heures);
    if(Heures < 10){
        if(Heures == null){
            HeuresPrint = "00";
        }
        else{
            HeuresPrint = "0" + Heures;
        }
    }
    else{
        HeuresPrint = Heures;
    }
    if(Minutes < 10){
        MinutesPrint = "0" + Minutes;
    }
    else{
        MinutesPrint = Minutes;
    }
    if(Secondes < 10){
        SecondesPrint = "0" + Secondes;
    }
    else{
        SecondesPrint = Secondes;
    }
    return HeuresPrint + " : " + MinutesPrint + " : " + SecondesPrint;
}


setInterval(() => {
    if(StopStartTimer == 1){
        if(minutes == 0 && heures > 0){
            minutes = 59;
            heures -= 1;
        }
        if(secondes == 0 && minutes > 0){
            secondes = 59;
            minutes -= 1;
        }
        else if(secondes > 0){
            secondes -= 1;
        }
        if(minutes == 0 && heures == 0 && secondes == 0 && travail == 1){
            heures = 0;
            minutes = 5;
            secondes = 0;
            travail = 0;
        }
        if(minutes == 0 && heures == 0 && secondes == 0 && travail == 0){
            heures = 0;
            minutes = 25;
            secondes = 0;
            travail = 1;
        }
        document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
    }
}, 10);

function functStopStartTimer(){
    if(StopStartTimer == 1){
        StopStartTimer = 0;
        document.getElementById("stopTimer").innerText = "Start";
    }
    else{
        StopStartTimer = 1;
        document.getElementById("stopTimer").innerText = "Stop";
    }
}