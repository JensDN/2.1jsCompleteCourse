/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const targetID = document.getElementById("target");
    document.getElementById("run").addEventListener("click", function(){
        const endpoint = "http://localhost:12345/_shared/api.json";
        const heroes = fetch(endpoint);
        heroes.then(response => {
            return response.json();

        }).then(data => {
            console.log(data);
        console.log(document.getElementById("tpl-hero").content);
        const target = document.getElementById("tpl-hero");


        for (let i = 0; i <data.heroes.length ; i++) {

            let newClone = target.content.cloneNode(true);

            newClone.querySelector(".name").innerHTML = data.heroes[i].name;
            newClone.querySelector(".alter-ego").innerHTML = data.heroes[i].alterEgo;
            newClone.querySelector(".powers").innerHTML = data.heroes[i].abilities;

           targetID.appendChild(newClone);
        }
        });
    })
})();
