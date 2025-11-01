const scriptURL = "https://script.google.com/macros/s/AKfycbzaouYMobG_ikmcoy2QeISmjyLjUzEpI_Ce2Yq3thANvcrQHJKVpGBDjcl_tptUR3lqLw/exec";

document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
  };

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    document.getElementById("leadForm").reset();
    document.getElementById("feedback").style.display = "block";
  } catch (error) {
    alert("❌ Erro ao enviar. Tente novamente!");
  }
});
