//variables
var op;
var y;
var res;
var x;
//début
x = window.parseInt(prompt("entrez le premier nombre"));
y = window.parseInt(prompt("entrez le second nombre"));
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
} else {
    window.alert("opération incorect");
}