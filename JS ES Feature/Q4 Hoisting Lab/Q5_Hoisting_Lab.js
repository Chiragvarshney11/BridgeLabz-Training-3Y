"use strict";

// Q5: Hoisting Lab — fixed version
// `var` declarations are hoisted and initialized with undefined.
// Function declarations are hoisted with their function body.
// `let` is hoisted but remains in the Temporal Dead Zone until initialized.

var score = 50;

function announce() {
  console.log("Game started");
}

let status = "ready";

function startGame() {
  console.log(status);
}

console.log(score); // 50
announce();         // Game started
startGame();        // ready

// Arrow-function comparison:
// An arrow function assigned to const is not usable before initialization.
const announceArrow = () => {
  console.log("Game started using arrow function");
};

announceArrow();

// Original sequence notes:
// console.log(score) before `var score = 50` prints undefined.
// announce() works before its declaration because function declarations are hoisted.
// Accessing `status` before its `let` initialization throws ReferenceError (TDZ).
// Calling startGame() after `status` is initialized prints "ready".
