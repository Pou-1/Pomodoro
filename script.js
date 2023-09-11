//------------------------------ TIMER EXERCICE ------------------------------\\
//------------------------------ -------------- ------------------------------\\

//---------- Variable of Hours, Minutes and Secondes of the actual timer----------\\
let Hours = document.getElementById("TravailHours").value;
let Minutes = document.getElementById("TravailMinutes").value;
let Secondes = document.getElementById("TravailSecondes").value;

//---------- Variable of Hours, Minutes and Secondes format with the function "FormatHour" of the actual timer----------\\
let secondesPrint;
let MinutesPrint;
let HoursPrint;

//---------- Variable that give the actual mode between "Travail" and "Pause" ----------\\
let travail = 1;

//---------- Variable that give the status of the timer between "Reset" and "Start" ----------\\
let ResetStartTimer = 0;

//---------- Format hour and place it in the timer ----------\\
document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes);

//---------- Format hour with zero in front if needed so it take 2 number ----------\\
function formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, SecondesPrint) {
    if(Hours < 10){
        if(Hours == ""){
            HoursPrint = "00";
        }
        else{
            HoursPrint = "0" + Hours;
        }
    }
    else{
        HoursPrint = Hours;
    }
    if(Minutes < 10){
        if(Minutes == ""){
            MinutesPrint = "00";
        }
        else{
            MinutesPrint = "0" + Minutes;
        }
    }
    else{
        MinutesPrint = Minutes;
    }
    if(Secondes < 10){
        if(Secondes == ""){
            SecondesPrint = "00";
        }
        else{
            SecondesPrint = "0" + Secondes;
        }
    }
    else{
        SecondesPrint = Secondes;
    }
    return HoursPrint + " : " + MinutesPrint + " : " + SecondesPrint;
}

//---------- Permit time to pass in the timer ----------\\
setInterval(() => {
    if(ResetStartTimer == 1){
        if(Minutes == 0 && Hours > 0){
            Minutes = 59;
            Hours -= 1;
        }
        if(Secondes == 0 && Minutes > 0){
            Secondes = 59;
            Minutes -= 1;
        }
        else if(Secondes > 0){
            Secondes -= 1;
        }
        if(Minutes == 0 && Hours == 0 && Secondes == 0 && travail == 1){
            Hours = document.getElementById("PauseHours").value;
            Minutes = document.getElementById("PauseMinutes").value;
            Secondes = document.getElementById("PauseSecondes").value;
            travail = 0;
            document.getElementById("Travail").classList.remove("actual");
            document.getElementById("Pause").classList.toggle("actual");
        }
        if(Minutes == 0 && Hours == 0 && Secondes == 0 && travail == 0){
            Hours = document.getElementById("TravailHours").value;
            Minutes = document.getElementById("TravailMinutes").value;
            Secondes = document.getElementById("TravailSecondes").value;
            travail = 1;
            document.getElementById("Pause").classList.remove("actual");
            document.getElementById("Travail").classList.toggle("actual");
        }
        document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
    }
}, 10);

//---------- Link to Button in the timer, Start the timer or Reset and change value of timer link to the actual mod ----------\\
function functResetStartTimer(){
    if(ResetStartTimer == 1){
        ResetStartTimer = 0;
        document.getElementById("stopTimer").innerText = "Start";
        if(travail == 1){
            Hours = document.getElementById("TravailHours").value;
            Minutes = document.getElementById("TravailMinutes").value;
            Secondes = document.getElementById("TravailSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
        }
        else{
            Hours = document.getElementById("PauseHours").value;
            Minutes = document.getElementById("PauseMinutes").value;
            Secondes = document.getElementById("PauseSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
        }
    }
    else{
        ResetStartTimer = 1;
        document.getElementById("stopTimer").innerText = "Réinitialiser";
    }
}

//---------- Listener on all input ----------\\
document.getElementById("TravailHours").addEventListener("change", (event) => {
    if(travail == 1){
        let Hours = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
    }
  });

  document.getElementById("TravailMinutes").addEventListener("change", (event) => {
    if(travail == 1){
        Minutes = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
    }
  });

  document.getElementById("TravailSecondes").addEventListener("change", (event) => {
    if(travail == 1){
        Secondes = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
    }
    });

  document.getElementById("PauseHours").addEventListener("change", (event) => {
  	if(travail == 0){
    	Hours = event.target.value;
    	document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
    }
  });

  document.getElementById("PauseMinutes").addEventListener("change", (event) => {
	  if(travail == 0){
	    	Minutes = event.target.value;
	    	document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
	    }
  });

  document.getElementById("PauseSecondes").addEventListener("change", (event) => {
    if(travail == 0){
        Secondes = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
    }
  });

  
//---------- Hide or make visible the inputs to modify the timer ----------\\
let modif = 0;

function functModifTimer(){
    if(modif == 0){
        document.getElementById("Modifier").classList.remove("hidden");
        document.getElementById("Modifier").classList.toggle("visible");
        modif = 1;
    }
    else{
        document.getElementById("Modifier").classList.remove("visible");
        document.getElementById("Modifier").classList.toggle("hidden");
        modif = 0;
    }
}