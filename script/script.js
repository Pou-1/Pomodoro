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

let PrecedentValueInput = -1;
let PrecedentValueInput2 = -1;

const canvas60 = document.getElementById("canvas60");
const ctx60 = canvas60.getContext("2d");
let radius60 = canvas60.height / 2;
ctx60.translate(radius60, radius60);
radius60 = radius60 * 0.90;

const buttonContainer60 = document.getElementById("clock-buttons60");

let NumberOfClock = 0;

let NumberButtonClicked = -1;

let backgroundPause = "rgb(39, 129, 202)";
let backgroundTravail = "rgb(59, 29, 55)";

let strInputListener = ["", "TravailHours", "TravailMinutes", "TravailSecondes", "PauseHours", "PauseMinutes", "PauseSecondes"];

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

function ChangementPause(){
    travail = 0;
    document.body.style.background = "#2781CA";
    document.getElementById("Modifier").style.background = "#2781CA";
    document.getElementById("sub-div1").style.background = "#6EB5FF";
    document.getElementById("sub-div2").style.background = "#6EB5FF";
    document.getElementById("footer").style.backgroundColor = "rgb(22, 70, 121)";
    document.getElementById("footer1").style.backgroundColor = "rgb(22, 70, 121)";
    changeInputBackground();
    document.getElementById("ActualTimerModBetweenWorkBreak").innerText = "Break";
}

function ChangementTravail(){
    travail = 1;
    document.body.style.background = "#3B1D37";
    document.getElementById("Modifier").style.background = "#3B1D37";
    document.getElementById("sub-div1").style.background = "#55264F";
    document.getElementById("sub-div2").style.background = "#55264F";
    changeInputBackground();
    document.getElementById("footer").style.backgroundColor = "rgb(51, 22, 47)";
    document.getElementById("footer1").style.backgroundColor = "rgb(51, 22, 47)";
    document.getElementById("ActualTimerModBetweenWorkBreak").innerText = "Work";
}

//---------- Link to Button in the timer, Start the timer or Reset and change value of timer link to the actual mod ----------\\
function functResetStartTimer(){
    if(ResetStartTimer == 1){
        ResetStartTimer = 0;
        
        const button = document.getElementById("stopTimer");
        button.innerText = "ㅤ";
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
        button.innerText = "ㅤ";
        const squareIcon = document.createElement("i");
        squareIcon.className = "fa-solid fa-square LogoPlay";
        button.innerHTML = '';
        button.appendChild(squareIcon);
    }
}

function changeInputBackground(){
    if(travail == 0){
        let strInputListener = ["", "TravailHours", "TravailMinutes", "TravailSecondes", "PauseHours", "PauseMinutes", "PauseSecondes"];
        for(let i = 1; i < 7; i++){
            document.getElementById(strInputListener[i]).style.background = backgroundPause;
        }
    }
    if(travail == 1){
        let strInputListener = ["", "TravailHours", "TravailMinutes", "TravailSecondes", "PauseHours", "PauseMinutes", "PauseSecondes"];
        for(let i = 1; i < 7; i++){
            document.getElementById(strInputListener[i]).style.background = backgroundTravail;
        }
    }
}

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

function drawClock(NumberClock, NumberStart, Number, Text, xM, yM, lM, tM) {
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
      button.id = NumberClock + "clock-button" + numPrint + Text;
  
      const angle = ((num - 15) * (Math.PI * 2)) / ((Number - NumberStart)+1); // Position des boutons en fonction de l'angle
      const x = radius60  * xM * Math.cos(angle);
      const y = radius60 * yM * Math.sin(angle);
  
      button.style.position = "absolute";
      button.style.left = ((canvas60.width / 2 + x) - lM) + "px";
      button.style.top = ((canvas60.height / 2 + y) - 5) + "px";
  
  
      let NumInputButton = -1;
  
      button.addEventListener("mouseover", () => {
          NumInputButton = document.getElementById(strInputListener[NumberClock]).value;
          if((NumberClock == 2 || NumberClock == 3 ||NumberClock == 5 || NumberClock == 6) && NumInputButton == 0){
            NumInputButton = "00";
          }
          document.getElementById(NumberClock + "clock-button" + NumInputButton).style.backgroundColor = "transparent";
          document.getElementById(NumberClock + "clock-button" + NumInputButton).style.color = "#ffffff";

          document.getElementById(strInputListener[NumberClock]).value = button.innerHTML;
          document.getElementById(button.id).style.backgroundColor = "#ffffff";
          document.getElementById(button.id).style.color = "rgb(0, 0, 0)";
      });
  
       document.getElementById(strInputListener[NumberClock]).addEventListener("click", (event) => {
          NumInputButton = document.getElementById(strInputListener[NumberClock]).value;
       });
  
      buttonContainer60.appendChild(button);
    }
  }
  
  function deleteClockButtons(clockNumber) {
    if(NumberButtonClicked != -1){
        for(let i = (NumberButtonClicked + 1); i < (NumberButtonClicked + 10); i++){
            let id = clockNumber + "clock-button" + i;
            document.getElementById("clock-buttons60").removeChild(document.getElementById(id));
        }
    }
}

