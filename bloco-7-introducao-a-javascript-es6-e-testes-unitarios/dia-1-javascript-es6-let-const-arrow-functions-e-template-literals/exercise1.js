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
const returnSortedArr = () => oddsAndEvens.sort((a, b) => b - a);
for (let i = 0; i < oddsAndEvens.length; i += 1) {
  if (oddsAndEvens[i] < oddsAndEvens[i - 1]) {
    oddsAndEvens[i], oddsAndEvens[i - 1] = oddsAndEvens[i - 1], oddsAndEvens[i];
  }
}
// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);

// returnFatorial = (n) => (n * (n - 1));

function fatorial(n) {  // 5*4 = 20 * 3 = 60 * 2 = 120 * 1 = 120
  let fatorialN = 1;  
  for (let i = n; i > 1; i -= 1) {    
    fatorialN *= i;
    console.log(fatorialN);
  } 
  return fatorialN;
}

const fat = (n) => (n === 0) ? 1 : (n * fat(n - 1));

// console.log(fat(6));

// const longestWord = (str) => (str.split()) ?

function longest(str) {
  const arrStr = str.split(' ');
  let compare = arrStr[0];
  for (let i = 0; i < arrStr.length; i += 1) {
    if (arrStr[i].length > compare.length) {
      compare = arrStr[i];
    }
  }
  return compare;
}
console.log(longest('Antônio foi no banheiro eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee não sabemos o que aconteceu'));






