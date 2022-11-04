function game() {
  function computerPlay() {
    const rps = ["rock", "paper", "scissor"];
    const random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }

  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a draw! you both selected same.";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
      return "You win! Rock beats scissor";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      return "You lose! Scissor beat paper";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
      return "You win! Scissor beat paper";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
      return "You lose!Rock beats scissor";
    }
  }

  const computerSelection = computerPlay();
  const playerSelection = prompt("Choose your weapon | rock🪨, paper📃 or scissor✂️");
  console.warn("You Selected " + '"' + playerSelection + '"');
  console.error("Computer Selected " + '"' + computerSelection + '"');
  console.log("Results: "+playRound(playerSelection, computerSelection));

}

for (let i = 0; i < 5; i++) {
   game()
}