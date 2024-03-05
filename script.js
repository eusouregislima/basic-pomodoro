let minutes = 25;
let seconds = 0;
let isRunning = false;
let timerInterval;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    updateButtonVisibility(false);
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  updateButtonVisibility(true);
}

function updateButtonVisibility(showStartButton) {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const breakButton = document.getElementById("breakButton");

  if (showStartButton) {
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
    breakButton.style.display = "inline-block";
  } else {
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
    breakButton.style.display = "none";
  }
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    isRunning = false;
    alert("Período Concluído!");

    // Reinicie o temporizador após um Pomodoro concluído
    resetTimer();
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    // Adicione um zero à esquerda se os segundos forem menores que 10
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    document.getElementById(
      "timer"
    ).innerHTML = `${minutes}:${formattedSeconds}`;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  document.getElementById("timer").innerHTML = `${minutes}:00`;
  updateButtonVisibility(true);
}

function startBreak() {
  stopTimer();
  minutes = 5;
  seconds = 0;
  isRunning = true;
  updateButtonVisibility(false);
  timerInterval = setInterval(updateTimer, 1000);
}
