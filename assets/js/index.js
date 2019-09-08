// PLAYER 1
// Create a random number from 1-6 for Player 1 Dice
var randomNum1 = Math.floor(Math.random() * 6) + 1;
// Select an image based on the value of randomNum1 for Player 1 Dice
var randomDiceImg1 = 'assets/images/dice' + randomNum1 + '.png';
// Random dice image for Player 1
$('.img1').attr('src', randomDiceImg1);

// PLAYER 2
// Create a random number from 1-6 for Player 2 Dice
var randomNum2 = Math.floor(Math.random() * 6) + 1;
// Select an image based on the value of randomNum1 for Player 2 Dice
var randomDiceImg2 = 'assets/images/dice' + randomNum2 + '.png';
// Random dice image for Player 2
$('.img2').attr('src', randomDiceImg2);




// If Player 1 wins
if (randomNum1 > randomNum2) {
  // Change h1 to Player 1 Wins!
  $('h1').html('🚩 Player 1 Wins!');
  // If Player 2 wins
} else if (randomNum2 > randomNum1) {
  // Change h1 to Player 2 Wins!
  $('h1').html('Player 2 Wins! 🚩');
  // If both dice have equal values
} else {
  // Change h1 to Draw!
  $('h1').html('Draw!');
}
