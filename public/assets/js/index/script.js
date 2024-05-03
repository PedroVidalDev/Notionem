import "./socketIndex.js";
import { mandarNomeUsuario } from "./socketIndex.js";

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome-input").value;
    
    mandarNomeUsuario(nome);
})

function salvarNome(nome){
    localStorage.setItem("nome", nome);
    window.location.href = "salas.html";
}

export {salvarNome};