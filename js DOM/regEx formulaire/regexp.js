var regexnom = new RegExp("^[a-zA-Z]+$");
var chknm;
// element = document.getElementById("input1").value;
// console.log(element)
// if (regexnom.test("element")) {
//     console.log("ok");
// }
var element = document.getElementById("button1");
element.addEventListener("click", () => {
    chknm = document.getElementById("input2").value;
    console.log(chknm)
    if (regexnom.test(chknm) == true) {
        console.log("ok");
        return chknm;
    } else {
        event.preventDefault()
        document.getElementById("button1").removeAttribute("type");
        console.log("button1");
    }
    chkgender = document.getElementById("input4").value;
    console.log(chkgender)
    if (regexnom.test(chkgender) == true) {
        console.log("ok");
        return chkgender;
    } else {
        event.preventDefault()
        document.getElementById("button1").removeAttribute("type");
        console.log("button1");
    }
});