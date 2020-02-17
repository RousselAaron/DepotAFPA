function menu(x) {
    x = window.parseInt(prompt("choisissez une options \n1 multiples\n2 somme et moyenne\n3 nombres de voyelles\n4 itération de lettres"));
    if (x == 1) {
        mult();
    } else if (x == 2) {
        sommoy();
    } else if (x == 3) {
        nbvoy();
    } else if (x == 4) {
        letrema();
    }
}

function mult(x, n) {
    var n = 0;
    var x = 0;
    var i = 1;
    var res = 0;
    x = prompt("entrez un nombre");
    n = prompt("entrez le nombre de multiple souhaitez");
    for (i = 1; i <= n; i++) {
        res = i * x;
        document.write(i + " " + i + "X" + x + "=" + res + "\n");
    }
}

function sommoy(n) {
    var n = 0;
    var i = 0;
    var so = 0;
    var moy = 0;
    do {
        n = window.parseInt(prompt("entrez un nombre :"));
        if (!isNaN(n)) {
            so += n;
            i += 1;
            moy = so / i;
        } else {
            window.alert("la somme est de :" + so + "\nla moyenne est de :" + moy);
        }
    }
    while (!isNaN(n));
}

function nbvoy(mot) {
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
    document.write("le mot " + mot + " contient " + nbv + " voyelles.");
}

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


menu();