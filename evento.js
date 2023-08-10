document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al botón
    var boton = document.getElementById("myButton");

    // Agrega un manejador de eventos al hacer clic en el botón
    boton.addEventListener("click", function(e) {
        e.stopPropagation(); // Detiene la propagación del evento
        alert("¡Hiciste clic en el botón!");
    });

    // Agrega un manejador de eventos al hacer clic en el div
    document.getElementById("container").addEventListener("click", function() {
        alert("¡Clic en el div!");
    });
});