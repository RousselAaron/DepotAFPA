var nom = window.prompt("entrez votre nom")
var prenom = window.prompt("entrez votre prénom")
if (window.confirm("etes vous un homme ?") == true) {
    window.alert("Bonjour mr" + nom + " " + prenom + "\nBienvenue sur notre site web!");
}