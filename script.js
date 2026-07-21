document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("gioca");
    const loading = document.getElementById("loading");
    const gratta = document.getElementById("gratta");

    button.addEventListener("click", () => {

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if(nome === "" || email === ""){
            alert("Inserisci nome ed email.");
            return;
        }

        button.style.display="none";

        loading.classList.remove("hidden");

        setTimeout(()=>{

            loading.classList.add("hidden");

            gratta.classList.remove("hidden");

        },2000);

    });

});
