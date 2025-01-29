// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");

submitGuess.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value, 10);

  // Validate user input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    message.classList.add("error");
    return;
  }

  message.classList.remove("error");

  // Check the user's guess
  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    submitGuess.disabled = true;
  } else if (userGuess > randomNumber) {
    attempts--;
    message.textContent = `Too high! You have ${attempts} attempts left.`;
  } else {
    attempts--;
    message.textContent = `Too low! You have ${attempts} attempts left.`;
  }

  // End game if out of attempts
  if (attempts === 0 && userGuess !== randomNumber) {
    message.textContent = `😢 Game over! The number was ${randomNumber}.`;
    submitGuess.disabled = true;
  }

  // Clear input field
  guessInput.value = "";
});
