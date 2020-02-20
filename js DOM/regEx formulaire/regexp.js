var x;
var a;
var filtre;
var tabRegExp = [new RegExp("^[a-zA-Z]+$"), new RegExp("^[a-zA-Z0-9]+$")];
var tabErrorMess = ["", ""]
console.log(tabRegExp[0]);
console.log(tabRegExp[1]);

form.addEventListener("submit", (element) => {
    console.log("azeazeazeazeaze")
    element.preventDefault();
    checkForm(form);

    function checkForm(form) {
        form = document.getElementById('form');
        filtre = tabRegExp[0];
        var a = filtre.test(form.elements['family-name'].value);
        console.log(a);

        filtre = tabRegExp[0];
        var b = filtre.test(form.elements['given-name'].value);
        console.log(b);

        filtre = new RegExp("^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$");
        var c = filtre.test(form.elements['bday'].value);
        console.log(c);

        filtre = new RegExp("^[0-9]+$");
        var d = filtre.test(form.elements['cp'].value);
        console.log(d);

        filtre = tabRegExp[1];
        var e = filtre.test(form.elements['adresse'].value);
        console.log(e);

        filtre = tabRegExp[0];
        var f = filtre.test(form.elements['ville'].value);
        console.log(f);

        filtre = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?");
        var g = filtre.test(form.elements['courriel'].value);
        console.log(g);

        filtre = tabRegExp[1];
        var h = filtre.test(form.elements['questions'].value);
        console.log(h);

        filtre = tabRegExp[1];
        var i = filtre.test(form.elements['textquestions'].value);
        console.log(i);

        if (a && b && c && d && e && f && g && h && i) {
            return true;
        } else {
            return false;
        }

    }
});