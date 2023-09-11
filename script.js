

//Exercice timer------------------------------------------

let heures = document.getElementById("TravailHeures").value;
let minutes = document.getElementById("TravailMinutes").value;
let secondes = document.getElementById("TravailSecondes").value;
let secondesPrint;
let minutesPrint;
let heuresPrint;

let travail = 1;

let StopStartTimer = 0;

document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes);

function formatHour(Heures, Minutes, Secondes, HeuresPrint, MinutesPrint, SecondesPrint) {
    if(Heures < 10){
        if(Heures == ""){
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
            heures = document.getElementById("PauseHeures").value;
            minutes = document.getElementById("PauseMinutes").value;
            secondes = document.getElementById("PauseSecondes").value;
            travail = 0;
            document.getElementById("Travail").classList.remove("actual");
            document.getElementById("Pause").classList.toggle("actual");
        }
        if(minutes == 0 && heures == 0 && secondes == 0 && travail == 0){
            heures = document.getElementById("TravailHeures").value;
            minutes = document.getElementById("TravailMinutes").value;
            secondes = document.getElementById("TravailSecondes").value;
            travail = 1;
            document.getElementById("Pause").classList.remove("actual");
            document.getElementById("Travail").classList.toggle("actual");
        }
        document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
    }
}, 10);

function functStopStartTimer(){
    if(StopStartTimer == 1){
        StopStartTimer = 0;
        document.getElementById("stopTimer").innerText = "Start";
        if(travail == 1){
            heures = document.getElementById("TravailHeures").value;
            minutes = document.getElementById("TravailMinutes").value;
            secondes = document.getElementById("TravailSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
        }
        else{
            heures = document.getElementById("PauseHeures").value;
            minutes = document.getElementById("PauseMinutes").value;
            secondes = document.getElementById("PauseSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
        }
    }
    else{
        StopStartTimer = 1;
        document.getElementById("stopTimer").innerText = "Reset";
    }
}

document.getElementById("TravailHeures").addEventListener("change", (event) => {
    if(travail == 1){
        let heures = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
    }
  });

  document.getElementById("TravailMinutes").addEventListener("change", (event) => {
    if(travail == 1){
        minutes = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
    }
  });

  document.getElementById("TravailSecondes").addEventListener("change", (event) => {
    if(travail == 1){
        secondes = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
    }
    });

  document.getElementById("PauseHeures").addEventListener("change", (event) => {
  	if(travail == 0){
    	heures = event.target.value;
    	document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
    }
  });

  document.getElementById("PauseMinutes").addEventListener("change", (event) => {
	  if(travail == 0){
	    	minutes = event.target.value;
	    	document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
	    }
  });

  document.getElementById("PauseSecondes").addEventListener("change", (event) => {
    if(travail == 0){
        secondes = event.target.value;
        document.getElementById("timer").innerHTML = formatHour(heures, minutes, secondes, heuresPrint, minutesPrint, secondesPrint);
    }
  });

  
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