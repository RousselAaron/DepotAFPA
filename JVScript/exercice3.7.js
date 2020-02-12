var nb = 0;
var x = 0;
var i = 0;

nb = window.parseInt(prompt("entrez un nombre"));
for (i = 1; i <= nb; i++) {
    if (nb % i == 0) {
        x += 1;
    }
}
console.log(x);
if (x == 2) {
    window.alert("le nombre est premier");
} else {
    window.alert("le nombre n'est pas premier");
}