function rockPaperScissors(player1, player2) {
//Arrays of moves that each move can beat. 
 const winners ={
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock:  ['rock', 'scissors'],
    lizard: ['spock', 'paper'],
 }

// check for draw 
if (player1 === player2) {return 'draw'}
//checks if player2 is included in player1's array, returns player1 if true 
return (winners[player1].includes(player2)) ? 'player1' : 'player2'
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}