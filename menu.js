import PromptSync from 'prompt-sync';

const prompt = PromptSync();

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

  const choice = prompt("Enter your choice: ");
  actionCount++;

  switch (choice) {
    case '1':
    console.log("Hello there! Hope you're having a great day!");
      break;
    case '2':
      console.log("Why don’t scientists trust atoms? Because they make up everything!");
      break;
    case '3':
      console.log("Current Time: " + new Date().toLocaleTimeString());
      break;
    case '4': {
      const word = prompt("Enter a word to reverse: ");
      console.log("Reversed: " + word.split('').reverse().join(''));
      break;
    }
    case '5': {
      const num = parseInt(prompt("Enter a number: "));
      if (isNaN(num)) {
        console.log("Invalid input.");
      } else {
        console.log(num % 2 === 0 ? "Even" : "Odd");
      }
      break;
    }
    case '6':
      squareNumber();
      break;
    case '7':
      repeatPhrase();
      break;
    case '8':
      convertCelsiusToFahrenheit();
      break;
    case '9':
      countDown();
      break;
    case '10':
      console.log("Goodbye!");
      return;
    case '42':
      secretFeature();
      break;
    default:
      console.log("Invalid option. Please try again.");
  }

  // Repeat menu
  mainMenu();
}


// Call the menu to start the app
mainMenu();
