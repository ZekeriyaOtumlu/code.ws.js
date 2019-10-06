var wins= 0;
var loses = 0;
var guessLeft = 9;
var guessSoFar = [];
var choiceForComputer;

 // This function is run whenever the user presses a key.
document.onkeyup = function(event){

 // Determines which key was pressed.
 var guessForUser = event.key;

    var alphabet = "abcdefghijklmnopqrstuvxwyz";

 // Randomly chooses a choice from the options array. This is the Computer's guess.
    var randomAlphabetLetter = alphabet[Math.floor(Math.random()*26)];

    choiceForComputer = randomAlphabetLetter;
     console.log("Computer Choice: "  + choiceForComputer);
  
  if (event.keyCode >= 65 && event.keyCode <= 90) { 

  if(guessForUser === choiceForComputer){

    alert("You Won");

    wins = wins + 1;

    document.getElementById("wins").textContent ="Wins: " + wins;

  resetGame();

  }
  else if(guessForUser !== choiceForComputer){
      
      guessSoFar.push(guessForUser);
    
      document.getElementById("Guesssofar").textContent = "You Guess So Far: " + guessSoFar;

      guessLeft = guessLeft - 1;
      document.getElementById("Guessleft").textContent = "Guess Left: " + guessLeft;
    //   resetGame();
    }

   
    
    if (guessLeft <= 0){
        alert("Game is Over");
        
        loses = loses + 1;
        document.getElementById("losses").textContent = "Losses: " + loses;

        resetGame();
    
  }
}

function resetGame(){
    // wins = 0;
    // loses = 0;
    guessLeft = 9;
    guessSoFar = [];

    // document.getElementById("Guessleft").textContent = "Guess Left: " + guessLeft;
    document.getElementById("Guessleft").textContent = "Guess Left: " + 9;
    document.getElementById("Guesssofar").textContent = "You Guess So Far: " + [];

}
}
