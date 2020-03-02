var element = document.getElementById("buttonEx5");
element.addEventListener("click", () => {
    var x = 0;
    var i = 1;
    var res = 0;
    var reponseMessage = "";
    var entree = document.getElementById("Ex5");
    console.log(entree.value);
    x = parseInt(entree.value);
    for (i = 1; i <= 10; i++) {
        res = i * x;
        reponseMessage += (i + " X " + x + " = " + res + "<br>");
    }
    document.getElementById("reponseEx5").innerHTML = reponseMessage;
    document.getElementById("Ex5").value = "";
});