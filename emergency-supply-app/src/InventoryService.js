// src/services/InventoryService.js
const API_BASE_URL = `http://localhost:5005/api`; // Adjust this URL to your API's address

export async function getSupplies() {
  const response = await fetch(`${API_BASE_URL}`);
  return await response.json();
}

export async function getSupply(name) {
  const response = await fetch(`${API_BASE_URL}/${name}`);
  return await response.json();
}

export async function addSupply(supply) {
  const response = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supply),
  });
  return await response.json();
}

export async function updateSupply(name, supply) {
  const response = await fetch(`${API_BASE_URL}/${name}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supply),
  });
  return await response.json();
}

export async function deleteSupply(name) {
  const response = await fetch(`${API_BASE_URL}/${name}`, {
    method: "DELETE",
  });
  return await response.json();
}
