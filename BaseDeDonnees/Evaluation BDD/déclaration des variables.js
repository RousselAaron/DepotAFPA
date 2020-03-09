//déclaration des variables
var UserEntry;
var m = 0;
var max;
function getInteger() { // fonction appliquant la valeur "number" a la valeur saisie par l'utilisateur
    UserEntry = window.parseInt(prompt("saisissez la taille du tableau"));
}
getInteger(UserEntry); //appel de la fonction getInteger avec le parametre UserEntry
function initTab(UserEntry) { //initialisation du tableau
    tab = Array(UserEntry); //la taille du tableau est défini par l'entrée de l'utilisateur dans la fonction getInteger
}
initTab(UserEntry); //appel de la fonction d'initialisation du tableau
function saisieTab(tab) { //fonction permettant la saisie des valeurs du tableau en partant du premier index (0) jusqu'au dernier (UserEntry(la valeur entrer par l'utilisateur pour declarer le nombre de valeur que contiendra le tableau dans getInteger))
    for (i = 0; i < tab.length; i++) { //compteur allant de 0 juqu'a la fin du tableau (la boucle for permettera donc de parcourir les "cases" du tableau une par une)
        tab[i] = window.parseInt(prompt("saisissez une valeurdans le tableau")); //permet l'entrez de valeur dans les cases du tableau, les cases sont rempli une a une a la suite grace a la boucle for
    }
    afficheTab(tab); //appel de la fonction permettant d'afficher le tableau affin de verifié les saisie précèdement faite dans saisieTab
}
saisieTab(tab); //appel de la fonction saisie tab avec comme parametre le tableau tab
function afficheTab(tab) { //fonction d'affichage du tableau complet
    console.log(tab);
}
function TriaBulles() { // fonction contenant l'algorithme de tri
    for (i = 0; i < tab.length; i++) { //boucle for permettant de compter le nombre de valeur deja trié et d'en reduire la table du tableau afin de ne pas re-trié celle-ci en retirant la valeur de i a tab.length dans la boucle for j
        for (j = 0; j < tab.length - i - 1; j++) { //boucle permettant de parcourir les cases du tableau une a une afin de pouvoir comparer les valeur de ce dernier pour les trié
            if (tab[j] > tab[j + 1]) { //si la cases tab[j] exemple(tab[0]) contient une valeur supérieur a tab[j+1] exemple( tab[0+1] = (tab[1]) ) alors :
                var temp = tab[j]; // une variables temporaire recoit la valeur de tab[j] exemple(tab[0] == 2 alors temp == 2)
                tab[j] = tab[j + 1]; //tab[j] recoit ensuite la valeur de tab[j+1] exemple(tab[0+1] == 1 alors tab[0] == 1)
                tab[j + 1] = temp; //pour finir tab[j+1] recoit la valeur de temp exemple(tab[0+1] == 1; tab[0+1] = temp; tab[0+1] == 2)
            }
        }
    }
    console.log(tab) //affichage du tableau aprés tri
}
TriaBulles(tab); //appel de la fonction tri
function TriaBullesDécrois() { // meme principes que le tri mais en versions décroissante (changement au niveau des operateur dans les boucles for)
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
TriaBullesDécrois(tab); //appel de la fonction de tri décroissant