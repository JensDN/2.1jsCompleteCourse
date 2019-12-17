    /* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test(expression) {
    let variable1 = document.getElementById("one").value;
    let variable2 = document.getElementById("two").value;
    let solution;
    switch (expression) {
        case document.getElementById('addition').clicked === true:
            solution = parseInt(variable1) + parseInt(variable2);    // perform an addition
            document.getElementById("solution").addEventListener("click", function() {
                alert("Het antwoord is : " + solution);
                location.reload()
            });

            //Statements executed when the
            //result of expression matches value1
            break;
        case document.getElementById('subtraction').clicked === true:
            solution = parseInt(variable1) - parseInt(variable2);   // perform an substraction
            document.getElementById("solution").addEventListener("click", function() {
                alert("Het antwoord is : " + solution);
                location.reload()
            });//Statements executed when the
            //result of expression matches value2
            break;
        case document.getElementById('multiplication').clicked === true:
                solution = parseInt(variable1 * variable2);    // perform an multiplication
                document.getElementById("solution").addEventListener("click", function() {
                    alert("Het antwoord is : " + solution);
                    location.reload()
                });
            //Statements executed when
            //result of expression matches valueN
            break;
        case document.getElementById('division').clicked === true:
            solution = parseFloat(variable1) / parseFloat(variable2);    // perform an division
            document.getElementById("solution").addEventListener("click", function() {
                alert("Het antwoord is : " + solution);
                location.reload()
            });
            break;
    }
            //Statements executed when
            //result of expression matches valueN


}


(function() {
    return true;
})();
