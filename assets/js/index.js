// Game Plan
//
// get .dice1 and .dice2 to randomly change images every time the page is refreshed
// change <h1> to display the winner or a draw




// Create a random number from 1-6
var randomNum = Math.floor(Math.random() * 6) + 1;

function rollDice(){

    $('.img1').attr('src', 'assets/images/dice' + randomNum + '.png');
    $('.img2').attr('src', 'assets/images/dice', +randomNum + '.png');
};







//
