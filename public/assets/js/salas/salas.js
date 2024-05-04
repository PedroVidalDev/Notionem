import "./socketSalas.js";

const botaoSair = document.querySelector("#sair");

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

const salas = document.querySelectorAll("#sala");

salas.forEach((sala) => {
    sala.addEventListener("click", () => {
        const nomeSala = sala.innerHTML.trim();
        window.location.href = `chat.html?nome=${nomeSala}`
    })
})

botaoSair.addEventListener("click", (event) => {
    event.preventDefault();

    window.location.href = "index.html";
})