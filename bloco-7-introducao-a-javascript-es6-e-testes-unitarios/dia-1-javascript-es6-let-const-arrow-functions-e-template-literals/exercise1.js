const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

const oddsAndEvens = [3, 4, 7, 2, 15, 17, 21];
const returnSortedArr = () => oddsAndEvens.sort((a, b) => a - b);
for (let i = 0; i < oddsAndEvens.length; i += 1) {
  if (oddsAndEvens[i] < oddsAndEvens[i - 1]) {
    oddsAndEvens[i], oddsAndEvens[i - 1] = oddsAndEvens[i - 1], oddsAndEvens[i];
  }
}
// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);
