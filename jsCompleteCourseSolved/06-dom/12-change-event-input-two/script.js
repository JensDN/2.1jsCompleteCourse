/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        /*let password = document.getElementById('pass-one').value;
        console.log(password);
        var pattern;
        pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{10}$");

        if (pattern.test(password)) {
            console.log(true)
            document.getElementById('validity').innerHTML = 'OK';

        }*/

        function isValidPassword(str)
        {
                var atLeastTwoDigits = new RegExp("[0-9].*[0-9]");
                var atLeastOneCharacter = new RegExp("[a-zA-Z]");
                var onlyTenCharactersAndDigits = new RegExp("^[0-9a-zA-Z].{10,}$");

                return atLeastTwoDigits.test(str) &&
                    atLeastOneCharacter.test(str) &&
                    onlyTenCharactersAndDigits.test(str);
        }
function checking () {
        let password = document.getElementById('pass-one').value;
        if (isValidPassword(password)) {
                console.log('correct');
                document.getElementById("validity").innerHTML = 'OK'
        } else {
                console.log('incorrect');

        }
}

// I did i control of my regex on the site https://www.regextester.com/
})();
