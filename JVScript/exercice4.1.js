function cube(x) {
    var resc = x * x * x;
    document.write("le carré de " + x + " est " + resc + "<br>");

}

function produit(x, y) {
    var resp = x * y;
    document.write("\n le produit de " + x + " et " + y + " est " + resp + "<br>");
}

function afficherImg(image) {
    document.write('<img src=' + image + ' alt="">' + "<br>");
}

cube(3);
produit(3, 6);
afficherImg("papillon.jpg");