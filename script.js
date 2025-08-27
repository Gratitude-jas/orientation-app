import { renderAlarm } from './components/alarm.js';
import { renderStopwatch } from './components/stopwatch.js';
import { renderTimer } from './components/timer.js';
import { fetchWeather, renderWeather } from './components/weather.js';

window.addEventListener("deviceorientation", async (event) => {
  const { beta, gamma } = event;
  const view = document.getElementById("view");

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
      const data = await fetchWeather();
      view.innerHTML = renderWeather(data);
      break;
    default:
      view.innerHTML = "Rotate your device to begin!";
  }
});
