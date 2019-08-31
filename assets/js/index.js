// Game Plan
//
// get .dice1 and .dice2 to randomly change images every time the page is refreshed
// change <h1> to display the winner or a draw




// Create a random number from 1-6
var randomNum1 = Math.floor(Math.random() * 6) + 1;
// Select an image based on the value of randomNum1
var randomDiceImg1 = 'assets/images/dice' + randomNum1 + '.png';

// Create a random number from 1-6
var randomNum2 = Math.floor(Math.random() * 6) + 1;
// Select an image based on the value of randomNum1
var randomDiceImg2 = 'assets/images/dice' + randomNum2 + '.png';

// Set .img1's src value to the path value of randomDiceImg1
$('.img1').attr('src', randomDiceImg1);
// Set .img2's src value to the path value of randomDiceImg2
$('.img2').attr('src', randomDiceImg2);




//
