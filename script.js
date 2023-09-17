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
            ChangementPause();
        }
        if(Minutes == 0 && Hours == 0 && Secondes == 0 && travail == 0){
            Hours = document.getElementById("TravailHours").value;
            Minutes = document.getElementById("TravailMinutes").value;
            Secondes = document.getElementById("TravailSecondes").value;
            ChangementTravail();
        }
        document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
    }
}, 10);

function ChangementPause(){
    travail = 0;
    document.body.style.background = "#2781CA";
    document.getElementById("Modifier").style.background = "#2781CA";
    document.getElementById("sub-div1").style.background = "#6EB5FF";
    document.getElementById("sub-div2").style.background = "#6EB5FF";
    document.getElementById("Mod").innerText = "Pause";
}

function ChangementTravail(){
    travail = 1;
    document.body.style.background = "#3B1D37";
    document.getElementById("Modifier").style.background = "#3B1D37";
    document.getElementById("sub-div1").style.background = "#55264F";
    document.getElementById("sub-div2").style.background = "#55264F";
    document.getElementById("Mod").innerText = "Travail";
}

//---------- Link to Button in the timer, Start the timer or Reset and change value of timer link to the actual mod ----------\\
function functResetStartTimer(){
    if(ResetStartTimer == 1){
        ResetStartTimer = 0;
        document.getElementById("stopTimer").innerText = "Lancer";
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
document.getElementById("modifTimer").addEventListener("click", (event) => {
    functModifTimer();
    if(travail == 1){
        if(Hours != document.getElementById("TravailHours").value || Minutes != document.getElementById("TravailMinutes").value || Secondes != document.getElementById("TravailSecondes").value){
            Hours = document.getElementById("TravailHours").value;
            Minutes = document.getElementById("TravailMinutes").value;
            Secondes = document.getElementById("TravailSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
        }
    }
    else{
        if(Hours != document.getElementById("PauseHours").value || Minutes != document.getElementById("PauseMinutes").value || Secondes != document.getElementById("PauseSecondes").value){
            Hours = document.getElementById("PauseHours").value;
            Minutes = document.getElementById("PauseMinutes").value;
            Secondes = document.getElementById("PauseSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
        }
    }
});

document.getElementById("modifTimer2").addEventListener("click", (event) => {
    functModifTimer();
    if(travail == 1){
        if(Hours != document.getElementById("TravailHours").value || Minutes != document.getElementById("TravailMinutes").value || Secondes != document.getElementById("TravailSecondes").value){
            Hours = document.getElementById("TravailHours").value;
            Minutes = document.getElementById("TravailMinutes").value;
            Secondes = document.getElementById("TravailSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
        }
    }
    else{
        if(Hours != document.getElementById("PauseHours").value || Minutes != document.getElementById("PauseMinutes").value || Secondes != document.getElementById("PauseSecondes").value){
            Hours = document.getElementById("PauseHours").value;
            Minutes = document.getElementById("PauseMinutes").value;
            Secondes = document.getElementById("PauseSecondes").value;
            document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, secondesPrint);
        }
    }
});

document.getElementById("stopTimer").addEventListener("click", (event) => {
    functResetStartTimer();
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

function Verifyinput(value){
    // Assurez-vous que la valeur est un nombre
    if (!isNaN(value)) {
        value = parseInt(value, 10);    // Convertit la valeur en nombre
        if (value <= 0) {
            value = 0;
        }
        if(value > 99999){
            value = 99999
        }
    } else {
        value = 0; // Si la valeur n'est pas un nombre, remplacez-la par 0
    }
    return value;
}

document.getElementById("TravailHours").addEventListener("change", (event) => {
    // Récupère la valeur de l'input
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
    event.target.value = value;
  });

document.getElementById("TravailMinutes").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
   
    if(value > 60){
        let aHours = Math.floor(value / 60);
        if(parseInt(document.getElementById("TravailHours").value) + aHours >= 99999){
            document.getElementById("TravailHours").value = 99999;
        }else{
            document.getElementById("TravailHours").value = parseInt(document.getElementById("TravailHours").value) + aHours;
        }
        value = value%60;
    }
    event.target.value = value;
  });

document.getElementById("TravailSecondes").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
   
    if(value > 60){
        let aMinutes = Math.floor(value / 60);

        if(aMinutes > 60){
            let aHours = Math.floor(aMinutes / 60);
            if(parseInt(document.getElementById("TravailHours").value) + aHours >= 99999){
                document.getElementById("TravailHours").value = 99999;
            }else{
                document.getElementById("TravailHours").value = parseInt(document.getElementById("TravailHours").value) + aHours;
            }
            aMinutes = aMinutes%60;
        }

        document.getElementById("TravailMinutes").value = parseInt(document.getElementById("TravailMinutes").value) + aMinutes;
        value = value%60;
    }
    event.target.value = value;
  });

  document.getElementById("PauseHours").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
    event.target.value = value;
    });

  document.getElementById("PauseMinutes").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
   
    if(value > 60){
        let aHours = Math.floor(value / 60);
        if(parseInt(document.getElementById("PauseHours").value) + aHours >= 99999){
            document.getElementById("PauseHours").value = 99999;
        }else{
            document.getElementById("PauseHours").value = parseInt(document.getElementById("PauseHours").value) + aHours;
        }
        value = value%60;
    }
    event.target.value = value;
    });

  document.getElementById("PauseSecondes").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
   
    if(value > 60){
        let aMinutes = Math.floor(value / 60);

        if(aMinutes > 60){
            let aHours = Math.floor(aMinutes / 60);
            if(parseInt(document.getElementById("PauseHours").value) + aHours >= 99999){
                document.getElementById("PauseHours").value = 99999;
            }else{
                document.getElementById("PauseHours").value = parseInt(document.getElementById("PauseHours").value) + aHours;
            }
            aMinutes = aMinutes%60;
        }

        document.getElementById("PauseMinutes").value = parseInt(document.getElementById("PauseMinutes").value) + aMinutes;
        value = value%60;
    }
    event.target.value = value;
    });
  


