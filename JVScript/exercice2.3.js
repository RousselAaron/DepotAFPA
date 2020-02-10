var op = "a";
var a = 1;
var x = -1;
var y = 1;
var res = 0;
x = window.prompt("entrez le premier nombre");
y = window.prompt("entrez le second nombre");
op = window.prompt("entrez l'opératuer du calcul");
if (op == "+" || "-" || "*" || "/") {
    if (op == "+") {
        res = x + y;
        window.alert(res);
    }
    if (op == "-") {
        res = x - y;
        window.alert(res);
    }
    if (op == "*") {
        res = x * y;
        window.alert(res);
    }
    if (op == "/") {
        res = x / y;
        window.alert(res);
    }
}