/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {




    const targetID = document.getElementById("target");
    document.getElementById("run").addEventListener("click", function(){

        let id = document.getElementById("hero-id").value;
        const endpoint = "http://localhost:12345/_shared/api.json";
        const heroes = fetch(endpoint);
        heroes.then(response => {
            return response.json();

        }).then(data => {
            console.log(data);
            console.log(document.getElementById("tpl-hero").content);
            const target = document.getElementById("tpl-hero");




                let newClone = target.content.cloneNode(true);

                newClone.querySelector(".name").innerHTML = data.heroes[id].name;
                newClone.querySelector(".alter-ego").innerHTML = data.heroes[id].alterEgo;
                newClone.querySelector(".powers").innerHTML = data.heroes[id].abilities;

                targetID.appendChild(newClone);

        });
    })
})();
