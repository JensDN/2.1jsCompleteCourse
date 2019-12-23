/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const imageSource = document.getElementsByTagName("span")[1].getAttribute("data-image");

    let img1 = document.createElement('img');
    img1.setAttribute('src', imageSource); // <img src='imagesource'>
    document.getElementById('target').appendChild(img1);

    document.getElementsByTagName("span")[1].removeAttribute("data-image");


  /*  var img = document.createElement('img');
    img.src = imageSource;
    document.getElementById('target').appendChild(img);*/



    console.log(imageSource);
    /*if (el.title != 'foo') el.title = 'foo';

    var inp = document.querySelector('input[type="text"]');
    console.log(inp.value);
    inp.value = 'Hello World!';

    var el = document.querySelector('div');
    el.foo = { bar: true };
    console.log(el.foo);

    delete el.foo;*/
})();
