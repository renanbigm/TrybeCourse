//exercicse 1
const returnaFullNameAndEmail = (name) => {
  const email = `${name.split(' ').join('_').toLowerCase()}@trybe.com`;
  return `{ ${name}, email:${email} }`
}
const newEmployees = (returnaFullNameAndEmail) => ({ id: returnaFullNameAndEmail('Renan Fagundes') })

// console.log(newEmployees(returnaFullNameAndEmail));

//exercise 2
const checkNumber = (chosenNum, drawnNum) => chosenNum === drawnNum;

const getRandomNumber = (chosenNum, checkNumber) => {
  const drawnNum = Math.floor(Math.random() * 5) + 1;
  console.log(drawnNum);
  if (checkNumber(chosenNum, drawnNum)) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}
// console.log(getRandomNumber(3, checkNumber))

//exercise 3
