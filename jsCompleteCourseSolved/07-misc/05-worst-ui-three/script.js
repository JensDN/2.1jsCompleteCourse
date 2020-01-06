/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let part1 = document.getElementById('part-one');
    let part2 = document.getElementById('part-two');
    let part3 = document.getElementById('part-three');
    let part4 = document.getElementById('part-four');
    let part1OnFix = document.getElementById('fix-part-one');
    let part2OnFix = document.getElementById('fix-part-two');
    let part3OnFix = document.getElementById('fix-part-three');
    let part4OnFix = document.getElementById('fix-part-four');

    part1.value = '460';
    part2.value = '00';
    part3.value = '00';
    part4.value = '00';
    document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;



    let partOne = "460";
let partTwo = "00";
let partThree = "00";
let partFour = "00";

function generateRandomPartOne()    {
    part1.value = Math.floor(Math.random()*((499-460)+1)+ 460);
    return part1.value;
}
function generateRandomPartTwo()    {
    part2.value = Math.floor(Math.random()*100);
    return part2.value;
}
function generateRandomPartThree()  {
    part3.value = Math.floor(Math.random()*100);
    return part3.value;
}
function generateRandomPartFour()   {
    part4.value = Math.floor(Math.random()*100);
    return part4.value;
}

let loopOne = setInterval(generateRandomPartOne, 200);
let loopTwo = setInterval(generateRandomPartTwo, 200);
let loopThree = setInterval(generateRandomPartThree, 200);
let loopFour = setInterval(generateRandomPartFour, 200);

part1OnFix.onclick = function(){
    clearInterval(loopOne);
    document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
};
part2OnFix.onclick = function(){
    clearInterval(loopTwo);
    part2.value = ("0" + part2.value).slice(-2);
    document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
};
part3OnFix.onclick = function(){
    clearInterval(loopThree);
    part3.value = ("0" + part2.value).slice(-2);
    document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
};
part4OnFix.onclick = function(){
    clearInterval(loopFour);
    part4.value = ("0" + part2.value).slice(-2);
    document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
};

})();
