var x = 0;
var i = 1;
var res = 0;
x = prompt("entrez un nombre");
for (i = 1; i <= 9; i++) {
    res = i * x;
    document.write(i + " " + i + "X" + x + "=" + res);
}