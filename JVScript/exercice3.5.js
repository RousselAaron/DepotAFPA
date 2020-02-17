var n = 0;
var x = 0;
var i = 1;
var res = 0;
x = prompt("entrez un nombre");
n = prompt("entrez le nombre de multiple souhaitez");
for (i = 1; i <= n; i++) {
    res = i * x;
    document.write(i + " " + i + "X" + x + "=" + res);
}