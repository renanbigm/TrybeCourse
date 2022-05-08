function fatorial(n) {  // 5*4 = 20 * 3 = 60 * 2 = 120
  let fatorialN = 1;  
  for (let i = n; i > 1; i -= 1) {    
    fatorialN *= i;
    console.log(fatorialN);
  } 
  return fatorialN;
}
const fat = (n) => (n === 0) ? 1 : (n * fat(n - 1));

const fatorials = (n) => Array(n).fill().map((_, i) => 1 + i).reduce((a, b) => b * a, 1);
// console.log(fatorials(6))
console.log(Array.from({ length: 6 }, (_, i) => i + 1).reduce((a, b) => b * a, 1));

// .fill -> preenche o array com os valores 
// .map -> cria novo array do mesmo tamanho do array original e altera os valores de acordo
// com a função descrita.
// .reduce -> reduz o array a um valor, esse valor será do tipo dele.
// .filter -> retorna um array do mesmo tamanho ou menor, trazendo os elementos 
// que encaixam na condição descrita.

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

const longestSort = (str) => str.split(' ').sort((a, b) => b.length - a.length)[0];

const longestReduce = (str) => str.split(' ').reduce((a, b) => a.length > b.length ? a : b, '') 

// console.log(longestSort('Antônio foi no banheiro e não sabemos o que aconteceu'));

// console.log(longestReduce('Antônio foi no banheiro e não sabemos o que aconteceu'));
