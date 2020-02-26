var n;
var som = 0;


n = window.parseInt(prompt("entrez un nombre"));

function saisieTab(n) {
    let nbInf = Array(n);
    for (i = 1; i < n; i++) {
        console.log(i);
        console.log(som);
        console.log(nbInf);
        som += i;
        nbInf[i] = i;
    }
    window.alert("la somme de tout les entiers inférieur a " + n + " est " + som + "\nles entiers sont " + nbInf);
}
saisieTab(n);