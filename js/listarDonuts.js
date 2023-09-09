const donutsList = document.getElementById("donutsList");


// Função para buscar e exibir a lista de usuários
async function getAllDonuts() {
  donutss = await getDonuts();
  try {
    donutss.forEach((donut) => {
      const listItem = document.createElement("div");
      listItem.classList.add("donutsItem");

      const donutsText = document.createElement("p");
      donutsText.innerHTML = `<span>Sabor:</span> ${donut.sabor} <br> <span>N°:</span> ${donut.quantidade} <br> <span>Preço:</span> ${donut.preco}`;

      listItem.appendChild(donutsText);
      donutsList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de donuts inseridos:", error);
  }
}
getAllDonuts();
