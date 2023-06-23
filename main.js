
var scores, roundScores, activePlayer;

 initialize()

 // New game button.
 document.querySelector('.btn--new').addEventListener('click', initialize)

 // Role dice button.
document.querySelector('.btn--roll').addEventListener('click', function() {
    
    // dice takes any random number between 1 and 6 after clicking
     var dice = Math.floor(Math.random() * 6) + 1;

    // Display the results
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-'+dice+'.png';


    // Update the round score if the rolled number is not 1 (players cant continue if they roll 1)

    if (dice !== 1) {
        // add score
        roundScores += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScores;

    }else{
        nextPlayer()
    }

})

// Hold button stores the current score in the global score.
document.querySelector('.btn--hold').addEventListener('click', function() {
    
    // add currnet score to global score

    scores[activePlayer] += roundScores;

    // update the users interface

    document.querySelector('#score--' + activePlayer).innerHTML = scores[activePlayer]

    // check if player won the game

    if (scores[activePlayer] >= 10) {

    document.querySelector('#name--'+ activePlayer).innerHTML = 'winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--' + activePlayer).classList.add('winner!')

    }
    else{
        
     // next player
        nextPlayer()
    }

})

/**
 * this function is used to switch between players if the dice reaches 1 on the activePlayer
 */
function nextPlayer() {
    
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.getElementById('current--0').textContent = '0' ;
    document.getElementById('current--1').textContent = '0' ;

    document.querySelector('.dice').style.display = 'none';
}


/**
 * things that should happen before playing the game.
 */
function initialize() {
    
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display= 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';

    document.querySelector('.player--0').classList.remove('winner!')
    document.querySelector('.player--1').classList.remove('winner!')
}