export default class AudioHeper {
  constructor(element) {
    this.element = element;
  }

  setup() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    this.analyser = this.audioCtx.createAnalyser();

    this.source = this.audioCtx.createMediaElementSource(this.element);
    this.source.connect(this.analyser);
    this.source.connect(this.audioCtx.destination);

    this.bufferLength = this.analyser.frequencyBinCount;
    this.frequencyData = new Uint8Array(this.bufferLength);

    this.setVolume(.1);
    this.setTimerHandler(this.timerHandler);
  }

  setTimerHandler(callback) {
    this.element.addEventListener('timeupdate', callback);
  }

  setVolume(amount) {
    this.element.volume = amount;
  }

  setAudioSource(src) {
    this.element.src = src;
  }

  resume() {
    this.audioCtx.resume();
  }

  play() {
    this.element.play();
  }

  pause() {
    this.element.pause();
  }
}
