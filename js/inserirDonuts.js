const form = document.querySelector(".formCreate");
const submitButton = form.querySelector(".btn");

function create() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const sabor = document.getElementById("sabor").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    const newDonuts = {
      sabor,
      quantidade,
      preco,
    };

    try {
      const donut = await createDonuts(newDonuts);
      console.log("Donuts inserido:", donut);
    } catch (error) {
      console.error("Erro ao inserir donuts:", error);
    }
  });
}

create();
