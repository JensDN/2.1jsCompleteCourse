/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let person = prompt("Please enter your name", "");

if (person == null || person == "") {
    txt = "User Cancelled";
}
else {
    alert(`Hello ${person}`);
}



const txt ="Congrats " + person;
const txt2 ="More Cake for me :D";
function cakeFunction() {
    document.getElementById("cake").innerHTML = txt;
}
function noCakeFunction() {

    document.getElementById("cake").innerHTML = txt2;
}