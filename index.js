
// Dice Roll
var randomNumber1 = Math.floor((Math.random())*6) + 1; // #1-6
var randomNumber2 = Math.floor((Math.random())*6) + 1; // #1-6

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png"); // images/dice1.png - images/dice6.png
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png"); // images/dice1.png - images/dice6.png

// Declaring Winner
var winner1 = "🚩 Player 1 Wins!"; // h1 text for player 1 win
var winner2 = "Player 2 Wins! 🚩 "; // h1 text for player 2 win
var draw = "Draw!"; // h1 text for draw
var winner; // variable for winner of each round
var style; // variable for margins based on winner

if (randomNumber1 > randomNumber2) {
  winner = winner1;
  style = "30px 105px 10px 5px";
} else if (randomNumber1 < randomNumber2) {
  winner = winner2;
  style = "30px 1px 10px 90px";
} else {
  winner = draw;
};

document.querySelector("h1").textContent = winner; // declare winner of dice roll in heading
document.querySelector("h1").style.margin = style; // set margins according to winner
