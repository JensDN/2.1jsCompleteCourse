/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let targetBe;


    let timeNowHoursMinutes = function getTime (){
        let d = new  Date();
        let h = d.getHours();
        let m = d.getMinutes();
        return  h*100 + m;
    };
    console.log(timeNowHoursMinutes());
    if (timeNowHoursMinutes < 1730) {
        targetBe = "Hello"}

    else if (timeNowHoursMinutes() > 1730) {
        targetBe = "Good evening"}

    else {
        targetBe = "You're Millisecond King"
    }

    document.getElementById("target").innerHTML = targetBe;
    // your code here

})();
