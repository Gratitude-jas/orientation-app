let interval;
let seconds = 0;

export function renderStopwatch() {
  return `
    <h2>⏱ Stopwatch</h2>
    <div id="stopwatch">${seconds}s</div>
    <button onclick="startStopwatch()">Start</button>
    <button onclick="stopStopwatch()">Stop</button>
    <button onclick="resetStopwatch()">Reset</button>
  `;
}

window.startStopwatch = () => {
  interval = setInterval(() => {
    seconds++;
    document.getElementById("stopwatch").textContent = `${seconds}s`;
  }, 1000);
};

window.stopStopwatch = () => clearInterval(interval);

window.resetStopwatch = () => {
  clearInterval(interval);
  seconds = 0;
  document.getElementById("stopwatch").textContent = "0s";
};
