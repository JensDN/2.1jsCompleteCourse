/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let targetBe;


    let timeNowHours = new Date().getHours();

    if (timeNowHours < 18) {
        targetBe = "Hello"}

    else if (timeNowHours > 18) {
        targetBe = "Good evening"}

    else {
        targetBe = "You're Millisecond King"
    }

    document.getElementById("target").innerHTML = targetBe;
})();
