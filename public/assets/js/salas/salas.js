import "./socketSalas.js";
import { entrouSalasMenu } from "./socketSalas.js";

const divListaSalas = document.querySelector("#lista-salas");

const botaoCriar = document.querySelector("#criar-sala");
const botaoSair = document.querySelector("#sair");

entrouSalasMenu();

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

function criarBotoesDeSalas(salas){
    salas.forEach((sala) => {
        let button = document.createElement("button");
        button.id = "sala";
        button.className = "sala";
        button.innerHTML = sala.nome;
        button.addEventListener("click", (event) => {
            event.preventDefault();

            window.location.href = `chat.html?nome=${sala.nome}`
        })

        divListaSalas.appendChild(button);
    })
}

botaoCriar.addEventListener("click", (event) => {
    event.preventDefault();
    
    window.location.href = "criarSala.html";
})

botaoSair.addEventListener("click", (event) => {
    event.preventDefault();

    window.location.href = "index.html";
})

export {criarBotoesDeSalas};