/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    fetch('http://localhost:12345/_shared/api.json')
        .then(function (link) {
            return link.json();
        })
        .then(function (data) {
            document.getElementById("run").addEventListener("click", function () {
                let id = document.querySelector('#hero-id').value;
                //get the id information from input in variable
                // a way to delete an element from an array is splice
                data.heroes.splice(data.heroes.findIndex(function split (hero) {
                                return hero.id == id;
                            }),1); //I this function you search for every element who's id equels to the id from th input en gives the position of the first one
                            console.log(data);
                        });
                    })






})();
