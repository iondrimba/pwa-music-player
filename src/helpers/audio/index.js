export default class Audio {
  constructor(element, audioCtx) {
    this.element = element;
    this.context  = audioCtx;
    this.repeatPlayback = false;
    this._ended = this._ended.bind(this);
    this.stopHandler = () => {};
  }

  _createAnalyser() {
    this.analyser = this.context.createAnalyser();
  }

  _createMediaElementSource() {
    this.source = this.context.createMediaElementSource(this.element);
    this.source.connect(this.analyser);
    this.analyser.connect(this.context.destination);
  }

  _ended() {
    if(this.repeatPlayback) {
      this.play();
    } else {
      this.stopHandler();
    }
  }

  _canplay() {
    this.canplayCallback();
  }

  canplay(callback) {
    this.canplayCallback = callback;
  }

  setup() {
    this._createAnalyser();
    this._createMediaElementSource();

    this.element.addEventListener('canplay', this._canplay.bind(this));
    this.element.addEventListener('ended', this._ended);
  }

  setTimerHandler(callback) {
    this.element.addEventListener('timeupdate', callback);
  }

  setStopHandler(callback) {
    this.stopHandler = callback;
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

  repeat(value) {
    this.repeatPlayback = value;
  }
}
