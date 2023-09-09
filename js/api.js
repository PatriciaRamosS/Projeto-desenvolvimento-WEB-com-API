const BASE_URL = "http://localhost:5000";

// Função para realizar uma requisição GET para a API
async function getDonuts() {
  const response = await fetch(`${BASE_URL}/donuts`);
  const data = await response.json();
  return data;
}

// Função para realizar uma requisição POST para a API
async function createDonuts(donut) {
  const response = await fetch(`${BASE_URL}/donuts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donut),
  });
  const data = await response.json();
  alert(`Donuts ${data.sabor} criado com sucesso`);
  return data;
}

// Função para realizar uma requisição PUT para a API
async function updateDonuts(id, donut) {
  const response = await fetch(`${BASE_URL}/donuts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donut),
  });
  const data = await response.json();
  alert(`Donuts ${data.sabor} atualizado com sucesso`);
  return data;
}

async function deleteDonuts(id) {
  const response = await fetch(`${BASE_URL}/donuts/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
