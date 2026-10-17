// Question 3: Math Utility Dashboard
// Uses Math methods to produce a formatted summary.

const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Dashboard
----------------------
Input number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Cube: ${cube.toFixed(2)}
Random number (10-50): ${randomNumber}
`;

console.log(summary);
