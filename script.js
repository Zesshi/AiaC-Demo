const timestamp = document.getElementById("timestamp");
const themeToggle = document.getElementById("themeToggle");
const metricValue = document.querySelector("[data-target]");

function updateTimestamp() {
  const now = new Date();
  timestamp.textContent = now.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function animateMetric() {
  const target = Number(metricValue.dataset.target);
  const duration = 1400;
  const start = performance.now();

  function frame(time) {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    metricValue.textContent = (target * eased).toFixed(2);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("theme-warm");
});

updateTimestamp();
animateMetric();
