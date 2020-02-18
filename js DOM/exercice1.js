var tab;
var nbv;
var som;
var moy;

function tableau() {
    do {
        entr = window.parseInt(prompt("entrez une valeur a stocké dans le tableau"));
        tableau.push = entr;
    }
    while (entr != NaN && entr != 0);
    nbval(tab);
    somme(nbv, tab);
    moyenne(som, nbv);
    afficher(nbv, som, moy);
}

function nbval(tab) {
    nbv = parseInt(table.length);
}

function somme(nbv, tab) {
    for (i = 0; i < nbv; i++) {
        som += parseInt(tab[i]);
    }
}

function moyenne(som, nbv) {
    moy = som / nbv;
}
tableau();

function afficher(nbv, som, moy) {
    document.write("il y a " + nbv + " valeurs dans le tableau\nleurs somme est " + som + "\net leurs moyenne est " + moy)
}