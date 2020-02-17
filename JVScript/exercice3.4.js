var n = 0;
var i = 0;
var so = 0;
var moy = 0;
do {
    n = window.parseInt(prompt("entrez un nombre :"));
    if (n !== "" && n != 0 && n !== null) {
        so += n;
        i += 1;
        moy = so / i;
    }
}
while (n != "" && n != 0 && n != null) {

}
window.alert("la somme est de :" + so + "\nla moyenne est de :" + moy);