/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let person = {
    name:"Fidel",
    lastname:"Castro",
    bDay: document.getElementById("dob-day").value,
    bMonth: document.getElementById("dob-month").value,
    bYear: document.getElementById("dob-year").value,
};

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let ageY = new Date().getFullYear() - person.bYear;
        let ageM = new Date().getMonth() - person.bMonth;
        let ageD = new Date().getDay() - person.bDay;
        while (ageD < 0){
            ageD= ageD +30;
            ageM= ageM -1;
        }
        while (ageM < 0){
            ageM = ageM +12;
            ageY = ageY -1;
        }

        alert(`Congratulations, you're ${ageY} years, ${ageM} months and ${ageD} days old. `)
    });
})();
