'use strict';
/*console.log(document.querySelector('.message').textContent); 
document.querySelector('.message').textContent = ' Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/
/*
let score;
let guessNumber = Math.trunc((Math.random() * 20)+1);
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);
   document.querySelector('.score').value = score;
   if (!guess){
     document.querySelector('.message').textContent = 'Please enter a number';
   }
   else if (guess !== guessNumber){
   
      if (score > 1){
        document.querySelector('.message').textContent = guess < guessNumber ? 'Too high': 'Too low';
        score = score - 1;
        document.querySelector('.score').textContent = score; 
      }
      else{
      document.querySelector('.message').textContent = 'You are out of guesses';
      }
    }
    else if (guess === guessNumber){
     document.querySelector('.message').textContent = 'Correct Number';
     //document.querySelector('.number').textContent = guess;
     document.querySelector('.number').textContent = guess;
     score = score + 1;
     document.querySelector('.score').textContent = score;
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem';
     
     if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
     };

     document.querySelector('.check').style.opacity = '0%';
   }
});
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    guessNumber = Math.trunc((Math.random() * 20)+1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'; 
    document.querySelector('.check').style.opacity = '100%';
});*/

