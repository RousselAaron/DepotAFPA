var n;
var som = 0;
action();

function action() {
    var element = document.getElementById("buttonEx2");
    element.addEventListener("click", () => {
        var entree = document.getElementById("Ex2");
        console.log(entree);
        console.log(entree.value);
        n = parseInt(entree.value);
        saisieTab1(n);
    });
    var element = document.getElementById("buttonReset2");
    element.addEventListener("click", () => {
        var reponse = document.getElementById("reponseEx2");
        reponse.innerHTML = "";
        nbInf = [];
        som = 0;
        document.getElementById("Ex2").value = "";
    });
}

function saisieTab1(n) {
    let nbInf = Array(n);
    for (i = 1; i < n; i++) {
        console.log(i);
        console.log(som);
        console.log(nbInf);
        som += i;
        nbInf[i] = i;
    }
    var reponse = document.getElementById("reponseEx2");
    reponse.innerHTML = ("la somme de tout les entiers inférieur a " + n + " est " + som + "\nles entiers sont " + nbInf);
}