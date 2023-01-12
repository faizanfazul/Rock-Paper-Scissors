  function computerPlay() {
    const rps = ["rock", "paper", "scissor"];
    const random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }

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
          return "It's a draw! you both selected same.";
        } else if (
          playerSelection === "rock" &&
          computerSelection === "scissor"
        ) {
          return "You win! Rock beats scissor";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
          return `You lose! Paper beats rock`;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
          return "You win! Paper beats rock";
        } else if (
          playerSelection === "paper" &&
          computerSelection === "scissor"
        ) {
          return "You lose! Scissor beat paper\ntry again!";
        } else if (
          playerSelection === "scissor" &&
          computerSelection === "paper"
        ) {
          return "You win! Scissor beat paper";
        } else if (
          playerSelection === "scissor" &&
          computerSelection === "rock"
        ) {
          return "You lose! Rock beats scissor\ntry again!";
        }
      }
      document.getElementById("computer").innerText = `Computer Selected | ${computerSelection}`;
      document.getElementById("you").innerText = `You Selected | ${playerSelection}`;
      document.getElementById("results").innerText = "Results: " +"| " + playRound(playerSelection, computerSelection);
    });
  });
