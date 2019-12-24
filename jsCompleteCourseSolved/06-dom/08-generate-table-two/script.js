/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('target').appendChild(document.createElement('TABLE'));
    document.getElementsByTagName('table')[0].appendChild(document.createElement('TBODY'));
    document.getElementsByTagName("tbody")[0].id = "myTable";


function createTable(rn,cn)
{


    for(var r=0;r<parseInt(rn,10);r++)
    {
        var x=document.getElementById('myTable').insertRow(r);
        for(var c=0;c<parseInt(cn,10);c++)
        {
            var y=  x.insertCell(c);
            y.innerHTML=(r+1) * (c+1);
        }
    }
}

createTable(10,10)

})();
