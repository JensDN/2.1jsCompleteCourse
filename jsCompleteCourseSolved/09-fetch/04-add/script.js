/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let newHero = {}; // empty array for multiple elements;
    fetch('http://localhost:12345/_shared/api.json')
        .then(function (link) {
            return link.json();
        })
        .then(function (data) {
            document.getElementById("run").addEventListener("click", function () {



                newHero ["id"] = data.heroes.length + 1;
                newHero ["name"]  = document.getElementById("hero-name").value;
                newHero ["alterEgo"]  = document.getElementById("hero-alter-ego").value;
                newHero ["abilities"] = new Array();
                let abilitiesArr = document.getElementById("hero-powers").value;

                newHero.abilities.push(abilitiesArr);

                data.heroes.push(newHero);
                console.log(data.heroes)
            })
        })
})();
