const bottone = document.getElementById("inizia");

bottone.addEventListener("click", function () {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Inserisci nome ed email.");
        return;
    }

    alert("Perfetto! Il pulsante funziona.");

});
