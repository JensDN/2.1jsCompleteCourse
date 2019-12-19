/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let answer = "";

    document.getElementById("run").addEventListener("click", function() {
        for (i=0; i < 12; i++) {
            let date = new Date(), y = parseInt(document.getElementById("year").value), m = i;
            let firstDay = new Date(y, m, 13);
            console.log(firstDay);
            unluckyFriday = firstDay.getDay();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];


            unluckyMonth = monthNames[firstDay.getMonth()];
            console.log(unluckyMonth);

            if (unluckyFriday === 5){


                answer = answer + " " + unluckyMonth;
            }
            else {
                console.log(answer)
            }
        }
        alert(answer);
    });



})();
