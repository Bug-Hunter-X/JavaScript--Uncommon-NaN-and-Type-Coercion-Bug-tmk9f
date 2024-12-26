# JavaScript Uncommon Bug: NaN and Type Coercion

This repository demonstrates a subtle bug in JavaScript related to how it handles `NaN` (Not a Number) values and type coercion.  The primary issue lies in the unexpected behavior of arithmetic operations when dealing with mixed data types and `NaN`.

## Bug Description

The `add` function, while seemingly simple, exhibits unexpected behavior when provided a string argument.  Instead of throwing an error or returning `NaN`, it performs string concatenation. This can lead to difficult-to-detect errors in larger applications. The `divide` function correctly handles division by zero, but the other functions lack robust error handling for invalid input.

## How to reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or a similar JavaScript environment).
4. Observe the unexpected output.

## Solution

The `bugSolution.js` file provides a solution that incorporates type checking and robust handling of `NaN` and invalid input to prevent unexpected behavior. 

This example highlights the importance of careful input validation and error handling in JavaScript to avoid subtle and difficult-to-debug issues.