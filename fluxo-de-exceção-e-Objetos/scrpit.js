function generateObj(key, value) {
  const games = {
    online: 'elol',
    local: 'rdr',
  };
  games[key] = value;
  return games
}
// console.log(generateObj('board', 'zombiecide'));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
console.log(student1.);

function returnKeysValues(obj) {
  const keys = Object.keys(obj);
  for (let i in keys) {
  console.log(`${Object.keys(obj)[i]}: ${Object.values(obj)[i]}`);
  }
}
// console.log(returnKeysValues(student1));

const getDayName = (number) => {
  if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
  const dayNumber = number - 1;
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return days[dayNumber];
};

const printDayname = (dayNumber) => {
  try {
    console.log(getDayName(dayNumber));
  } catch (e) {
    console.log(e.message);
  }
};
