


/*********************************************
 DO NOT EDIT PAST HERE
 *********************************************/
waveText = document.getElementById('target').innerText;
console.log(waveText);
function SineWave(message){
// To Get Text From Page
    var sineText=message;
    console.log(sineText + 1);
// Starting Font Size
    var siz=7;

// Starting  Size Direction
    var hgt="down";

// To Write Message to Page
    for (Ewok=0; Ewok < sineText.length; Ewok++){
        /*                     document.write('<font face="'+fontFace+'">' + sineText.charAt(Ewok).fontcolor(colour).fontsize(siz) + '</font>')*/

        /*console.log(sineText.charAt(Ewok).fontsize(siz));*/
        if (siz > 1 && hgt=="down")
            siz--;//end If
        else if (siz==1){
            hgt="up";
            siz++;
        }// end Else If
        else if (siz==7){
            hgt="down";
            siz--;
        }// end Else If
        else if (siz < 7 && hgt=="up") {
            siz++; // end Else If
        }
        let solution =sineText.charAt(Ewok).fontsize(siz);
        console.log(solution);

        let answer = `${answer} +   ${solution} `;
        console.log(answer);
    }// end For Loop


    /*  let solution = sineText.charAt(Ewok).fontsize(siz) ;

 console.log(solution);*/


}// END
/*   document.getElementById('target').innerHTML= answer ;*/
/*  console.log(answer);*/
SineWave(waveText);
/*    document.getElementById('target').innerHTML= solution ;*/