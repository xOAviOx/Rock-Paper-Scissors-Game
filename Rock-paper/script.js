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

  const results = document.querySelector(".result h2");

  //Game logic
  if (playerChoice === computerChoice) {
    results.textContent = `It's a draw. Your choice was ${playerChoice} and Computer's choice was ${computerChoice}`;
    results.style.color = "grey";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    results.textContent = `Yay You Won! Your choice was ${playerChoice} and Computer's choice was ${computerChoice}`;
    results.style.color = "green";
  } else {
    results.textContent = `Oh oh you lost! Your choice was ${playerChoice} and Computer's choice was ${computerChoice}`;
    results.style.color = "red";
  }
}

