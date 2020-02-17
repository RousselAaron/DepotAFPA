function letrema(mot, letr) {
    var mot = "";
    var letr = "";
    var nbletr = -1;
    var i = 0;
    var ii = 0;
    mot = prompt("entrez un mot");
    letr = prompt("entrez une lettre");
    for (i = 0; i <= mot.length; i++) {
        for (ii = 0; ii <= letr.length; ii++) {
            if (mot.substr(i, 1) == letr.substr(ii, 1)) {
                nbletr += 1;
                break;
            }
        }
    }
    document.write("<p>il y a " + nbletr + " x la/les lettre(s) " + letr + " dans le/les mot(s) " + mot + "</p>");
}
letrema();