var computerChoices = ["sorry", "mine", "formation", "radio", "irreplaceable", "party", "countdown", "jealous", "listen", "halo"]
var wins = 0;
var loses = 0;
var score = 0;
var guesses = 10;
var guessesLeft = 10;
var userGuess = [];
var music = [];
var songs = [];
var incorrect = [];
var remainingGuesses = document.getElementById("remainingGuesses");
var totalWins = document.getElementById("totalWins");
var totalLoses = document.getElementById("totalLoses");
var totalScore = document.getElementById("totalScore");
var currentWord = document.getElementById("currentWord");
var guessedLetters = document.getElementById("guessedLetters");




function newGame() {

  var input = event.keyCode;
  if (input > 64 && input < 91) {
    var userGuess = event.key.toLowerCase();
  }

  score = 0;
  guessesLeft = 10;

  userGuess = [];
  music = [];
  songs = [];
  incorrect = [];
  beyonceSong = [];

  var remainingGuesses = document.getElementById("remainingGuesses");
  var totalWins = document.getElementById("totalWins");
  var totalLoses = document.getElementById("totalLoses");
  var totalScore = document.getElementById("totalScore");
  currentWord = document.getElementById("currentWord");
  var guessedLetters = document.getElementById("guessedLetters");



  var beyonceSong = computerChoices[Math.floor(Math.random() * computerChoices.length)];


  for (let i = 0; i < beyonceSong.length; i++) {
    music.push(beyonceSong[i]);
  }

  for (var i = 0; i < beyonceSong.length; i++) {
    songs.push("_");
  }

  guessedLetters.textContent = "";

  guesses.textContent = "Guesses Remaining:" + guessesLeft;

  currentWord.textContent = "";
  currentWord.textContent = songs.join(" ");

  if (score === beyonceSong.length) {
    wins++;
    totalWins.textContent = "Wins: " + wins;

    newGame();
  }

  if (guessesLeft === 0) {
    loses++;
    totalLoses.textContent = "Loses: " + loses;
    newGame();
  }

};







var beyonceSong = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(beyonceSong);

for (var i = 0; i < beyonceSong.length; i++) {
  songs.push(beyonceSong[i]);
}
for (var i = 0; i < beyonceSong.length; i++) {
  music.push("_");
}



document.onkeyup = function (event) {

  var input = event.keyCode;



  // currentWord.textContent = computerChoices[beyonceSong];
  currentWord.textContent = music.join(" ");

  if (input > 64 && input < 91) {
    var userGuess = event.key.toLowerCase();
  }

  for (let i = 0; i < beyonceSong.length; i++) {
    if (userGuess === music[i]) {
      score--;
    }
    if (userGuess === beyonceSong[i]) {
      music[i] = userGuess;
      currentWord.textContent = music.join(" ");
      music.join(" ") < 0;
      score++;

    }
  }

  for (var i = 0; i < 10; i++) {
    if (!music.includes(userGuess) && incorrect.indexOf(userGuess) === -1) {
      guessesLeft--;
      incorrect.push(userGuess);
      guessedLetters.textContent = incorrect.join('');
      remainingGuesses.textContent = "Guesses Remaining: " + guessesLeft;
    }
  }


  if (score === beyonceSong.length) {
    wins++;
    totalWins.textContent = "Wins: " + wins;

    newGame();
  }

  if (guessesLeft === 0) {
    loses++;
    totalLoses.textContent = "Loses: " + loses;
    newGame();
  }

  guessedLetters.textContent = incorrect.join('');
  remainingGuesses.textContent = guessesLeft;
  totalWins.textContent = wins;
  totalLoses.textContent = loses;

}  

 