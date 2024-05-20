// Team Var
let team1 = "Borussia Dortmund";
let team2 = "Real Madrid";

// Score Var
let scoreEl1 = document.getElementById("score1");
let scoreEl2 = document.getElementById("score2");
let score1 = 0;
let score2 = 0;

// Alert Var
let customAlert = document.getElementById("custom-alert");
let alertMessage = document.getElementById("alert-message");

// Time Var
let timeEl = document.getElementById("time");
let seconds = 0;
let interval;

// Alert Function
function showAlert(message, color) {
  alertMessage.innerText = message;
  customAlert.classList.add("show");
  customAlert.style.backgroundColor = color;
  setTimeout(function () {
    customAlert.classList.remove("show");
  }, 2000);
}

// Goal Functions
function goal1() {
  if (interval) {
    score1 = score1 + 1;
    scoreEl1.innerText = score1;
    showAlert(`Goal For ${team1}`, "green");
  } else {
    showAlert(`Match hadn't started yet`, "orange");
  }
}

function goal2() {
  if (interval) {
    score2 = score2 + 1;
    scoreEl2.innerText = score2;
    showAlert(`Goal For ${team2}`, "green");
  } else {
    showAlert(`Match hadn't started yet`, "orange");
  }
}

// Remove Goal Functions
function remove1() {
  if (interval) {
    if (score1 > 0) {
      score1 = score1 - 1;
      scoreEl1.innerText = score1;
      showAlert(`It's offside for ${team1}`, "red");
    } else {
      showAlert("Score cannot be less than 0", "black");
    }
  } else {
    showAlert(`Match hadn't started yet`, "orange");
  }
}

function remove2() {
  if (interval) {
    if (score2 > 0) {
      score2 = score2 - 1;
      scoreEl2.innerText = score2;
      showAlert(`It's offside for ${team2}`, "red");
    } else {
      showAlert("Score cannot be less than 0", "black");
    }
  } else {
    showAlert(`Match hadn't started yet`, "orange");
  }
}

// Timer Functions
function start() {
  if (!interval) {
    interval = setInterval(updateTime, 1000);
    showAlert("Match started", "green");
    timeEl.style.color = 'green';
  }
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    showAlert("Match paused", "red");
    timeEl.style.color = 'red';
  }
}

function reset() {
  if (timeEl.innerText !== "00:00") {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    timeEl.innerText = "00:00";
    score1 = 0;
    score2 = 0;
    scoreEl1.innerText = score1;
    scoreEl2.innerText = score2;
    showAlert("Match reseted", "gray");
    timeEl.style.color = 'white';
  } else {
    showAlert("Match already reseted", "black");
  }
}

function updateTime() {
  seconds++;
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  timeEl.innerText = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;

  if (mins >= 90) {
    clearInterval(interval);
    interval = null;
    showAlert("Match finished", "blue");
  }
}
