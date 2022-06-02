// const fetch = require('node-fetch');

const showCoins = (coins) => {
  const ul = document.querySelector('#criptoslist');
  coins.forEach((element, index) => {
    const li = document.createElement('li');
    if(index < 10) {
      li.innerText = element.symbol;
      ul.appendChild(li);
    }
  });
};

const getCoins = () => {
  const url = 'https://api.coincap.io/v2/assets';
  fetch(url)
    .then(response => response.json())
    .then(data => showCoins(data.data))
    .catch((error) => console.log(`Parametro inválido ${error}`));
};

getCoins();
