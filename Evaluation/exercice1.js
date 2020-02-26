var tabPU = [];
var tabQTECOM = [];
var TOT = 0;
var PORT;

function saisieTab() {
    do {
        inputPU = window.parseInt(prompt("entrez le prix de l'article"));
        inputQTECOM = window.parseInt(prompt("entrez la quantité d'article souhaitez"));
        if (!isNaN(inputQTECOM) || !isNaN(inputPU)) {
            tabPU.push(inputPU);
            console.log(inputPU);
            tabQTECOM.push(inputQTECOM);
            console.log(inputQTECOM);
        }
    }
    while (!isNaN(inputPU));
    PAP(tabPU, tabQTECOM, PORT);
}

function PAP(tabPU, tabQTECOM, PORT) {
    for (i = 0; i < tabPU.length; i++) {
        TOT += tabPU[i] * tabQTECOM[i];

    }
    if (TOT < 500) {
        if (TOT >= 100 && TOT <= 200) {
            TOT *= 0.95;
            PORT = TOT * 0.02;
            console.log("le prix a payer est de " + (TOT + PORT));
            console.log("le frais de port" + (PORT));
        } else if (TOT > 200) {
            TOT *= 0.90
            PORT = TOT * 0.02;
            console.log("le frais de port" + (PORT));
            console.log("le prix a payer est de " + (TOT + PORT));
        } else {
            console.log("le frais de port" + (PORT));
            console.log("le prix a payer est de " + (TOT + PORT));
        }
    } else if (TOT >= 500) {
        PORT = 0;
        TOT *= 0.90
        console.log("le prix a payer est de " + (TOT + PORT));
        console.log("le frais de port" + (PORT));

    }
}

saisieTab();