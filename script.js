document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const abrir = document.getElementById("abrirModal");
    const fechar = document.getElementById("fecharModal");

    abrir.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    fechar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});
