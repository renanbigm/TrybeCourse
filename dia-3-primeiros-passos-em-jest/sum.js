// sum.js
const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error('Tipo inválido, insira um número do tipo número');
  }
  return a + b;
}

module.exports = sum;