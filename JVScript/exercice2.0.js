if (temperature > 38) {
    document.write("le patient a de la fiévre");
}
if (temperature > 41 && tension > 25) {
    document.write("le patient va perdre patience");
}
if (patient != true) {
    document.write("éconduire l'olibrius");
}
if (temperature > 42 || (tension < 25 && pouls > 180)) {
    document.write("prevenir la famille");
}
if (temperature > 40 || tension >= 25) {
    document.write("hospitaliser le patient");
}
if (patient && pouls == 0) {
    document.write("appeler le curé");
}