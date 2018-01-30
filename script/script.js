/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var button = document.getElementById("zoekenHeader");

function zoekveld() {
    var x = document.getElementById("zoeken");

    if (x.style.opacity === "0") {
        x.style.opacity = "100";
    } else {
        x.style.opacity = "0";
    }
}

button.addEventListener('click', zoekveld);
