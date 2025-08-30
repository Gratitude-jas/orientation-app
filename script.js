import { renderAlarm } from './components/alarm.js';
import { renderStopwatch } from './components/stopwatch.js';
import { renderTimer } from './components/timer.js';
import { renderWeather } from './components/weather.js';

const view = document.getElementById("view");
const bg = document.getElementById("bg");
let currentMode = "";

function renderFloating(icon, count = 10) {
  bg.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "floating";
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 100}%`;
    el.style.fontSize = `${40 + Math.random() * 40}px`;
    el.textContent = icon;
    bg.appendChild(el);
  }
}

function renderModule(mode) {
  if (mode === currentMode) return;
  currentMode = mode;
  document.body.className = "";

  switch (mode) {
    case "portrait":
      renderAlarm(view, renderFloating);
      break;
    case "landscape-right":
      renderStopwatch(view, renderFloating);
      break;
    case "portrait-upside-down":
      renderTimer(view, renderFloating);
      break;
    case "landscape-left":
      renderWeather(view, renderFloating);
      break;
    default:
      view.innerHTML = "Rotate your device to begin!";
      bg.innerHTML = "";
      document.body.style.background = "#111";
  }
}

function handleOrientation(event) {
  const { beta, gamma } = event;
  let orientation = "";

  if (beta > 150 || beta < -150) orientation = "portrait-upside-down";
  else if (Math.abs(gamma) < 10) orientation = "portrait";
  else if (gamma > 30) orientation = "landscape-right";
  else if (gamma < -30) orientation = "landscape-left";

  renderModule(orientation);
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

window.addEventListener("deviceorientation", handleOrientation);
