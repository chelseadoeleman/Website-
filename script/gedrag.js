/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var button = document.getElementById("zoekenHeader");
//console.log(button);
var zoekveld = document.querySelector("div > .zoeken");
//console.log(zoekveld);

button.addEventListener('click', function () {
    zoekveld.classList.toggle("zoekenVisible");
});
