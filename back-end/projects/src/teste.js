let nome = 'renan';
let sobrenome = 'fagundes';

nome = `${nome} ${sobrenome}`;
sobrenome = nome - sobrenome;
nome -= sobrenome;

console.log(nome, sobrenome);