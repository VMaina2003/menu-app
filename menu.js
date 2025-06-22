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