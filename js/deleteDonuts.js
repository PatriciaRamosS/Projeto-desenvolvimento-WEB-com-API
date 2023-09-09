const donutsList = document.getElementById("donutsList");

// Função para buscar e exibir a lista de usuários
async function deleteDonutsById() {
  try {
    donutss = await getDonuts();

    donutss.forEach((donut) => {
      const listItem = document.createElement("div");
      listItem.classList.add("donutsItem");

      const donutsText = document.createElement("p");
      donutsText.innerHTML = `<span>Sabor:</span> ${donut.sabor} <br> <span>N°:</span> ${donut.quantidade} <br> <span>Preço:</span> ${donut.preco}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", () => deleteDonuts(donut.id));

      listItem.appendChild(donutsText);
      listItem.appendChild(deleteButton);
      donutsList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista:", error);
  }
}

// Chama a função para buscar e exibir os usuários ao carregar a página
deleteDonutsById();
