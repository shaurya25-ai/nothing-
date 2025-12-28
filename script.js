const music = document.getElementById('music');
const btn = document.getElementById('music-toggle');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = "Pause Music ⏸️";
  } else {
    music.pause();
    btn.textContent = "Play Music 🎵";
  }
});

// Optional: try to autoplay when page loads (may be blocked)
window.addEventListener('load', () => {
  music.play().catch(() => {
    // Autoplay blocked, user must click play button
    btn.textContent = "Play Music 🎵";
  });
});
