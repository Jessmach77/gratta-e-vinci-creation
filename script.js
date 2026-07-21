const supabaseUrl = "https://bazubrbkwylvjgqqdurz.supabase.co";
const supabaseKey = "sb_publishable_b8oWkbN-XRsADQ80ni10xw_Sje4LGhE";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("inizia").addEventListener("click", async () => {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    const { data, error } = await supabase
        .from("partecipanti")
        .insert([
            {
                nome: nome,
                email: email
            }
        ]);

    if (error) {
        alert(error.message);
        console.log(error);
        return;
    }

    alert("Salvato con successo!");

});
