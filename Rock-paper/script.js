//Taking user inputs by catching the button pressed by them
const buttons = document.querySelectorAll(".btn");

//ran a for each loop on buttons, and set their text content value to playerChoice variable and also calling the playGame function with arguement as playerChoice
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerChoice = this.textContent.trim();
    playGame(playerChoice);
  });
});

//Creating a playGame function which handles all the logic
function playGame(playerChoice) {
  //Array that contains all the possible choices
  const choices = ["Rock", "Paper", "Scissors"];

  //Computer choices
  const rn = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[rn];

  //I should have added some colours on the resulted text too.

  //Game logic
  if (playerChoice === computerChoice) {
    document.querySelector(
      ".result h2"
    ).textContent = `It's a draw. Your choice was ${playerChoice} and Computer's choice was ${computerChoice}`;
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    document.querySelector(
      ".result h2"
    ).textContent = `Yay You Won! Your choice was ${playerChoice} and Computer's choice was ${computerChoice}`;
  } else {
    document.querySelector(
      ".result h2"
    ).textContent = `Oh oh you lost! Your choice was ${playerChoice} and Computer's choice was ${computerChoice}`;
  }
}
