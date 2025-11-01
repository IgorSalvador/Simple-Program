const scriptURL = "https://script.google.com/macros/s/AKfycbzaouYMobG_ikmcoy2QeISmjyLjUzEpI_Ce2Yq3thANvcrQHJKVpGBDjcl_tptUR3lqLw/exec";

document.getElementById("leadForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
  };

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.getElementById("leadForm").reset();
      document.getElementById("feedback").style.display = "block";
    } else {
      alert("❌ Erro ao enviar, tente novamente!");
    }
  } catch (error) {
    alert("❌ Erro de conexão!");
  }
});