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

function returnKeysValues(obj) {
  const keys = Object.keys(obj);
  for (let i in keys) {
  console.log(`${keys[i]}: ${Object.values(obj)[i]}`);
  }
}
console.log(returnKeysValues(student1))