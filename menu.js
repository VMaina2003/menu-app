let prompt = require('prompt-sync')({ sigint: true });

// Track user actions
let actionCount = 0;

function mainMenu() {
  console.log("\n=== Main Menu ===");
  console.log("1. Greet Me");
  console.log("2. Tell a Joke");
  console.log("3. Show Current Time");
  console.log("4. Reverse a Word");
  console.log("5. Check if a Number is Even or Odd");
  console.log("6. Calculate the Square of a Number");
  console.log("7. Repeat a Phrase");
  console.log("8. Convert Celsius to Fahrenheit");
  console.log("9. Count Down from a Number");
  console.log("10. Exit");
  console.log("Hint: Try entering 42 ");
}
function greet() {
  console.log(" Hello there! Hope you're having a great day!");
}

function tellJoke() {
  console.log(" Why do programmers hate nature? It has too many bugs.");
}

function showTime() {
  const now = new Date();
  console.log(` Current time is: ${now.toLocaleTimeString()}`);
}

function reverseWord() {
  const word = prompt("Enter a word: ");
  console.log(`Reversed: ${word.split("").reverse().join("")}`);
}

function checkEvenOdd() {
  const input = prompt("Enter a number: ");
  const num = parseInt(input);
  if (isNaN(num)) return console.log(" Invalid number.");
  console.log(num % 2 === 0 ? " Even" : " Odd");
}

function squareNumber() {
  const input = prompt("Enter a number: ");
  const num = parseFloat(input);
  if (isNaN(num)) return console.log(" Invalid number.");
  console.log(` Square: ${num * num}`);
}

function repeatPhrase() {
  const phrase = prompt("Enter a phrase: ");
  const count = parseInt(prompt("How many times to repeat it? "));
  if (isNaN(count) || count < 1) return console.log(" Invalid count.");
  for (let i = 0; i < count; i++) {
    console.log(`${i + 1}: ${phrase}`);
  }
}

function convertCelsiusToFahrenheit() {
  const input = prompt("Enter Celsius temperature: ");
  const celsius = parseFloat(input);
  if (isNaN(celsius)) return console.log(" Invalid temperature.");
  const fahrenheit = celsius * 1.8 + 32;
  console.log(`🌡️ ${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}

function countDown() {
  const input = prompt("Enter a number to count down from: ");
  const num = parseInt(input);
  if (isNaN(num) || num < 0) return console.log("Invalid number.");
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

function secretFeature() {
  console.log(" You discovered the secret option 42!");
  console.log(` You've interacted with the menu ${actionCount} times so far.`);
}
