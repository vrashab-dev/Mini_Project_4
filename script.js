let Random = parseInt(Math.random() * 100 + 1);

let input = document.querySelector("#input");
let Arr = document.querySelector("#arr");
let LnH = document.querySelector("#LowHigh");
let Remain = document.querySelector("#Remain");
let Btn = document.querySelector("#Btn");
let reset = document.querySelector("#Btn_end");
let guess = 10;
let PlayGame = true;

if (PlayGame) {
  Btn.addEventListener("click", function (e) {
    e.preventDefault();
    const G = input.value;
    Validate(G);
  });
}
reset.addEventListener("click", function (e) {
  e.preventDefault();
  StrtGame();
});
function Validate(G) {
  if (isNaN(G)) {
    alert("Enter A valid Number!!!");
  } else if (G <= 0) {
    alert("Enter Value Lesser then 0!!!");
  } else if (G > 100) {
    alert("Enter Value Greater then 100!!!!");
  } else {
    Check(G);
  }
}

function Check(G) {
  if (G < Random) {
    DisplayMessage("TO LOW!!!!");
  } else if (G > Random) {
    DisplayMessage("TO HIGH!!!!");
  } else {
    DisplayMessage("Yess!!! Your Are Right!!!");
    EndGame();
  }
  if (guess === 1) {
    DisplayMessage("!!Game Over!!");
    Arr.innerHTML += `${G}  `;
  Remain.innerHTML = `${0}`;
    EndGame();
  } else {
    guess--;
    DisplayGuess(G);
    input.value = "";
  }
}

function DisplayGuess(G) {
  Arr.innerHTML += `${G}  `;
  Remain.innerHTML = `${guess}`;

  if (Remain.textContent < 4) {
    Remain.style.color = "Red";
  }
}

function DisplayMessage(message) {
  LnH.innerHTML = message;
}

function EndGame() {
  PlayGame = false;
  input.value = "";
  input.setAttribute("disabled", "");
  reset.style.backgroundColor = "Green";
  reset.innerHTML = "New Game";
}

function StrtGame() {
  PlayGame = true;
  input.removeAttribute("disabled", "");
  reset.style.backgroundColor = "red";
  reset.innerHTML = "Start Over";
  Random = parseInt(Math.random() * 100 + 1);
 guess = 10;
  Remain.style.color = "white";
  Arr.innerHTML = "";
  Remain.innerHTML = `${10}`;
  LnH.innerHTML = "";
  
}