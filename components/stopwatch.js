export function renderStopwatch(view, renderFloating) {
  document.body.style.background = "#16a085";
  view.innerHTML = `<h2>⏱️ Stopwatch</h2><p>Track your time with laps.</p>`;
  renderFloating("⏱️");
}
