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
// name - genre - author.name

//exercise 1
function formatedBookNames() {
  return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}
// console.log(formatedBookNames());

//exercise 2
const getSortedAuthorsAges = () => books.map((element) => {
  return { 
    author: element.author.name, 
    age: (element.releaseYear - element.author.birthYear),
  };
}).sort((a, b) => a.age - b.age);
// console.log(getSortedAuthorsAges());

//exercise 3
const getFantasyAndFictionGenre = () => books.filter((element) => element.genre !== 'Terror');
// console.log(getFantasyAndFictionGenre());

//exercise 4
// const currentYear = new Date().getFullYear();
const getSortedOldBooks = () => books.filter((element) => element.releaseYear < (new Date().getFullYear() - 60))
.sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(getSortedOldBooks());

// exercise 5
const getSortedAuthorsFantasyFiction = () => {
  return books.filter((element) => element.genre !== 'Terror')
    .map((element) => element.author.name).sort();
}
// console.log(getSortedAuthorsFantasyFiction());

//exercise 6
const getOldBooks = () => books.filter((element) => element.releaseYear < (new Date().getFullYear() - 60))
  .map((element) => element.name);
// console.log(getOldBooks());

//exercise 7
const authorWith3DotsOnName = () => books.find((element) => element.author.name.split('.').length === 4).name

console.log(authorWith3DotsOnName())
