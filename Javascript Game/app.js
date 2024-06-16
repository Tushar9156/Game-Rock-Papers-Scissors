let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompchoice = () => {
  const optoions = ["rock", "papers", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return optoions[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw, Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    userScorePara.innertext = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompchoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choices);
  choice.addEventListener("click", () => {
    console.log("choice was clicked");
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
