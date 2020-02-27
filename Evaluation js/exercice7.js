var tabRegExp = [new RegExp("^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\\s]+$"), new RegExp("^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_-\\s]+$"), new RegExp("^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$"), new RegExp("^[0-9]+$"), new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?"), new RegExp("^(?![false]).*$")];
// tab RegEx: 0-string & number, 1-string only, 2-Bday only, 3-number only, 4-Email, 5-validSubject.
var tabErrorMess = ["<p>ce champs doit etre renseigné</p>", "<p>ce champs doit etre renseigné et doit contenir uniquement des lettres et des tirets</p>", "<p>ce champs doit etre renseigné et doit contenir une date de naissance valide <br>exemple jj/mm/aaaa</p>", "<p>ce champs doit etre renseigné et doit contenir uniquement des nombres</p>", "<p>ce champs doit etre renseigné et doit contenir une adresse mail valide <br>exemple :jhon@wick.com</p>", "selectionnez un sujet"];
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
    ele.value = ele.value.trim();
    if (ele.value != undefined) {
        ele.addEventListener("blur", (element) => {
            console.log(ele.value);
            element.preventDefault();
            verifChmp(x, w, ele);
            ErrorMessage(error, x, tabErrorId, w);
            return ele;
        });
    } else {
        ErrorMessage(error, x, tabErrorId, w);
    }
}

function verifChmp(x, w, ele) {
    if (ele.value != undefined) {
        let filtre = tabRegExp[w];
        console.log(filtre);
        tabIsValid[x] = filtre.test(ele.value);
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
        document.getElementById(tabErrorId[x]).style.color = "#ff0000"
    } else {
        document.getElementById(tabErrorId[x]).innerHTML = "";
    }
}

function genre(x) {
    sexe = document.getElementById(tabInputName[x]);
    sexe2 = document.getElementById(tabInputName[x] + "2"); {
        if (!sexe.checked && !sexe2.checked) {
            tabIsValid[x] = false;
            document.getElementById(tabErrorId[x]).innerHTML = "<p>Veuillez indiquer votre genre</p>"
            document.getElementById(tabErrorId[x]).style.color = "#ff0000"
        } else {
            tabIsValid[x] = true;
        }
    }
}

function validForm(x) {
    Vform = document.getElementById(tabInputName[x]);
    if (Vform.checked == false || Vform.checked == null) {
        tabIsValid[x] = false;
        document.getElementById(tabErrorId[x]).innerHTML = "Veuillez valider cette demande";
        document.getElementById(tabErrorId[x]).style.color = "#ff0000"
    } else {
        tabIsValid[x] = true;
    }
}

form.addEventListener("submit", (element) => {
    element.preventDefault();
    genre(2);
    validForm(10);
    if (tabIsValid.includes(false)) {
        for (i = 0; i < tabIsValid.length; i++) {
            let comp = document.getElementById(tabErrorId[i]).innerHTML;
            if (comp == "") {
                document.getElementById(tabErrorId[i]).innerHTML = tabErrorMess[0];
                document.getElementById(tabErrorId[i]).style.color = "#ff0000"
            }
        }
    } else {
        form.submit();
    }
});

form.addEventListener("reset", () => {
    console.log(tabErrorId);
    console.log(tabInputName);
    for (i = 0; i < tabErrorId.length; i++) {
        console.log(i);
        document.getElementById(tabErrorId[i]).innerHTML = "";
    }
});