

(() => {

    document.getElementById("run").addEventListener("click", function(){
        const endpoint = "http://localhost:12345/_shared/api.json";
        const heroes = fetch(endpoint);
        heroes.then(response => {
            return response.json();

        }).then(data => {
        console.log(data)});


    })
})();
