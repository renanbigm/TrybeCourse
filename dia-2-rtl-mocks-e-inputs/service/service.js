const returnRdmNum = () => {
  return Math.floor(Math.random() * 101);
};

const handleCase = (str) => {
  return str.toUpperCase();
}

const firstLetter = (str) => {
  return str[0];
}

const twoToOne = (first, second) => {
  return first + second;
}

console.log(twoToOne('renan', 'fagundes'))

module.exports = { 
  returnRdmNum,
  handleCase,
  firstLetter,
  twoToOne,
};