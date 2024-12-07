// Calculator: JavaScript file

let currentOperand = '';
let previousOperand = '';
let operator = null;

window.appendNumber = (number) => {
  currentOperand += number;
  updateDisplay();
};

window.setOperator = (op) => {
  if (currentOperand === '') return;
  operator = op;
  previousOperand = currentOperand;
  currentOperand = '';
};

window.calculate = () => {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = prev / curr; break;
    default: return;
  }

  currentOperand = result.toString();
  operator = null;
  previousOperand = '';
  updateDisplay();
};

window.clearDisplay = () => {
  currentOperand = '';
  previousOperand = '';
  operator = null;
  updateDisplay();
};

function updateDisplay() {
  document.getElementById("display").value = currentOperand;
}
