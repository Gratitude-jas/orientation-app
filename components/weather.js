export function renderWeather(view, renderFloating) {
  document.body.style.background = "#2980b9";
  view.innerHTML = `<h2>🌦️ Weather</h2><p>Fetching weather data...</p>`;
  renderFloating("🌧️");
}
