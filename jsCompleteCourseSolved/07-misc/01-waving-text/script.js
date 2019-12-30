/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    waveText = document.getElementById('target').innerText;
    arrWaveText = Array.from(waveText);
    console.log(arrWaveText);

    function sineWave(message){
        var array1 = Array.from(message);
        var newarray1 = [];
        var siz= 1;
        var hgt= "down";
        for(var x = 0; x < array1.length; x++){

            if (siz > 1 && hgt=="down")

                siz--; //end If
            else if (siz==1){

                hgt="up";
                siz++;
            }// end Else If
            else if (siz==5){

                hgt="down";
                siz--;
            }// end Else If
            else if (siz < 7 && hgt=="up") {

                siz++; // end Else If
            }
            newarray1.push(array1[x].fontsize(siz)+array1[x].slice(1));
        }
        return newarray1.join(' ');
    }
    console.log(sineWave(waveText));
    document.getElementById('target').innerHTML = sineWave(waveText);
})();
