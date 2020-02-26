var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

function search() {
    let search = window.prompt("entrez le prénom rechercher");
    if (tab.includes(search) == true) {

    }
};




function TriaBulles() {
    for (i = 0; i < tab.length - 1; i++) {
        for (ii = n; ii < tab.length - i - 1; ii++) {
            if (tab[ii] != tab[ii + 1]) {
                var temp = tab[ii];
                tab[ii] = tab[ii + 1];
                tab[ii + 1] = temp;
            }
        }
    }
    console.log(tab);
    console.log(tab[0]);
    console.log(tab[tab.length - 1]);
}
TriaBulles(tab);