import Audio from './audio';

const audioContext = () => {
  return {
    destination: {},
    createAnalyser: () => {
      return {
        connect: () => { }
      }
    },
    createMediaElementSource: (element) => {
      return {
        connect: () => { }
      }
    }
  };
};

const buildAudio = () => new Audio(document.createElement('audio'), audioContext());

describe('Audio', () => {
  describe('constructor', () => {
    it('defines audio element', () => {
      const audio = buildAudio();

      expect(audio.element).toBeDefined();
      expect(audio.context).toBeDefined();
    });
  });

  describe('setup', () => {
    it('defines audioCtx source and analyzer', () => {
      const audio = buildAudio();

      audio.setup();

      expect(audio.analyser).toBeDefined();
      expect(audio.source).toBeDefined();
    });
  });

  describe('setTimerHandler', () => {
    it('adds timeupdate eventListener callback', () => {
      const audio = buildAudio();

      const timeupdateCallback = jest.fn();

      jest.spyOn(audio.element, 'addEventListener');

      audio.setup();
      audio.setTimerHandler(timeupdateCallback);

      expect(audio.element.addEventListener).toBeCalledWith('timeupdate', timeupdateCallback);
    });
  });

  describe('setVolume', () => {
    it('updates volume', () => {
      const audio = buildAudio();

      audio.setup();
      audio.setVolume(1);

      expect(audio.element.volume).toBe(1);
    });
  });

  describe('setAudioSource', () => {
    it('updates audio src', () => {
      const audio = buildAudio();

      audio.setup();
      audio.setAudioSource('http://localhost/audio.xpto');

      expect(audio.element.src).toBe('http://localhost/audio.xpto');
    });
  });

  describe('resume', () => {
    it('calls resumes on context', () => {
      const audio = buildAudio();

      audio.context.resume = jest.fn();

      audio.setup();
      audio.resume();

      expect(audio.context.resume).toBeCalled();
    });
  });

  describe('play', () => {
    it('calls play on element', () => {
      const audio = buildAudio();
      audio.element.play = jest.fn();

      audio.setup();
      audio.play();

      expect(audio.element.play).toBeCalled();
    });
  });

  describe('pause', () => {
    it('calls pause on element', () => {
      const audio = buildAudio();
      audio.element.pause = jest.fn();

      audio.setup();
      audio.pause();

      expect(audio.element.pause).toBeCalled();
    });
  });
});
