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

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let now = new Date();
    let millisTill18 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0, 0) - now;
    if (millisTill18 < 0) {
        millisTill18 += 86400000; // it's after 18h
    }


    setTimeout(function(){
        document.getElementById("material").innerHtml="Good Evening"
    }, millisTill18);

    let millisTill24 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0) - now;
    if (millisTill24 < 0) {
        millisTill24 += 86400000; // it's after 00h
    }


    setTimeout(function(){
        document.getElementById("material").innerHtml="Hello"
    }, millisTill24);

})();
