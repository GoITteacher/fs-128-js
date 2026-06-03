const refs = {
  startBtn: document.querySelector('.js-start-btn'),
  stopBtn: document.querySelector('.js-stop-btn'),
  clockface: document.querySelector('.js-clockface'),
};

let intervalId;

refs.startBtn.addEventListener('click', () => {
  const initTime = new Date('2026/06/03 21:21'); // 21:09:01

  intervalId = setInterval(() => {
    const currentTime = new Date();
    const diff = initTime - currentTime;
    const str = formatMsToTime(diff);
    refs.clockface.innerHTML = str;
    if (diff < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  console.log('STOP');
  clearInterval(intervalId);
});

//!=========================================

function formatMsToTime(ms) {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  // Pad numbers with leading zeros to ensure a consistent two-digit format
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}
