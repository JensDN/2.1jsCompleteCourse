/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    function setMaxLength () {
        var input = document.getElementById ("pass-one");
        input.maxLength = 10;
    }
    setMaxLength();
    var area = document.getElementById("pass-one");
    var message = document.getElementById("counter");
    var maxLength = 10;
    var checkLength = function() {
        if(area.value.length < maxLength) {
            message.innerHTML = (area.value.length) + "/10";
            console.log(message)
        }
    };
    setInterval(checkLength, 300);

    /*function setCounter() {
        var input= document.getElementById("pass-one");

        for (i= 0; i <= input.length; i ++ ){

        }
    }*/
})();
