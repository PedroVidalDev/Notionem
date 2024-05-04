import "./socketIndex.js";
import { mandarNomeUsuario } from "./socketIndex.js";

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome-input").value;
    
    mandarNomeUsuario(nome);
})

function salvarNome(usuario){
    localStorage.setItem("nome", usuario.nome);
    localStorage.setItem("cor", usuario.cor);
    window.location.href = "salas.html";
}

export {salvarNome};