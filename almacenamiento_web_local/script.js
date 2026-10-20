const campoNombre = document.getElementById("nombre");
const resultado = document.getElementById("resultado");

document.getElementById("guardar").addEventListener("click", () => {
    const nombre = campoNombre.value.trim();

    if (nombre === "") {
        resultado.textContent = "Escribe un nombre antes de guardar.";
        return;
    }

    localStorage.setItem("nombre", nombre);
    resultado.textContent = "Nombre guardado correctamente.";
});

document.getElementById("mostrar").addEventListener("click", () => {
    const nombre = localStorage.getItem("nombre");

    resultado.textContent = nombre
        ? `Nombre guardado: ${nombre}`
        : "No hay ningún nombre guardado.";
});

document.getElementById("eliminar").addEventListener("click", () => {
    localStorage.removeItem("nombre");
    resultado.textContent = "Nombre eliminado.";
});
