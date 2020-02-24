var x;
var a;
var y;
var w;
var filtre;
var tabRegExp = [new RegExp("^[a-zA-Z0-9]$"), new RegExp("^[a-zA-Z]+$"), new RegExp("^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$"), new RegExp("^[0-9]+$"), new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?")];
// tab RegEx: 0-only string, 1-string & number, 2-Bday only, 3-number only, 4-Email.
var tabErrorMess = ["ce champs doit etre renseigné", "<p>ce champs doit etre renseigné et doit contenir uniquement des lettres</p>", "<p>ce champs doit etre renseigné et doit contenir une date de naissance valide <br>exemple jj/mm/aaaa</p>", "<p>ce champs doit etre renseigné et doit contenir uniquement des nombres</p>", "<p>ce champs doit etre renseigné et doit contenir une adresse mail valide <br>exemple :jhon@wick.com</p>"];
var tabError = ['errorLname', 'errorGname', 'errorBday', 'errorCdp', 'errorAdrss', 'errorVille', 'errorEmail', 'errorTexta']

// form.addEventListener("submit", (element) => {
//     element.preventDefault();
//     checkForm(form);

//     function checkForm(form) {
//         form = document.getElementById('form');

//         w = 1;
//         filtre = tabRegExp[w];
//         var a = filtre.test(form.elements['family-name'].value);
//         console.log(a);
//         error = a;
//         y = 0;
//         ErrorMessage(error, y, tabError);

//         w = 1;
//         filtre = tabRegExp[w];
//         var b = filtre.test(form.elements['given-name'].value);
//         console.log(b);
//         error = b;
//         y = 1;
//         ErrorMessage(error, y, tabError);

//         w = 2;
//         filtre = tabRegExp[w];
//         var c = filtre.test(form.elements['bday'].value);
//         console.log(c);
//         error = c;
//         y = 2;
//         ErrorMessage(error, y, tabError);

//         w = 3;
//         filtre = tabRegExp[w];
//         var d = filtre.test(form.elements['cp'].value);
//         console.log(d);
//         error = d;
//         y = 3;
//         ErrorMessage(error, y, tabError);

//         w = 0;
//         filtre = tabRegExp[w];
//         console.log(tabRegExp[w])
//         var e = filtre.test(form.elements['adresse'].value);
//         console.log(e);
//         error = e;
//         y = 4;
//         ErrorMessage(error, y, tabError);

//         w = 1;
//         filtre = tabRegExp[w];
//         var f = filtre.test(form.elements['ville'].value);
//         console.log(f);
//         error = f;
//         y = 5;
//         ErrorMessage(error, y, tabError);

//         w = 4;
//         filtre = tabRegExp[w];
//         var g = filtre.test(form.elements['courriel'].value);
//         console.log(g);
//         error = g;
//         y = 6;
//         ErrorMessage(error, y, tabError);

//         w = 0;
//         filtre = tabRegExp[w];
//         var h = filtre.test(form.elements['questions'].value);
//         console.log(h);
//         error = h;
//         y = 7;
//         ErrorMessage(error, y, tabError);

//         w = 0;
//         filtre = tabRegExp[w];
//         var i = filtre.test(form.elements['textquestions'].value);
//         console.log(i);
//         error = i;
//         y = 8;
//         ErrorMessage(error, y, tabError);

//         if (a && b && c && d && e && f && g && h && i) {
//             return true;
//         } else {
//             return false;
//         }

//     }
// });

function ErrorMessage(error, y, tabError) {
    if (error == false) {
        document.getElementById(tabError[y]).innerHTML = tabErrorMess[w];
        console.log(tabError[y]);
        console.log(tabErrorMess[w]);
    } else {
        document.getElementById(tabError[y]).innerHTML = "";
    }
}
form.addEventListener("keyup", (element) => {

    element.preventDefault();
    checkForm(form);

    function checkForm(form) {
        form = document.getElementById('form');

        w = 1;
        filtre = tabRegExp[w];
        var a = filtre.test(form.elements['family-name'].value);
        console.log(a);
        error = a;
        y = 0;
        ErrorMessage(error, y, tabError);

        w = 1;
        filtre = tabRegExp[w];
        var b = filtre.test(form.elements['given-name'].value);
        console.log(b);
        error = b;
        y = 1;
        ErrorMessage(error, y, tabError);

        w = 2;
        filtre = tabRegExp[w];
        var c = filtre.test(form.elements['bday'].value);
        console.log(c);
        error = c;
        y = 2;
        ErrorMessage(error, y, tabError);

        w = 3;
        filtre = tabRegExp[w];
        var d = filtre.test(form.elements['cp'].value);
        console.log(d);
        error = d;
        y = 3;
        ErrorMessage(error, y, tabError);

        w = 0;
        filtre = tabRegExp[w];
        console.log(tabRegExp[w])
        var e = filtre.test(form.elements['adresse'].value);
        console.log(e);
        error = e;
        y = 4;
        ErrorMessage(error, y, tabError);

        w = 1;
        filtre = tabRegExp[w];
        var f = filtre.test(form.elements['ville'].value);
        console.log(f);
        error = f;
        y = 5;
        ErrorMessage(error, y, tabError);

        w = 4;
        filtre = tabRegExp[w];
        var g = filtre.test(form.elements['courriel'].value);
        console.log(g);
        error = g;
        y = 6;
        ErrorMessage(error, y, tabError);

        w = 0;
        filtre = tabRegExp[w];
        var h = filtre.test(form.elements['questions'].value);
        console.log(h);
        error = h;
        y = 7;
        ErrorMessage(error, y, tabError);

        w = 0;
        filtre = tabRegExp[w];
        var i = filtre.test(form.elements['textquestions'].value);
        console.log(i);
        error = i;
        y = 8;
        ErrorMessage(error, y, tabError);

        if (a && b && c && d && e && f && g && h && i) {
            return true;
        } else {
            return false;
        }

    }
});