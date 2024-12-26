function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN if either input is not a number
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  if (b === 0) {
    return Infinity; // Return Infinity instead of throwing error
  }
  return a / b;
}

let result = add(10, 'hello');
console.log(result); // Output: NaN

result = add(10, NaN);
console.log(result); // Output: NaN

result = divide(10, 0);
console.log(result); // Output: Infinity