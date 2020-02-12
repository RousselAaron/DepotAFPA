var mot = "";
var voy = "AEIOUYaeiouy";
var nbv = -1;
var i = 0;
var ii = 0;
mot = prompt("entrez un mot");
for (i = 0; i <= mot.length; i++) {
    for (ii = 0; ii <= voy.length; ii++) {
        if (mot.substr(i, 1) == voy.substr(ii, 1)) {
            nbv += 1;
            break;
        }
    }
}
window.alert("le mot " + mot + " contient " + nbv + " voyelles.");