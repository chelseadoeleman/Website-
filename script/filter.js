/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var knop = document.querySelector("li:nth-child(4)");
console.log(knop);
var filters = document.querySelector(".filter > .filterOpties");
console.log(filters);

knop.addEventListener('click', function () {
    filters.classList.toggle("filterOpties2");
});
