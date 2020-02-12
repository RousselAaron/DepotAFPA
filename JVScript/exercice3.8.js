var magic = parseInt(Math.random() * 1000);
var compteur;
var userNb = 0;




for (compteur = 10; compteur > 0; compteur--) {
    userNb = parseInt(prompt("Devinez la valeur choisie par l'ordinateur (entre 1 et 1000).\nVotre dernière valeur était : " + userNb));
    if (userNb != "" && userNb != null) {
        console.log(magic);
        if (userNb > magic && compteur > 0) {
            alert("Plus bas ! \nIl vous reste " + compteur + " essais.\nVotre dernière valeur était : " + userNb);
        } else if (userNb < magic && compteur > 0) {
            alert("Plus haut !\nIl vous reste " + compteur + " essais.\nVotre dernière valeur était : " + userNb);
        } else if (userNb == magic) {
            alert("Bravo !");
            compteur = 0;
        } else if (compteur == 0) {
            alert("perdu ! la bonne valeur étais " + magic);
        }
    } else {
        break;
    }
}