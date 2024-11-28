document.getElementById("cadastro-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const response = await fetch("http://localhost:3000/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
    });

    const data = await response.json();

    const messageElement = document.getElementById("message");
    if (response.ok) {
        messageElement.textContent = data.message;
        messageElement.classList.remove("error");
    } else {
        messageElement.textContent = data.message;
        messageElement.classList.add("error");
    }
});
