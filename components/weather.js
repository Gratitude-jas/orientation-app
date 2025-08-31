const API_KEY = '3fb14e32bc7fd8d0f2d5ca75b8164902'; // Replace with your OpenWeatherMap API key
const CITY = "Coimbatore"; // You can make this dynamic later

export async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      temp: data.main.temp,
      condition: data.weather[0].main,
      icon: data.weather[0].icon
    };
  } catch (err) {
    console.error("Weather fetch failed:", err);
    return null;
  }
}

export function renderWeather(view, renderFloating, data) {
  document.body.style.background = "#2980b9";
  if (!data) {
    view.innerHTML = `<h2>🌦️ Weather</h2><p>Unable to fetch weather data.</p>`;
    renderFloating("❌");
    return;
  }

  view.innerHTML = `
    <h2>🌦️ Weather of the Day</h2>
    <p>Condition: ${data.condition}</p>
    <p>Temperature: ${data.temp}°C</p>
    <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="Weather icon" />
  `;
  renderFloating("🌧️");
}
