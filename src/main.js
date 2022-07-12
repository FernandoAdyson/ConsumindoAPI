document.querySelector("#pesquisar").addEventListener("click", (e) => {
  data = {
    cepInput: document.getElementById("cepInput").value,
    bairro: document.getElementById("bairro"),
    cep: document.getElementById("cep"),
    ddd: document.getElementById("ddd"),
    ibge: document.getElementById("ibge"),
    localidade: document.getElementById("localidade"),
    logradouro: document.getElementById("logradouro"),
    uf: document.getElementById("uf"),
    close: document.getElementById("close")
  };
  get(data);
});

async function get(data) {
  try {
    if (data.cepInput.length > 7) {
      axios
        .get(`https://viacep.com.br/ws/${data.cepInput || "88888888"}/json/`)
        .then((res) => {
          if (res.data.cep.length > 7) {
            data.bairro.innerHTML = "Bairro: " + res.data.bairro;
            data.cep.innerHTML = "Cep: " + res.data.cep;
            data.ddd.innerHTML = "DDD: " + res.data.ddd;
            data.ibge.innerHTML = "Ibge: " + res.data.ibge;
            data.localidade.innerHTML = "Localidade: " + res.data.localidade;
            data.logradouro.innerHTML = "Logradouro: " + res.data.logradouro;
            data.uf.innerHTML = "UF: " + res.data.uf;
          }
        });
    } else {
      data.bairro.innerHTML = "Não foi possivel obter os dados do CEP";
    }
  } catch (error) {
    console.log("[ERROR GET CEP]>>>", error);
  }

  data.close.addEventListener("click", (e) => {
    data.bairro.innerHTML = "";
    data.cep.innerHTML = "";
    data.ddd.innerHTML = "";
    data.ibge.innerHTML = "";
    data.localidade.innerHTML = "";
    data.logradouro.innerHTML = "";
    data.uf.innerHTML = "";
  });
}
