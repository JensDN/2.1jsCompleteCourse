/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
for (i=1; i<101; i++){
    if (i % 3 && i % 5){
        console.log(i + " ");
    }
    else if(i % 3){
        console.log(i + " : buzz");
    }
    else if(i % 5){
        console.log(i + " : fizz");
    }
    else {
        console.log(i + " : fizzbuzz");
    }
}
    // your code here

})();