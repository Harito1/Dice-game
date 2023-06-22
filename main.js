
var scores, roundScores, activePlayer;

scores = [0, 0];
roundScores = 0;
activePlayer = 1;
 
document.querySelector('.dice').style.display= 'none';

document.querySelector('.btn--roll').addEventListener('click', function() {
    
    // dice takes any random number between 1 and 6 after clicking
     var dice = Math.floor(Math.random() * 6) + 1;

    // Display the results
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-'+dice+'.png';


    // Update the round score if the rolled number is not 1 (players cant continue if they roll 1)

})




