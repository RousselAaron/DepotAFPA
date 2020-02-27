var x;
var m;
var max;
var tabNoTri = [];

function getInteger3() {
    x = window.parseInt(prompt("saisissez la taille du tableau"));
}


function initTab3(x) {
    console.log(x);
    tab = Array(x);
    tabNoTri = Array(x);
    console.log(tab);
}


function saisieTab3(tab) {
    for (i = 0; i < tab.length; i++) {
        m = window.parseInt(prompt("saisissez une valeurdans le tableau"));
        tab[i] = m;
        tabNoTri[i] = m;
    }
    afficheTab3(tab);
}


function afficheTab3(tab) {
    console.log(tab);
}

// Usage du tri à bulle pour selectionner directement le min et le max (1er et dernier element du tableau)
function TriaBulles3(tab) {
    for (i = 0; i < tab.length - 1; i++) {
        // Retrait du dernier indice afin d'optimiser l'execution de l'algo
        for (ii = 0; ii < tab.length - i - 1; ii++) {
            if (tab[ii] > tab[ii + 1]) {
                var temp = tab[ii];
                tab[ii] = tab[ii + 1];
                tab[ii + 1] = temp;
            }
        }
    }

}


function MinMax(tab, tabNoTri) {
    var reponse = document.getElementById("reponseEx3");
    console.log(reponse);
    reponse.innerHTML = ("le tableau est " + tabNoTri + "\nla valeur minimal est " + tab[0] + "\nla valeur maximal est " + tab[tab.length - 1]);
    console.log(tab);
    console.log(tab[0]);
    console.log(tab[tab.length - 1]);
}

var element = document.getElementById("buttonEx3");
element.addEventListener("click", () => {
    getInteger3(x);
    initTab3(x);
    saisieTab3(tab);
    console.log(tab);
    TriaBulles3(tab);
    console.log(tab);
    MinMax(tab, tabNoTri);
});