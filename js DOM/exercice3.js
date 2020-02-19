var compteur;
var magic;
var userNb = 0;
var texta = "";
var n = 0;
var element = document.getElementById("button1");
element.addEventListener("click", () => {
    userNb = document.getElementById("textBox1").value;
    var filtre = new RegExp("^[0-9]+$");
    var resultat = filtre.test(userNb);
    console.log(resultat);

    if (resultat == true) {
        nbmag(userNb);
        alert(("Devinez la valeur choisie par l'ordinateur (entre 1 et 1000).\nVotre dernière valeur était : " + userNb + texta));
    }
});

function nummagic() {
    magic = parseInt(Math.random() * 1000);
}
nummagic();

function nbmag(userNb) {
    for (compteur = 10 - n; compteur >= 0; compteur--) {
        console.log(userNb, compteur, magic);
        n += 1
        if (userNb != "" && userNb != null) {
            if (userNb > magic && compteur > 0) {
                texta = ("\nPlus bas ! \nIl vous reste " + compteur + " essais");
            } else if (userNb < magic && compteur > 0) {
                texta = ("\nPlus haut !\nIl vous reste " + compteur + " essais");
            } else if (userNb == magic) {
                texta = ("\nBravo !");
                compteur = 0;
                n = 0;
                nummagic()
                break;
            } else if (compteur == 0) {
                texta = ("\nperdu ! la bonne valeur étais " + magic);
                n = 0;
                nummagic()
                break;
            }
        } else {
            break;
        }
        break;
    }
}