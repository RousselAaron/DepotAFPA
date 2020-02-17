function strtok(str1, str2, n) {
    liste = str1.split(str2);
    document.write(liste[n - 1])
}
strtok("robert;dupont;amiens;80000", ";", window.parseInt(prompt("entrez la valeur de la donnée")));