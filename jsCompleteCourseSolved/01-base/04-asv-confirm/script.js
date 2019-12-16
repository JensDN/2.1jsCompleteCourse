/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let person = prompt("Please enter your name", "");
let age = prompt("Please enter your age","");
let town = prompt("Please enter your town","");
let gender = prompt("Please enter your gender","");
let conformation = confirm('name = ' + name + '\n age = ' + age + '\n town = ' + town + '\n gender = ' + gender);

if (conformation === false ){

    location.reload()



}
else {
 alert("Thx for participating")
    }

