function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Uncommon bug: Incorrect handling of NaN
let result = add(10, 'hello'); // result will be '10hello'
console.log(result); // Output: 10hello

result = add(10, NaN); // result will be NaN
console.log(result); // Output: NaN

result = divide(10, 0); // throws an error
console.log(result); // This line will not be reached