var x;
var tab = [];
var result;
var reponseMessage = "";

function saisieTab(tab) {

    console.log(document.getElementById("Ex4").value);
    var entree = parseInt(document.getElementById("Ex4").value);
    if (!isNaN(entree) && entree != 0 && entree < 100) {
        console.log("aaa");
        tab.push(entree);
    }
}


function resultat(tab) {
    reponseMessage = "";
    jeunes = tab.map(x => x < 20);
    countOccurences(jeunes, "jeunes");
    moyen = tab.map(x => x > 20 && x < 40);
    countOccurences(moyen, "moyen");
    vieux = tab.map(x => x > 40);
    countOccurences(vieux, "vieux");
}

function countOccurences(tab, classe) {
    result = 0;
    for (i = 0; i < tab.length; i++) {
        console.log(tab[i]);
        if (tab[i] == true) {
            result += 1;
        }
    }
    console.log(result);
    reponseMessage += ("\nle nombre de " + classe + " est " + result);
    return result;
}

function reponse(reponseMessage) {
    var reponse = document.getElementById("reponseEx4");
    reponse.innerHTML = reponseMessage;
}

var element = document.getElementById("buttonEx4");
element.addEventListener("click", () => {
    saisieTab(tab);
    resultat(tab, result);
    reponse(reponseMessage);
});

var element = document.getElementById("buttonReset4");
element.addEventListener("click", () => {
    var reponse = document.getElementById("reponseEx4");
    reponse.innerHTML = "";
    x = 0;
    tab = [];
    result = 0;
    reponseMessage = "";
    document.getElementById("Ex4").value = "";
});