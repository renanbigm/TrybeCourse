const sum = require('./sum');

describe('testando a função sum', () => {
  it('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('sums two values', () => {
    expect(sum(0, 0)).toBe(0);
  });
});