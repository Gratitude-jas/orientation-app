export function renderTimer() {
  return `
    <h2>⏳ Timer</h2>
    <input type="number" id="timerInput" placeholder="Seconds" />
    <button onclick="startTimer()">Start</button>
    <div id="timerDisplay"></div>
  `;
}

window.startTimer = () => {
  let time = parseInt(document.getElementById("timerInput").value);
  const display = document.getElementById("timerDisplay");

  const countdown = setInterval(() => {
    if (time <= 0) {
      clearInterval(countdown);
      display.textContent = "⏰ Time's up!";
    } else {
      display.textContent = `${time}s remaining`;
      time--;
    }
  }, 1000);
};
