export function renderTimer(view, renderFloating) {
  document.body.style.background = "#d35400";
  view.innerHTML = `<h2>⏳ Timer</h2><p>Countdown with alerts.</p>`;
  renderFloating("⏳");
}
