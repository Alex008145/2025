const buttonValues = [
  // массив кнопок
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const rightSymbols = ["÷", "x", "+", "-", "="];

const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");

let A = 0;
let operator = null;
let B = null;

function clearAll() {
  // функция ресета
  A = 0;
  operator = null;
  B = null;
}

for (let i = 0; i < buttonValues.length; i++) {
  // добавляем кнопки на основе массива
  let value = buttonValues[i];
  let button = document.createElement("button");
  button.innerText = value;

  if (rightSymbols.includes(value)) {
    button.style.backgroundColor = "orange";
  } else if (topSymbols.includes(value)) {
    button.style.backgroundColor = "gray";
  } else if (value === "0") {
    button.style.gridColumn = "span 2";
  }

  button.addEventListener("click", function () {
    if (rightSymbols.includes(value)) {
      if (value == "=") {
        if (A != null) {
          B = display.value;
          let numA = Number(A);
          let numB = Number(B);

          if (operator == "÷") {
            display.value = numA / numB;
          } else if (operator == "x") {
            display.value = numA * numB;
          } else if (operator == "+") {
            display.value = numA + numB;
          } else if (operator == "-") {
            display.value = numA - numB;
          }
          clearAll();
        }
      } else {
        operator = value;
        A = display.value;
        display.value = "";
      }
    } else if (topSymbols.includes(value)) {
      if (value === "AC") {
        // удаление
        clearAll();
        display.value = "";
      } else if (value == "+/-") {
        // изменение знака
        if (display.value != "" && display.value != "0") {
          if (display.value[0] == "-") {
            // удалить минус
            display.value = display.value.slice(1);
          } else {
            // добавить минус
            display.value = "-" + display.value;
          }
        }
      } else if (value == "%") {
        // процент
        display.value = display.value / 100;
      }
    } else {
      if (value === ".") {
        if (display.value != "" && !display.value.includes(value)) {
          // проверка на ввод более одной точки
          display.value += value;
        }
      } else if (display.value == "0") {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
  // добавить кнопки
  document.getElementById("buttons").appendChild(button);
}
