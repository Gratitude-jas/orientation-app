import { renderAlarm } from './components/alarm.js';
import { renderStopwatch } from './components/stopwatch.js';
import { renderTimer } from './components/timer.js';
import { fetchWeather, renderWeather } from './components/weather.js';

const view = document.getElementById("view");

function handleOrientation(event) {
  const { beta, gamma } = event;

  let orientation = "";

  if (beta > 150 || beta < -150) orientation = "portrait-upside-down";
  else if (Math.abs(gamma) < 10) orientation = "portrait";
  else if (gamma > 30) orientation = "landscape-right";
  else if (gamma < -30) orientation = "landscape-left";

  switch (orientation) {
    case "portrait":
      view.innerHTML = renderAlarm();
      break;
    case "landscape-right":
      view.innerHTML = renderStopwatch();
      break;
    case "portrait-upside-down":
      view.innerHTML = renderTimer();
      break;
    case "landscape-left":
      fetchWeather().then(data => {
        view.innerHTML = renderWeather(data);
      });
      break;
    default:
      view.innerHTML = "Rotate your device to begin!";
  }
}

function initOrientationListener() {
  if (typeof DeviceOrientationEvent?.requestPermission === "function") {
    // iOS Safari
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        } else {
          view.innerHTML = "Motion access denied. Please enable it in settings.";
        }
      })
      .catch(err => {
        console.error("Permission error:", err);
        view.innerHTML = "Unable to access device orientation.";
      });
  } else {
    // Android or desktop
    window.addEventListener("deviceorientation", handleOrientation);
  }
}
function checkScreenOrientation() {
  const type = screen.orientation?.type || "";
  const view = document.getElementById("view");

  if (type.includes("portrait")) {
    view.innerHTML = "<h2>⏰ Alarm</h2><p>Portrait mode detected.</p>";
  } else if (type.includes("landscape")) {
    view.innerHTML = "<h2>⏱️ Stopwatch</h2><p>Landscape mode detected.</p>";
  } else {
    view.innerHTML = "Rotate your device to begin!";
  }
}

screen.orientation?.addEventListener("change", checkScreenOrientation);
window.addEventListener("DOMContentLoaded", checkScreenOrientation);


window.addEventListener("DOMContentLoaded", initOrientationListener);
