/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var button = document.querySelector(".filter .filterOpties3 button");
console.log(button);
var x = document.getElementById("done");
console.log(x);

/*BRON: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */
button.addEventListener('mouseover', function () {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});