let modifClockDiv = 0;

function functModifClock(){
    if(modifClockDiv == 0){
        document.getElementById("ClockDiv").classList.remove("hidden");
        document.getElementById("ClockDiv").classList.toggle("visible");
        modifClockDiv = 1;
    }
    else{
        document.getElementById("ClockDiv").classList.remove("visible");
        document.getElementById("ClockDiv").classList.toggle("hidden");
        modifClockDiv = 0;
    }
}




const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;

const buttonContainer = document.getElementById("clock-buttons");

drawNumbers();

function drawNumbers() {
    for (let num = 0; num < 10; num++) {
        const button = document.createElement("button");
        button.textContent = num.toString();
        button.className = "clock-button";
        
        const angle = ((num - 15) * (Math.PI * 2)) / (10); // Position des boutons en fonction de l'angle
        const x = radius * 0.75 * Math.cos(angle);
        const y = radius * 0.75 * Math.sin(angle);
        
        button.style.position = "absolute";
        button.style.left = (canvas.width / 2 + x) + "px"; // Ajustez la valeur pour centrer les boutons
        button.style.top = (canvas.height / 2 + y - 30) + "px"; // Ajustez la valeur pour centrer les boutons
        
        button.addEventListener("click", () => {
            alert("Button " + num + " clicked!");
        });

        buttonContainer.appendChild(button);
    }
}

const canvas60 = document.getElementById("canvas60");
const ctx60 = canvas60.getContext("2d");
let radius60 = canvas60.height / 2;
ctx60.translate(radius60, radius60);
radius60 = radius60 * 0.90;

const buttonContainer60 = document.getElementById("clock-buttons60");

// Appel de la fonction drawClock avec le nombre de boutons souhaité
drawClock(0, 5, "0", 0.95, 0.95, 0, 0);

let NumberOfClock = 0;

function drawClock(NumberStart, Number, Text, xM, yM, lM, tM) {
  //NumberOfClock++;
  let numPrint = 0; 
  for (let num = 0; num < (Number - NumberStart)+1; num++) {
    const button = document.createElement("button");
    numPrint = NumberStart + num;
    if(numPrint == 0){
        button.textContent = numPrint.toString();
    }
    else{
        button.textContent = numPrint.toString() + Text;
    }
    button.className = "clock-button60";
    //button.id = "clock-button" + numPrint + "Clock" + NumberOfClock;
    button.id = "1clock-button" + numPrint;

    const angle = ((num - 15) * (Math.PI * 2)) / ((Number - NumberStart)+1); // Position des boutons en fonction de l'angle
    const x = radius60  * xM * Math.cos(angle);
    const y = radius60 * yM * Math.sin(angle);

    button.style.position = "absolute";
    button.style.left = ((canvas60.width / 2 + x) - lM) + "px";
    button.style.top = ((canvas60.height / 2 + y) - tM) + "px";

    buttonContainer60.appendChild(button);
  }
}

document.getElementById("1clock-button0").addEventListener("click", (event) => {
    drawClock(1, 9, "", 0.55, 0.55, 0, 0);
    console.log("1");
   });
 
/*
document.getElementById("clock-button0Clock1").addEventListener("click", (event) => {
   drawClock(10);
  });*/
