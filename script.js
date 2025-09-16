let startTime;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return (
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0")
  );
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener("click", () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
  lapsList.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    lapsList.appendChild(li);
  }
});
