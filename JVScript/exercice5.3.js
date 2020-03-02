var x;
var m = 0;
var max;

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
    afficheTab(tab);
}
saisieTab(tab);

function afficheTab(tab) {
    console.log(tab);
}


function TriaBulles() {
    for (i = 0; i < tab.length - 1; i++) {
        for (ii = 0; ii < tab.length - i - 1; ii++) {
            if (tab[ii] > tab[ii + 1]) {
                var temp = tab[ii];
                tab[ii] = tab[ii + 1];
                tab[ii + 1] = temp;
            }
        }
    }
    console.log(tab);
    console.log(tab[0]);
    console.log(tab[tab.length - 1]);
}
TriaBulles(tab);


function TriaBullesDécrois() {
    for (i = tab.length; i > 0; i--) {
        for (ii = tab.length; ii > 0 - i - 1; ii--) {
            if (tab[ii] < tab[ii + 1]) {
                var temp = tab[ii];
                tab[ii] = tab[ii + 1];
                tab[ii + 1] = temp;
            }
        }
    }
    console.log(tab)
}
TriaBullesDécrois(tab);