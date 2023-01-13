function computerPlay() {
  const rps = ["rock", "paper", "scissor"];
  const random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}
let yourScore = 0;
let ComputerScore = 0;
let userSelections = document.querySelectorAll("[data-selection]");

userSelections.forEach((userSelection) => {
  userSelection.addEventListener("click", () => {
    let selectionName = userSelection.dataset.selection;
    function makeSelection(selectionName) {
      return selectionName;
    }
    let computerSelection = computerPlay();
    let playerSelection = makeSelection(selectionName);

    let playRound = (playerSelection, computerSelection) => {
      if (playerSelection === computerSelection) {
        return "It's a draw!😁 you both selected same.";
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissor"
      ) {
        return "You win!😎 Rock beats scissor " + yourScore++;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose!😢 Paper beats rock ` + ComputerScore++;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!😎 Paper beats rock " + yourScore++;
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissor"
      ) {
        return "You lose!😢 Scissor beat paper " + ComputerScore++;
      } else if (
        playerSelection === "scissor" &&
        computerSelection === "paper"
      ) {
        return "You win!😎 Scissor beat paper " + yourScore++;
      } else if (
        playerSelection === "scissor" &&
        computerSelection === "rock"
      ) {
        return "You lose!😢 Rock beats scissor " + ComputerScore++;
      }
    };
    if (yourScore == 10) {
      alert("Congratulations!🎉 You won the Game ");
    }
    if (ComputerScore == 10) {
      alert("Alas!😔 You lost the Game ");
      
    }
    document.getElementById("your-score").innerText = `You: ${yourScore}`;
    document.getElementById(
      "computer-score"
    ).innerText = `Computer: ${ComputerScore}`;
    document.getElementById(
      "computer"
    ).innerText = `Computer Selected: ${computerSelection}`;
    document.getElementById(
      "you"
    ).innerText = `You Selected: ${playerSelection}`;
    document.getElementById("results").innerText = playRound(
      playerSelection,
      computerSelection
    );
  });
});
