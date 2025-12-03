// Simple web-audio piano (one-octave) with keydown/click + small ADSR envelope

// mapping: keyboard key -> note name (frequency lookup below)
const keyMap = {
  'A': 'C4', 'W': 'C#4', 'S': 'D4', 'E': 'D#4', 'D': 'E4',
  'F': 'F4', 'T': 'F#4', 'G': 'G4', 'Y': 'G#4', 'H': 'A4',
  'U': 'A#4', 'J': 'B4', 'K': 'C5', 'O': 'C#5', 'L': 'D5', 'P': 'D#5', ';': 'E5'
};

// frequencies for notes used (A4 = 440Hz)
const freqs = {
  C4: 261.63, 'C#4': 277.18, D4: 293.66, 'D#4': 311.13, E4: 329.63,
  F4: 349.23, 'F#4': 369.99, G4: 392.00, 'G#4': 415.30, A4: 440.00,
  'A#4': 466.16, B4: 493.88, C5: 523.25, 'C#5': 554.37, D5: 587.33, 'D#5': 622.25, E5: 659.25
};

const AudioCtx = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioCtx();

let masterGain = audioCtx.createGain();
masterGain.gain.value = 0.5; // default volume
masterGain.connect(audioCtx.destination);

const waveSelect = document.getElementById('waveSelect');
const volume = document.getElementById('volume');

volume.addEventListener('input', (e) => {
  masterGain.gain.value = Number(e.target.value);
});

// utility to play a note with an ADSR-like short envelope
function playNote(freq, wave = 'sine', duration = 1.2) {
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = wave;
  osc.frequency.value = freq;

  // connect nodes
  osc.connect(gain);
  gain.connect(masterGain);

  // short percussive envelope (attack-decay-sustain-release)
  const attack = 0.01;
  const decay = 0.12;
  const sustainLevel = 0.3;
  const release = 0.45;

  gain.gain.setValueAtTime(0.00001, now);
  gain.gain.exponentialRampToValueAtTime(1.0, now + attack);
  gain.gain.exponentialRampToValueAtTime(sustainLevel, now + attack + decay);
  // schedule release
  gain.gain.setValueAtTime(sustainLevel, now + duration);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + release);

  osc.start(now);
  osc.stop(now + duration + release + 0.05);
}

// visual and play helper
const piano = document.getElementById('piano');
const keys = Array.from(piano.querySelectorAll('.key'));
const activeKeys = new Set(); // to prevent retrigger on hold

function noteFromKey(keyChar) {
  return keyMap[keyChar.toUpperCase()];
}

function freqFromNote(note) {
  return freqs[note];
}

function pressKeyElement(elem) {
  elem.classList.add('active');
  setTimeout(() => elem.classList.remove('active'), 120);
}

// click/touch to play
keys.forEach(k => {
  k.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    const note = k.dataset.note;
    const freq = freqFromNote(note);
    const wave = waveSelect.value;
    if (freq) playNote(freq, wave, 0.8);
    pressKeyElement(k);
  });
});

// keyboard handling: keydown + keyup
window.addEventListener('keydown', (e) => {
  const key = e.key.length === 1 ? e.key : e.key; // capture ; too
  const note = noteFromKey(key);
  if (!note) return;
  // avoid repeats while holding
  if (activeKeys.has(key)) return;
  activeKeys.add(key);

  // find element for visual feedback
  const elem = keys.find(x => x.dataset.note === note);
  if (elem) pressKeyElement(elem);

  const frequency = freqFromNote(note);
  if (frequency) {
    // resume audio context on user gesture if suspended (browser autoplay policies)
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playNote(frequency, waveSelect.value, 0.85);
  }
});

window.addEventListener('keyup', (e) => {
  const key = e.key.length === 1 ? e.key : e.key;
  if (activeKeys.has(key)) activeKeys.delete(key);
});

// small UX: allow clicking outside keys without selecting text
piano.addEventListener('pointerup', () => { });
