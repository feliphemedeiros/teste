const statusEl = document.getElementById("rent-status");

// exemplo vindo do banco
const rentStatus = "em_dia";

statusEl.classList.remove("status-ok", "status-late", "status-warning");

if (rentStatus === "em_dia") {
    statusEl.textContent = "🟢 Aluguel em dia";
    statusEl.classList.add("status-ok");
} else if (rentStatus === "atrasado") {
    statusEl.textContent = "🔴 Aluguel atrasado";
    statusEl.classList.add("status-late");
}

