const sum = require('./sum');

describe('testando a função sum', () => {
  test('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('sums two values', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('sums two values', () => {
    expect(() => sum(4, '6')).toThrowError('Tipo inválido, insira um número do tipo número');
  });
})
