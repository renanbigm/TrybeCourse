function generateObj(key, value) {
  const games = {
    online: 'elol',
    local: 'rdr',
  }
  games[key] = value;
  return games
}
console.log(generateObj('board', 'zombiecide'));