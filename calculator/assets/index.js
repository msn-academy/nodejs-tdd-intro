const $buttons = document.querySelector('.buttons');
const $resultContainer = document.querySelector('.result-container');
let firstValue = '';
let secondValue = '';
let operator = '';
let result = 0;
let isOperator = false;

$buttons.addEventListener('click', (event) => {
  const $btn = event.target;
  const isNumber = $btn.classList.contains('number');
  isOperator = $btn.classList.contains('operator');
  const value = $btn.innerHTML;
  const id = $btn.id;

  if (isNumber && !operator) {
    firstValue += value;
    result = firstValue;
  } else if (isOperator) {
    operator = value;
  } else {
    secondValue += value;
    result = secondValue
  }
  if($btn.classList.contains('equal')) {
    switch(operator) {
      case '+': 
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        result = firstValue + secondValue;
      break;
      case '-': 
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        result = firstValue - secondValue;
      break;
    }
  }

  $resultContainer.innerHTML = result;
})
