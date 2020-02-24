var tabRegExp = [new RegExp("^[a-zA-Z0-9]$"), new RegExp("^[a-zA-Z]+$"), new RegExp("^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$"), new RegExp("^[0-9]+$"), new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?")];
// tab RegEx: 0-string & number, 1-string only, 2-Bday only, 3-number only, 4-Email.
var tabErrorMess = ["ce champs doit etre renseigné", "<p>ce champs doit etre renseigné et doit contenir uniquement des lettres</p>", "<p>ce champs doit etre renseigné et doit contenir une date de naissance valide <br>exemple jj/mm/aaaa</p>", "<p>ce champs doit etre renseigné et doit contenir uniquement des nombres</p>", "<p>ce champs doit etre renseigné et doit contenir une adresse mail valide <br>exemple :jhon@wick.com</p>"];
var tabErrorId = ['errorLname', 'errorGname', 'genre', 'errorBday', 'errorCdp', 'errorAdrss', 'errorVille', 'errorEmail', 'errorTexta'];
var tabInputName = ['familyName', 'givenName', 'errorGenre', 'bday', 'cp', 'adresse', 'ville', 'courriel', 'questions', 'textquestions'];
var tabIsValid = Array(11);

// nom
champ(0, 1);
// prénom
champ(1, 1);
// genre
genre(2);
//Bday
champ(3, 2);
//code postale 
champ(4, 3);
//adresse
champ(5, 0);
//ville
champ(6, 1);
//adresse email
champ(7, 4);
//sujet de la question
champ(8, 5);
//zone de texte pour la question
champ(9, 0);
//validations du formulaire 
ValidForm(10);

function champ(x, w) {
    let ele = document.getElementById(tabInputName[x]);
    ele.addEventListener("change", (element) => {
        element.preventDefault();
        verifChmp(x, w, ele);
        ErrorMessage(error, x, tabErrorId, w);
        return ele;
    });
}

function verifChmp(x, w, ele) {
    if (ele.value != undefined) {
        let filtre = tabRegExp[w];
        tabIsValid[x] = filtre.test(ele.value);
        error = tabIsValid[x];
        return error;
    } else {
        error = tabIsValid[x];
    }
}

function ErrorMessage(error, x, tabErrorId, w) {
    if (error == false) {
        document.getElementById(tabErrorId[x]).innerHTML = tabErrorMess[w];
    } else {
        document.getElementById(tabErrorId[x]).innerHTML = "";
    }
}

form.addEventListener("submit", (element) => {
    element.preventDefault();
    genre(2);
    if (tabIsValid.includes(false)) {
        return false;
    } else {
        return true;
    }
});

function genre(x) {
    let ele = document.getElementById(tabInputName[x]);
    console.log(ele.value);
    ele.addEventListener("change", (element) => {
        console.log(ele);
        if (ele.value == ("Masculin" || "Feminin")) {
            console.log('aaaa');
            tabIsValid[x] = true;
        } else {
            tabIsValid = false;
            document.getElementById(tabErrorId[x]).innerHTML = "Veuillez indiquer votre genre"
        }
    });
}