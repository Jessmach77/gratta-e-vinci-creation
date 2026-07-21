alert("script partito");
      
const supabaseUrl = "https://bazubrbkwylvjgqqdurz.supabase.co";
const supabaseKey = "sb_publishable_b8oWkbN-XRsADQ80ni10xw_Sje4LGhE";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const premi = [
    "🎉 Hai vinto il 20% di sconto!",
    "🚚 Hai vinto la spedizione gratuita!",
    "💎 Hai vinto un gioiello a sorpresa!",
    "🎁 Non hai vinto subito, ma partecipi automaticamente all'estrazione finale del 10 agosto!"
];

document.getElementById("inizia").addEventListener("click", async () => {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();

    if(nome === "" || email === ""){
        alert("Inserisci nome ed email.");
        return;
    }

    // Controllo email già registrata
    const { data: esistente, error: erroreRicerca } = await supabase
        .from("Partecipanti")
        .select("email")
        .eq("email", email);

    if(erroreRicerca){
        alert("Errore di connessione.");
        console.log(erroreRicerca);
        return;
    }

    if(esistente.length > 0){
        alert("Questa email ha già partecipato.");
        return;
    }

    // Salvataggio partecipante
    const { error } = await supabase
        .from("Partecipanti")
        .insert([
            {
                nome: nome,
                email: email
            }
        ]);

    if(error){
        alert("Errore durante il salvataggio.");
        console.log(error);
        return;
    }

    document.querySelector(".card").style.display = "none";
    document.getElementById("gioco").classList.remove("hidden");

});

document.getElementById("scratch").addEventListener("click", () => {

    const scratch = document.getElementById("scratch");

    if(scratch.classList.contains("grattato")){
        return;
    }

    scratch.classList.add("grattato");

    const premio = premi[Math.floor(Math.random()*premi.length)];

    scratch.innerHTML = "✨";

    document.getElementById("risultato").innerHTML = premio;

});
