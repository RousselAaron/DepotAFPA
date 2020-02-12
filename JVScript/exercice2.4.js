var nbc = 0;
var max = 50;
var salr = 1200;
var part = 0;
/*début*/
if (window.confirm("étes vous marié ?") == true) {
    part += 25;
} else {
    part += 20;
}
if (window.confirm("avez vous des enfants ?") == true) {
    nbc = window.prompt("combien ?");
    part += nbc * 10;
}
if (window.prompt("quel est votre salaire ?") < salr) {
    part += 10;
}
if (part > max) {
    part = max;
}
window.alert(part + "% de particapations au repas");