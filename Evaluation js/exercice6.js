var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

function search(tab) {
    var search = document.getElementById("Ex6").value;
    console.log(tab);
    if (tab.includes(search) == true) {
        console.log(tab.includes(search));
        for (i = 0; i < tab.length - 1; i++) {
            console.log(tab[i]);
            console.log(search);
            if (tab[i] == search) {
                console.log("aaa");
                tab.splice(i, 1);
                console.log(tab[i]);
            }
        }
    }
}

function TriaBulles(tab) {
    for (i = 0; i < tab.length - 1; i++) {
        for (ii = 0; ii < tab.length - i - 1; ii++) {
            if (tab[ii] == undefined) {
                var temp = tab[ii];
                tab[ii] = tab[ii + 1];
                tab[ii + 1] = temp;
            }
        }
    }
    document.getElementById("reponseEx6").innerHTML = tab;
    document.getElementById("Ex6").value = "";
}

var element = document.getElementById("buttonEx6");
element.addEventListener("click", () => {
    search(tab);
    TriaBulles(tab);
});