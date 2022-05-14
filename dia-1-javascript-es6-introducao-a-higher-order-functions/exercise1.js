//exercicse 1
const returnaFullNameAndEmail = (name) => {
  const email = `${name.split(' ').join('_').toLowerCase()}@trybe.com`;
  return `{ ${name}, email:${email} }`
}
const newEmployees = () => ({ id: returnaFullNameAndEmail('Renan Fagundes') })

console.log(newEmployees());

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
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  let testResult = 0;
  for (let i = 0; i < studentAnswers.length; i += 1) {
    if (studentAnswers[i] === rightAnswers[i]) testResult += 1;
    if (studentAnswers[i] !== rightAnswers[i] && studentAnswers[i] !== 'N.A') testResult -= 0.5;
  }
  return testResult;
}

const avaliation = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
};

console.log(avaliation(rightAnswers, studentAnswers, checkAnswers))