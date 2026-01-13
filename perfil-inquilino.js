// VOLTAR
document.getElementById("btnVoltar").addEventListener("click", () => {
    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = "dashboard-inquilino.html";
    }
});

// SAIR
document.getElementById("btnSair").addEventListener("click", () => {
    const confirmar = confirm("Deseja realmente sair da sua conta?");
    if (confirmar) {
        // Futuro: limpar sessão / token
        window.location.href = "index.html";
    }
});

// SOBRE
document.getElementById("btnSobre").addEventListener("click", () => {
    alert(
        "Sistema de gestão de aluguel\n\n" +
        "Versão 1.0\n" +
        "Desenvolvido para facilitar pagamentos, contratos e comunicação."
    );
});
