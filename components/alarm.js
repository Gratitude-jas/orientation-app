export function renderAlarm(view, renderFloating) {
  document.body.style.background = "#2c3e50";
  view.innerHTML = `<h2>⏰ Alarm</h2><p>Set your alarm time and sound.</p>`;
  renderFloating("🕰️");
}
