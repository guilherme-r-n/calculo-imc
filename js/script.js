function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcLevel = document.querySelector('#imc-level');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(1).replace('.', ',');

  if (imc < 18.5) {
    faixaImc = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    faixaImc = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    faixaImc = 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
    faixaImc = 'Obesidade grau I';
  } else if (imc >= 35 && imc < 40) {
    faixaImc = 'Obesidade grau II';
  } else {
    faixaImc = 'Obesidade grau III ou Obesidade Morbida';
  }

  imcResult.textContent = formattedImc;
  imcLevel.textContent = faixaImc;
}

start();
