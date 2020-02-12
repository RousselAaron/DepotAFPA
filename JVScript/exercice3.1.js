var cpt = 1;
var list = [];
var pnom = "";
var i = 0;
do {

    pnom = window.prompt("entrez le prénom N°" + cpt);
    if (pnom != "" && pnom != null) {
        list.push(pnom);
        cpt += 1;
        i += 1;
    }
}
while (pnom != "" && pnom != null) {


}
for (i in list) {
    console.log(list[i]);
}
console.log("il y a " + (cpt - 1) + " nom enregistrer");