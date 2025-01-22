const bpmInput = document.getElementById('bpm');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const indicator = document.getElementById('indicator');

let intervalId;

function startMetronome() {
  const bpm = parseInt(bpmInput.value, 10);
  if (bpm < 40 || bpm > 240 || isNaN(bpm)) {
    alert('Please enter a BPM value between 40 and 240.');
    return;
  }
  
  const interval = 60000 / bpm; // Calculate interval in milliseconds
  
  intervalId = setInterval(() => {
    indicator.style.opacity = '1';
    setTimeout(() => {
      indicator.style.opacity = '0.5';
    }, interval / 2); // Halfway through the beat
  }, interval);
}

function stopMetronome() {
  clearInterval(intervalId);
  indicator.style.opacity = '0.5';
}

startButton.addEventListener('click', startMetronome);
stopButton.addEventListener('click', stopMetronome);
