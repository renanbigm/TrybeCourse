const submitBtn = document.getElementById('submitBtn');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('email');
const inputOptions = document.getElementsByClassName('options');
const inputText = document.getElementById('textarea');
const inputDate = document.getElementById('date');
const inputCheck = document.getElementById('checkbox-permission')

function addListenerToSubmitBtn() {
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputName.value.length < 10 || inputName.value.length > 40) {
      return window.alert('Dados Inválidos');
    } if (inputEmail.value.length < 10 || inputName.value.length > 50) {
      return window.alert('Dados Inválidos');
    }    
    let count = 0;
    for (let i = 0; i < inputOptions.length; i += 1) { 
      if (inputOptions[i].checked === false) {
        count += 1;
      }
      if (count === 4) {
        return window.alert('Dados Inválidos');
      }
    }
    if (inputText.value.length === 0) {
      return window.alert('Dados Inválidos');
    }
    if (inputDate.value === '') {
      return window.alert('Dados Inválidos');
    } 
    if (inputCheck.checked === false) {
      return window.alert('Dados Inválidos');
    }
    return window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  });
}

window.onload = () => {
  addListenerToSubmitBtn();
};
