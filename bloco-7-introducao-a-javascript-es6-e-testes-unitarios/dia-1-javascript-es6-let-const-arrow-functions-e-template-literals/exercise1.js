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




const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const returnSortedArr = () => oddsAndEvens.sort((a, b) => a - b);

// console.log(`Os números ${returnSortedArr()} se encontram ordenados de forma crescente`);

// returnFatorial = (n) => (n * (n - 1));

function fatorial(n) {  // 5*4 = 20 * 3 = 60 * 2 = 120 * 1 = 120
  let fatorialN = 1;  
  for (let i = n; i > 1; i -= 1) {    
    fatorialN *= i;
    console.log(fatorialN);
  } 
  return fatorialN;
}
console.log(fatorial(6));
