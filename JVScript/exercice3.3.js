var i = 0;
var n1 = 0;
var n2 = 0;
var so = 0;
n1 = window.parseInt(prompt("entrez un nombre"));
n2 = window.parseInt(prompt("entrez un nombre"));
for (i = n1; i < n2; i++) {
    so += i
    console.log("les intervale sont :" + i);
}
console.log("leurs somme est " + so);