import percent from '.';

describe('percent', () => {
  it('calculates percentage value', () => {
    const current = 24.5;
    const total = 245;

    const result = percent(current, total);

    expect(result).toBe(10);
  });
});
