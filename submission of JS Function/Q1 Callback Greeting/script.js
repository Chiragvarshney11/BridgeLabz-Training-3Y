// Q1: Callback greeting
// Demonstrates calling a callback after the greeting is printed.

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greetUser("Harsh", showEndMessage);
