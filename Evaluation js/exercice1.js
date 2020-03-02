var tabPU = [];
var tabQTECOM = [];
var TOT = 0;;
var PORT = 6;
var reponse;

function saisieTab1() {
    var element = document.getElementById("buttonEx1");
    element.addEventListener("click", () => {
        var inputPU = document.getElementById("Ex1in1").value;
        var inputQTECOM = document.getElementById("Ex1in2").value;

        var filtre = new RegExp("^[0-9]+$");

        var resultat1 = filtre.test(inputPU);
        var resultat2 = filtre.test(inputQTECOM);

        console.log(resultat1);
        console.log(resultat2);

        if (resultat1 == true && inputPU != 0 && inputPU != "" && resultat2 == true && inputQTECOM != 0 && inputQTECOM != "") {
            tabPU.push(parseInt(inputPU));
            console.log(tabPU);
            tabQTECOM.push(parseInt(inputQTECOM));
            console.log(tabQTECOM);
            if (resultat1) {
                PAP(tabPU, tabQTECOM, PORT);
            }
        }
    });
    var element = document.getElementById("buttonReset1");
    element.addEventListener("click", () => {
        var reponse = document.getElementById("reponseEx1");
        reponse.innerHTML = "";
        tabPU = [];
        tabQTECOM = [];
        document.getElementById("Ex1in1").value = "";
        document.getElementById("Ex1in2").value = "";
    });

}

function PAP(tabPU, tabQTECOM, PORT) {
    console.log("partie 1 ok");
    var reponse = document.getElementById("reponseEx1");
    console.log(reponse);
    console.log(reponse.value);
    for (i = 0; i < tabPU.length; i++) {
        TOT += tabPU[i] * tabQTECOM[i];
    }
    console.log(TOT);
    if (TOT <= 500) {
        if (TOT >= 100 && TOT <= 200) {
            TOT *= 0.95;
        } else if (TOT > 200) {
            TOT *= 0.90
        }
    } else if (TOT > 500) {
        TOT *= 0.90;
    }
    FPORT(reponse);
}

function FPORT(reponse) {
    if (TOT <= 500) {
        if (TOT >= 100 && TOT <= 200 && TOT * 0.02 > 6) {
            PORT = TOT * 0.02
            reponse.innerHTML = ("le prix a payer est de " + (TOT + PORT) + "\nle frais de port " + (PORT));
        } else if (TOT > 200 && TOT * 0.02 > 6) {
            PORT = TOT * 0.02
            reponse.innerHTML = ("le prix a payer est de " + (TOT + PORT) + "\nle frais de port " + (PORT));
        } else {
            reponse.innerHTML = ("le prix a payer est de " + (TOT + PORT) + "\nle frais de port " + (PORT));
        }
    } else if (TOT > 500) {
        PORT = 0;
        reponse.innerHTML = ("le prix a payer est de " + (TOT + PORT) + "\nle frais de port " + (PORT));
    }
}

saisieTab1();