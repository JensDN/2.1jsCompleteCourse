
function test(test) {
    let number1 = document.getElementById ("op-one" ).value;
    let number2 = document.getElementById ("op-two" ).value ;
    let result;

    switch (test){
        case 'addition':
            result = parseInt(number1) + parseInt(number2);
            alert (result);
            break;
        case 'subtraction':
            result = parseInt(number1) - parseInt(number2);
            alert (result);
            break;
        case 'multiplication':
            result = parseInt(number1) * parseInt(number2);
            alert (result);
            break;
        case 'division':
            result = parseInt(number1) / parseInt(number2);
            alert (result);
            break;
    }



}