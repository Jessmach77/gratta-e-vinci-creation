document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("gioca");

    button.addEventListener("click", () => {

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if(nome === "" || email === ""){
            alert("Inserisci nome ed email.");
            return;
        }

        alert("Perfetto! Nel prossimo step apparirà il Gratta e Vinci.");

    });

});