/* Create a Listener on button to draw a little clock on click, permit to create a 60 min clock */
function CreateListenerButton(str, lM, xM, clockNumber){
    let cmpt = 0;
    for(let i = 1; i < 61; i = i + 10){
        let strButton = str + cmpt;

        if(cmpt == 0){
            strButton = strButton + "0";
        }

        document.getElementById(strButton).addEventListener("mouseover", (event) => {
            drawClock(clockNumber, i, (i+8), "", 0.55, 0.55, lM, xM);
            deleteClockButtons(clockNumber);
            NumberButtonClicked = (i - 1);
        });
        cmpt = cmpt + 10;
    }
}

/* Delete all buttons */
function DeletesButton(){
    const parentElement = document.getElementById("clock-buttons60");
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function Button60ActualInput(i, top){
    DeletesButton();
    if(i == 2 || i == 3 || i == 5 || i == 6){
        drawClock(i, 0, 5, "0", 0.95, 0.95, top[i], 0);
        let value = document.getElementById(strInputListener[i]).value;
        value = parseInt(value);
        value = (Math.floor(value / 10) * 10) + 1;
        NumberButtonClicked = value - 1;
        let valueMax = value + 8;
        
        drawClock(i, value, valueMax, "", 0.55, 0.55, top[i], 0);
        PrecedentValueInput2 = document.getElementById(strInputListener[i]).value;

        if(PrecedentValueInput2 == 0){
            PrecedentValueInput2 = PrecedentValueInput2 + "0";
        }
        document.getElementById(i + "clock-button" + PrecedentValueInput2).style.backgroundColor = "#ffffff";
        document.getElementById(i + "clock-button" + PrecedentValueInput2).style.color = "rgb(0, 0, 0)";
        
        CreateListenerButton(i + "clock-button", top[i], 0, i);
    }

    if(i == 1 || i == 4){
        if(i == 4){
            drawClock(i, 0, 12, "", 0.95, 0.95, 225, 0);
        }
        else{
            drawClock(i, 0, 12, "", 0.95, 0.95, 1200, 0);

            PrecedentValueInput = document.getElementById("TravailHours").value;

            document.getElementById(i + "clock-button" + PrecedentValueInput).style.backgroundColor = "#ffffff";
            document.getElementById(i + "clock-button" + PrecedentValueInput).style.color = "rgb(0, 0, 0)";
        }
    }
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


//---------- Listener on all input ----------\\
document.getElementById("stopTimer").addEventListener("click", (event) => {
    functResetStartTimer();
  });

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



//---------- Listener for the clocks ----------\\
document.getElementById("TravailHours").addEventListener("input", (event) => {
    
    document.getElementById("1clock-button" + PrecedentValueInput).style.backgroundColor = "transparent";
    document.getElementById("1clock-button" + PrecedentValueInput).style.color = "#ffffff";

    let numNewButton = document.getElementById("TravailHours").value;

    numNewButton = Verifyinput(numNewButton);
    if(numNewButton > 12){
        numNewButton = 12;
    }
    if(Number.isNaN(numNewButton)){
        numNewButton = 0;
    }

    document.getElementById("1clock-button" + numNewButton).style.backgroundColor = "#ffffff";
    document.getElementById("1clock-button" + numNewButton).style.color = "rgb(0, 0, 0)";

    PrecedentValueInput = numNewButton;
  });

 document.getElementById("TravailHours").addEventListener("click", (event) => {
    changeInputBackground();
    document.getElementById("TravailHours").style.backgroundColor = "#d49218";
  });
 
 document.getElementById("TravailMinutes").addEventListener("click", (event) => {
    changeInputBackground();
    document.getElementById("TravailMinutes").style.backgroundColor = "#d49218";
  });
 
 document.getElementById("TravailSecondes").addEventListener("click", (event) => {
    changeInputBackground();
    document.getElementById("TravailSecondes").style.backgroundColor = "#d49218";
  });

 document.getElementById("PauseHours").addEventListener("click", (event) => {
    changeInputBackground();
    document.getElementById("PauseHours").style.backgroundColor = "#d49218";
  });

 document.getElementById("PauseMinutes").addEventListener("click", (event) => {
    changeInputBackground();
    document.getElementById("PauseMinutes").style.backgroundColor = "#d49218";
  });
 
 document.getElementById("PauseSecondes").addEventListener("click", (event) => {
    changeInputBackground();
    document.getElementById("PauseSecondes").style.backgroundColor = "#d49218";
  });

start();

function start(){
    let strModiTimer = "";
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
    let top = [0, 1200, 1200, 1200, 225, 225, 225];
    for(let i = 1; i < 7; i++){
        document.getElementById(strInputListener[i]).addEventListener("click", (event) => {
            Button60ActualInput(i, top);
        });
        document.getElementById(strInputListener[i]).addEventListener("input", (event) => {
            Button60ActualInput(i, top);
        });
    }
}