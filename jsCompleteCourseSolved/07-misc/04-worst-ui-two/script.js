/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
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
    part1.value = '460';
    part2.value = '00';
    part3.value = '00';
    part4.value = '00';
    document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
    console.log(part1.value);
    console.log(part1.getAttribute('data-min'));

    part1.onclick = function(){
    if (part1.value < part1.getAttribute('data-min')){
        part1.value = part1.getAttribute('data-min')
    }
    else if (part1.value >= part1.getAttribute('data-max')){
        return
    }
    part1.value ++;

        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
    return part1.value;
    };

    part2.onclick = function(){
        if (part2.value < part2.getAttribute('data-min')){
            part2.value = part2.getAttribute('data-min')
        }
        else if (part2.value >= part2.getAttribute('data-max')){
            return
        }
        part2.value ++;
        part2.value = ("0" + part2.value).slice(-2);
        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;

        return part2.value;
    };

    part3.onclick = function(){
        if (part3.value < part3.getAttribute('data-min')){
            part3.value = part3.getAttribute('data-min')
        }
        else if (part3.value >= part3.getAttribute('data-max')){
            return
        }
        part3.value ++;
        part3.value = ("0" + part3.value).slice(-2);
        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;

        return part3.value;
    };

    part4.onclick = function(){
        if (part4.value < part4.getAttribute('data-min')){
            part4.value = part4.getAttribute('data-min')
        }
        else if (part4.value >= part4.getAttribute('data-max')){
            return
        }
        part4.value ++;
        part4.value = ("0" + part4.value).slice(-2);
        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
        return part4.value;
    };
/*    part1.value.onchange = function(){
        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
    };
    part2.value.onchange = function(){
        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
    };
    part3.onchange = function(){
        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
    };
    part4.onchange = function(){
        document.getElementById('target').innerHTML = `0${part1.value}${part2.value}${part3.value}${part4.value}`;
    };*/
})();
