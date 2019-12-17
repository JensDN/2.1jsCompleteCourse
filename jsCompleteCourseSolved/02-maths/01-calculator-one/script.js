/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
let variable1 = document.getElementById("one").value;
let variable2 = document.getElementById("two").value;
let solution = "";
    document.getElementById("addition").addEventListener("click", function() {
    let solution = parseInt(variable1 + variable2);    // perform an addition
        document.getElementById("solution").addEventListener("click", function() {
            alert("Het antwoord is : " + solution);
            location.reload()
        });

    });

    document.getElementById("substraction").addEventListener("click", function() {
    let solution = Number(variable1) - Number(variable2);   // perform an substraction
        document.getElementById("solution").addEventListener("click", function() {
            alert("Het antwoord is : " + solution);
            location.reload()
        });
    });

    document.getElementById("multiplication").addEventListener("click", function() {
    let solution = parseInt(variable1 * variable2);    // perform an multiplication
        document.getElementById("solution").addEventListener("click", function() {
            alert("Het antwoord is : " + solution);
            location.reload()
        });
    });

    document.getElementById("division").addEventListener("click", function() {
    let solution = parseFloat(variable1) / parseFloat(variable2);    // perform an division
        document.getElementById("solution").addEventListener("click", function() {
            alert("Het antwoord is : " + solution);
            location.reload()
        });
    });


})();
