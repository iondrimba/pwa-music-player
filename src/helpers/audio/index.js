export default class Audio {
  constructor(element, audioCtx) {
    this.element = element;
    this.context  = audioCtx;
  }

  _createAnalyser() {
    this.analyser = this.context.createAnalyser();
  }

  _createMediaElementSource() {
    this.source = this.context.createMediaElementSource(this.element);
    this.source.connect(this.analyser);
    this.analyser.connect(this.context.destination);
  }

  setup() {
    this._createAnalyser();
    this._createMediaElementSource();
    this.setVolume(.1);
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
    this.context.resume();
  }

  play() {
    this.element.play();
  }

  pause() {
    this.element.pause();
  }
}
