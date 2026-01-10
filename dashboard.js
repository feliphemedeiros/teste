const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}

fetch("http://SEU_BACKEND/api/admin/pagamentos", {
  headers: {
    "Authorization": "Bearer " + token
  }
})
.then(res => res.json())
.then(dados => {
  const tbody = document.getElementById("lista");

  dados.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.inquilino}</td>
      <td>${p.casa}</td>
      <td>${p.mes}</td>
      <td>R$ ${p.valor}</td>
      <td class="${p.status}">${p.status}</td>
    `;
    tbody.appendChild(tr);
  });
});

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}
