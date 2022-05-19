const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// 1 - Dada uma matriz, transforme em um array.
const flatten = () => arrays.reduce((result, element) => result.concat(element), []);
// console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//2 - Crie uma string com os nomes de todas as pessoas autoras.
const reduceNames = () => books.reduce((string, element) => string += element.author.name, '');
// function reduceNames() {
//   const names = books.reduce((acc, book, index, array) => {
//     if (index === array.length - 1) return `${acc} ${book.author.name}.`;
//     return `${acc} ${book.author.name},`;
//   }, '');
//   return names;
// }
// console.log(reduceNames())

//🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
 const averageYear = () => books.reduce((average, element) => average + element.releaseYear - element.author.birthYear, 0) / books.length;
//  console.log(averageYear());

//🚀 4- Encontre o livro com o maior nome.
const longestNamedBook = () => books.reduce((biggestName, element) => (biggestName < element.name) ? element.name : biggestName).name;
// console.log(longestNamedBook())

//🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


const containsA = () => console.log(names.join('').toLowerCase().split(''))//.reduce((counter, element) => 
//element === 'a' ? counter += 1 : counter, 0);


// const containsA = () => names.reduce((counter, element) => counter + element.toLowerCase().split('')
//   .reduce((counter, element) => element === 'a' ? counter + 1 : counter, 0), 0);

  console.log(containsA());


// 🚀 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => students.map((element, index) => ({ name: element, average: parseFloat(grades[index].reduce((average, element) => 
        average + element / grades[index].length , 0).toFixed(1)) }));

// console.log(studentAverage());

const ages = [
  {
    name: 'Renan',
    age: 17
  },
  {
    name: 'Larissa',
    age: 18
  },
  {
    name: 'Snow',
    age: 16
  }
]

const classifyByAge = () => ages.reduce((acc, curr) => {
  const verifyAges = curr.age >= 18 ? 'maiores' : 'menores';
  acc[verifyAges].push(curr)
  return acc
}, { maiores: [], menores: []});

// console.log(classifyByAge());