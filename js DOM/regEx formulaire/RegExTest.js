var tabRegExp = [new RegExp("^[\\-\\w\\s\\]+$"), new RegExp("^[a-zA-Z]+$"), new RegExp("^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$"), new RegExp("^[0-9]+$"), new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?")];
// tab RegEx: 0-string & number, 1-string only, 2-Bday only, 3-number only, 4-Email.
var tabErrorMess = ["ce champs doit etre renseigné", "<p>ce champs doit etre renseigné et doit contenir uniquement des lettres</p>", "<p>ce champs doit etre renseigné et doit contenir une date de naissance valide <br>exemple jj/mm/aaaa</p>", "<p>ce champs doit etre renseigné et doit contenir uniquement des nombres</p>", "<p>ce champs doit etre renseigné et doit contenir une adresse mail valide <br>exemple :jhon@wick.com</p>"];
var tabErrorId = ['errorLname', 'errorGname', 'errorGenre', 'errorBday', 'errorCdp', 'errorAdrss', 'errorVille', 'errorEmail', 'errorQuestions', 'errorTexta', 'errorChkForm']
var tabInputName = ['familyName', 'givenName', 'genre', 'bday', 'cp', 'adresse', 'ville', 'courriel', 'questions', 'textquestions', 'ChkForm'];
var tabIsValid = Array(11);

// nom
champ(0, 1);
// prénom
champ(1, 1);
//Bday
champ(3, 2);
//cp
champ(4, 3);
//adresse
champ(5, 0);
//ville
champ(6, 1);
//courriel
champ(7, 4);
//questions
champ(8, 5);
//textquestions
champ(9, 0);

function champ(x, w) {
    let ele = document.getElementById(tabInputName[x]);
    ele.addEventListener("change", (element) => {
        console.log(ele.value);
        element.preventDefault();
        verifChmp(x, w, ele);
        ErrorMessage(error, x, tabErrorId, w);
        return ele;
    });
}

function verifChmp(x, w, ele) {
    if (ele.value != undefined) {
        let filtre = tabRegExp[w];
        console.log(filtre);
        tabIsValid[x] = filtre.test(ele.value.trim());
        console.log(ele.value);
        error = tabIsValid[x];
        console.log(error);
        return error;
    } else {
        ErrorMessage(error, x, tabErrorId, w);
    }
}

function ErrorMessage(error, x, tabErrorId, w) {
    if (error == false) {
        document.getElementById(tabErrorId[x]).innerHTML = tabErrorMess[w];
    } else {
        document.getElementById(tabErrorId[x]).innerHTML = "";
    }
}

function genre(x) {
    sexe = document.getElementById(tabInputName[x]);
    sexe2 = document.getElementById(tabInputName[x] + "2");
    if (!sexe.checked && !sexe2.checked) {
        tabIsValid[x] = false;
        document.getElementById(tabErrorId[x]).innerHTML = "<p>Veuillez indiquer votre genre</p>"
    } else {
        tabIsValid[x] = true;
    }
}

function validForm(x) {
    Vform = document.getElementById(tabInputName[x]);
    if (Vform.checked == false || Vform.checked == null) {
        tabIsValid[x] = false;
        document.getElementById(tabErrorId[x]).innerHTML = "Veuillez valider cette demande";
    } else {
        tabIsValid[x] = true;
    }
}

form.addEventListener("submit", (element) => {
    element.preventDefault();
    genre(2);;
    validForm(10);
    if (tabIsValid.includes(false)) {
        return false;
    } else {
        return true;
    }
});