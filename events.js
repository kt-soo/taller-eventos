document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", function(e) {
        e.stopPropagation();
        alert("Hola, soy el div");
    });
});