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

//---------- Variable that give the status of the page between "Timer" and "Modif Timer" ----------\\
let modif = 0;

let ActualInput = -1; // Actual Input focus

const canvas60 = document.getElementById("canvas60");
const ctx60 = canvas60.getContext("2d");
let radius60 = canvas60.height / 2;
ctx60.translate(radius60, radius60);
radius60 = radius60 * 0.90;

const buttonContainer60 = document.getElementById("clock-buttons60");

let NumberOfClock = 0;

let NumberButtonClicked = -1;

//---------- Format hour and place it in the timer ----------\\
document.getElementById("timer").innerHTML = formatHour(Hours, Minutes, Secondes);

//---------- Format hour with zero in front if needed so it take 2 number ----------\\
function formatHour(Hours, Minutes, Secondes, HoursPrint, MinutesPrint, SecondesPrint) {
    if(Hours < 10){
        if(Hours == 0){
            HoursPrint = "";
        }
        else{
            HoursPrint = "0" + Hours + " : ";
        }
    }
    else{
        HoursPrint = Hours + " : ";
    }
    if(Minutes < 10){
        if(Minutes == 0 && Hours == 0){
            MinutesPrint = "";
        }
        else{
            MinutesPrint = "0" + Minutes + " : ";
        }
    }
    else{
        MinutesPrint = Minutes + " : ";
    }
    if(Secondes < 10){
        if(Secondes == 0){
            SecondesPrint = "00";
        }
        else{
            SecondesPrint = "0" + Secondes;
        }
    }
    else{
        SecondesPrint = Secondes;
    }
    return HoursPrint + MinutesPrint + SecondesPrint;
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
        
        const button = document.getElementById("stopTimer");
        const playIcon = document.createElement("i");
        playIcon.className = "fa-solid fa-play LogoPlay";
        button.innerHTML = '';
        button.appendChild(playIcon);

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
        
        const button = document.getElementById("stopTimer");
        const squareIcon = document.createElement("i");
        squareIcon.className = "fa-solid fa-square LogoPlay";
        button.innerHTML = '';
        button.appendChild(squareIcon);
    }
}

//---------- Listener on all input ----------\\
document.getElementById("stopTimer").addEventListener("click", (event) => {
    functResetStartTimer();
});

//---------- Hide or make visible the inputs to modify the timer ----------\\
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
    } else {
        value = 0; // Si la valeur n'est pas un nombre, remplacez-la par 0
    }
    return value;
}

function getMinutesSecondes(Time){
    let TotalSecondes = Time[2];
    let Minutes = Math.floor(TotalSecondes / 60);
    let Secondes = TotalSecondes % 60;
    
    return [0, Minutes, Secondes];
}

function getHoursMinute(TimeMinutes){
    let totalMinutes = TimeMinutes[1]; // Assuming Time[1] contains the total minutes
    
    // Calculate hours and remaining minutes
    let hours = Math.floor(totalMinutes / 60); // 1 hour = 60 minutes
    let minutes = totalMinutes % 60;
    
    return [hours, minutes, 0];
}


document.getElementById("TravailHours").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
    if(value > 12){
        event.target.value = 12;
    }
    else{
        event.target.value = value;
    }
  });

