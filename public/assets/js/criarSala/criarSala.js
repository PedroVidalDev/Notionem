import { criarSala } from "./criarSalaSocket.js";

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome-input").value;
    
    criarSala(nome);
})