
var computerChoices = ["sorry", "mine", "formation", "radio", "irreplaceable", "party", "countdown", "jealous", "listen", "halo"]
var wins = 0;
var loses = 0;
var score = 0;
var guesses = 9;
var guessesLeft = 9;
var userGuess = [];
var music = [];
var remainingGuesses = document.getElementById("remainingGuesses");
var totalWins = document.getElementById("totalWins");
var totalLoses = document.getElementById("totalLoses");
var totalScore = document.getElementById("totalScore");
var currentWord = document.getElementById("currentWord");
var guessedLetters = document.getElementById("guessedLetters");
var songs = [];
function youWin() {
    newGame();
}
function youLose() {
    newGame();
}


 alert("Are you ready to test your Beyonce song knowledge?");



var beyonceSong = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(beyonceSong);

for (var i = 0; i < beyonceSong.length; i++){
    songs.push(beyonceSong[i]);
}
for (var i=0; i < beyonceSong.length; i++)  {
    music.push("_");
}


    function myFunction() {
        document.getElementById("myForm").reset();
    }

    document.onkeyup = function (event) {

    
        // function youWin() {
        //     newGame();
        // }
    
        // function youLoss() {
        //     newGame();
        // }
    








        
    var input = event.keyCode; 
        
        remainingGuesses.textContent = guessesLeft;
        totalWins.textContent = wins;
        totalLoses.textContent = loses;
        totalScore.textContent = score;
        currentWord.textContent = computerChoices[beyonceSong];    
        currentWord.textContent = music.join(" ");

    if (input > 64 && input < 91) {
        var userGuess = event.key.toLowerCase();
    }

    for (let i = 0; i < beyonceSong.length; i++) {
         if(userGuess === music[i]){
           score++;
        } 
         if (userGuess === beyonceSong[i]) {
            music[i] = userGuess;
            currentWord.textContent = music.join(" ");
            music.join(" ") < 0;
            score++;

         }
         if (score > beyonceSong.length)
         {
            alert("you WIN!!!", totalWins.textContent++, youWin)
            
         }


         if (userGuess === beyonceSong[1])
         {    
            document.getElementById("mine").play();
         }
         if (userGuess === beyonceSong[0])
         {    
            document.getElementById("sorry").play();
         }
       
                
    }

    if ((userGuess !== computerChoices[0]) && (userGuess !== computerChoices[1]) && (userGuess !== computerChoices[2]) && (userGuess !== computerChoices[3]) 
        && (userGuess !== computerChoices[4]) && (userGuess !== computerChoices[5]) && (userGuess !== computerChoices[6]) && (userGuess !== computerChoices[7])
        && (userGuess !== computerChoices[8]) && (userGuess !== computerChoices[9]) && (userGuess !== computerChoices[10]) && (userGuess !== computerChoices[11])){
            guessesLeft--; guessedLetters.textContent += userGuess;
        }   


    //   if ((userGuess !== beyonceSong[0]) && (userGuess !== beyonceSong[1]) && (userGuess !== beyonceSong[2]) && (userGuess !== beyonceSong[3]) 
    //     && (userGuess !== beyonceSong[4]) && (userGuess !== beyonceSong[5]) && (userGuess !== beyonceSong[6]) && (userGuess !== beyonceSong[7])
    //     && (userGuess !== beyonceSong[8]) && (userGuess !== beyonceSong[9])){
    //         guessesLeft--; guessedLetters.textContent += userGuess;
    //     }   
 
    if (guessesLeft <= 0)
    {
        alert("you Lose", totalLoses.textContent++ )
    }
    
    
//     if (userGuess=== beyonceSong)    {
//         alert("you WIN!!!")

//     }
    
// if (beyonceSong === computerChoices[0])
// {
//     document.getElementById("sorry").play();
//     alert("Thank you!");
// }
 
// if ((beyonceSong === userGuess) && (userGuess === computerChoices[1]) && (userGuess === computerChoices[2]) && (userGuess === computerChoices[3]) 
// && (userGuess === computerChoices[4])) {

//     document.getElementById("mine").play();
//     alert("Thank you!");
// }
// if (userGuess === beyonceSong[i]) {
//     music[i] = userGuess;
//     currentWord.textContent = music.join(" ");
//     music.join(" ") < 0;

//     alert("you WIN!!!", totalWins.textContent++)

//  }


}
    

   

 