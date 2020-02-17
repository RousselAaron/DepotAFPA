function tableau(n) {
    n = parseInt(prompt("entrez la taille du tableau"))
    tab = [];
    for (i = 0; i < n; i++) {
        tab.push(prompt("entrez une donnée dans le tableau"));
    }
    console.log(tab)
    document.write(tab);
}
tableau();