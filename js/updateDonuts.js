const donutsList = document.getElementById("donutsList");
const updateFormContainer = document.getElementById("updateFormContainer");

// Função para buscar e exibir a lista de usuários
async function UpdateDonutsById() {
  try {
    donutss = await getDonuts();

    donutss.forEach((donut) => {
      const listItem = document.createElement("div");
      listItem.classList.add("donutsItem");

      const donutsText = document.createElement("p");
      donutsText.innerHTML = `<span>Sabor:</span> ${donut.sabor} <br> <span>N°:</span> ${donut.quantidade} <br> <span>Preço:</span> ${donut.preco}`;

      const SendButton = document.createElement("button");
      SendButton.textContent = "Atualizar";
      SendButton.classList.add("updateButton");
      SendButton.addEventListener("click", () => {
        const modal = document.getElementById("demo-modal"); // Access the first element with the "modal" class
        modal.style.visibility = "visible"; // Set the "visibility" style property to "visible"
        modal.style.opacity = "1"; // Set the "opacity" style property to "1"
        openUpdateForm(donut.id, donut.sabor, donut.quantidade, donut.preco);
      });

      listItem.appendChild(donutsText);
      listItem.appendChild(SendButton);
      donutsList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de donuts:", error);
  }
}

async function openUpdateForm(donutsId, sabor, quantidade, preco) {
  const updateFormHTML = `
    <form id="updateForm" class="formUpdate">
      <h2>Atualizar Donuts</h2>
      <label for="name">Sabor</label>
      <input type="text" placeholder="Insira o sabor" id="sabor"  value="${sabor}" required />
      <label for="number">Quantidade</label>
      <input type="number" placeholder="Insira a quantidade" autofocus="true" id="quantidade"  value="${quantidade}" required />
      <label for="number">Preço</label>
      <input type="number" placeholder="Insira o preço" id="preco"  value="${preco}" required />
      <input type="submit" value="Enviar" class="btn" />
    </form>
  `;

  updateFormContainer.innerHTML = updateFormHTML;

  const updateForm = document.getElementById("updateForm");

  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const sabor = document.getElementById("sabor").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    const newDonuts = {
      sabor,
      quantidade,
      preco,
    };

    await updateDonuts(donutsId, newDonuts);
  });
}

// Chama a função para buscar e exibir os usuários ao carregar a página
UpdateDonutsById();
