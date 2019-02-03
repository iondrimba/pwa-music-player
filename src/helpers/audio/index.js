export default class Audio {
  constructor(element, audioCtx) {
    this.element = element;
    this.context  = audioCtx;
    this.repeatPlayback = false;
    this._ended = this._ended.bind(this);
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
    }
  }

  setup() {
    this._createAnalyser();
    this._createMediaElementSource();
    this.setVolume(.1);

    this.element.addEventListener('ended', this._ended);
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

  repeat(value) {
    this.repeatPlayback = value;
  }
}
