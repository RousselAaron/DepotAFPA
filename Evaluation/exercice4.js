var x;
var m = 0;
var max;
var tab = [];
var result;

function saisieTab(tab) {
    do {
        var promptValue = window.parseInt(prompt("saisissez un age"));
        if (!isNaN(promptValue) && promptValue != 0 && promptValue < 100) {
            console.log("aaa");
            tab.push(promptValue);
        }
    }
    while (!isNaN(promptValue) && promptValue != 0 && promptValue < 100);
}

function afficheTab(tab) {
    console.log(tab);
}

function resultat(tab, result) {
    jeunes = tab.map(x => x < 20);
    countOccurences(jeunes, "jeunes");
    moyen = tab.map(x => x > 20 && x < 40);
    countOccurences(moyen, "moyen");
    vieux = tab.map(x => x > 40);
    countOccurences(vieux, "vieux");
}

function countOccurences(tab, classe) {
    result = 0;
    console.log(tab);
    for (i = 0; i < tab.length; i++) {
        console.log(tab[i]);
        if (tab[i] == true) {
            result += 1;
        }
    }
    console.log(result);
    window.alert("le nombre de " + classe + " est " + result);
    return result;
}

saisieTab(tab);
afficheTab(tab);
resultat(tab, result);