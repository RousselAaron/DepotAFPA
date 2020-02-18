var x;
var m = 0;
var max;
var som = 0;

function getInteger() {
    x = window.parseInt(prompt("saisissez la taille du tableau"));
}
getInteger(x);

function initTab(x) {
    console.log(x);
    tab = Array(x);
    console.log(tab);
}
initTab(x);

function saisieTab(tab) {
    for (i = 0; i < tab.length; i++) {
        tab[i] = window.parseInt(prompt("saisissez une valeurdans le tableau"));
    }
}
saisieTab(tab);

function afficheTab(tab) {
    console.log(tab);
}

function rechercheTab(tab) {
    do {
        n = window.parseInt(prompt("saisissez la case du tableau souhaité"));
    }
    while (n < 0 || n > tab.length);
    console.log(tab[n - 1]);
}

function infoTab(tab) {
    for (i = 0; i < tab.length; i++) {
        console.log("la valeur max " + max)
        som = som + tab[i];
        if (tab[i] > tab[i + 1]) {
            if (max < tab[i]) {
                max = tab[i];
            }
        }
    }
    console.log("la valeur max est " + max);
    console.log("la moyenne est " + som / tab.length)
}

function menuTab(m) {
    m = window.parseInt(prompt("entrez votre choix\nafficher tout les postes du tableau\nrechercher un postes du tableau\ntrouver la valeur max du tableau et sa moyenne"))
    if (m == 1) {
        afficheTab(tab);
    } else if (m == 2) {
        rechercheTab(tab);
    } else if (m == 3) {
        infoTab(tab);
    }

}
menuTab(m);