import timer from '.';

describe('timer', () => {
  it('returns formatted time min:sec as string', () => {
    const seconds = 360;

    const result = timer(seconds);

    expect(result).toBe('06:00');
  });
});
