var nav = document.querySelector("nav")
var start = document.querySelector("#last_elem")

window.addEventListener('scroll', function() {
    if (window.scrollY > 400) { // Cambia questo valore in base a quando vuoi che avvenga il cambio di colore
        nav.classList.add("nav-scroll");
        start.style.backgroundColor = "green";
        start.transition = "0.8s";
    } else {
        nav.classList.remove("nav-scroll");
        start.style.backgroundColor = "#191919";

    }
});