var header = document.getElementById("header");
var loader = document.getElementById("spin");

window.addEventListener("scroll", function () {
    changeOpacity(header);
})

function changeOpacity(elem) {
    if (window.scrollY < window.innerHeight) {
        elem.style.opacity = 1 - (window.scrollY / (window.innerHeight));
    } else {
        elem.style.opacity = 0;
    }
}