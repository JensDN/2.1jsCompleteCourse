/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let randomNumber = Math.floor(Math.random()*100 + 1);
   let countGuesses = 0;
   let checkAnswer = false;
    while (checkAnswer === false){
        let guess = prompt("Please choose a number between 1 -100");
        console.log(`guesses = ${guess}, count = ${countGuesses}`);

        if (guess == randomNumber){
            alert(`Congrats, you're spot on. Your guess-total was ${countGuesses}`);
            return checkAnswer === true;
        }
        else if (guess < randomNumber){
            confirm("The number is higher, please try again");
            countGuesses ++;
        }
        else if (guess > randomNumber){
            confirm("The number is lower, please try again");
            countGuesses ++;
        }

    }

})();
