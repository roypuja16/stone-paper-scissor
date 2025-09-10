function playGame(userChoice) {
  const choices = ["stone", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = `Your choice: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer's choice: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "stone" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "stone") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    result = "You win! 🎉";
  } else {
    result = "Computer wins! 😢";
  }

  document.getElementById("winner").textContent = `Result: ${result}`;
}
