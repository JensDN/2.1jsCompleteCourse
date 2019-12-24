/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    /*function createTable(rn,cn)
    {


        for(var r=0;r<parseInt(rn,10);r++)
        {
            var x=document.getElementById('target').insertRow(r);
            for(var c=0;c<parseInt(cn,10);c++)
            {
                var y=  x.insertCell(c);
                y.innerHTML="Row-"+r+" Column-"+c;
            }
        }
    }

    createTable(10,1)

    function addRow(tableID) {
        // Get a reference to the table
        let tableRef = document.getElementById(tableID);

        // Insert a row at the end of the table
        let newRow = tableRef.insertRow(-1);

        // Insert a cell in the row at index 0
        let newCell = newRow.insertCell(0);

        // Append a text node to the cell
        let newText = document.createTextNode('New bottom row');
        newCell.appendChild(newText);
    }

// Call addRow() with the table's ID
    addRow('my-table');*/

    document.getElementById('target').appendChild(document.createElement('TABLE'));
    document.getElementsByTagName('table')[0].appendChild(document.createElement('TBODY'));

    for (i = 0; i < 10; i++) {
        document.getElementsByTagName('tbody')[0].appendChild(document.createElement('TR'));
        document.getElementsByTagName('tr')[i].appendChild(document.createElement('td'));
        document.getElementsByTagName('td')[i].appendChild(document.createTextNode(`${i}`));
    }
})();
