function rockPaperScissors(player1, player2) {
  const options = ['rock', 'paper', 'scissors', 'spock', 'lizard']
  



 const result = player1 == player2 ? "draw" 
 : player1 == "rock" && player2 == "paper" ? "player2"
 : player1 == "rock" && player2 == "scissors" ? "player1"
 : player1 == "rock" && player2 == "lizard" ? "player1"
 : player1 == "rock" && player2 == "spock" ? "player2"

 : player1 == "paper" && player2 == "rock" ? "player1"
 : player1 == "paper" && player2 == "scissors" ? "player2"
 : player1 == "paper" && player2 == "lizard" ? "player2"
 : player1 == "paper" && player2 == "spock" ? "player1"

 : player1 == "scissors" && player2 == "rock" ? "player2"
 : player1 == "scissors" && player2 == "paper" ? "player1"
 : player1 == "scissors" && player2 == "lizard" ? "player1"
 : player1 == "scissors" && player2 == "spock" ? "player2"

 : player1 == "spock" && player2 == "rock" ? "player1"
 : player1 == "spock" && player2 == "scissors" ? "player1"
 : player1 == "spock" && player2 == "lizard" ? "player2"
 : player1 == "spock" && player2 == "paper" ? "player2"

 : player1 == "lizard" && player2 == "rock" ? "player2"
 : player1 == "lizard" && player2 == "scissors" ? "player2"
 : player1 == "lizard" && player2 == "paper" ? "player1"
 : player1 == "lizard" && player2 == "spock" ? "player1"

 : null
 return result

}


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}