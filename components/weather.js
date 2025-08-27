const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your key

export async function fetchWeather() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Coimbatore&appid=${API_KEY}&units=metric`);
  return await res.json();
}

export function renderWeather(data) {
  return `
    <h2>🌤 Weather</h2>
    <p>${data.name}</p>
    <p>${data.weather[0].main}</p>
    <p>${data.main.temp}°C</p>
  `;
}
