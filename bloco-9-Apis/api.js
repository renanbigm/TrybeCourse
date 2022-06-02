const getPrices = () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest//currencies/usd.min.json';
  const brl = fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd.brl)
    .catch((error) => console.log(`Parametro inválido ${error}`));
  return brl;
};

const showCoins = async (coins) => {
  const prices = await getPrices();
  const ul = document.querySelector('#criptoslist');
  coins.forEach((element, index) => {
    const li = document.createElement('li');
    if(index < 10) {
      li.innerText = `${element.symbol}: ${Math.round(element.priceUsd * prices)}`;
      ul.appendChild(li);
    }
  });
};

const getCoins = () => {
  const url = 'https://api.coincap.io/v2/assets';
  fetch(url)
    .then((response) => response.json())
    .then((data) => showCoins(data.data))
    .catch((error) => console.log(`Parametro inválido ${error}`));
};

getCoins();

