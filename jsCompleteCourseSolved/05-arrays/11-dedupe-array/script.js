/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", myClickFunction);
    function removeDuplicates(num) {
        var x,
            len=num.length,
            out=[],
            obj={};

        for (x=0; x<len; x++) {
            obj[num[x]]=0;
        }
        for (x in obj) {
            out.push(x);
        }
        return out;
    }
    function myClickFunction() {
        result = removeDuplicates(fruits);
        console.log(fruits);
        console.log(result);
    }
})();
