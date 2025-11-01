const proxy = "https://corsproxy.io/?";
const scriptURL = "https://script.google.com/macros/s/AKfycbzaouYMobG_ikmcoy2QeISmjyLjUzEpI_Ce2Yq3thANvcrQHJKVpGBDjcl_tptUR3lqLw/exec";

document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
  };

  try {
    const response = await fetch(proxy + scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    document.getElementById("leadForm").reset();
    document.getElementById("feedback").style.display = "block";
  } catch (err) {
    console.error(err);
    alert("❌ Erro ao enviar o formulário.");
  }
});
