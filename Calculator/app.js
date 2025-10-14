const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keys");

let displayValue = "0";
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false; //если первое числов введено, то true

function updateDisplay() {
  // Обновление дисплея при любом действии
  display.textContent = displayValue;
}

updateDisplay();

function inputDigit(digit) {
  if (waitingForSecondOperand === true) {
    // Если нажата операция, сбрасываем дисплей для ввода второго числа
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    // Заменяем 0 на цифру или добавляем цифру к существующему числу
    displayValue = displayValue === "0" ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  // Запрещаем вводить более одной точки
  if (!displayValue.includes(dot)) {
    // Если нажата точка после оператора, начинаем с '0.'
    if (waitingForSecondOperand === true) {
      displayValue = "0.";
      waitingForSecondOperand = false;
      return;
    }
    displayValue += dot;
  }
}

function clearAll() {
  // функция ресета
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
  displayValue = "0";
}