document.getElementById("TravailMinutes").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
   
    if(value >= 60){
        let aHours = Math.floor(value / 60);
        if(parseInt(document.getElementById("TravailHours").value) + aHours >= 12){
            document.getElementById("TravailHours").value = 12;
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
    
    ActualSecondes = (parseInt(document.getElementById("TravailMinutes").value, 10)) * 60;
    ActualSecondes = ActualSecondes + (parseInt(document.getElementById("TravailHours").value, 10) * 3600);
    ActualSecondes = ActualSecondes + value;

    let Time = [0, 0, ActualSecondes];
    let Time2 = getMinutesSecondes(Time);
    let Time3 = getHoursMinute([0, Time2[1], 0]);

    if(Time3[0] > 12){
        Time3[0] = 12;
        Time3[1] = 59;
        Time2[2] = 59;
    }
    event.target.value = Time2[2];
    document.getElementById("TravailHours").value = Time3[0];
    document.getElementById("TravailMinutes").value = Time3[1];
  });

  document.getElementById("PauseHours").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
    if(value > 12){
        event.target.value = 12;
    }
    else{
        event.target.value = value;
    }
  });

  document.getElementById("PauseMinutes").addEventListener("change", (event) => {
    let value = parseInt(event.target.value, 10);
    value = Verifyinput(value);
   
    if(value >= 60){
        let aHours = Math.floor(value / 60);
        if(parseInt(document.getElementById("PauseHours").value) + aHours >= 12){
            document.getElementById("PauseHours").value = 12;
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
    
    ActualSecondes = (parseInt(document.getElementById("PauseMinutes").value, 10)) * 60;
    ActualSecondes = ActualSecondes + (parseInt(document.getElementById("PauseHours").value, 10) * 3600);
    ActualSecondes = ActualSecondes + value;

    let Time = [0, 0, ActualSecondes];
    let Time2 = getMinutesSecondes(Time);
    let Time3 = getHoursMinute([0, Time2[1], 0]);

    if(Time3[0] > 12){
        Time3[0] = 12;
        Time3[1] = 59;
        Time2[2] = 59;
    }
    event.target.value = Time2[2];
    document.getElementById("PauseHours").value = Time3[0];
    document.getElementById("PauseMinutes").value = Time3[1];
    });

function drawClock(NumberClock, NumberStart, Number, Text, xM, yM, lM, tM) {
  NumberOfClock = NumberOfClock + 1;
  //console.log(NumberOfClock);
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
    button.id = NumberClock + "clock-button" + numPrint;

    const angle = ((num - 15) * (Math.PI * 2)) / ((Number - NumberStart)+1); // Position des boutons en fonction de l'angle
    const x = radius60  * xM * Math.cos(angle);
    const y = radius60 * yM * Math.sin(angle);

    button.style.position = "absolute";
    button.style.left = ((canvas60.width / 2 + x) - lM) + "px";
    button.style.top = ((canvas60.height / 2 + y) + 80) + "px";


    let NumInputButton = -1;

    button.addEventListener("mouseover", () => {
        NumInputButton = document.getElementById("TravailHours").value;

        document.getElementById("0clock-button" + NumInputButton).style.backgroundColor = "transparent";
        document.getElementById("0clock-button" + NumInputButton).style.color = "#ffffff";

        document.getElementById("TravailHours").value = num;
        document.getElementById(button.id).style.backgroundColor = "#ffffff";
        document.getElementById(button.id).style.color = "rgb(0, 0, 0)";
    });

     document.getElementById("TravailHours").addEventListener("click", (event) => {
        NumInputButton = document.getElementById("TravailHours").value;
     });

    buttonContainer60.appendChild(button);
  }
}

let PrecedentValueInput = -1;

document.getElementById("TravailHours").addEventListener("click", (event) => {
    document.getElementById("TravailHours").style.backgroundColor = "#d49218";

    document.getElementById("TravailMinutes").style.backgroundColor = "transparent";
    document.getElementById("TravailSecondes").style.backgroundColor = "transparent";
});

document.getElementById("TravailHours").addEventListener("input", (event) => {
    
    document.getElementById("0clock-button" + PrecedentValueInput).style.backgroundColor = "transparent";
    document.getElementById("0clock-button" + PrecedentValueInput).style.color = "#ffffff";

    let numNewButton = document.getElementById("TravailHours").value;

    numNewButton = Verifyinput(numNewButton);
    if(numNewButton > 12){
        numNewButton = 12;
    }
    if(Number.isNaN(numNewButton)){
        numNewButton = 0;
    }
    //console.log(numNewButton);

    document.getElementById("0clock-button" + numNewButton).style.backgroundColor = "#ffffff";
    document.getElementById("0clock-button" + numNewButton).style.color = "rgb(0, 0, 0)";

    PrecedentValueInput = numNewButton;
 });
 
 document.getElementById("TravailMinutes").addEventListener("click", (event) => {
    document.getElementById("TravailHours").style.backgroundColor = "transparent";
    document.getElementById("TravailSecondes").style.backgroundColor = "transparent";
 });
 
 document.getElementById("TravailSecondes").addEventListener("click", (event) => {
    document.getElementById("TravailHours").style.backgroundColor = "transparent";
    document.getElementById("TravailMinutes").style.backgroundColor = "transparent";
 });

function deleteClockButtons() {
    if(NumberButtonClicked != -1){
        //console.log("START : " + NumberButtonClicked);
        for(let i = (NumberButtonClicked + 1); i< (NumberButtonClicked + 10); i++){
            let id = "1clock-button" + i;
            //console.log(id);
            document.getElementById("clock-buttons60").removeChild(document.getElementById(id));
        }
    }
}

/* Create a Listener on button to draw a little clock on click, permit to create a 60 min clock */
function CreateListenerButton(str, lM, xM){
    let cmpt = 0;
    for(let i = 1; i < 61; i = i + 10){
        let strButton = str + cmpt;
        //console.log(strButton);

        cmpt = cmpt + 1;

        document.getElementById(strButton).addEventListener("click", (event) => {
            drawClock(1, i, (i+8), "", 0.55, 0.55, lM, xM);
            deleteClockButtons();
            NumberButtonClicked = (i - 1);
        });
    }
}

/* Delete all buttons */
function DeletesButton(){
    const parentElement = document.getElementById("clock-buttons60");
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

start();

function start(){
    let strModiTimer = "";
    let strInputListener = ["", "TravailHours", "TravailMinutes", "TravailSecondes", "PauseHours", "PauseMinutes", "PauseSecondes"];
    for(let i = 1; i < 3; i++){
        strModiTimer = "modifTimer" + i;
        document.getElementById(strModiTimer).addEventListener("click", (event) => {
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
            DeletesButton()
        });
    }
    for(let i = 1; i < 7; i++){
        document.getElementById(strInputListener[i]).addEventListener("click", (event) => {
            DeletesButton();
            if(i == 5 || i == 6){
                drawClock(0, 0, 5, "0", 0.95, 0.95, 0, 0);
                CreateListenerButton("0clock-button", 0, 0);
            }
            if(i == 2 || i == 3){
                drawClock(0, 0, 5, "0", 0.95, 0.95, 970, 0);
                CreateListenerButton("0clock-button", 970, 0);
            }
            if(i == 1 || i == 4){
                if(i == 4){
                    drawClock(0, 0, 12, "", 0.95, 0.95, 0, 0);
                }
                else{
                    drawClock(0, 0, 12, "", 0.95, 0.95, 970, 0);

                    PrecedentValueInput = document.getElementById("TravailHours").value;

                    document.getElementById("0clock-button" + PrecedentValueInput).style.backgroundColor = "#ffffff";
                    document.getElementById("0clock-button" + PrecedentValueInput).style.color = "rgb(0, 0, 0)";
                }
            }
        });
    }
}