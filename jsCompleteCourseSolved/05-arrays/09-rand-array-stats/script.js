/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", myClickFunction);
    // your code here
    table = document.getElementById("table");
    tableArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    console.log(tableArray);

    Array.min = function(array){
        return Math.min.apply( Math, array );
    };
    Array.max = function(array) {
        return Math.max.apply(Math, array);
    };
    Array.sum = function(array){
        return array.reduce(function(a,b){
            return a + b
        }, 0);
    };
    Array.average = function(array){
        return array.reduce((a,b) => a + b, 0) / array.length
    };

    function myClickFunction() {
    for (let i = 1; i<= 10; i++){
        document.getElementById(`n-${i}`).innerHTML = tableArray[i-1]
    }
    document.getElementById("min").innerHTML = Array.min(tableArray);
    document.getElementById("max").innerHTML = Array.max(tableArray);
    document.getElementById("sum").innerHTML = Array.sum(tableArray);
    document.getElementById("average").innerHTML = Array.average(tableArray);
    }
    // your code here

})();
